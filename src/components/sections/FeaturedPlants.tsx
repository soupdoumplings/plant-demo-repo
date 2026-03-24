"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  categories?: { name: string };
}

export function FeaturedPlants() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const response = await fetch("/api/products?limit=3");
        const data = await response.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Fetch featured error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  if (isLoading) return null;

  return (
    <section className="py-24 bg-surface-variant/20 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Curator's Choice</span>
            <h2 className="text-4xl font-serif tracking-tight leading-tight">Featured <br /> Specimens</h2>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              Rare botanical finds selected by our experts for their exceptional beauty and architectural form.
            </p>
            <Button variant="outline" className="text-[10px] uppercase tracking-widest px-8">The Collection</Button>
          </div>
          
          <div className="lg:col-span-3">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
