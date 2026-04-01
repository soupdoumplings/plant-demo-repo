"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication success
    router.push('/');
  };

  return (
    <div className="bg-[#fbf9f4] text-[#31332c] selection:bg-[#c6e9e9] min-h-screen font-sans antialiased overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCexKRjTmKfy3ETBJXpzgNurmTAcFwZK_SSA2kIlJ9AQnZ5jeYe1Jrbj49pJJyh8-D5qIu2QFUQOw1D8VwDrDwuuQMxrSz_CPmB2BKpaXGy8HXGuS-yVCgdDpgDoiBwsIZvTQ7bVvmuu_5Dh9k-rAcHDUGxIfOEvX41bCtdW5xGNnlOsWtkjGjhSmgbUkUgEdPdPmoxdu81BtZDw30-7fkIfYZ56LvqKGcZBmaB0TxPUJm76hjIHDpXAub2ggabQsrkINt17pbkdQUk"
          />
          {/* Branding Overlay */}
          <div className="absolute top-12 left-12 z-10">
            <Link href="/" className="font-headline text-3xl tracking-[0.2em] uppercase text-[#fbf9f4]">VERDANT</Link>
          </div>
          {/* Decorative Quote / Tagline */}
          <div className="absolute bottom-12 left-12 z-10 max-w-md">
            <p className="font-headline italic text-4xl text-[#fbf9f4] leading-tight tracking-tight">
              "Nature does not hurry, yet everything is accomplished."
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
              <button className="font-label text-[0.6875rem] uppercase tracking-[0.15rem] text-[#31332c] border-b border-[#31332c] pb-2 font-semibold">
                Member Access
              </button>
              <Link href="/register" className="font-label text-[0.6875rem] uppercase tracking-[0.15rem] text-[#31332c]/40 hover:text-[#31332c] transition-colors duration-300 pb-2">
                Join the Archive
              </Link>
            </div>

            {/* Form Header */}
            <header className="space-y-4">
              <h1 className="font-headline text-5xl font-light tracking-tight text-[#31332c]">Welcome back.</h1>
              <p className="font-body text-[#5e6058]/80 text-sm leading-relaxed max-w-xs">
                Continue your journey through our curated botanical collections and orders.
              </p>
            </header>

            {/* Authentication Form */}
            <form className="space-y-10" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="group">
                <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 mb-2 transition-colors group-focus-within:text-[#785a1a]" htmlFor="email">
                  Account Identifier
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0"
                  id="email"
                  name="email"
                  placeholder="Your botanical account"
                  type="email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <label className="block font-label text-[0.6rem] uppercase tracking-[0.1rem] text-[#31332c]/60 transition-colors group-focus-within:text-[#785a1a]" htmlFor="password">
                    Security Key
                  </label>
                  <a className="font-label text-[0.6rem] uppercase tracking-[0.05rem] text-[#31332c]/40 hover:text-[#785a1a] transition-colors" href="#">
                    Forgotten?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-0 border-b border-[#797c73]/40 py-3 px-0 font-body text-[#31332c] placeholder:text-[#b1b3a9]/50 focus:border-[#785a1a] transition-all duration-300 outline-none shadow-none focus:ring-0"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#31332c]/40 hover:text-[#31332c]" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 space-y-6">
                <button
                  className="w-full bg-[#5f5e5e] text-[#faf7f6] font-label text-[0.75rem] uppercase tracking-[0.2rem] py-5 px-8 hover:bg-[#456565] transition-all duration-500 shadow-sm active:scale-[0.98]"
                  type="submit"
                >
                  Enter Account
                </button>

                {/* Social Auth Alternative */}
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-[#797c73]/10"></div>
                  <span className="flex-shrink mx-4 font-label text-[0.55rem] uppercase tracking-[0.1rem] text-[#b1b3a9]">Or authenticate via</span>
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
                © 2024 VERDANT BOTANICALS. <br />
                By entering, you agree to our <Link className="underline hover:text-[#785a1a]" href="/">Care Terms</Link> & <Link className="underline hover:text-[#785a1a]" href="/">Privacy Standards</Link>.
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
