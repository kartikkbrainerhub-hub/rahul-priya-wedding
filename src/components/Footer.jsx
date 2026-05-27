"use client";

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 w-full bg-luxury-cream dark:bg-luxury-charcoal-dark border-t border-luxury-gold/15 text-center transition-colors duration-500 pb-28 md:pb-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Monogram crest */}
        <span className="font-serif text-2xl font-bold text-luxury-gold tracking-[0.2em] mb-4">
          RAHUL <span className="text-luxury-maroon font-serif">❤️</span> PRIYA
        </span>
        
        <p className="font-sans text-xs text-luxury-maroon/60 dark:text-luxury-cream-light/45 tracking-widest uppercase mb-8">
          December 18, 2026 • Udaipur, Rajasthan
        </p>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md border-t border-luxury-gold/10 pt-8 mb-8 text-xs font-sans text-luxury-maroon/70 dark:text-luxury-cream-light/60">
          <div>
            <strong className="block text-luxury-gold font-serif text-[10px] tracking-wider uppercase mb-1">Groom's Side Coordinator</strong>
            <p>Mr. Amit Sharma</p>
            <a href="tel:+919999999998" className="hover:text-luxury-gold transition-colors">+91 99999 99998</a>
          </div>
          <div>
            <strong className="block text-luxury-gold font-serif text-[10px] tracking-wider uppercase mb-1">Bride's Side Coordinator</strong>
            <p>Mr. Snehal Malhotra</p>
            <a href="tel:+919999999999" className="hover:text-luxury-gold transition-colors">+91 99999 99999</a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 justify-center text-[10px] font-sans text-luxury-maroon/40 dark:text-luxury-cream-light/30 tracking-widest uppercase">
          <span>Created with</span>
          <Heart className="w-3 h-3 text-luxury-gold fill-current" />
          <span>For Rahul & Priya</span>
        </div>

      </div>
    </footer>
  );
}
