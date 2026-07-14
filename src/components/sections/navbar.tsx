"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Recursos", href: "#recursos" },
  { name: "Preços", href: "#precos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex flex-col items-center gap-0.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logobase2.png"
              alt="Cardápio Nota 10"
              className="w-8 brightness-125"
            />
          </span>
          <span className="text-[12.6px] font-bold leading-none tracking-tight">
            Cardápio Nota 10
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#precos"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Começar agora
        </a>
      </div>
    </header>
  );
}
