import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-3xl">
        <header className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium mb-4 block">Registry & Standards</span>
          <h1 className="text-6xl font-serif tracking-tight leading-tight">Terms of <br /> Service</h1>
          <p className="text-muted-foreground italic mt-6">Effective: April 2026</p>
        </header>

        <section className="prose prose-stone max-w-none space-y-12 text-on-surface/80 leading-relaxed font-sans">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">1. Acceptance of Curation</h2>
            <p className="text-lg font-serif italic">
              By accessing the digital catalog of Petals & Pots, you enter into a voluntary pact of botanical appreciation. 
              We curate only the finest specimens for those who value the intersection of design and nature.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">2. Botanical Authenticity</h2>
            <p>
              Every specimen in our collection is subject to natural variance. We strive for photographic accuracy, but the 
              organic reality of living art means no two plants are identical. Your acquisition will be uniquely yours.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">3. Logistical Integrity</h2>
            <p>
              Orders are dispatched via climate-controlled logistics. Once a specimen leaves our conservatory, its well-being 
              becomes the shared responsibility of our courier partners and your stewardship.
            </p>
          </div>

          <div className="space-y-4">
               <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">4. Global Standards</h2>
               <p>
                  Our services are governed by the principles of high-end digital commerce. We reserve the right to 
                  refuse service to any entity deemed insufficient in botanical intention.
               </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
