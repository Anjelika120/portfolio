"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

type FrameNavItem = {
  href: string;
  id: string;
  label: string;
};

const frameNavItems: readonly FrameNavItem[] = [
  { href: "/#top", id: "top", label: "Overview" },
  { href: "/#systems", id: "systems", label: "Selected work" },
  { href: "/#work", id: "work", label: "Capabilities" },
  { href: "/#product-memory", id: "product-memory", label: "AI practice" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" }
];

function useActiveFrameSection(items: readonly FrameNavItem[], enabled: boolean) {
  const [activeId, setActiveId] = useState(enabled ? items[0]?.id ?? "" : "");

  useEffect(() => {
    if (!enabled) {
      return;
    }

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
  }, [enabled, items]);

  return activeId;
}

export function FrameNav({ isHomePage }: { isHomePage: boolean }) {
  const activeId = useActiveFrameSection(frameNavItems, isHomePage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        triggerRef.current?.focus();
      }
    }

    function closeAtDesktop() {
      if (window.matchMedia("(min-width: 1280px)").matches) setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeAtDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeAtDesktop);
    };
  }, [isMenuOpen]);

  function handleMobileNavigation(event: MouseEvent<HTMLAnchorElement>, item: FrameNavItem) {
    if (!isHomePage) {
      setIsMenuOpen(false);
      return;
    }

    const destination = document.getElementById(item.id);

    if (!destination) {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    window.history.pushState(null, "", item.href);

    requestAnimationFrame(() => {
      destination.focus({ preventScroll: true });
      destination.scrollIntoView({ block: "start" });
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-3 focus:min-h-11 focus:bg-ink focus:px-4 focus:py-3 focus:text-canvas"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-line/85 bg-canvas/94 backdrop-blur-sm">
        <div className="grid min-h-[4.8rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-9">
          <a
            href="/#top"
            className="inline-flex min-h-11 min-w-11 items-center font-serif text-3xl leading-none tracking-[-0.04em] text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            aria-label="Anjelika Tan home"
          >
            AT
          </a>
          <nav aria-label="Portfolio sections" className="mx-auto hidden min-w-0 items-center gap-5 xl:flex 2xl:gap-10">
            {frameNavItems.map((item) => {
              const isActive = isHomePage && activeId === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className="group relative inline-flex min-h-11 items-center py-2 text-sm font-semibold text-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 max-w-11 rounded-full bg-accent transition ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-portfolio-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line bg-surface px-3 text-sm font-semibold text-ink transition hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas xl:hidden"
          >
            Menu
          </button>
          <div className="ml-auto hidden h-11 w-11 items-center justify-center rounded-full border border-line bg-ink text-canvas xl:flex" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
        {isMenuOpen ? (
          <nav id="mobile-portfolio-nav" aria-label="Mobile portfolio sections" className="border-t border-line bg-canvas px-6 py-3 xl:hidden">
            <ul className="grid gap-1">
              {frameNavItems.map((item) => {
                const isActive = isHomePage && activeId === item.id;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) => handleMobileNavigation(event, item)}
                      className="flex min-h-11 items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-ink transition hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-accent">-&gt;</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
