"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/product-card";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  categories?: { name: string; slug: string };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        // Fetch Categories
        const catRes = await fetch("/api/categories");
        const catData = await catRes.json();
        if (catData.categories) setCategories(catData.categories);

        // Fetch Products
        let prodUrl = `/api/products?limit=50`;
        if (activeCategory !== "all") prodUrl += `&category=${activeCategory}`;
        const prodRes = await fetch(prodUrl);
        const prodData = await prodRes.json();
        if (prodData.products) setProducts(prodData.products);
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [activeCategory]);

  return (
    <div className="bg-[#fbf9f4] text-[#31332c] selection:bg-[#c6e9e9] min-h-screen font-sans antialiased overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap');
        .font-headline { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-label { font-family: 'Inter', sans-serif; }
        .serif-italic { font-family: 'Newsreader', serif; font-style: italic; }
      `}} />

      {/* Editorial Navigation */}
      <nav className="bg-[#fbf9f4]/80 backdrop-blur-md border-b border-[#31332c]/5 fixed top-0 w-full z-50 transition-all duration-500 hover:bg-[#fbf9f4]">
        <div className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-12">
            <Link className="font-headline italic text-2xl text-[#31332c] tracking-tight" href="/">VERDANT</Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link className="font-headline text-sm tracking-tight uppercase text-[#785a1a] border-b border-[#785a1a] transition-all duration-300" href="/shop">Collection</Link>
              <a className="font-headline text-sm tracking-tight uppercase opacity-50 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">The Journal</a>
              <Link className="font-headline text-sm tracking-tight uppercase opacity-50 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="/diagnose">Discovery</Link>
              <a className="font-headline text-sm tracking-tight uppercase opacity-50 hover:opacity-100 hover:text-[#456565] transition-all duration-300" href="#">Archive</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/cart" className="opacity-70 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>
            <Link href="/login" className="opacity-70 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40">
        {/* Editorial Hero */}
        <header className="px-12 mb-32 relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
            <span className="font-headline text-[15rem] leading-none select-none italic font-bold">Flora</span>
          </div>
          <div className="max-w-[1920px] mx-auto border-l border-[#31332c]/5 pl-12">
            <p className="font-label text-[0.6875rem] tracking-[0.4rem] uppercase text-[#785a1a] mb-6">Vol. 02 — Curated Archive</p>
            <h1 className="text-7xl md:text-[8rem] font-headline tracking-tighter leading-[0.8] mb-12">
              The Discovery <br/><span className="serif-italic font-extralight block mt-4 ml-12">Portfolio.</span>
            </h1>
            <div className="max-w-xl">
              <p className="text-xl text-[#5e6058] font-light leading-relaxed font-label italic mb-8">
                "An archival journey through high-altitude specimens and rare botanical finds."
              </p>
              <div className="h-px w-24 bg-[#31332c]/10"></div>
            </div>
          </div>
        </header>

        {/* Collection Grid Container */}
        <div className="px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-2 space-y-16">
            <div className="sticky top-40">
              <h2 className="font-label text-[0.6875rem] tracking-[0.2rem] uppercase mb-10 text-[#31332c]/40">Taxonomy</h2>
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={() => setActiveCategory("all")}
                    className={`font-headline text-2xl lowercase italic transition-all duration-300 ${activeCategory === "all" ? 'text-[#785a1a] translate-x-3 underline' : 'text-[#31332c]/60 hover:text-[#31332c]'}`}
                  >
                    All Specimens
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`font-headline text-2xl lowercase italic transition-all duration-300 ${activeCategory === cat.slug ? 'text-[#785a1a] translate-x-3 underline' : 'text-[#31332c]/60 hover:text-[#31332c]'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-24 pt-12 border-t border-[#31332c]/5">
                <p className="font-label text-[0.55rem] tracking-[0.2rem] uppercase text-[#31332c]/30 leading-loose">
                  Shipping climate-controlled specimens nationwide from our Kathmandu sanctuary.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Collection Grid */}
          <section className="lg:col-span-10">
            {isLoading ? (
              <div className="flex items-center justify-center h-96 italic text-[#31332c]/30 font-headline text-3xl animate-pulse">
                Revealing the collection...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
                {products.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/products/${product.slug}`}
                    className="group"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-[#f5f4ed] relative mb-8">
                       <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#31332c]/5 group-hover:bg-transparent transition-colors duration-700"></div>
                      
                      {/* Product Badge */}
                      <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-[#fbf9f4]/90 backdrop-blur-sm border border-[#31332c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="font-label text-[0.55rem] tracking-[0.2rem] uppercase text-[#31332c]">View Plate</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-headline text-3xl tracking-tight leading-none text-[#31332c] group-hover:text-[#785a1a] transition-colors">{product.name}</h3>
                        <div className="w-8 h-px bg-[#31332c]/10"></div>
                        <span className="font-serif italic text-xl text-[#31332c]/60">रू {product.price.toLocaleString()}</span>
                      </div>
                      <p className="font-label text-[0.6rem] tracking-[0.2rem] uppercase text-[#5e6058] opacity-60">
                        {product.categories?.name || "Specimen Archive"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
