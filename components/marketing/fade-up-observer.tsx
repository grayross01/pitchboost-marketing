"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FadeUpObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    // Reset: remove "visible" from all fade-up elements so they can re-animate
    const fadeEls = document.querySelectorAll(".fade-up");
    fadeEls.forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });

    // Immediately reveal elements already in the viewport
    requestAnimationFrame(() => {
      fadeEls.forEach((el) => {
        if (!el.classList.contains("visible")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        }
      });
    });

    const formatNumber = (n: number) => {
      if (n >= 1000000) return (n / 1000000).toFixed(0) + "M+";
      if (n >= 1000) return n.toLocaleString() + "+";
      return n.toString();
    };

    const animateCounter = (el: Element, target: number) => {
      const duration = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = formatNumber(current);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const statsBar = document.querySelector(".hero-stats-bar");
    if (statsBar) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              statsBar.querySelectorAll("[data-count]").forEach((el) => {
                animateCounter(el, parseInt((el as HTMLElement).dataset.count!, 10));
              });
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      statsObserver.observe(statsBar);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
