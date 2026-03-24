"use client";

import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  categories?: { name: string };
}

export function ProductsGrid({ 
  title = "Our Collection", 
  limit = 4, 
  categorySlug = "all" 
}: { 
  title?: string;
  limit?: number;
  categorySlug?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        let url = `/api/products?`;
        if (limit) url += `limit=${limit}&`;
        if (categorySlug && categorySlug !== "all") url += `category=${categorySlug}`;
        
        const response = await fetch(url);
        const data = await response.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch {
        console.error("Fetch featured error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [limit, categorySlug]);

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <header className="mb-16">
           <h2 className="text-4xl font-serif tracking-tight">{title}</h2>
           <div className="h-1 w-12 bg-primary mt-4" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {isLoading ? (
            Array.from({ length: limit }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/5] w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 italic text-muted-foreground border border-dashed border-muted-foreground/20">
              Our latest collection will be arriving soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
