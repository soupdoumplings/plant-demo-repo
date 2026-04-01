"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, Share2, ExternalLink, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="bg-surface border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif italic mb-6 tracking-tighter">VERDANT</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Subscribe to receive botanical stories, plant care tips, and exclusive offers.
            </p>
            
            {status === "success" ? (
              <div className="flex items-center gap-2 text-primary font-medium animate-in fade-in slide-in-from-left-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm italic font-serif">Welcome to the digital garden club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                <Input 
                  required
                  type="email"
                  placeholder="Your botanical address" 
                  className="bg-background rounded-none border-on-surface/10 h-12 italic font-serif" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                />
                <Button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="px-8 h-12 uppercase tracking-widest text-[10px]"
                >
                  {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join"}
                </Button>
              </form>
            )}
            {status === "error" && <p className="text-xs text-destructive mt-2 italic">Unable to register your specimen at this time.</p>}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 border-b pb-2">Explore</h3>
            <ul className="space-y-4 text-sm text-on-surface">
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link href="/shop?category=indoor" className="hover:text-primary transition-colors">Indoor Plants</Link></li>
              <li><Link href="/shop?category=care" className="hover:text-primary transition-colors">Plant Care</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-6 border-b pb-2">Connect</h3>
            <ul className="space-y-4 text-sm text-on-surface mb-8">
              <li><Link href="mailto:hello@verdant.archive" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4" /> Email Us</Link></li>
            </ul>
            <div className="flex gap-4">
              <Link href="#" className="p-2 border hover:bg-primary hover:text-primary-foreground transition-colors"><Globe className="h-4 w-4" /></Link>
              <Link href="#" className="p-2 border hover:bg-primary hover:text-primary-foreground transition-colors"><Share2 className="h-4 w-4" /></Link>
              <Link href="#" className="p-2 border hover:bg-primary hover:text-primary-foreground transition-colors"><ExternalLink className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2026 VERDANT. Digitally Curated.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
