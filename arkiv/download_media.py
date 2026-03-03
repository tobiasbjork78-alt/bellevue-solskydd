#!/usr/bin/env python3
"""
download_media.py — Laddar ner alla mediafiler från bellevuesolskydd.se via WP REST API.

Sparar bilder till content/media/images/ och PDFs till content/media/pdfs/.
Genererar content/media/manifest.json.
"""

import json
import os
import time
from urllib.parse import urlparse

import requests

BASE_URL = "https://bellevuesolskydd.se"
API_BASE = f"{BASE_URL}/wp-json/wp/v2"
MEDIA_DIR = "content/media"
IMAGES_DIR = os.path.join(MEDIA_DIR, "images")
PDFS_DIR = os.path.join(MEDIA_DIR, "pdfs")
DELAY = 1  # seconds between downloads

SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
})

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico"}
PDF_EXTENSIONS = {".pdf"}
VIDEO_EXTENSIONS = {".mp4", ".webm", ".ogg", ".mov", ".avi"}


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


def download_file(url, dest_path):
    """Download a file with retry."""
    if os.path.exists(dest_path):
        print(f"  SKIP (exists): {os.path.basename(dest_path)}")
        return True

    try:
        resp = SESSION.get(url, timeout=60, stream=True)
        resp.raise_for_status()
        with open(dest_path, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
        size_kb = os.path.getsize(dest_path) / 1024
        print(f"  OK: {os.path.basename(dest_path)} ({size_kb:.1f} KB)")
        return True
    except requests.RequestException as e:
        print(f"  FAIL: {os.path.basename(dest_path)} — {e}")
        return False


def get_file_extension(url, mime_type=""):
    """Determine file extension from URL or mime type."""
    parsed = urlparse(url)
    path = parsed.path
    _, ext = os.path.splitext(path)
    ext = ext.lower()

    if ext:
        return ext

    # Fallback to mime type
    mime_map = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
        "image/svg+xml": ".svg",
        "application/pdf": ".pdf",
        "video/mp4": ".mp4",
    }
    return mime_map.get(mime_type, "")


def sanitize_filename(name):
    """Make a safe filename."""
    # Remove query params and fragments, keep basename
    name = urlparse(name).path.split("/")[-1]
    # Remove problematic characters
    name = name.replace("%20", "_").replace(" ", "_")
    return name


def main():
    os.makedirs(IMAGES_DIR, exist_ok=True)
    os.makedirs(PDFS_DIR, exist_ok=True)

    # Fetch all media from API
    print("=== Fetching media list from API ===")
    media_items = api_get_all("media")
    print(f"  Found {len(media_items)} media items\n")

    manifest = {
        "images": [],
        "pdfs": [],
        "video": [],
        "other": [],
        "total": len(media_items),
        "downloaded": 0,
        "failed": 0,
    }

    for i, item in enumerate(media_items):
        source_url = item.get("source_url", "")
        if not source_url:
            # Try guid
            source_url = item.get("guid", {}).get("rendered", "")
        if not source_url:
            print(f"  [{i+1}/{len(media_items)}] SKIP: no URL for media ID {item.get('id')}")
            continue

        mime_type = item.get("mime_type", "")
        title = item.get("title", {}).get("rendered", "")
        alt_text = item.get("alt_text", "")
        ext = get_file_extension(source_url, mime_type)
        filename = sanitize_filename(source_url)

        print(f"  [{i+1}/{len(media_items)}] {filename} ({mime_type})")

        # Determine destination
        if ext in IMAGE_EXTENSIONS or mime_type.startswith("image/"):
            dest_dir = IMAGES_DIR
            category = "images"
        elif ext in PDF_EXTENSIONS or mime_type == "application/pdf":
            dest_dir = PDFS_DIR
            category = "pdfs"
        elif ext in VIDEO_EXTENSIONS or mime_type.startswith("video/"):
            dest_dir = IMAGES_DIR  # Store in images for now
            category = "video"
        else:
            dest_dir = IMAGES_DIR
            category = "other"

        dest_path = os.path.join(dest_dir, filename)

        time.sleep(DELAY)
        success = download_file(source_url, dest_path)

        entry = {
            "original_url": source_url,
            "local_path": dest_path,
            "filename": filename,
            "mime_type": mime_type,
            "title": title,
            "alt": alt_text,
            "wp_id": item.get("id"),
        }

        if success:
            manifest["downloaded"] += 1
        else:
            manifest["failed"] += 1
            entry["download_failed"] = True

        manifest[category].append(entry)

    # Save manifest
    manifest_path = os.path.join(MEDIA_DIR, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    # Summary
    print("\n" + "=" * 60)
    print(f"DONE! Media download complete.")
    print(f"  Total items: {manifest['total']}")
    print(f"  Downloaded: {manifest['downloaded']}")
    print(f"  Failed: {manifest['failed']}")
    print(f"  Images: {len(manifest['images'])}")
    print(f"  PDFs: {len(manifest['pdfs'])}")
    print(f"  Video: {len(manifest['video'])}")
    print(f"  Other: {len(manifest['other'])}")
    print(f"  Manifest: {manifest_path}")
    print("=" * 60)


if __name__ == "__main__":
    main()
