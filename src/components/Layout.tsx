import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

// Helper to scroll to top on route change
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading fallback for lazy-loaded components
export const LoadingFallback = () => (
  <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
    <div className="flex flex-col items-center gap-6">
      <div className="w-12 h-12 border-4 border-[var(--accent-olive)] border-t-transparent rounded-full animate-spin" />
      <p className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px]">
        Loading...
      </p>
    </div>
  </div>
);
