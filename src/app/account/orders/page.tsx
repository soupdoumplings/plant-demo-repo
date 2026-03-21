"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, ChevronRight, User, Package } from "lucide-react";
import Link from "next/link";

interface Order {
  id: string;
  created_at: string;
  total_amount: number;
  status: string;
  order_items: {
    quantity: number;
    products: {
      name: string;
    };
  }[];
}

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();
        if (data.orders) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error("Fetch orders error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Retracing your botanical history...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-5xl font-serif tracking-tight">Purchase History</h1>
          <p className="text-muted-foreground italic mt-2">Historical collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Menu Sidebar */}
          <aside className="md:col-span-1 space-y-4">
            <nav className="flex flex-col gap-2">
              <Link href="/account">
                <Button variant="ghost" className="w-full justify-start gap-4 h-12 text-muted-foreground hover:bg-surface rounded-none uppercase tracking-widest text-[10px] font-medium">
                  <User className="h-4 w-4" /> Profile Details
                </Button>
              </Link>
              <Button variant="ghost" className="justify-start gap-4 h-12 bg-primary/5 text-primary border-l-2 border-primary rounded-none uppercase tracking-widest text-[10px] font-medium">
                <ShoppingBag className="h-4 w-4" /> Order History
              </Button>
            </nav>
          </aside>

          {/* Orders List */}
          <section className="md:col-span-2 space-y-6">
            {orders.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-muted-foreground/20">
                <p className="italic text-muted-foreground mb-8">No previous curations found.</p>
                <Link href="/shop">
                  <Button size="lg" variant="outline">Explore Collection</Button>
                </Link>
              </div>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="rounded-none border-none shadow-none bg-card/50 p-8 hover:bg-card transition-colors group">
                  <Link href={`/account/orders/${order.id}`} className="block">
                    <div className="flex justify-between items-start mb-6">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Order Reference: {order.id.slice(0, 8)}...</span>
                        <div className="text-xl font-serif">{new Date(order.created_at).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-2" />
                    </div>
                    
                    <div className="flex gap-12 items-center mb-6">
                      <div className="flex items-center gap-2">
                        <Package className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground italic font-serif">
                          {order.order_items.length} {order.order_items.length === 1 ? "specimen" : "specimens"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="text-xs uppercase tracking-widest font-medium border-l border-primary/20 pl-4">{order.status}</span>
                      </div>
                    </div>

                    <div className="text-right border-t pt-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">Total Value</span>
                      <span className="text-xl font-serif">${order.total_amount.toFixed(2)}</span>
                    </div>
                  </Link>
                </Card>
              ))
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
