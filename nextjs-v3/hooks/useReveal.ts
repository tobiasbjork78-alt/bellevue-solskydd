"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    const groups = new Map<HTMLElement, HTMLElement[]>();
    elements.forEach((el) => {
      const parent = (el.parentElement ?? el) as HTMLElement;
      const list = groups.get(parent) ?? [];
      list.push(el);
      groups.set(parent, list);
    });

    groups.forEach((list) => {
      list.forEach((el, index) => {
        el.style.transitionDelay = `${index * 100}ms`;
      });
    });

    if (
      typeof window.IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
