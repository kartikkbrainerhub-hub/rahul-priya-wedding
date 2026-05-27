"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set wedding date to Dec 18, 2026 (auspicious Indian wedding date!)
    const weddingDate = new Date('2026-12-18T10:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(59, 2, 10, 0.4), rgba(59, 2, 10, 0.9)), url("/wedding_hero_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative Golden Borders */}
      <div className="absolute inset-4 border border-luxury-gold/25 rounded-md pointer-events-none z-10" />
      <div className="absolute inset-6 border border-luxury-gold/10 rounded-md pointer-events-none z-10" />

      {/* Floating Monogram Crest */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="w-20 h-20 rounded-full border-2 border-luxury-gold/50 flex items-center justify-center mb-6 z-10 bg-luxury-maroon-deep/30 backdrop-blur-sm relative"
      >
        {/* Crest Ring */}
        <div className="absolute inset-1 rounded-full border border-luxury-gold/20 animate-spin-slow" />
        <span className="font-serif text-3xl font-bold text-luxury-gold tracking-widest">RP</span>
      </motion.div>

      {/* Hero Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl z-10 flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="font-serif text-sm tracking-[0.25em] text-luxury-gold-light uppercase font-medium mb-3"
        >
          Together With Their Families
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-7xl font-bold tracking-wide text-gold-luxury mb-4 drop-shadow-md py-2"
        >
          Rahul <span className="text-luxury-maroon-light block sm:inline py-1">❤️</span> Priya
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-serif text-xs sm:text-sm tracking-[0.2em] text-luxury-cream-light/80 uppercase max-w-md leading-relaxed mb-10"
        >
          Invite You To Celebrate Their Wedding
        </motion.p>

        {/* Countdown Timer Display */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg w-full mb-12"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-luxury-maroon-deep/45 backdrop-blur-md border border-luxury-gold/25 rounded-lg py-2.5 px-2 flex flex-col items-center justify-center transition-all hover:border-luxury-gold/50 shadow-lg shadow-black/20"
            >
              <span className="font-serif text-2xl sm:text-4xl font-semibold text-luxury-gold tracking-tight w-12 sm:w-16">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs font-sans text-luxury-cream-light/60 tracking-widest uppercase mt-0.5">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Auspicious Date Display */}
        <motion.div
          variants={itemVariants}
          className="border-y border-luxury-gold/20 py-3 px-6 mb-12"
        >
          <span className="font-serif text-base sm:text-lg tracking-[0.15em] text-luxury-gold">
            DECEMBER 18, 2026 • UDAIPUR, RAJASTHAN
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 z-10"
      >
        <span className="text-[10px] font-serif tracking-[0.25em] text-luxury-gold/60 uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-luxury-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
