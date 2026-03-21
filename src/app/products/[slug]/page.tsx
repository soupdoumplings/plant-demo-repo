"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Heart, Share2, Sun, Droplets, Wind } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url: string;
  stock_quantity: number;
  categories?: { name: string };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products?slug=${params.slug}`);
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        }
      } catch {
        console.error("Fetch product error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">
        Discovering botanical details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-serif">Specimen not found.</h1>
        <Link href="/shop">
          <Button variant="outline">Return to Collection</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery Placeholder */}
          <div className="relative aspect-[4/5] bg-surface-variant overflow-hidden">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center italic text-muted-foreground/20">
                [ High-Resolution Botanical Photography ]
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              {product.categories?.name || "Premium specimen"}
            </span>
            <h1 className="text-5xl font-serif mb-6 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl text-on-surface mb-8 font-sans">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="prose prose-sm prose-stone border-t pt-8 mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground italic font-serif">
                {product.description || "Botanical description awaiting curator notes."}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 h-16 gap-3 text-lg">
                  <ShoppingCart className="h-5 w-5" /> Add to Collection
                </Button>
                <Button size="lg" variant="outline" className="h-16 w-16 p-0 border-on-surface/10">
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground text-center">
                {product.stock_quantity > 0 ? `Limited Stock: ${product.stock_quantity} remaining` : "Currently out of collection"}
              </p>
            </div>

            {/* Botanical Care Section */}
            <div className="mt-16 pt-12 border-t">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-10">Botanical Care Manual</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Sun className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Luminous Exposure</span>
                  </div>
                  <p className="text-sm italic font-serif leading-relaxed">Filtered, indirect sunlight. Avoid midday intensity to protect delicate foliage.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Droplets className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Hydration Schedule</span>
                  </div>
                  <p className="text-sm italic font-serif leading-relaxed">Moderate watering. Allow the top soil to dry gracefully between sessions.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Wind className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Atmospheric State</span>
                  </div>
                  <p className="text-sm italic font-serif leading-relaxed">High humidity. Frequent misting mimics their native tropical surroundings.</p>
                </div>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground border-t pt-8">
                  <div className="flex items-center gap-2">
                      <span className="font-bold">Difficulty:</span>
                      <span className="font-medium text-on-surface">Intermediate Curator</span>
                  </div>
                  <div className="flex items-center gap-2">
                       <span className="font-bold">Shipping:</span>
                       <span className="font-medium text-on-surface">Climate-Controlled Logistics</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
