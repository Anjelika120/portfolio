"use client";

import { useEffect, useState } from "react";

type FrameNavItem = {
  href: string;
  id: string;
  label: string;
};

const frameNavItems: readonly FrameNavItem[] = [
  { href: "/#top", id: "top", label: "Work" },
  { href: "/#systems", id: "systems", label: "Systems" },
  { href: "/#product-memory", id: "product-memory", label: "AI + Memory" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#work", id: "work", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" }
];

function useActiveFrameSection(items: readonly FrameNavItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");

      if (items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (targets.length === 0) {
      return () => window.removeEventListener("hashchange", syncFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-16% 0px -70% 0px",
        threshold: [0.12, 0.32, 0.56]
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [items]);

  return activeId;
}

export function FrameNav() {
  const activeId = useActiveFrameSection(frameNavItems);

  return (
    <header className="sticky top-0 z-50 border-b border-line/85 bg-canvas/94 backdrop-blur-sm">
      <div className="grid min-h-[4.8rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 sm:px-9">
        <a href="/#top" className="font-serif text-3xl leading-none tracking-[-0.04em] text-ink" aria-label="Anjelika Tan home">
          AT
        </a>
        <nav aria-label="Portfolio sections" className="mx-auto hidden items-center gap-10 md:flex">
          {frameNavItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className="group relative py-2 text-sm font-semibold text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 max-w-11 rounded-full bg-accent transition ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-canvas" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
    </header>
  );
}
