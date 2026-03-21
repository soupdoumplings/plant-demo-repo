"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, ShieldCheck, ShoppingBag, LogOut } from "lucide-react";
import Link from "next/link";

interface Profile {
  full_name: string;
  email: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch("/api/auth/me");
        const data = await response.json();
        if (data.profile) {
          setProfile(data.profile);
        }
      } catch (error) {
        console.error("Fetch profile error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center italic text-muted-foreground animate-pulse font-serif">Verifying identity...</div>;
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-serif">Unable to locate your digital journal.</h1>
        <Link href="/login"><Button variant="outline">Sign In</Button></Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-5xl font-serif tracking-tight">Your Botanical Journal</h1>
            <p className="text-muted-foreground italic mt-2">Personal curator since 2026</p>
          </div>
          <Button variant="ghost" className="gap-2 text-destructive hover:bg-destructive/10 uppercase tracking-widest text-[10px]">
            <LogOut className="h-3 w-3" /> Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Menu Sidebar Placeholder */}
          <aside className="md:col-span-1 space-y-4">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start gap-4 h-12 bg-primary/5 text-primary border-l-2 border-primary rounded-none uppercase tracking-widest text-[10px] font-medium">
                <User className="h-4 w-4" /> Profile Details
              </Button>
              <Link href="/account/orders">
                <Button variant="ghost" className="w-full justify-start gap-4 h-12 text-muted-foreground hover:bg-surface rounded-none uppercase tracking-widest text-[10px] font-medium">
                  <ShoppingBag className="h-4 w-4" /> Order History
                </Button>
              </Link>
            </nav>
          </aside>

          {/* Profile Form */}
          <section className="md:col-span-2">
            <Card className="rounded-none border-none shadow-none bg-card/50 p-8">
              <CardHeader className="p-0 mb-8 border-b pb-4">
                <CardTitle className="text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                        <User className="h-3 w-3" /> Full Name
                    </div>
                    <div className="text-xl font-serif border-b pb-2">{profile.full_name}</div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                        <Mail className="h-3 w-3" /> Email Address
                    </div>
                    <div className="text-xl font-serif border-b pb-2">{profile.email}</div>
                </div>

                <div className="pt-8">
                    <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] font-bold text-forest-green mb-4">
                        <ShieldCheck className="h-3 w-3" /> Verified Member
                    </div>
                    <Button variant="outline" className="w-full h-12 text-[10px] uppercase tracking-widest">Update Information</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
