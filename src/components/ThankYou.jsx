"use client";

import { motion } from 'framer-motion';

export default function ThankYou() {
  // Generate coordinates for 8 floating sky lanterns
  const lanterns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 85 + 5}%`,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 12,
    scale: Math.random() * 0.5 + 0.5,
  }));

  return (
    <section
      className="relative w-full h-[85vh] min-h-[500px] flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{
        backgroundImage: 'linear-gradient(to top, rgba(28, 25, 23, 0.95), rgba(28, 25, 23, 0.4)), url("/romantic_mandap_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Visual top transition gradient */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-luxury-cream dark:from-luxury-charcoal to-transparent pointer-events-none transition-colors duration-500" />

      {/* Floating Sky Lanterns Overlay */}
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          initial={{ y: "105vh", x: 0, opacity: 0 }}
          animate={{
            y: "-10vh",
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: l.left,
            scale: l.scale,
          }}
          className="absolute z-10 pointer-events-none flex flex-col items-center"
        >
          {/* Glowing lantern graphic shape */}
          <div className="w-6 h-8 bg-gradient-to-t from-orange-600 via-amber-400 to-luxury-gold-light rounded-t-lg rounded-b-md shadow-[0_0_12px_rgba(251,191,36,0.8)] opacity-95 relative">
            {/* Tiny inner glow flame */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-white rounded-full animate-ping" />
          </div>
        </motion.div>
      ))}

      {/* Royal Crest Crest Ring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-16 h-16 rounded-full border border-luxury-gold/30 flex items-center justify-center mb-6 z-10 bg-luxury-charcoal/40 backdrop-blur-sm"
      >
        <span className="font-serif text-xl font-semibold text-luxury-gold tracking-widest">R❤️P</span>
      </motion.div>

      {/* Cinematic Thanks message */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl z-10 flex flex-col items-center"
      >
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-gold-luxury mb-4 drop-shadow">
          Thank You
        </h2>
        <div className="w-12 h-[1px] bg-luxury-gold/50 mb-6" />
        <p className="font-serif text-sm sm:text-base tracking-[0.2em] text-luxury-cream-light/80 uppercase max-w-sm leading-relaxed px-4">
          For Being Part Of Our Special Day
        </p>
      </motion.div>
    </section>
  );
}
