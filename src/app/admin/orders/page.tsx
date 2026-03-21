"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingBag, Clock, CheckCircle, Truck } from "lucide-react";
import { cn } from "@/lib/utils/cn";

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
}

export default function AdminOrdersPage() {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING": return <Clock className="h-4 w-4 text-amber-500" />;
      case "SHIPPED": return <Truck className="h-4 w-4 text-blue-500" />;
      case "COMPLETED": return <CheckCircle className="h-4 w-4 text-emerald-500" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Loading global order history...</div>;
  }

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 border hover:bg-muted transition-colors"><ArrowLeft className="h-4 w-4" /></Link>
            <div>
              <h1 className="text-4xl font-serif">Order Management</h1>
              <p className="text-muted-foreground text-sm">Review and fulfill botanical curations.</p>
            </div>
          </div>
        </header>

        <Card className="rounded-none border-none shadow-none bg-card/50">
          <CardHeader className="border-b pb-4">
            <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
              <div className="col-span-2">Order ID</div>
              <div className="col-span-3">Customer</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">Link</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {orders.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground italic font-serif">
                No orders have been placed yet.
              </div>
            ) : (
              <div className="divide-y text-sm">
                {orders.map((order) => (
                  <div key={order.id} className="grid grid-cols-12 items-center p-4 hover:bg-surface transition-colors group">
                    <div className="col-span-2 font-mono text-[10px] text-muted-foreground">{order.id.slice(0, 8)}...</div>
                    <div className="col-span-3">
                      <div className="font-medium">{order.profiles?.full_name || "Guest"}</div>
                      <div className="text-[10px] text-muted-foreground lowercase">{order.profiles?.email}</div>
                    </div>
                    <div className="col-span-2 text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</div>
                    <div className="col-span-2 font-serif text-lg">${order.total_amount.toFixed(2)}</div>
                    <div className="col-span-2 flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <span className="text-[10px] uppercase tracking-widest font-medium">{order.status}</span>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Link href={`/admin/orders/${order.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      </Link>
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
