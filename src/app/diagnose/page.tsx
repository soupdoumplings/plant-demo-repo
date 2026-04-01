import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function DiagnosePage() {
  return (
    <div className="bg-[#fbf9f4] text-[#31332c] selection:bg-[#c6e9e9] min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-label { font-family: 'Inter', sans-serif; }
        .serif-italic { font-family: 'Newsreader', serif; font-style: italic; }
      `}} />

      <Header />

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
                    The specimen exhibits advanced stages of <span className="text-[#31332c] font-medium">Interveinal Chlorosis</span>, primarily localized in the outer leaf margins. This loss of chlorophyll suggests an acute deficiency in magnesium or iron.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
