import React from 'react';
import Image from 'next/image';

export default function DiagnosePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <header className="px-12 mb-20">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <p className="font-sans text-[0.6875rem] tracking-[0.2rem] uppercase text-tertiary mb-4">
              Botanical Intelligence v.2.4
            </p>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none mb-6">
              The Digital <span className="italic">Clinician</span>
            </h1>
            <p className="text-xl max-w-xl text-muted-foreground font-light leading-relaxed">
              Our advanced AI diagnostic tool analyzes structural integrity and
              pigmentation variances to provide a surgical assessment of your
              botanical specimens.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <div className="w-24 h-24 bg-surface border border-border flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-secondary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* Capture & Analysis Grid */}
      <section className="px-12 max-w-[1920px] mb-20 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-border">
        {/* Left: Capture Specimen */}
        <div className="lg:col-span-5 py-12 lg:pr-12 border-b lg:border-b-0 lg:border-r border-border">
          <div className="sticky top-40">
            <div className="mb-12">
              <h2 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">
                01. Capture Specimen
              </h2>
              <div className="aspect-[4/5] bg-surface relative overflow-hidden group">
                <img
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  alt="Close up of a monstera leaf with yellowing edges"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXOLTG145oDj_RbFFf7LwctQr3IKpkQZJVViWH7Vw-1_Bg3Ortu_zs_neXGmc2DoIwoU_Kl47w1V_eA1RWM5kNbySfKca4Ns3DCbx7F4j67JeU7f4OvM1CppBhrLg-L1fme8Tu4X-pFuZ6sDw7WBy0U6K8FnMGOvNx9uS5fZDP91cM80pA4L5NIp0RJSKwIWyR--O4gW47fbv9gT91Xzgm2bjfehNqoUftXvA10onaGRPNqIJc63J3Ghjhe-19CqjUFmm9S-eSN6RQ"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-background/80 backdrop-blur-md border border-border text-center cursor-pointer transition-all duration-300 hover:bg-background">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                    <p className="font-sans text-[0.6875rem] tracking-wider uppercase">
                      Upload New Specimen
                    </p>
                  </div>
                </div>
                {/* Scanning Overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-tertiary/40 shadow-[0_0_15px_rgba(120,90,26,0.5)] z-10 animate-pulse"></div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="font-serif text-lg">Specimen ID: #772-B</p>
                  <p className="font-sans text-[0.6875rem] text-muted-foreground uppercase">
                    Monstera Deliciosa
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg">94.2%</p>
                  <p className="font-sans text-[0.6875rem] text-tertiary uppercase">
                    Confidence Score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Diagnosis Details */}
        <div className="lg:col-span-7 py-12 lg:pl-12">
          <div className="mb-16">
            <h2 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">
              02. Analysis &amp; Results
            </h2>
            <div className="space-y-1">
              <h3 className="text-5xl font-serif tracking-tight text-destructive leading-tight">
                Chlorosis &amp; Fungal Bloom
              </h3>
              <div className="flex gap-4 items-center py-4">
                <span className="px-3 py-1 bg-surface font-sans text-[0.6rem] uppercase tracking-widest text-foreground border border-border">
                  Critical Care
                </span>
                <span className="px-3 py-1 bg-surface font-sans text-[0.6rem] uppercase tracking-widest text-foreground border border-border">
                  Environmental Stress
                </span>
              </div>
            </div>
            {/* The Assessment */}
            <div className="mt-12 bg-background p-10 border border-border shadow-sm">
              <h4 className="font-serif italic text-2xl mb-6">
                The Assessment
              </h4>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  The specimen exhibits advanced stages of{' '}
                  <span className="text-foreground font-medium">
                    Interveinal Chlorosis
                  </span>, primarily localized in the outer leaf margins. This loss of
                  chlorophyll suggests an acute deficiency in magnesium or iron,
                  likely exacerbated by irregular irrigation cycles.
                </p>
                <p>
                  Secondary observation reveals{' '}
                  <span className="text-foreground font-medium">
                    Cercospora Fungal Spots
                  </span>{' '}
                  manifesting as dark necrotic centers with yellow halos. This
                  indicates high ambient humidity without adequate airflow, creating a
                  hospitable environment for pathogen proliferation.
                </p>
              </div>
            </div>
          </div>
          {/* Prescribed Apothecary */}
          <div className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <h2 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase">
                03. Prescribed Apothecary
              </h2>
              <button className="font-sans text-[0.6875rem] tracking-widest uppercase text-tertiary border-b border-tertiary/30 hover:border-tertiary transition-colors pb-1">
                View Full Range
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <div className="group bg-surface p-6 transition-all duration-300 border border-border">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Minimalist apothecary bottle"
                    src="https://images.unsplash.com/photo-1614806687038-51e97669d068?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
                <p className="font-sans text-[0.6rem] tracking-[0.2rem] uppercase text-secondary-foreground mb-2">
                  Supplement
                </p>
                <h5 className="font-serif text-xl mb-4">Mineral Elixir No. 04</h5>
                <button className="w-full py-4 bg-primary text-primary-foreground font-sans text-[0.6875rem] tracking-[0.15rem] uppercase transition-all duration-300 hover:bg-foreground active:scale-95">
                  Add to Regimen — $34
                </button>
              </div>
              {/* Product 2 */}
              <div className="group bg-surface p-6 transition-all duration-300 border border-border">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Spray bottle"
                    src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop"
                  />
                </div>
                <p className="font-sans text-[0.6rem] tracking-[0.2rem] uppercase text-secondary-foreground mb-2">
                  Antifungal
                </p>
                <h5 className="font-serif text-xl mb-4">Botanical Shield Spray</h5>
                <button className="w-full py-4 bg-primary text-primary-foreground font-sans text-[0.6875rem] tracking-[0.15rem] uppercase transition-all duration-300 hover:bg-foreground active:scale-95">
                  Add to Regimen — $28
                </button>
              </div>
            </div>
          </div>
          {/* Recovery Protocol */}
          <div className="border-t border-border pt-12">
            <h2 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">
              Recovery Protocol
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-8 items-start">
                <span className="font-serif italic text-3xl text-tertiary">01</span>
                <div>
                  <h6 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase mb-2">
                    Isolation
                  </h6>
                  <p className="text-muted-foreground font-light">
                    Remove the specimen from the proximity of healthy plants to prevent
                    fungal transmission. Maintain a minimum distance of 2 meters.
                  </p>
                </div>
              </li>
              <li className="flex gap-8 items-start">
                <span className="font-serif italic text-3xl text-tertiary">02</span>
                <div>
                  <h6 className="font-sans text-[0.6875rem] tracking-[0.1rem] uppercase mb-2">
                    Surgical Pruning
                  </h6>
                  <p className="text-muted-foreground font-light">
                    Using sterilized implements, remove leaves with more than 40%
                    necrotic coverage. Clean tools with alcohol between each cut.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
