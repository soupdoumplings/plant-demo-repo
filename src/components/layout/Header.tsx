"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { Search } from "./Search";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/shop" },
  { name: "Care Guides", href: "/diagnose" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <Search />
        </div>

        {/* Center: Brand */}
        <Link href="/" className="text-2xl font-serif italic tracking-tighter flex items-center gap-2">
          <span>VERDANT</span>
        </Link>

        {/* Desktop: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "hover:text-primary transition-colors",
                pathname === link.href ? "text-primary border-b-2 border-primary" : "text-on-surface"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <Search />
          </div>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {/* Cart count marker would go here */}
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
