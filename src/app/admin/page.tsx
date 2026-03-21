"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Package, ShoppingCart, Users, Settings, DollarSign } from "lucide-react";

interface AdminStat {
  title: string;
  value: string | number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStat[]>([]);
  const [lowStock, setLowStock] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/admin/stats");
        const data = await response.json();
        if (data.stats) {
          setStats(data.stats);
        }
        if (data.low_stock_products) {
          setLowStock(data.low_stock_products);
        }
      } catch (error) {
        console.error("Fetch stats error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  const icons = [Package, ShoppingCart, DollarSign, Users];

  return (
    <main className="p-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-serif">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your plant store.</p>
        </div>
        <Link href="/admin/products/new">
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" /> Add Product
          </Button>
        </Link>
      </header>

        {/* Inventory Alerts */}
        {lowStock.length > 0 && (
          <Card className="mb-12 border-destructive/20 bg-destructive/5 rounded-none">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
               <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
               <CardTitle className="text-[10px] uppercase tracking-[0.3em] text-destructive">Inventory Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lowStock.map((product) => (
                  <div key={product.id} className="flex justify-between items-center p-3 border border-destructive/10 bg-background text-sm">
                    <span className="font-serif">{product.name}</span>
                    <span className="text-xs font-bold text-destructive">{product.stock_quantity} left</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {isLoading ? (
             <div className="col-span-full h-24 flex items-center justify-center italic text-muted-foreground animate-pulse">Calculating botanical growth metrics...</div>
          ) : (
            stats.map((stat, i) => {
              const Icon = icons[i] || Package;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-3 w-3 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-serif">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Recent Activity Mockup */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">You have some orders pending fulfillment.</p>
          </CardContent>
        </Card>
      </main>
    );
  }
