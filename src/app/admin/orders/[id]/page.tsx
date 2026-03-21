"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Package, User, MapPin, Calendar, Clock } from "lucide-react";

interface OrderItem {
  id: string;
  quantity: number;
  unit_price: number;
  products: {
    name: string;
  };
}

interface Order {
  id: string;
  created_at: string;
  total_amount: number;
  status: string;
  delivery_address: string;
  profiles: {
    full_name: string;
    email: string;
  };
  order_items: OrderItem[];
}

export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();
        const foundOrder = data.orders?.find((o: any) => o.id === params.id);
        if (foundOrder) {
          setOrder(foundOrder);
          setStatus(foundOrder.status);
        }
      } catch (error) {
        console.error("Fetch order error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrder();
  }, [params.id]);

  const updateStatus = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/orders", {
        method: "PATCH",
        body: JSON.stringify({ id: params.id, status }),
      });
      if (response.ok) {
        alert("Order status updated specimen.");
      } else {
        alert("Failed to update status.");
      }
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Reviewing order details...</div>;
  if (!order) return <div className="min-h-screen flex items-center justify-center">Order not found.</div>;

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="container mx-auto max-w-5xl">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link href="/admin/orders" className="p-2 border hover:bg-muted transition-colors"><ArrowLeft className="h-4 w-4" /></Link>
            <div>
              <h1 className="text-4xl font-serif tracking-tight">Order Details</h1>
              <p className="text-muted-foreground text-[10px] uppercase tracking-widest">Reference: {order.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              className="h-10 bg-background border px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded-none uppercase tracking-widest font-medium"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="PENDING">PENDING</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
            <Button onClick={updateStatus} disabled={isSubmitting} className="gap-2">
              <Save className="h-4 w-4" /> {isSubmitting ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-none border-none shadow-none bg-card/50 p-8">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b">
                <Package className="h-5 w-5 text-primary" />
                <h2 className="text-xs uppercase tracking-[0.3em] font-medium">Order Items</h2>
              </div>
              <div className="space-y-6">
                {order.order_items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                      <span className="font-serif text-lg">{item.products.name}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Quantity: {item.quantity}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">${(item.unit_price * item.quantity).toFixed(2)}</span>
                      <div className="text-[10px] text-muted-foreground">${item.unit_price.toFixed(2)} per unit</div>
                    </div>
                  </div>
                ))}
                <div className="pt-8 border-t flex justify-between items-end">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Total Curation Value</span>
                  <span className="text-3xl font-serif">${order.total_amount.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="rounded-none border-none shadow-none bg-card/50 p-8 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">Customer</span>
                </div>
                <div className="font-serif text-xl">{order.profiles?.full_name || "Guest"}</div>
                <div className="text-sm text-muted-foreground">{order.profiles?.email}</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">Date Placed</span>
                </div>
                <div className="text-sm">{new Date(order.created_at).toLocaleString()}</div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">Shipping Address</span>
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  {order.delivery_address}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">Current Status</span>
                </div>
                <span className="inline-block border px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-primary border-primary bg-primary/5">
                  {order.status}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
