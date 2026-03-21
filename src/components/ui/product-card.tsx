import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string;
    categories?: { name: string };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group border-none bg-transparent overflow-hidden">
      <div className="relative aspect-[3/4] mb-4 bg-surface-variant overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center italic text-muted-foreground/20">
            [ Botanical Imagery ]
          </div>
        )}
        
        {/* Hover Actions */}
        <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button className="flex-1 gap-2 bg-on-surface text-surface hover:bg-on-surface/90">
            <ShoppingCart className="h-4 w-4" /> Add
          </Button>
          <Link href={`/products/${product.slug}`} className="flex-1">
            <Button variant="outline" className="w-full gap-2 border-on-surface/20 bg-surface/80 backdrop-blur-md">
              <Eye className="h-4 w-4" /> Details
            </Button>
          </Link>
        </div>
      </div>
      
      <CardContent className="p-0">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
            {product.categories?.name || "Premium Flora"}
          </span>
          <h3 className="text-lg font-serif tracking-tight group-hover:underline transition-all">
            {product.name}
          </h3>
          <p className="text-sm font-sans text-muted-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
