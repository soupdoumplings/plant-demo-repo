import React from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-surface">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-6 block">
            Digital Curator — Season 2026
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.1] tracking-tighter mb-8 text-on-surface">
            Rare Botanicals <br /> for the <span className="italic">Elevated</span> Home.
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
            Our curated selection features exceptional and rare plants, hand-chosen with an eye for design and botanical integrity.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button size="lg" className="px-12">Shop Collection</Button>
            <Button size="lg" variant="outline" className="px-12">Our Philosophy</Button>
          </div>
        </div>
      </div>
      
      {/* Visual Element Placeholder */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-forest-green/10 hidden lg:flex items-center justify-center">
        <div className="relative w-[80%] h-[80%] border border-forest-green/20 p-4">
          <div className="w-full h-full bg-forest-green/5 flex items-center justify-center italic text-forest-green/20">
            [ Editorial Plant Photography ]
          </div>
        </div>
      </div>
    </section>
  );
}
