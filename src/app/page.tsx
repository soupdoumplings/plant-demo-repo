import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container min-h-screen overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Newsreader', serif; }
        .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); }
        .text-justify-custom { text-align: justify; text-justify: inter-word; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
      `}} />

      {/* TopAppBar */}
      <nav className="bg-[#fbf9f4] dark:bg-[#1a1a1a] border-b border-[#31332c]/10 dark:border-[#fbf9f4]/10 flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto fixed top-0 z-50">
        <div className="flex items-center gap-12">
          <span className="font-serif italic text-2xl text-[#31332c] dark:text-[#fbf9f4] tracking-tight">VERDANT</span>
          <div className="hidden md:flex gap-8 font-serif text-sm tracking-tight uppercase">
            <a className="text-[#785a1a] dark:text-[#785a1a] border-b border-[#785a1a] transition-all duration-300" href="/shop">Shop</a>
            <a className="text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">The Journal</a>
            <a className="text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="/diagnose">Care Guides</a>
            <a className="text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">Archive</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-[#31332c] dark:text-[#fbf9f4]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-[#31332c] dark:text-[#fbf9f4]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-[#31332c] dark:text-[#fbf9f4]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </nav>

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
            <button className="bg-white text-on-surface px-10 py-4 text-sm uppercase tracking-widest hover:bg-on-surface hover:text-white transition-colors">
              Explore the Archive
            </button>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-white/80">AI Powered</p>
                <p className="font-serif italic text-lg text-white">AI Diagnosis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Personalized Archive Recommendations */}
      <section className="py-24 px-12 bg-surface">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl mb-6">Personalized Archive Recommendations</h2>
            <p className="font-body text-on-surface-variant leading-relaxed">Curated by our proprietary growth algorithms, these specimens are selected based on your local micro-climate in the Kathmandu Valley.</p>
          </div>
          <a className="font-label text-xs uppercase tracking-[0.15rem] border-b border-on-surface pb-1 mb-2" href="#">View Full Collection</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-6">
              <img alt="Meconopsis Grandis" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3l-FQwgqwzcoP8K5ij1-H7BUjOeF6wNXz_wsXMMfpCgTxNDFZg-Z024jRCTNeOpLDzaP1-BI-lPRgRd3I5JZ3ndQd-7mhjrijJ7WuJVG8aN52IrIyzxvqvITNwQ6p5mussE0r60js_h5NDKKD9QPakYx08PfEpTCOYTNzFFqQ20bDmEj--eWSlkvDyT8qfqjMtnTn_mClsr_VTuN4kKoW4a_JcnoTqiNV-YXGtflhqVOrmXX7ADMXzVL6X9Pox_xJxfc7Dgs-nSxY"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Meconopsis Grandis</h3>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">Kathmandu High-Altitude Selection</p>
              </div>
              <span className="font-serif text-xl">रू 12,500</span>
            </div>
          </div>
          {/* Product 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-6">
              <img alt="Coelogyne Corymbosa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdfQeXCAmjKoYDZ6MCLDvKpYGDa_IdmCK7hTk7bhtgirzlMoqZlxb7b2mTdwYYhBLlMhQDTgPg9gmV98-Y04gQgsIlNxHNyEFMkkIYyd_fcNYPjfhAUL8gJxGAYW4OeEXrDv7Bg0y5qgvdcgopPIiMp-u-jEFGfWZRSfAGlN4ZEVL49EINOfTqS80S8lli3D0fwxU80XSpwwgkLyjGeCaP9NSGAmDiu4QDxtkOaJfJzZWCpJs5Ond4oC7a5gyXexaS-PTnZ8jqwAJ"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Coelogyne Corymbosa</h3>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">Rare Himalayan Orchid</p>
              </div>
              <span className="font-serif text-xl">रू 18,200</span>
            </div>
          </div>
          {/* Product 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-6">
              <img alt="Primula Himalayan" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfP-pF709VLlZAeEB4jRPR2w3_IYupe45C4kAozrvFiau86rpJWSzCK6fridaCtlDXrdRsuzhoUDbZaY1oilZW1eBt8l5hL9gLOOr1QztWXbsuWXT-Haga_80__RVkDAsNd6y5K-vwIZY4X0ZbaYaqOZydaIY_MORezChRus2nsp3B5IpPstsWPmLdrVCaX6r_0fD0vRIzHa8iGS1yZ22s9ANUowdVXHbRWT32YdvAKUQ4IlxM6cV6LMpkdwMS9aUMgS1syGO7BPq"/>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline text-2xl mb-1">Primula Sikkimensis</h3>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">Alpine Riverbank Specimen</p>
              </div>
              <span className="font-serif text-xl">रू 6,900</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Feature: The Journal (Redesigned) */}
      <section className="bg-surface py-32 md:py-48 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-12 relative">
          <div className="editorial-grid gap-y-16 md:gap-y-0">
            {/* Large Background Text (Asymmetrical Accent) */}
            <div className="absolute -top-16 left-24 pointer-events-none opacity-[0.03] hidden lg:block">
              <span className="font-headline text-[22rem] italic leading-none whitespace-nowrap">Heritage</span>
            </div>
            {/* Main Content Column */}
            <div className="col-span-12 lg:col-span-5 relative z-20 flex flex-col justify-center">
              <div className="mb-12">
                <p className="font-label text-[0.6rem] tracking-[0.4rem] uppercase mb-8 text-secondary border-l-2 border-secondary pl-4 py-1">The Journal — Vol. IV</p>
                <h2 className="font-headline text-7xl md:text-[9rem] tracking-tighter leading-[0.8] mb-12">
                  Beyond the<br/><span className="italic font-extralight block mt-2 ml-12">Leaves.</span>
                </h2>
              </div>
              <div className="max-w-md ml-12 lg:ml-24">
                <p className="font-headline italic text-2xl mb-8 leading-relaxed text-on-surface">"Preserving the botanical soul of the Langtang range through modern care."</p>
                <p className="font-body text-sm text-on-surface-variant mb-12 leading-loose text-justify-custom tracking-wide">
                  Born in the high-altitude foothills of the Langtang range, Verdant is more than a boutique. It is an archival project dedicated to preserving the botanical heritage of Nepal. Every specimen tells a story of survival, elegance, and the delicate balance of the Himalayan ecosystem. We bridge the gap between ancient flora and modern dwelling.
                </p>
                <a className="group inline-flex items-center gap-4 py-2 border-b border-on-surface overflow-hidden" href="#">
                  <span className="font-label text-[0.7rem] uppercase tracking-[0.3rem]">Read the Full Entry</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Overlapping Image Composition */}
            <div className="col-span-12 lg:col-span-7 relative flex justify-end items-center mt-12 lg:mt-0">
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-2xl">
                {/* Background Decorative Element */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-surface-container-high -z-10"></div>
                {/* Main Image */}
                <img alt="Verdant Heritage" className="w-full h-full object-cover filter grayscale-[0.2] brightness-95 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtLFUaM3Oonv-pGeO3SkHfTS8ZwCf94GQ15nwPbp0WAe_YF5VeRfOLpoQc47_h84EYZnhvybB2_NQ1RrQvzieJw8XOjn0MGh9ggtb62Y1yF8lljRQfuJiDT9wMhsXX_9okXQLtBUBnp2xz4ckjyGFNr0VEF4O0O6OlFzVenD2MUS2HpAB3lM77DvQrM5AM6aDQZCDRYsh5xXBXaHiaOzsejU5lSlIMDBsXwlFvyWS-LAFGzYNyAfSJrD6pkSo7mWojOCRg4uHsLhoX"/>
                {/* Floating Quote Card */}
                <div className="absolute -bottom-16 -left-8 md:-left-24 bg-surface-container-lowest p-10 md:p-14 max-w-sm border border-outline/5 shadow-2xl z-30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-tertiary/20 mb-4 block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5V13c0 2.22-1.258 4.29-3.267 5.25A11.026 11.026 0 0015 20.25h1.5A11.026 11.026 0 0119.767 18.25C18.258 17.29 17 15.22 17 13v-2.5h-2zM5.5 10.5V13c0 2.22-1.258 4.29-3.267 5.25A11.026 11.026 0 005.5 20.25H7A11.026 11.026 0 0110.267 18.25C8.258 17.29 7 15.22 7 13v-2.5H5.5z" />
                  </svg>
                  <p className="font-headline italic text-xl md:text-2xl mb-6 text-on-surface leading-snug">
                    We believe every home should be a sanctuary of wild Himalayan soul.
                  </p>
                  <div className="h-px w-12 bg-outline/20 mb-4"></div>
                  <p className="font-label text-[10px] uppercase tracking-[0.25rem] text-outline">The Founder's Note</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archivist's Toolkit (Redesigned) */}
      <section className="py-32 px-12 bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="font-label text-[0.6rem] tracking-[0.4rem] uppercase mb-4 text-outline/60">The Essentials</p>
            <h2 className="font-headline text-5xl md:text-6xl tracking-tight mb-6 text-on-surface">Archivist's Toolkit</h2>
            <p className="font-serif italic text-sm text-on-surface-variant max-w-sm mx-auto opacity-70">A curation of precision instruments for the conscious grower.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* Tool 1 */}
            <div className="flex flex-col">
              <div className="aspect-square bg-[#f8f5f0] mb-8 flex items-center justify-center p-16 transition-opacity duration-500 hover:opacity-90">
                <img alt="Heritage Shears" className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuB-QhTd_q-IRZwSeToy52XwJTA3n2uKCHxJKIA7ssUtNEtMCtRZatZGk2uCF9aQpxbtl_6Kh-5UXQvaRiHvsGxCuRkkxEHqJKR_OqVQnQqJOTJz9JLBmENA18kqTswrEfx2ctNyhatPqzZBsA9crJcfTAPudbRoeNy9TaxbT_FbnmjQ1rUXFSaMrRzTMwrdNnaLT44gYvITwmUwyiZlQjAC8lNlg6H8JoK1yPNv_PxMHh5fRSEWpdoAIQm4svqRKcVSosMaXOPu7M"/>
              </div>
              <div className="">
                <h4 className="font-serif text-lg mb-1 text-on-surface">Heritage Shears</h4>
                <p className="font-label text-[9px] uppercase tracking-[0.1rem] text-outline/60 mb-3">Stainless Steel &amp; Oak</p>
                <p className="font-serif text-sm text-on-surface/70">रू 3,200</p>
              </div>
            </div>
            {/* Tool 2 */}
            <div className="flex flex-col">
              <div className="aspect-square bg-[#f8f5f0] mb-8 flex items-center justify-center p-16 transition-opacity duration-500 hover:opacity-90">
                <img alt="Copper Mist Vessel" className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvbpVIN_VUxTcamiWMHhSDDlbE4iMDm4bi9KRGRL2KHlVHWX8NKBOIfqnocmn50zO_5sFIU60N-CSij9jFyZ9gjm2Ak06ygo_VwY7Ucfe0PMBBdiHa1kHSyDEnBIqSBFFuENIFtJl3v-96hGKYtvg-wLvrwQ5V4WiRetLrWgjTFhOEHS27Pp1Tn37R_B00-9J36ZGa8axkGsX4cIAcyLfp75kQioSyNVDHaJQLCFJiXIGq0qAYe0FpmOOy4OofEa1__CJNiq-kVh7"/>
              </div>
              <div className="">
                <h4 className="font-serif text-lg mb-1 text-on-surface">Copper Mist Vessel</h4>
                <p className="font-label text-[9px] uppercase tracking-[0.1rem] text-outline/60 mb-3">Polished Finish</p>
                <p className="font-serif text-sm text-on-surface/70">रू 5,800</p>
              </div>
            </div>
            {/* Tool 3 */}
            <div className="flex flex-col">
              <div className="aspect-square bg-[#f8f5f0] mb-8 flex items-center justify-center p-16 transition-opacity duration-500 hover:opacity-90">
                <img alt="Organic Hemp Bind" className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmHaEZjUsIdgYwAvIsJQXftqd_bePfAmCiIdkZOMlWoFsQVRoeVD1cXPccPvlhGje69X307W2A0uEoCEycIhssS_czzNHo5F_RM7tN-zdZJbTd7wJVWTpPBCTS0Hjr7z4LePPhbO63TV-hu20Vl-ouWd-lq9LFL61wGcHR9-_uBYq1-qp81VffCLKQnEmSas5cyVp_UHyPrkInQyYShMENO4BcA91-Wb5EPv3mqx_8AFRt7FHZa3Zo-AX3dNeqSCoP7mCNM1-SDv_3"/>
              </div>
              <div className="">
                <h4 className="font-serif text-lg mb-1 text-on-surface">Organic Hemp Bind</h4>
                <p className="font-label text-[9px] uppercase tracking-[0.1rem] text-outline/60 mb-3">Hand-woven in Nepal</p>
                <p className="font-serif text-sm text-on-surface/70">रू 850</p>
              </div>
            </div>
            {/* Tool 4 */}
            <div className="flex flex-col">
              <div className="aspect-square bg-[#f8f5f0] mb-8 flex items-center justify-center p-16 transition-opacity duration-500 hover:opacity-90">
                <img alt="Analog Soil Probe" className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3eJ_xT9kufITOvFfjgKrex-E79O9g4cOUrr1nEjLvm6gzyVh_XXNGQKNc5UC6csm95Mt2-XHE6OUynFj2WIbVxO0pxzqJLzMI26VA5V55WnuHQW7Hkjsd2Ley0ZNZXMboIRaeyW696LkLzJZdnoB2dVRy-bs5f9hDcE5nxBqrVXnolOJt2VyOdhMmyi36i4yXYwdsih2pFebu4JjNNF1A_vVHz39FcBWs0flLGdsHU_-mdWnn0fqA7CrxwgZ38txhH3_V9qKBkpz0"/>
              </div>
              <div className="">
                <h4 className="font-serif text-lg mb-1 text-on-surface">Analog Soil Probe</h4>
                <p className="font-label text-[9px] uppercase tracking-[0.1rem] text-outline/60 mb-3">Brass Components</p>
                <p className="font-serif text-sm text-on-surface/70">रू 1,500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Refined) */}
      <footer className="bg-surface border-t border-outline/10">
        <div className="max-w-[1920px] mx-auto px-12 py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            {/* Branding */}
            <div className="col-span-12 md:col-span-4">
              <span className="font-headline italic text-4xl mb-8 block text-on-surface tracking-tighter">Verdant.</span>
              <p className="text-[10px] font-sans tracking-[0.2rem] uppercase opacity-50 leading-loose max-w-xs mb-12 text-on-surface">
                Curating the botanical soul of the Himalayas. Based in Kathmandu, shipping nationwide. 
              </p>
              <div className="flex gap-6">
                <a className="opacity-40 hover:opacity-100 transition-opacity text-on-surface" href="#"><span className="font-label text-[10px] uppercase tracking-widest">Instagram</span></a>
                <a className="opacity-40 hover:opacity-100 transition-opacity text-on-surface" href="#"><span className="font-label text-[10px] uppercase tracking-widest">Journal</span></a>
              </div>
            </div>
            {/* Nav Links */}
            <div className="col-span-6 md:col-span-2">
              <h5 className="font-label text-[10px] tracking-[0.25rem] uppercase font-bold mb-10 text-on-surface">Curation</h5>
              <ul className="flex flex-col gap-5">
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">The Collection</a></li>
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">Rare Specimens</a></li>
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">Care Instruments</a></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-2">
              <h5 className="font-label text-[10px] tracking-[0.25rem] uppercase font-bold mb-10 text-on-surface">Archive</h5>
              <ul className="flex flex-col gap-5">
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">Journal</a></li>
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">Philosophy</a></li>
                <li><a className="font-label text-[10px] tracking-[0.15rem] uppercase text-outline hover:text-on-surface transition-colors" href="#">Sourcing</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="col-span-12 md:col-span-4">
              <h5 className="font-label text-[10px] tracking-[0.25rem] uppercase font-bold mb-10 text-on-surface">Newsletter</h5>
              <p className="text-[10px] font-sans tracking-[0.15rem] uppercase text-outline mb-8 leading-relaxed">Join our botanical community for seasonal archival updates.</p>
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline/20 py-4 px-0 focus:ring-0 focus:border-on-surface text-[10px] tracking-[0.3rem] outline-none transition-colors text-on-surface" placeholder="ENTER EMAIL ADDRESS" type="email"/>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-on-surface">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-32 pt-12 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-label text-[9px] tracking-[0.3rem] uppercase opacity-30 text-on-surface">© 2024 Verdant Digital Folio. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a className="font-label text-[9px] tracking-[0.2rem] uppercase opacity-30 hover:opacity-100 transition-opacity text-on-surface" href="#">Privacy Policy</a>
              <a className="font-label text-[9px] tracking-[0.2rem] uppercase opacity-30 hover:opacity-100 transition-opacity text-on-surface" href="#">Terms of Archive</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
