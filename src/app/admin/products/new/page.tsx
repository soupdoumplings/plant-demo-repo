"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Sparkles } from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
}

export default function NewProductPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    stock_quantity: "",
    category_id: "",
    image_url: "",
  });

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/categories");
      const data = await res.json();
      if (data.categories) setCategories(data.categories);
    }
    fetchCategories();
  }, []);

  const generateDescription = async () => {
    if (!formData.name) return alert("Please enter a plant name first.");
    setIsGenerating(true);
    try {
      const res = await fetch("/api/openai/description", {
        method: "POST",
        body: JSON.stringify({ name: formData.name }),
      });
      const data = await res.json();
      if (data.description) {
        setFormData({ ...formData, description: data.description });
      }
    } catch (error) {
      console.error("AI Generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock_quantity: parseInt(formData.stock_quantity),
        }),
      });
      if (res.ok) {
        router.push("/admin/products");
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create product");
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="container mx-auto max-w-4xl">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <Link href="/admin/products" className="p-2 border hover:bg-muted transition-colors"><ArrowLeft className="h-4 w-4" /></Link>
            <div>
              <h1 className="text-4xl font-serif">New Specimen</h1>
              <p className="text-muted-foreground text-sm">Add a new plant to the digital collection.</p>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card className="rounded-none border-none shadow-none bg-card/50 p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Plant Name</label>
                      <Input 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        placeholder="e.g. Monstera Deliciosa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">URL Slug</label>
                      <Input 
                        required 
                        value={formData.slug} 
                        onChange={(e) => setFormData({...formData, slug: e.target.value})} 
                        placeholder="monstera-deliciosa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Botanical Description</label>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm" 
                        onClick={generateDescription}
                        disabled={isGenerating}
                        className="text-[10px] gap-2 text-primary hover:text-primary hover:bg-primary/5 uppercase tracking-widest"
                      >
                        <Sparkles className="h-3 w-3" /> {isGenerating ? "Curating..." : "Generate with AI"}
                      </Button>
                    </div>
                    <textarea
                      required
                      className="w-full h-48 bg-background border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded-none italic font-serif"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Write a sophisticated description..."
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="rounded-none border-none shadow-none bg-card/50 p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Collection Category</label>
                  <select
                    required
                    className="w-full h-10 bg-background border px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                    value={formData.category_id}
                    onChange={(e) => setFormData({...formData, category_id: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Price ($)</label>
                    <Input 
                      required 
                      type="number" 
                      step="0.01" 
                      value={formData.price} 
                      onChange={(e) => setFormData({...formData, price: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Stock</label>
                    <Input 
                      required 
                      type="number" 
                      value={formData.stock_quantity} 
                      onChange={(e) => setFormData({...formData, stock_quantity: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Image URL</label>
                  <Input 
                    value={formData.image_url} 
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})} 
                    placeholder="https://..."
                  />
                </div>

                <Button type="submit" className="w-full h-12 gap-2" disabled={isSubmitting}>
                  <Save className="h-4 w-4" /> {isSubmitting ? "Saving..." : "Add to Collection"}
                </Button>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
