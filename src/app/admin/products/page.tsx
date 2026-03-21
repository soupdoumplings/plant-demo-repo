"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2, ArrowLeft, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  stock_quantity: number;
  categories?: { name: string };
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products?limit=100");
        const data = await response.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Fetch products error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const deleteProduct = async (slug: string) => {
    if (!confirm("Are you sure you want to remove this specimen from the collection?")) return;
    try {
      const response = await fetch(`/api/products/${slug}`, { method: "DELETE" });
      if (response.ok) {
        setProducts(products.filter((p) => p.slug !== slug));
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Loading collection inventory...</div>;
  }

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 border hover:bg-muted transition-colors"><ArrowLeft className="h-4 w-4" /></Link>
            <div>
              <h1 className="text-4xl font-serif">Product Management</h1>
              <p className="text-muted-foreground text-sm">Manage your botanical inventory.</p>
            </div>
          </div>
          <Link href="/admin/products/new">
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" /> Add Specimen
            </Button>
          </Link>
        </header>

        <Card className="rounded-none border-none shadow-none bg-card/50">
          <CardHeader className="border-b pb-4">
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
              <div className="col-span-1">Icon</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-1">Stock</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {products.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground italic font-serif">
                No products found in the collection.
              </div>
            ) : (
              <div className="divide-y">
                {products.map((product) => (
                  <div key={product.id} className="grid grid-cols-12 items-center p-4 hover:bg-surface transition-colors group">
                    <div className="col-span-1 text-muted-foreground/30"><Package className="h-5 w-5" /></div>
                    <div className="col-span-4 font-serif text-lg">{product.name}</div>
                    <div className="col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{product.categories?.name || "Uncategorized"}</div>
                    <div className="col-span-2 font-medium">${product.price.toFixed(2)}</div>
                    <div className="col-span-1 text-sm">{product.stock_quantity}</div>
                    <div className="col-span-2 flex justify-end gap-2">
                      <Link href={`/admin/products/edit/${product.slug}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => deleteProduct(product.slug)} className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
