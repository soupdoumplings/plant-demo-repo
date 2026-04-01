"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#fbf9f4] border-t border-[#31332c]/5 pt-24 pb-12">
      <div className="container mx-auto px-12 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-headline italic text-2xl tracking-tight text-[#31332c]">Verdant</h2>
            <p className="font-label text-[0.6rem] uppercase tracking-[0.1em] text-[#31332c]/40 leading-relaxed max-w-[200px]">
              CURATING LIFE'S BOTANICAL MASTERPIECES SINCE 2012.
            </p>
          </div>

          {/* Shop Column */}
          <div className="space-y-8">
            <h3 className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-[#31332c]">Shop</h3>
            <ul className="space-y-4 font-label text-[0.6rem] uppercase tracking-[0.2em] text-[#31332c]/40">
              <li><Link href="/shop" className="hover:text-[#31332c] transition-colors">Collections</Link></li>
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Rare Finds</Link></li>
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <h3 className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-[#31332c]">Info</h3>
            <ul className="space-y-4 font-label text-[0.6rem] uppercase tracking-[0.2em] text-[#31332c]/40">
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#31332c] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-[#31332c] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-8 text-right md:text-left">
            <h3 className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-[#31332c]">Social</h3>
            <div className="flex gap-4 justify-end md:justify-start">
               <span className="text-[#31332c]/40 hover:text-[#31332c] cursor-pointer transition-colors">✿</span>
               <span className="text-[#31332c]/40 hover:text-[#31332c] cursor-pointer transition-colors">➹</span>
            </div>
            <p className="font-label text-[0.5rem] uppercase tracking-[0.1em] text-[#31332c]/30 mt-12">
               © 2024 VERDANT BOTANICAL EDITORIAL. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
