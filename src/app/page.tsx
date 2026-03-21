"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { FeaturedPlants } from "@/components/sections/FeaturedPlants";
import { CategoriesBar } from "@/components/sections/CategoriesBar";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedPlants />
        <CategoriesBar 
          activeCategory={activeCategory} 
          onCategoryChange={(slug) => setActiveCategory(slug)} 
        />
        <ProductsGrid 
          title={activeCategory === "all" ? "Curated Selection" : `${activeCategory} Collection`} 
          limit={activeCategory === "all" ? 8 : 20}
          categorySlug={activeCategory}
        />
      </main>
      <Footer />
    </div>
  );
}
