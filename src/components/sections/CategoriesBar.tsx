"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

interface Category {
  id: string;
  name: string;
  slug: string;
}

export function CategoriesBar({ activeCategory, onCategoryChange }: { 
  activeCategory?: string; 
  onCategoryChange?: (slug: string) => void 
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        if (data.categories) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Fetch categories error:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="w-full border-b bg-surface sticky top-[80px] z-40">
      <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex h-14 items-center gap-8 whitespace-nowrap">
          <button
            onClick={() => onCategoryChange?.("all")}
            className={cn(
              "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary",
              activeCategory === "all" || !activeCategory ? "text-primary border-b border-primary pb-1" : "text-muted-foreground"
            )}
          >
            All Collections
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange?.(category.slug)}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary",
                activeCategory === category.slug ? "text-primary border-b border-primary pb-1" : "text-muted-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
