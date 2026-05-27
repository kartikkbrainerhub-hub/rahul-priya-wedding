"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // default to romantic dark mode for premium cinematic feel

  useEffect(() => {
    // Check local storage or default
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="fixed top-5 left-5 z-[100]">
      <button
        onClick={toggleTheme}
        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 shadow-lg ${
          isDark
            ? 'bg-luxury-cream border-luxury-gold text-luxury-gold hover:border-luxury-gold/50 shadow-black/10'
            : 'bg-luxury-maroon border-luxury-maroon/20 text-luxury-gold shadow-luxury-gold/20'
        }`}
        aria-label="Toggle Romantic Theme Mode"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-luxury-gold" />
        ) : (
          <Moon className="w-5 h-5 text-luxury-cream-light" />
        )}
      </button>
    </div>
  );
}
