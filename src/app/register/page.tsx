"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration success
    router.push('/');
  };

  return (
    <div className="bg-[#fbf9f4] text-[#31332c] selection:bg-[#c6e9e9] min-h-screen font-sans antialiased overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'Inter', sans-serif; }
      `}} />

      <main className="flex min-h-screen w-full">
        {/* Left Side: Editorial Image Section */}
        <section className="hidden md:flex md:w-1/2 lg:w-3/5 h-screen relative bg-[#e2e3d9] overflow-hidden">
          <img 
            alt="Editorial botanical photography" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJulT6o-Fqlbf097xLzB_KPyP9DCaOD2T1ZbtkZ6k0OyUVtW7IEea6UeLTihb_mD-iemRuz1rwNZyIDB_dc8XdvkRUATnKTKg-4LDIGsd7LhyXfFkUAoDxudh55KPIkdV21YQwwV7B2lHBybBh4bnyJVVfA-j4CtWV0uri1voKanDk-PFPEA-h27XSuEqGHSU5A05NB4-IAoWnhqhozizbYkpbTrSqtxeZnCF1A5rrbMEiuZbEodyYSC5HifVyJuVwEdAm4tKuRXR"
          />
          {/* Branding Overlay */}
          <div className="absolute top-12 left-12 z-10">
            <Link href="/" className="font-headline text-3xl tracking-[0.2em] uppercase text-[#fbf9f4]">VERDANT</Link>
          </div>
          {/* Decorative Quote / Tagline */}
          <div className="absolute bottom-12 left-12 z-10 max-w-md">
            <p className="font-headline italic text-4xl text-[#fbf9f4] leading-tight tracking-tight">
              "To plant a garden is to believe in tomorrow."
            </p>
            <div className="mt-6 w-12 h-[1px] bg-[#fbf9f4]"></div>
          </div>
        </section>

        {/* Right Side: Form Section */}
        <section className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 bg-[#fbf9f4] relative">
          {/* Mobile Brand Logo */}
          <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2">
            <Link href="/" className="font-headline text-2xl tracking-[0.2em] uppercase text-[#31332c]">VERDANT</Link>
          </div>

          <div className="w-full max-w-md space-y-12">
            {/* Toggle Flow (Login/Signup Tabs) */}
            <div className="flex space-x-8 mb-16">
              <Link href="/login" className="font-label text-[0.6875rem] uppercase tracking-[0.15rem] text-[#31332c]/40 hover:text-[#31332c] transition-colors duration-300 pb-2">
                Member Access
              </Link>
              <button className="font-label text-[0.6875rem] uppercase tracking-[0.15rem] text-[#31332c] border-b border-[#31332c] pb-2 font-semibold">
                Join the Archive
              </button>
            </div>

            {/* Form Header */}
            <header className="space-y-4">
              <h1 className="font-headline text-5xl font-light tracking-tight text-[#31332c]">Join the Archive.</h1>
              <p className="font-body text-[#5e6058]/80 text-sm leading-relaxed max-w-xs">
                Begin your collection and gain priority access to rare high-altitude specimens.
              </p>
            </header>

            {/* Authentication Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="group">
                <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 mb-2 transition-colors group-focus-within:text-[#785a1a]" htmlFor="name">
                  Full Name
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  type="text"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 mb-2 transition-colors group-focus-within:text-[#785a1a]" htmlFor="email">
                  Account Identifier
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0" 
                  id="email" 
                  name="email" 
                  placeholder="Email Address" 
                  type="email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 mb-2 transition-colors group-focus-within:text-[#785a1a]" htmlFor="password">
                  Security Key (Password)
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className="group">
                <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 mb-2 transition-colors group-focus-within:text-[#785a1a]" htmlFor="confirm-password">
                  Confirm Security Key
                </label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0" 
                  id="confirm-password" 
                  name="confirm-password" 
                  placeholder="••••••••" 
                  type="password"
                  required
                />
              </div>

              {/* Actions */}
              <div className="pt-6 space-y-6">
                <button 
                  className="w-full bg-[#5f5e5e] text-[#faf7f6] font-label text-[0.75rem] uppercase tracking-[0.2rem] py-5 px-8 hover:bg-[#456565] transition-all duration-500 shadow-sm active:scale-[0.98]" 
                  type="submit"
                >
                  Create Account
                </button>

                {/* Social Auth Alternative */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-[#797c73]/10"></div>
                  <span className="flex-shrink mx-4 font-label text-[0.55rem] uppercase tracking-[0.1rem] text-[#b1b3a9]">Or join via</span>
                  <div className="flex-grow border-t border-[#797c73]/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 border border-[#797c73]/20 py-4 hover:bg-[#f5f4ed] transition-colors duration-300" type="button">
                    <span className="font-label text-[0.6rem] uppercase tracking-[0.1rem]">Global Access</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-[#797c73]/20 py-4 hover:bg-[#f5f4ed] transition-colors duration-300" type="button">
                    <span className="font-label text-[0.6rem] uppercase tracking-[0.1rem]">Secure ID</span>
                  </button>
                </div>
              </div>
            </form>

            <footer className="pt-12">
              <p className="font-label text-[0.55rem] text-[#797c73] leading-loose uppercase tracking-[0.05rem]">
                © 2024 VERDANT BOTANICALS. <br/>
                By joining, you agree to our <Link className="underline hover:text-[#785a1a]" href="/">Care Terms</Link> & <Link className="underline hover:text-[#785a1a]" href="/">Privacy Standards</Link>.
              </p>
            </footer>
          </div>
        </section>
      </main>

      {/* Decorative Text Overlay */}
      <div className="fixed bottom-0 right-0 p-4 opacity-5 pointer-events-none hidden lg:block">
        <span className="font-headline text-[12rem] leading-none -mb-12 font-bold select-none text-[#31332c]">VERDANT</span>
      </div>
    </div>
  );
}
