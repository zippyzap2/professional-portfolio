"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type TransitionPhase = "idle" | "leaving" | "entering";

type PageTransitionContextValue = {
  beginTransition: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function PageTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [destination, setDestination] = useState<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const enterTimer = useRef<number | null>(null);

  function beginTransition(href: string) {
    const nextPath = href.split("#")[0].split("?")[0];

    if (nextPath === pathname) {
      return;
    }

    if (navigationTimer.current) {
      window.clearTimeout(navigationTimer.current);
    }

    setDestination(nextPath);
    setPhase("leaving");
    navigationTimer.current = window.setTimeout(() => {
      router.push(href);
    }, 180);
  }

  useEffect(() => {
    if (phase !== "leaving" || !destination || pathname !== destination) {
      return;
    }

    setPhase("entering");
    enterTimer.current = window.setTimeout(() => {
      setPhase("idle");
      setDestination(null);
    }, 460);
  }, [destination, pathname, phase]);

  useEffect(() => {
    return () => {
      if (navigationTimer.current) {
        window.clearTimeout(navigationTimer.current);
      }
      if (enterTimer.current) {
        window.clearTimeout(enterTimer.current);
      }
    };
  }, []);

  return (
    <PageTransitionContext.Provider value={{ beginTransition }}>
      <div
        className={`page-transition-content ${
          phase === "leaving"
            ? "is-leaving"
            : phase === "entering"
              ? "is-entering"
              : ""
        }`}
      >
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
}

export function TransitionLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const transition = useContext(PageTransitionContext);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !transition ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const hrefValue = typeof href === "string" ? href : href.toString();

    if (!hrefValue.startsWith("/") || hrefValue.startsWith("/#")) {
      return;
    }

    event.preventDefault();
    transition.beginTransition(hrefValue);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}