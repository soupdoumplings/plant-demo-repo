import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function DiagnosePage() {
  return (
    <div className="bg-[#fbf9f4] text-[#31332c] selection:bg-[#c6e9e9] min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-label { font-family: 'Inter', sans-serif; }
        .serif-italic { font-family: 'Newsreader', serif; font-style: italic; }
      `}} />

      {/* TopAppBar */}
      <nav className="bg-[#fbf9f4] dark:bg-[#1a1a1a] border-b border-[#31332c]/10 dark:border-[#fbf9f4]/10 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-12">
            <Link className="font-headline italic text-2xl text-[#31332c] dark:text-[#fbf9f4] tracking-tight" href="/">VERDANT</Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link className="font-headline text-sm tracking-tight uppercase text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="/shop">Collection</Link>
              <a className="font-headline text-sm tracking-tight uppercase text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">The Journal</a>
              <Link className="font-headline text-sm tracking-tight uppercase text-[#785a1a] dark:text-[#785a1a] border-b border-[#785a1a] transition-all duration-300" href="/diagnose">Discovery</Link>
              <a className="font-headline text-sm tracking-tight uppercase text-[#31332c] dark:text-[#fbf9f4] opacity-70 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">Archive</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/cart" className="scale-100 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#31332c] dark:text-[#fbf9f4]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>
            <Link href="/login" className="scale-100 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#31332c] dark:text-[#fbf9f4]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="px-12 mb-20">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <p className="font-label text-[0.6875rem] tracking-[0.2rem] uppercase text-[#785a1a] mb-4">
                Botanical Intelligence v.2.4
              </p>
              <h1 className="text-6xl md:text-8xl font-headline tracking-tighter leading-none mb-6">
                The Digital <span className="serif-italic">Clinician</span>
              </h1>
              <p className="text-xl max-w-xl text-[#5e6058] font-light leading-relaxed font-label">
                Our advanced AI diagnostic tool analyzes structural integrity and pigmentation variances to provide a surgical assessment of your botanical specimens.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <div className="w-24 h-24 bg-[#e8e9e0] border border-[#b1b3a9]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#456565]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Capture & Analysis Grid */}
        <section className="px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-[#b1b3a9]/10">
          {/* Left: Capture Specimen */}
          <div className="lg:col-span-5 py-12 lg:pr-12 border-b lg:border-b-0 lg:border-r border-[#b1b3a9]/10">
            <div className="sticky top-40">
              <div className="mb-12">
                <h2 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">01. Capture Specimen</h2>
                <div className="aspect-[4/5] bg-[#f5f4ed] relative overflow-hidden group">
                  <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="Close up of a monstera leaf with yellowing edges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXOLTG145oDj_RbFFf7LwctQr3IKpkQZJVViWH7Vw-1_Bg3Ortu_zs_neXGmc2DoIwoU_Kl47w1V_eA1RWM5kNbySfKca4Ns3DCbx7F4j67JeU7f4OvM1CppBhrLg-L1fme8Tu4X-pFuZ6sDw7WBy0U6K8FnMGOvNx9uS5fZDP91cM80pA4L5NIp0RJSKwIWyR--O4gW47fbv9gT91Xzgm2bjfehNqoUftXvA10onaGRPNqIJc63J3Ghjhe-19CqjUFmm9S-eSN6RQ"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 bg-[#fbf9f4]/80 backdrop-blur-md border border-[#b1b3a9]/20 text-center cursor-pointer transition-all duration-300 hover:bg-[#fbf9f4]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto mb-2 text-[#31332c]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                      <p className="font-label text-[0.6875rem] tracking-wider uppercase text-[#31332c]">Upload New Specimen</p>
                    </div>
                  </div>
                  {/* Scanning Overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#785a1a]/40 shadow-[0_0_15px_rgba(120,90,26,0.5)] z-10 animate-pulse"></div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="font-headline text-lg">Specimen ID: #772-B</p>
                    <p className="font-label text-[0.6875rem] text-[#5e6058] uppercase">Monstera Deliciosa</p>
                  </div>
                  <div className="text-right">
                    <p className="font-headline text-lg">94.2%</p>
                    <p className="font-label text-[0.6875rem] text-[#785a1a] uppercase">Confidence Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Diagnosis Details */}
          <div className="lg:col-span-7 py-12 lg:pl-12">
            <div className="mb-16">
              <h2 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">02. Analysis &amp; Results</h2>
              <div className="space-y-1">
                <h3 className="text-5xl font-headline tracking-tight text-[#9f403d] leading-tight">Chlorosis &amp; Fungal Bloom</h3>
                <div className="flex gap-4 items-center py-4">
                  <span className="px-3 py-1 bg-[#e8e9e0] font-label text-[0.6rem] uppercase tracking-widest text-[#31332c]">Critical Care</span>
                  <span className="px-3 py-1 bg-[#e8e9e0] font-label text-[0.6rem] uppercase tracking-widest text-[#31332c]">Environmental Stress</span>
                </div>
              </div>

              {/* The Assessment */}
              <div className="mt-12 bg-[#ffffff] p-10 border border-[#b1b3a9]/10 shadow-sm">
                <h4 className="serif-italic text-2xl mb-6 text-[#31332c]">The Assessment</h4>
                <div className="space-y-6 text-[#5e6058] font-light leading-relaxed font-label">
                  <p>
                    The specimen exhibits advanced stages of <span className="text-[#31332c] font-medium">Interveinal Chlorosis</span>, primarily localized in the outer leaf margins. This loss of chlorophyll suggests an acute deficiency in magnesium or iron, likely exacerbated by irregular irrigation cycles.
                  </p>
                  <p>
                    Secondary observation reveals <span className="text-[#31332c] font-medium">Cercospora Fungal Spots</span> manifesting as dark necrotic centers with yellow halos. This indicates high ambient humidity without adequate airflow, creating a hospitable environment for pathogen proliferation.
                  </p>
                </div>
              </div>
            </div>

            {/* Prescribed Apothecary */}
            <div className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <h2 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase">03. Prescribed Apothecary</h2>
                <a className="font-label text-[0.6875rem] tracking-widest uppercase text-[#785a1a] border-b border-[#785a1a]/30 hover:border-[#785a1a] transition-colors pb-1" href="#">View Full Range</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product 1 */}
                <div className="group bg-[#f5f4ed] p-6 transition-all duration-300 hover:bg-[#efeee6]">
                  <div className="aspect-square mb-6 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Minimalist apothecary bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh5mLOZAbRKnMEpHD95j700hI0R9F8Wmt6fS8Zlp-14lzA2kH6FPgaPEr6_6rNGhP4ev5XDpEEk9l_imGc8XMTn4X-YKU-w9xCv1g2QHet76TencONNdRQyoA6FZ14nGazZ3i3_ZRaYRpCvd6GNjESrZYCFsY19b_mEtDej9bvRkKnOEp-TlN4VjCdvBucp0vvkO72ZgeakUfvJJkV7JFniKtcBvJ--o1mZkahNPcPEC5ooMDzBE4tAthAJ2NgLBXSYFu8cNLxO7a4"/>
                  </div>
                  <p className="font-label text-[0.6rem] tracking-[0.2rem] uppercase text-[#456565] mb-2">Supplement</p>
                  <h5 className="font-headline text-xl mb-4 text-[#31332c]">Mineral Elixir No. 04</h5>
                  <button className="w-full py-4 bg-[#5f5e5e] text-[#faf7f6] font-label text-[0.6875rem] tracking-[0.15rem] uppercase transition-all duration-300 hover:bg-[#31332c] active:scale-95">
                    Add to Regimen — $34
                  </button>
                </div>

                {/* Product 2 */}
                <div className="group bg-[#f5f4ed] p-6 transition-all duration-300 hover:bg-[#efeee6]">
                  <div className="aspect-square mb-6 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Spray bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG_ylRecn1cDrTA5JIdN2evb9fZa8_l9JDTgpZDk1ejf88ISEEWbVUVgEpHADO6t3anHg7L-EMGXKFZHuCozxQdpoK3At2V8y5YPbS9vzzy9rJ3mNESUPV6Oevhy0bA8P300xvrLrfGZXN3VlM-MWRWNAjdZVsrjQg1CnhOEAODHdedilrtMzcyn2rwABNwXz4tJyn-dHHdQ6l20gTe9UGx3WnWBPnlKMeeGmEr7qXNRAarVfWpUMTWf0GV760JOSiHE8m25dWVBUb"/>
                  </div>
                  <p className="font-label text-[0.6rem] tracking-[0.2rem] uppercase text-[#456565] mb-2">Antifungal</p>
                  <h5 className="font-headline text-xl mb-4 text-[#31332c]">Botanical Shield Spray</h5>
                  <button className="w-full py-4 bg-[#5f5e5e] text-[#faf7f6] font-label text-[0.6875rem] tracking-[0.15rem] uppercase transition-all duration-300 hover:bg-[#31332c] active:scale-95">
                    Add to Regimen — $28
                  </button>
                </div>
              </div>
            </div>

            {/* Recovery Protocol */}
            <div className="border-t border-[#b1b3a9]/10 pt-12">
              <h2 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase mb-8">Recovery Protocol</h2>
              <ul className="space-y-8">
                <li className="flex gap-8 items-start">
                  <span className="serif-italic text-3xl text-[#785a1a]">01</span>
                  <div>
                    <h6 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase mb-2">Isolation</h6>
                    <p className="text-[#5e6058] font-light font-label">Remove the specimen from the proximity of healthy plants to prevent fungal transmission. Maintain a minimum distance of 2 meters.</p>
                  </div>
                </li>
                <li className="flex gap-8 items-start">
                  <span className="serif-italic text-3xl text-[#785a1a]">02</span>
                  <div>
                    <h6 className="font-label text-[0.6875rem] tracking-[0.1rem] uppercase mb-2">Surgical Pruning</h6>
                    <p className="text-[#5e6058] font-light font-label">Using sterilized implements, remove leaves with more than 40% necrotic coverage. Clean tools with alcohol between each cut.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter / Footer Signoff */}
        <section className="mt-24 px-12 max-w-[1920px] mx-auto text-center py-24 bg-[#f5f4ed]">
          <h2 className="font-headline text-5xl mb-6 text-[#31332c]">Expertise delivered <span className="serif-italic">weekly.</span></h2>
          <p className="max-w-md mx-auto text-[#5e6058] font-light mb-12 font-label">Join our inner circle for clinical plant care insights and early access to the archive.</p>
          <form className="max-w-md mx-auto flex gap-0 border-b border-[#797c73]">
            <input className="w-full bg-transparent border-none py-4 font-label text-[0.6875rem] tracking-widest uppercase focus:ring-0 placeholder:text-[#b1b3a9]" placeholder="EMAIL ADDRESS" type="email"/>
            <button className="font-label text-[0.6875rem] tracking-widest uppercase px-6 hover:text-[#785a1a] transition-colors text-[#31332c]" type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}
