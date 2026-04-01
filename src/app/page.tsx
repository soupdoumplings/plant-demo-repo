import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#fbf9f4] text-[#31332c] font-body selection:bg-[#c6e9e9] min-h-screen overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Newsreader', serif; }
        .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); }
        .text-justify-custom { text-align: justify; text-justify: inter-word; }
      `}} />

      <Header />

      {/* Hero Section */}
      <header className="relative w-full h-screen flex flex-col justify-center px-12 pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img alt="Himalayan Blue Poppy" className="w-full h-full object-cover scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJulT6o-Fqlbf097xLzB_KPyP9DCaOD2T1ZbtkZ6k0OyUVtW7IEea6UeLTihb_mD-iemRuz1rwNZyIDB_dc8XdvkRUATnKTKg-4LDIGsd7LhyXfFkUAoDxudh55KPIkdV21YQwwV7B2lHBybBh4bnyJVVfA-j4CtWV0uri1voKanDk-PFPEA-h27XSuEqGHSU5A05NB4-IAoWnhqhozizbYkpbTrSqtxeZnCF1A5rrbMEiuZbEodyYSC5HifVyJuVwEdAm4tKuRXR"/>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="font-label text-[0.6875rem] tracking-[0.2rem] uppercase mb-4 text-white drop-shadow-sm">The High-Altitude Collection</p>
          <h1 className="font-headline text-7xl md:text-9xl tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-md">
            Himalayan <br/> <span className="italic font-light">Elegance.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <Link href="/shop" className="bg-white text-[#31332c] px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#31332c] hover:text-white transition-colors">
              Explore the Archive
            </Link>
          </div>
        </div>
      </header>

      {/* Personalized Archive Recommendations */}
      <section className="py-24 px-12 bg-[#fbf9f4]">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl mb-6">Personalized Registry</h2>
            <p className="font-body text-[#31332c]/60 leading-relaxed">Curated by our proprietary growth algorithms, these specimens are selected based on your local micro-climate.</p>
          </div>
          <Link className="font-label text-xs uppercase tracking-[0.15rem] border-b border-[#31332c] pb-1 mb-2" href="/shop">View Full Collection</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[#31332c]">
          {/* Product 1 */}
          <Link href="/products/meconopsis-grandis" className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-[#e8e9e0] mb-6">
              <img alt="Meconopsis Grandis" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3l-FQwgqwzcoP8K5ij1-H7BUjOeF6wNXz_wsXMMfpCgTxNDFZg-Z024jRCTNeOpLDzaP1-BI-lPRgRd3I5JZ3ndQd-7mhjrijJ7WuJVG8aN52IrIyzxvqvITNwQ6p5mussE0r60js_h5NDKKD9QPakYx08PfEpTCOYTNzFFqQ20bDmEj--eWSlkvDyT8qfqjMtnTn_mClsr_VTuN4kKoW4a_JcnoTqiNV-YXGtflhqVOrmXX7ADMXzVL6X9Pox_xJxfc7Dgs-nSxY"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Meconopsis Grandis</h3>
                <p className="font-label text-[10px] uppercase tracking-widest opacity-40">Kathmandu Selection</p>
              </div>
              <span className="font-serif text-xl">$125</span>
            </div>
          </Link>
          {/* Product 2 */}
          <Link href="/products/coelogyne-corymbosa" className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-[#e8e9e0] mb-6">
              <img alt="Coelogyne Corymbosa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdfQeXCAmjKoYDZ6MCLDvKpYGDa_IdmCK7hTk7bhtgirzlMoqZlxb7b2mTdwYYhBLlMhQDTgPg9gmV98-Y04gQgsIlNxHNyEFMkkIYyd_fcNYPjfhAUL8gJxGAYW4OeEXrDv7Bg0y5qgvdcgopPIiMp-u-jEFGfWZRSfAGlN4ZEVL49EINOfTqS80S8lli3D0fwxU80XSpwwgkLyjGeCaP9NSGAmDiu4QDxtkOaJfJzZWCpJs5Ond4oC7a5gyXexaS-PTnZ8jqwAJ"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Coelogyne Corymbosa</h3>
                <p className="font-label text-[10px] uppercase tracking-widest opacity-40">Rare Himalayan Orchid</p>
              </div>
              <span className="font-serif text-xl">$182</span>
            </div>
          </Link>
          {/* Product 3 */}
          <Link href="/products/primula-sikkimensis" className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-[#e8e9e0] mb-6">
              <img alt="Primula Himalayan" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfP-pF709VLlZAeEB4jRPR2w3_IYupe45C4kAozrvFiau86rpJWSzCK6fridaCtlDXrdRsuzhoUDbZaY1oilZW1eBt8l5hL9gLOOr1QztWXbsuWXT-Haga_80__RVkDAsNd6y5K-vwIZY4X0ZbaYaqOZydaIY_MORezChRus2nsp3B5IpPstsWPmLdrVCaX6r_0fD0vRIzHa8iGS1yZ22s9ANUowdVXHbRWT32YdvAKUQ4IlxM6cV6LMpkdwMS9aUMgS1syGO7BPq"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Primula Sikkimensis</h3>
                <p className="font-label text-[10px] uppercase tracking-widest opacity-40">Alpine Specimen</p>
              </div>
              <span className="font-serif text-xl">$69</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Editorial Feature */}
      <section className="bg-[#fbf9f4] py-32 md:py-48 overflow-hidden border-t border-[#31332c]/5">
        <div className="max-w-[1600px] mx-auto px-12 relative">
          <div className="editorial-grid gap-y-16 md:gap-y-0">
            <div className="col-span-12 lg:col-span-12 relative z-20 flex flex-col items-center text-center">
              <div className="mb-12">
                <p className="font-label text-[0.6rem] tracking-[0.4rem] uppercase mb-8 text-[#785a1a]">The Journal — Vol. IV</p>
                <h2 className="font-headline text-7xl md:text-9xl tracking-tighter leading-[0.8] mb-12">
                  Beyond the<br/><span className="italic font-extralight block mt-2">Leaves.</span>
                </h2>
              </div>
              <div className="max-w-2xl">
                <p className="font-headline italic text-2xl mb-8 leading-relaxed text-[#31332c]">"Preserving the botanical soul of the Langtang range through modern care."</p>
                <p className="font-body text-sm text-[#31332c]/60 mb-12 leading-loose tracking-wide">
                  Born in the high-altitude foothills of the Langtang range, Verdant is more than a boutique. It is an archival project dedicated to preserving the botanical heritage of Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
