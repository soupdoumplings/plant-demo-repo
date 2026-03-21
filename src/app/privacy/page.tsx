import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-3xl">
        <header className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium mb-4 block">Confidentiality & Care</span>
          <h1 className="text-6xl font-serif tracking-tight leading-tight">Privacy <br /> Policy</h1>
          <p className="text-muted-foreground italic mt-6">Effective: April 2026</p>
        </header>

        <section className="prose prose-stone max-w-none space-y-12 text-on-surface/80 leading-relaxed font-sans">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">1. Data Preservation</h2>
            <p className="text-lg font-serif italic">
              Your identity is as delicate as a rare orchid. We preserve your information with the same integrity 
              we apply to our most precious botanical specimens.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">2. Information Collection</h2>
            <p>
              We collect only what is necessary for your digital journey: name, email, and botanical preferences. 
              This data allows us to curate a more personalized garden for you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">3. Third-party Logistics</h2>
            <p>
              Your address is shared only with our trusted logistical partners to ensure safe delivery. 
              We never auction your curated identity to external entities.
            </p>
          </div>

          <div className="space-y-4">
               <h2 className="text-xs uppercase tracking-widest font-bold text-on-surface">4. Global Privacy Standards</h2>
               <p>
                  We adhere to international digital privacy protocols (GDPR, CCPA). Your right to 
                  remove your data from our botanical registry is absolute.
               </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
