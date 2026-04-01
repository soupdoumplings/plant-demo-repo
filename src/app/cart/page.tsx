"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

interface CartItem {
  product_id: string;
  quantity: number;
  products: {
    id: string;
    name: string;
    price: number;
    image_url: string;
    slug: string;
  };
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch("/api/cart");
        if (response.status === 401) {
            setIsUnauthorized(true);
            return;
        }
        const data = await response.json();
        if (data.cartItems) {
          setCartItems(data.cartItems);
        }
      } catch (error) {
        console.error("Fetch cart error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCart();
  }, []);

  const removeItem = async (productId: string) => {
    try {
      const response = await fetch(`/api/cart?productId=${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setCartItems(cartItems.filter((item) => item.product_id !== productId));
      }
    } catch (error) {
      console.error("Remove item error:", error);
    }
  };

  const updateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId, quantity: newQuantity }),
      });
      if (response.ok) {
        setCartItems(
          cartItems.map((item) =>
            item.product_id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Update quantity error:", error);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.products.price * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">
        Reviewing your botanical selection...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-6xl">
        <h1 className="text-5xl font-serif mb-16 tracking-tight">Your Selection</h1>

        {isUnauthorized ? (
          <div className="text-center py-32 border border-[#31332c]/5 bg-[#f5f4ed]">
            <h2 className="text-3xl font-serif mb-6 italic">Specimen Selection Locked</h2>
            <p className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-muted-foreground mb-12 max-w-sm mx-auto">Please authenticate your digital portfolio to manage your botanical selections.</p>
            <Link href="/login">
              <Button size="lg" className="bg-[#5f5e5e] text-[#faf7f6] px-12 h-14 rounded-none hover:bg-[#31332c] transition-all uppercase tracking-widest text-[10px]">Enter Portfolio</Button>
            </Link>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-muted-foreground/20">
            <ShoppingBag className="h-12 w-12 mx-auto mb-6 text-muted-foreground/10" />
            <p className="italic text-muted-foreground mb-8">Your cart is currently empty.</p>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="text-[10px] uppercase tracking-widest px-8">Explore Collection</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-10">
              {cartItems.map((item) => (
                <div key={item.product_id} className="group relative flex gap-8 pb-10 border-b border-on-surface/5 flex-col sm:flex-row">
                  <div className="relative h-48 w-36 bg-surface-variant flex-shrink-0">
                    {item.products.image_url && (
                      <Image
                        src={item.products.image_url}
                        alt={item.products.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-serif">{item.products.name}</h3>
                        <p className="text-xl font-serif">${(item.products.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <Link href={`/products/${item.products.slug}`} className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                        View Cultivation Details
                      </Link>
                    </div>
                    
                    <div className="flex justify-between items-end mt-8">
                      <div className="flex items-center border h-10 px-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-10 text-center text-xs font-medium">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeItem(item.product_id)} className="text-destructive hover:text-destructive hover:bg-destructive/5 rounded-none uppercase tracking-widest text-[9px] gap-2 h-10">
                        <Trash2 className="h-3 w-3" /> Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-surface-variant/30 border-none p-8 sticky top-32">
                <h2 className="text-xs uppercase tracking-[0.3em] font-medium mb-8 pb-4 border-b">Order Summary</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="italic">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg font-serif pt-4 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full h-14 text-md gap-3">
                    Proceed to Checkout <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
