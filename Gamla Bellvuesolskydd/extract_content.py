#!/usr/bin/env python3
"""
extract_content.py — Arkiverar bellevuesolskydd.se via WP REST API + HTML-scraping.

Hämtar alla sidor, inlägg, kategorier, recensioner och strukturerad data.
Sparar varje sida/inlägg som JSON i content/pages/.
Genererar content/sitemap.json och content/SUMMARY.md.
"""

import json
import os
import re
import sys
import time
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://bellevuesolskydd.se"
API_BASE = f"{BASE_URL}/wp-json/wp/v2"
CONTENT_DIR = "content"
PAGES_DIR = os.path.join(CONTENT_DIR, "pages")
DELAY = 1  # seconds between requests

SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
})


def api_get_all(endpoint, params=None):
    """Fetch all items from a paginated WP REST API endpoint."""
    if params is None:
        params = {}
    params["per_page"] = 100
    page = 1
    all_items = []

    while True:
        params["page"] = page
        url = f"{API_BASE}/{endpoint}"
        print(f"  API: {url} (page {page})")
        try:
            resp = SESSION.get(url, params=params, timeout=30)
            resp.raise_for_status()
        except requests.RequestException as e:
            print(f"  WARN: {e}")
            break

        items = resp.json()
        if not items:
            break
        all_items.extend(items)

        total_pages = int(resp.headers.get("X-WP-TotalPages", 1))
        if page >= total_pages:
            break
        page += 1
        time.sleep(DELAY)

    return all_items


def fetch_page_html(url):
    """Fetch raw HTML from a live page."""
    try:
        resp = SESSION.get(url, timeout=30)
        resp.raise_for_status()
        return resp.text
    except requests.RequestException as e:
        print(f"  WARN: Could not fetch {url}: {e}")
        return None


def extract_json_ld(html):
    """Extract JSON-LD structured data from HTML."""
    if not html:
        return []
    soup = BeautifulSoup(html, "lxml")
    scripts = soup.find_all("script", type="application/ld+json")
    results = []
    for s in scripts:
        try:
            data = json.loads(s.string)
            results.append(data)
        except (json.JSONDecodeError, TypeError):
            pass
    return results


def parse_rendered_content(html_content):
    """Parse WP REST API rendered HTML content into structured data."""
    if not html_content:
        return {"headings": {"h1": [], "h2": [], "h3": []}, "body_text": "",
                "images": [], "internal_links": [], "external_links": []}

    soup = BeautifulSoup(html_content, "lxml")

    # Headings
    headings = {"h1": [], "h2": [], "h3": []}
    for level in ("h1", "h2", "h3"):
        for tag in soup.find_all(level):
            text = tag.get_text(strip=True)
            if text:
                headings[level].append(text)

    # Body text
    body_text = soup.get_text(separator="\n", strip=True)

    # Images
    images = []
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if src:
            images.append({
                "src": src,
                "alt": img.get("alt", ""),
                "title": img.get("title", ""),
            })

    # Links
    internal_links = []
    external_links = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        text = a.get_text(strip=True)
        link_data = {"url": href, "text": text}
        parsed = urlparse(href)
        if parsed.netloc and "bellevuesolskydd.se" not in parsed.netloc:
            external_links.append(link_data)
        elif href.startswith(("/", "https://bellevuesolskydd.se", "http://bellevuesolskydd.se")):
            internal_links.append(link_data)

    return {
        "headings": headings,
        "body_text": body_text,
        "images": images,
        "internal_links": internal_links,
        "external_links": external_links,
    }


def get_yoast_meta(html):
    """Extract Yoast SEO meta description from live page HTML."""
    if not html:
        return ""
    soup = BeautifulSoup(html, "lxml")
    tag = soup.find("meta", attrs={"name": "description"})
    if tag:
        return tag.get("content", "")
    # Try og:description as fallback
    tag = soup.find("meta", attrs={"property": "og:description"})
    if tag:
        return tag.get("content", "")
    return ""


def process_item(item, item_type, categories_map):
    """Process a WP REST API page/post item into our JSON format."""
    title = BeautifulSoup(item.get("title", {}).get("rendered", ""), "lxml").get_text(strip=True)
    slug = item.get("slug", "")
    link = item.get("link", "")
    date_published = item.get("date", "")
    date_modified = item.get("modified", "")
    raw_html = item.get("content", {}).get("rendered", "")
    excerpt = BeautifulSoup(item.get("excerpt", {}).get("rendered", ""), "lxml").get_text(strip=True)

    # Parse rendered content
    parsed = parse_rendered_content(raw_html)

    # Fetch live page for JSON-LD and meta
    print(f"  Fetching live page: {link}")
    time.sleep(DELAY)
    live_html = fetch_page_html(link)
    json_ld = extract_json_ld(live_html)
    meta_desc = get_yoast_meta(live_html)

    # Categories (for posts)
    cats = []
    if item_type == "post":
        for cat_id in item.get("categories", []):
            cat_name = categories_map.get(cat_id, f"category-{cat_id}")
            cats.append(cat_name)

    # Featured image
    featured_media_id = item.get("featured_media", 0)

    result = {
        "type": item_type,
        "url": link,
        "slug": slug,
        "title": title,
        "excerpt": excerpt,
        "meta_description": meta_desc,
        "date_published": date_published,
        "date_modified": date_modified,
        "featured_media_id": featured_media_id,
        "headings": parsed["headings"],
        "body_text": parsed["body_text"],
        "images": parsed["images"],
        "internal_links": parsed["internal_links"],
        "external_links": parsed["external_links"],
        "structured_data": json_ld,
        "raw_html": raw_html,
    }

    if cats:
        result["categories"] = cats

    return result


def extract_reviews(live_html_cache):
    """Try to extract Trustindex reviews."""
    reviews = []

    # Try Trustindex API endpoint
    print("\n--- Attempting Trustindex API ---")
    try:
        resp = SESSION.get(f"{BASE_URL}/wp-json/trustindex/v1/get-widgets", timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            print(f"  Trustindex API returned data: {type(data)}")
            return {"source": "trustindex_api", "data": data}
    except Exception as e:
        print(f"  Trustindex API not available: {e}")

    # Scrape from HTML pages that contain Trustindex widgets
    print("  Trying HTML scraping for Trustindex widgets...")
    for url, html in live_html_cache.items():
        if not html:
            continue
        if "trustindex" in html.lower() or "ti-widget" in html.lower():
            soup = BeautifulSoup(html, "lxml")

            # Look for Trustindex iframes
            for iframe in soup.find_all("iframe"):
                src = iframe.get("src", "")
                if "trustindex" in src:
                    reviews.append({"type": "iframe", "src": src, "found_on": url})

            # Look for inline review elements
            for div in soup.find_all(class_=re.compile(r"ti-review|trustindex")):
                review_text = div.get_text(strip=True)
                if review_text:
                    reviews.append({"type": "inline", "text": review_text, "found_on": url})

            # Look for Trustindex script tags with data
            for script in soup.find_all("script"):
                src = script.get("src", "")
                text = script.string or ""
                if "trustindex" in src or "trustindex" in text.lower():
                    entry = {"type": "script", "found_on": url}
                    if src:
                        entry["src"] = src
                    if text and len(text) < 10000:
                        entry["inline_content"] = text
                    reviews.append(entry)

    if reviews:
        return {"source": "html_scraping", "data": reviews}

    return {"source": "none", "data": [], "note": "No Trustindex data found"}


def extract_contact_info(all_items):
    """Extract contact info from all body texts."""
    all_text = "\n".join(item.get("body_text", "") + " " + item.get("raw_html", "") for item in all_items)

    # Phone numbers (Swedish format)
    phones = list(set(re.findall(r'(?:tel:)?(\+?46[\s\-]?\d{1,3}[\s\-]?\d{2,3}[\s\-]?\d{2,4}[\s\-]?\d{0,4})', all_text)))
    phones += list(set(re.findall(r'(?:tel:)?(0\d{1,3}[\s\-]\d{2,3}[\s\-]?\d{2,4}[\s\-]?\d{0,4})', all_text)))
    phones = list(set(p.strip() for p in phones if len(p.replace(" ", "").replace("-", "")) >= 8))

    # Emails
    emails = list(set(re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', all_text)))

    # Addresses (look for Swedish postal codes)
    addresses = list(set(re.findall(r'[\w\s]+\d+[A-Za-z]?\s*,?\s*\d{3}\s?\d{2}\s+\w+', all_text)))

    return {
        "phones": phones,
        "emails": emails,
        "addresses": addresses,
    }


def generate_summary(all_items, categories_map, media_count, contact_info, reviews_data):
    """Generate content/SUMMARY.md."""
    pages = [i for i in all_items if i["type"] == "page"]
    posts = [i for i in all_items if i["type"] == "post"]

    lines = [
        "# Arkivsammanfattning: bellevuesolskydd.se",
        f"\nArkiverat: 2026-02-26",
        f"\n## Statistik",
        f"- **Sidor**: {len(pages)}",
        f"- **Blogginlägg**: {len(posts)}",
        f"- **Kategorier**: {len(categories_map)}",
        f"- **Mediafiler (från API)**: {media_count}",
        "",
        "## Alla sidor",
        "",
    ]

    for item in sorted(pages, key=lambda x: x["title"]):
        lines.append(f"- [{item['title']}]({item['url']})")

    lines.append("\n## Alla blogginlägg\n")
    for item in sorted(posts, key=lambda x: x["date_published"], reverse=True):
        cats = ", ".join(item.get("categories", []))
        cat_str = f" [{cats}]" if cats else ""
        lines.append(f"- [{item['title']}]({item['url']}){cat_str} — {item['date_published'][:10]}")

    lines.append("\n## Kategorier\n")
    for cat_id, cat_name in sorted(categories_map.items(), key=lambda x: x[1]):
        lines.append(f"- {cat_name}")

    lines.append("\n## Kontaktinformation\n")
    if contact_info["phones"]:
        lines.append("**Telefon:**")
        for p in contact_info["phones"]:
            lines.append(f"- {p}")
    if contact_info["emails"]:
        lines.append("\n**E-post:**")
        for e in contact_info["emails"]:
            lines.append(f"- {e}")
    if contact_info["addresses"]:
        lines.append("\n**Adresser:**")
        for a in contact_info["addresses"]:
            lines.append(f"- {a}")

    # Look for certifications/patents/Testfakta
    lines.append("\n## Patent, certifieringar och Testfakta\n")
    keywords = ["patent", "certifie", "testfakta", "iso ", "ce-märk", "garanti"]
    mentions = []
    for item in all_items:
        text = (item.get("body_text", "") + " " + item.get("title", "")).lower()
        for kw in keywords:
            if kw in text:
                mentions.append(f"- **{item['title']}** ({item['url']}): omnämner \"{kw}\"")
    if mentions:
        lines.extend(list(set(mentions)))
    else:
        lines.append("- Inga omnämnanden hittade.")

    # Reviews summary
    lines.append("\n## Recensioner\n")
    if reviews_data.get("source") == "none":
        lines.append("- Inga recensioner kunde extraheras.")
    else:
        lines.append(f"- Källa: {reviews_data['source']}")
        lines.append(f"- Antal datapunkter: {len(reviews_data.get('data', []))}")

    return "\n".join(lines) + "\n"


def main():
    os.makedirs(PAGES_DIR, exist_ok=True)

    # 1. Fetch categories
    print("=== Fetching categories ===")
    raw_cats = api_get_all("categories")
    categories_map = {}
    for c in raw_cats:
        categories_map[c["id"]] = c["name"]
    print(f"  Found {len(categories_map)} categories")

    # 2. Fetch all pages
    print("\n=== Fetching pages via REST API ===")
    raw_pages = api_get_all("pages", {"status": "publish"})
    print(f"  Found {len(raw_pages)} pages")

    # 3. Fetch all posts
    print("\n=== Fetching posts via REST API ===")
    raw_posts = api_get_all("posts", {"status": "publish"})
    print(f"  Found {len(raw_posts)} posts")

    # 4. Fetch media count (for summary)
    print("\n=== Fetching media count ===")
    raw_media = api_get_all("media")
    print(f"  Found {len(raw_media)} media items")

    # 5. Process pages
    print("\n=== Processing pages ===")
    all_items = []
    for i, page in enumerate(raw_pages):
        title = BeautifulSoup(page.get("title", {}).get("rendered", ""), "lxml").get_text(strip=True)
        print(f"\n[{i+1}/{len(raw_pages)}] Processing page: {title}")
        item = process_item(page, "page", categories_map)
        all_items.append(item)

        # Save individual JSON
        filename = f"page-{item['slug']}.json" if item["slug"] else f"page-{page['id']}.json"
        filepath = os.path.join(PAGES_DIR, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(item, f, ensure_ascii=False, indent=2)
        print(f"  Saved: {filepath}")

    # 6. Process posts
    print("\n=== Processing posts ===")
    for i, post in enumerate(raw_posts):
        title = BeautifulSoup(post.get("title", {}).get("rendered", ""), "lxml").get_text(strip=True)
        print(f"\n[{i+1}/{len(raw_posts)}] Processing post: {title}")
        item = process_item(post, "post", categories_map)
        all_items.append(item)

        filename = f"post-{item['slug']}.json" if item["slug"] else f"post-{post['id']}.json"
        filepath = os.path.join(PAGES_DIR, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(item, f, ensure_ascii=False, indent=2)
        print(f"  Saved: {filepath}")

    # 7. Generate sitemap.json
    print("\n=== Generating sitemap.json ===")
    sitemap = {
        "pages": [{"url": i["url"], "title": i["title"], "slug": i["slug"]}
                  for i in all_items if i["type"] == "page"],
        "posts": [{"url": i["url"], "title": i["title"], "slug": i["slug"],
                    "categories": i.get("categories", []), "date": i["date_published"]}
                  for i in all_items if i["type"] == "post"],
        "total_pages": len([i for i in all_items if i["type"] == "page"]),
        "total_posts": len([i for i in all_items if i["type"] == "post"]),
    }
    sitemap_path = os.path.join(CONTENT_DIR, "sitemap.json")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        json.dump(sitemap, f, ensure_ascii=False, indent=2)
    print(f"  Saved: {sitemap_path}")

    # 8. Extract reviews
    print("\n=== Extracting reviews ===")
    # Build a cache of live HTML we already fetched (re-fetch homepage if needed)
    live_html_cache = {}
    homepage_html = fetch_page_html(BASE_URL + "/")
    if homepage_html:
        live_html_cache[BASE_URL + "/"] = homepage_html

    # Also check a few key pages for reviews
    review_check_urls = [BASE_URL + "/om-oss/", BASE_URL + "/kontakta-oss/", BASE_URL + "/"]
    for url in review_check_urls:
        if url not in live_html_cache:
            time.sleep(DELAY)
            html = fetch_page_html(url)
            if html:
                live_html_cache[url] = html

    reviews_data = extract_reviews(live_html_cache)
    reviews_path = os.path.join(CONTENT_DIR, "reviews.json")
    with open(reviews_path, "w", encoding="utf-8") as f:
        json.dump(reviews_data, f, ensure_ascii=False, indent=2)
    print(f"  Saved: {reviews_path}")

    # 9. Extract contact info
    print("\n=== Extracting contact info ===")
    contact_info = extract_contact_info(all_items)
    print(f"  Phones: {contact_info['phones']}")
    print(f"  Emails: {contact_info['emails']}")
    print(f"  Addresses: {contact_info['addresses']}")

    # 10. Generate SUMMARY.md
    print("\n=== Generating SUMMARY.md ===")
    summary = generate_summary(all_items, categories_map, len(raw_media), contact_info, reviews_data)
    summary_path = os.path.join(CONTENT_DIR, "SUMMARY.md")
    with open(summary_path, "w", encoding="utf-8") as f:
        f.write(summary)
    print(f"  Saved: {summary_path}")

    # Final stats
    print("\n" + "=" * 60)
    print(f"DONE! Archived {len(all_items)} items total.")
    print(f"  Pages: {sitemap['total_pages']}")
    print(f"  Posts: {sitemap['total_posts']}")
    print(f"  Media items in API: {len(raw_media)}")
    print(f"  Reviews source: {reviews_data['source']}")
    print(f"  Files saved in: {PAGES_DIR}/")
    print("=" * 60)


if __name__ == "__main__":
    main()
