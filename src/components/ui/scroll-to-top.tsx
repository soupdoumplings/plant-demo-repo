"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn(
      "fixed bottom-8 right-8 z-50 transition-all duration-500",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
    )}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-12 w-12 rounded-full shadow-2xl bg-surface border border-on-surface/10 hover:bg-primary hover:text-primary-foreground group"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </div>
  );
}
