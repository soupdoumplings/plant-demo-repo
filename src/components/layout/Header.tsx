"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Search as SearchIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { name: "Collections", href: "/shop" },
  { name: "Care Guides", href: "/diagnose" },
  { name: "Journal", href: "#" },
  { name: "About", href: "#" },
];

export function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f4]/95 backdrop-blur-sm border-b border-[#31332c]/5">
      <div className="container mx-auto px-12 h-20 flex items-center justify-between max-w-[1920px]">
        
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="font-headline italic text-2xl tracking-tight text-[#31332c]">VERDANT</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-label text-[0.6rem] uppercase tracking-[0.25em] transition-all duration-300 pb-1 border-b border-transparent hover:border-[#785a1a] hover:text-[#785a1a]",
                pathname === link.href ? "text-[#785a1a] border-[#785a1a]" : "text-[#31332c]/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search & Actions */}
        <div className="flex-1 flex justify-end items-center gap-8">
          {/* Integrated Search Bar */}
          <div className="hidden md:flex items-center gap-3 border-b border-[#31332c]/10 py-1 transition-all duration-500 focus-within:border-[#785a1a] group">
            <SearchIcon className="w-3.5 h-3.5 text-[#31332c]/30 group-focus-within:text-[#785a1a]" />
            <input 
              type="text" 
              placeholder="SEARCH PIECES..." 
              className="bg-transparent border-none focus:ring-0 text-[0.6rem] tracking-[0.2em] w-32 focus:w-48 transition-all placeholder:text-[#31332c]/20 uppercase"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Link href="/cart" className="relative group">
            <ShoppingBag className="w-5 h-5 text-[#31332c]/70 group-hover:text-[#31332c] transition-colors" />
          </Link>
          <Link href="/login" className="group">
            <User className="w-5 h-5 text-[#31332c]/70 group-hover:text-[#31332c] transition-colors" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
