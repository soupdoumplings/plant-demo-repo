"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  category_label?: string;
  badge?: string;
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
        const catRes = await fetch("/api/categories");
        const catData = await catRes.json();
        if (catData.categories) setCategories(catData.categories);

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

      <Header />

      <main className="pt-20">
        {/* Editorial Hero Section */}
        <section className="px-12 py-20 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                    <p className="font-label text-[0.6rem] uppercase tracking-[0.4em] text-[#31332c]/40">Curated Collection / Vol. 04</p>
                    <h1 className="text-8xl md:text-[8.5rem] font-headline tracking-tighter leading-[0.85] text-[#31332c]">
                        Living <br />
                        <span className="serif-italic font-extralight block mt-4">Sculpture</span>
                    </h1>
                </div>
                <p className="font-label text-sm text-[#5e6058] max-w-md leading-relaxed">
                    A meticulous collection of rare botanical specimens and artisan-crafted vessels, designed to transform domestic spaces into living galleries.
                </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[#e2e3d9]">
                <img 
                    src="/botanical_shadow_hero_1775052246730.png" 
                    alt="Editorial Botanical Interior" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>

        {/* Category Filter Bar */}
        <nav className="px-12 py-12 max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#31332c]/5">
            <div className="flex flex-wrap gap-4">
                <button 
                   onClick={() => setActiveCategory("all")}
                   className={`px-6 py-2.5 text-[0.65rem] uppercase tracking-[.2em] transition-all ${activeCategory === "all" ? 'bg-[#454740] text-[#fbf9f4]' : 'bg-[#e8e9e0] text-[#31332c]/60 hover:bg-[#dfe0d6]'}`}
                >
                    All Objects
                </button>
                {categories.map((cat) => (
                    <button 
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`px-6 py-2.5 text-[0.65rem] uppercase tracking-[.2em] transition-all ${activeCategory === cat.slug ? 'bg-[#454740] text-[#fbf9f4]' : 'bg-[#e8e9e0] text-[#31332c]/60 hover:bg-[#dfe0d6]'}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
            
            <div className="flex items-center gap-12 font-label text-[0.6rem] uppercase tracking-[.2em] text-[#31332c]/40">
                <span>Showing {products.length} Artifacts</span>
                <button className="flex items-center gap-2 hover:text-[#31332c] transition-colors">
                    Sort By: Latest
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
            </div>
        </nav>

        {/* Collection Grid */}
        <section className="px-12 pb-32 max-w-[1920px] mx-auto">
            {isLoading ? (
                <div className="py-40 text-center font-headline italic text-3xl opacity-20 animate-pulse">Consulting the registry...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.slug}`} className="group space-y-6">
                            <div className="aspect-[4/5] overflow-hidden bg-[#f5f4ed] relative">
                                <img 
                                    src={product.image_url} 
                                    alt={product.name} 
                                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-105"
                                />
                                {product.badge && (
                                    <div className="absolute top-4 left-4 px-2 py-1 bg-[#785a1a] text-[#fbf9f4] text-[0.5rem] uppercase tracking-widest">
                                        {product.badge}
                                    </div>
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-baseline border-b border-[#31332c]/5 pb-2">
                                    <h3 className="font-headline text-2xl tracking-tight text-[#31332c]">{product.name}</h3>
                                    <span className="font-label text-sm text-[#31332c]/60">${product.price.toLocaleString()}</span>
                                </div>
                                <p className="font-label text-[0.55rem] uppercase tracking-[.2em] text-[#31332c]/40">
                                    {product.category_label || product.categories?.name || "Specimen Archive"}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </section>

        {/* Journal Subscription Section */}
        <section className="bg-[#f5f4ed] py-40 border-t border-[#31332c]/5">
            <div className="container mx-auto px-4 text-center space-y-12 max-w-4xl">
                <div className="flex justify-center mb-8">
                   <span className="text-[#785a1a]">❦</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-headline tracking-tighter leading-tight text-[#31332c]">
                    Receive the quarterly Journal on <br /> botanical preservation.
                </h2>
                <form className="max-w-md mx-auto space-y-8">
                    <div className="border-b border-[#31332c]/20 py-2">
                        <input 
                            type="email" 
                            placeholder="YOUR@IDENTITY.COM" 
                            className="w-full bg-transparent border-none text-center font-label text-[0.7rem] tracking-[0.3em] uppercase focus:ring-0 placeholder:text-[#31332c]/20"
                        />
                    </div>
                    <button className="w-full py-5 bg-[#5f5e5e] text-[#faf7f6] font-label text-[0.65rem] uppercase tracking-[.25rem] hover:bg-[#31332c] transition-all">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
