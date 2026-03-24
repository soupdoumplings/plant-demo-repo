"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useDebounce } from "@/lib/hooks/useDebounce"; // Need to create this

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image_url: string;
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function performSearch() {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(`/api/products/search?q=${encodeURIComponent(debouncedQuery)}`);
        const data = await response.json();
        if (data.products) {
          setResults(data.products);
        }
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    performSearch();
  }, [debouncedQuery]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "text-primary bg-primary/5" : ""}
      >
        <SearchIcon className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-96 bg-card border shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
          <div className="p-4 border-b flex items-center gap-2">
            <Input
              autoFocus
              placeholder="Search our botanical collection..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus-visible:ring-0 text-sm h-12 italic font-serif"
            />
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" /> : (
                query && <X className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => setQuery("")} />
            )}
          </div>

          <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
            {results.length > 0 ? (
              <div className="p-2 space-y-1">
                {results.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/products/${product.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-3 hover:bg-surface transition-colors group"
                  >
                    <div className="relative h-16 w-12 bg-surface-variant flex-shrink-0">
                      {product.image_url && <Image src={product.image_url} alt={product.name} fill className="object-cover" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-serif group-hover:text-primary transition-colors">{product.name}</span>
                      <span className="text-xs text-muted-foreground">${product.price.toFixed(2)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query && !isLoading ? (
              <div className="p-12 text-center text-xs uppercase tracking-widest text-muted-foreground italic">
                No matching specimens found.
              </div>
            ) : !query && (
                <div className="p-8 text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">Popular Searches</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['Monstera', 'Pet-Friendly', 'Rare'].map(term => (
                            <Button key={term} variant="outline" size="sm" onClick={() => setQuery(term)} className="h-8 text-[8px] uppercase tracking-widest px-4">{term}</Button>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
