"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, Users, Settings, LayoutDashboard, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ADMIN_LINKS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "#", icon: Users },
  { name: "Settings", href: "#", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-72 border-r bg-card p-8 hidden lg:block sticky top-0 h-screen">
        <div className="mb-12 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif tracking-tighter">Verdant</Link>
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-primary border border-primary px-2 py-0.5">Admin</span>
        </div>
        
        <nav className="space-y-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">Management</div>
          <div className="space-y-1">
            {ADMIN_LINKS.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "w-full justify-start gap-4 h-12 rounded-none px-4 transition-all uppercase tracking-widest text-[10px] font-medium",
                    pathname === link.href ? "bg-primary/5 text-primary border-l-2 border-primary" : "text-muted-foreground hover:bg-surface"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-8 left-8 right-8">
            <Link href="/shop">
                <Button variant="outline" className="w-full gap-2 text-[10px] uppercase tracking-widest h-12 border-on-surface/10">
                    <ArrowLeft className="h-3 w-3" /> Exit Admin
                </Button>
            </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
