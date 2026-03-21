"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-24 text-center">
        <div className="mb-8 p-4 rounded-full bg-forest-green/5 inline-block">
          <CheckCircle2 className="h-20 w-20 text-forest-green" />
        </div>
        
        <h1 className="text-5xl font-serif mb-6 tracking-tight">Order Confirmed.</h1>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed italic">
          Your botanical curation has been finalized. We are preparing your plants for their new home, ensuring they arrive in peak condition.
        </p>

        {orderId && (
          <div className="mb-12 p-6 border bg-card/50 max-w-sm mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">Reference ID</span>
            <code className="text-sm font-mono text-on-surface">{orderId}</code>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto">
          <Link href="/shop" className="flex-1">
            <Button size="lg" className="w-full h-14 gap-3">
              Explore More <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button size="lg" variant="outline" className="w-full h-14 gap-3">
              Return Home <Home className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto border-t pt-16">
          <div className="space-y-4">
            <Package className="h-6 w-6 mx-auto text-muted-foreground/40" />
            <h3 className="text-xs uppercase tracking-widest font-medium">Carefully Packed</h3>
            <p className="text-xs text-muted-foreground">Every plant is individually wrapped to prevent damage during transit.</p>
          </div>
          <div className="space-y-4">
            <div className="h-6 w-6 mx-auto flex items-center justify-center text-muted-foreground/40 text-lg font-serif">2-3</div>
            <h3 className="text-xs uppercase tracking-widest font-medium">Delivery Speed</h3>
            <p className="text-xs text-muted-foreground">Expect arrival within 2-3 business days with climate-controlled shipping.</p>
          </div>
          <div className="space-y-4">
            <div className="h-6 w-6 mx-auto flex items-center justify-center text-muted-foreground/40 text-lg font-serif">24/7</div>
            <h3 className="text-xs uppercase tracking-widest font-medium">Support</h3>
            <p className="text-xs text-muted-foreground">Our botanical experts are available to guide you through your new plant care.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
