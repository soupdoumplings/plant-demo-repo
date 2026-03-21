"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { CategoriesBar } from "@/components/sections/CategoriesBar";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight text-center">Botanical Collection</h1>
          <p className="text-center text-muted-foreground italic max-w-2xl mx-auto">Explore our full registry of elevated flora, curated for the modern home.</p>
        </div>
        <CategoriesBar 
          activeCategory={activeCategory} 
          onCategoryChange={(slug) => setActiveCategory(slug)} 
        />
        <ProductsGrid 
          title={activeCategory === "all" ? "All Specifications" : `${activeCategory} Specimen`} 
          limit={50}
          categorySlug={activeCategory}
        />
      </main>
      <Footer />
    </div>
  );
}
