"use client";

import { useState, useEffect } from 'react';
import { Home, Heart, Calendar, MapPin, Mail, Image } from 'lucide-react';

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'story', label: 'Story', icon: Heart },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'rsvp', label: 'RSVP', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[90] w-[92%] max-w-md glass-panel rounded-full py-2 px-3 flex justify-around items-center border border-luxury-gold/30 shadow-lg shadow-black/15 md:bottom-6">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="flex flex-col items-center justify-center relative py-1 px-3 rounded-full transition-all duration-300 group"
          >
            {/* Background highlight indicator */}
            {isActive && (
              <span className="absolute inset-0 bg-luxury-gold/15 rounded-full scale-105 transition-transform duration-300" />
            )}

            <Icon
              className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                isActive ? 'text-luxury-gold' : 'text-luxury-maroon/60 dark:text-luxury-cream/60'
              }`}
            />
            <span
              className={`text-[9px] font-sans font-medium tracking-wider uppercase mt-0.5 transition-colors duration-300 ${
                isActive ? 'text-luxury-gold font-semibold' : 'text-luxury-maroon/50 dark:text-luxury-cream/40'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
