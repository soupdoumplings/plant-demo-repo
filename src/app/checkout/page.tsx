"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CartItem {
  product_id: string;
  quantity: number;
  products: {
    name: string;
    price: number;
  };
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await fetch("/api/cart");
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

  const total = cartItems.reduce(
    (acc, item) => acc + item.products.price * item.quantity,
    0
  );

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/orders/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delivery_address: address }),
      });
      const data = await response.json();
      if (response.ok) {
        // Send email notification
        try {
          await fetch("/api/notify", {
            method: "POST",
            body: JSON.stringify({
              to: data.userEmail || "curator@petalsandpots.com", // Fallback if user email not returned
              subject: "A New Specimen Awaits | Petals & Pots Order Confirmation",
              html: `
                <div style="font-family: 'Playfair Display', serif; color: #1c1c1c; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f0f0f0;">
                  <h1 style="font-size: 32px; font-weight: normal; margin-bottom: 24px;">Order Confirmed</h1>
                  <p style="font-style: italic; color: #666; margin-bottom: 40px;">Your botanical selection has been registered in our conservatory.</p>
                  <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 2px; color: #999; margin-bottom: 8px;">Order Reference</p>
                  <p style="font-weight: bold; margin-bottom: 40px;">#${data.orderId}</p>
                  <div style="border-top: 1px solid #f0f0f0; padding-top: 24px;">
                    <p style="font-size: 12px; color: #666;">We are currently preparing your collection for climate-controlled transport. You will receive a notification once the dispatch is underway.</p>
                  </div>
                  <p style="margin-top: 60px; font-size: 10px; color: #ccc; text-transform: uppercase; letter-spacing: 3px;">Petals & Pots | Digitally Curated</p>
                </div>
              `
            })
          });
        } catch (emailError) {
          console.error("Email notification error:", emailError);
        }

        router.push(`/checkout/success?orderId=${data.orderId}`);
      } else {
        alert(data.error || "Checkout failed");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Preparing checkout...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-serif">Your cart is empty.</h1>
        <Link href="/shop"><Button variant="outline">Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
            <Link href="/cart" className="p-2 border hover:bg-muted transition-colors"><ArrowLeft className="h-4 w-4" /></Link>
            <h1 className="text-5xl font-serif tracking-tight">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <section>
            <h2 className="text-sm uppercase tracking-[0.3em] font-medium mb-8 pb-4 border-b">Shipping Details</h2>
            <form onSubmit={handleCheckout} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Delivery Address</label>
                <textarea
                  required
                  className="w-full h-32 bg-background border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                  placeholder="Street, City, State, ZIP..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              
              <div className="p-6 bg-surface-variant/30 italic text-muted-foreground text-sm border-l-2 border-primary">
                Note: Orders are typically curated and shipped within 2-3 business days in climate-controlled packaging.
              </div>

              <Button type="submit" size="lg" className="w-full h-16 text-lg gap-3" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Complete Order"} <CheckCircle2 className="h-5 w-5" />
              </Button>
            </form>
          </section>

          {/* Order Summary Summary */}
          <aside>
            <Card className="bg-card/50 border-none rounded-none p-8 lg:sticky lg:top-32">
              <h2 className="text-xs uppercase tracking-[0.3em] font-medium mb-8 pb-4 border-b">Your Order</h2>
              <ul className="space-y-6 mb-8 max-h-[300px] overflow-y-auto no-scrollbar pr-2">
                {cartItems.map((item) => (
                  <li key={item.product_id} className="flex justify-between items-center text-sm">
                    <div className="flex flex-col">
                        <span className="font-serif">{item.products.name}</span>
                        <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-medium">${(item.products.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4 pt-8 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest text-[10px]">Shipping</span>
                  <span className="uppercase text-[10px] tracking-widest text-primary font-medium">Complementary</span>
                </div>
                <div className="flex justify-between text-2xl font-serif pt-6 border-t mt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
