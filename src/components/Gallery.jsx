"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const images = [
    { src: '/wedding_hero_bg.png', title: 'The Royal Mandap', aspect: 'aspect-[4/3] md:col-span-2' },
    { src: '/groom.png', title: 'The Groom\'s Radiance', aspect: 'aspect-[3/4]' },
    { src: '/bride.png', title: 'The Bride\'s Elegance', aspect: 'aspect-[3/4]' },
    { src: '/wedding_gallery_mehndi.png', title: 'Sacred Henna Blessing', aspect: 'aspect-[1/1] md:col-span-2' },
    { src: '/wedding_gallery_palace.png', title: 'Rajwada Palace Glow', aspect: 'aspect-[3/4]' },
    { src: '/wedding_gallery_stage.png', title: 'The Royal Mandap Stage', aspect: 'aspect-[4/3] md:col-span-2' },
    { src: '/romantic_mandap_bg.png', title: 'Lanterns Over Mandap', aspect: 'aspect-[3/4]' },
    { src: '/wedding_hero_bg.png', title: 'Palace Hall Ceremony', aspect: 'aspect-[3/4]' },
    { src: '/romantic_mandap_bg.png', title: 'A Magical Union', aspect: 'aspect-[4/3]' },
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 px-4 w-full bg-luxury-cream dark:bg-luxury-charcoal transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Moments of Joy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">Photo Gallery</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* MOBILE GALLERY VIEW (Touch-swipeable horizontal scroll-snap list) */}
        <div className="block md:hidden w-full overflow-x-auto flex gap-4 pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[85%] snap-center shrink-0 glass-panel p-2.5 rounded-2xl border border-luxury-gold/25 shadow-lg relative aspect-[3/4] overflow-hidden"
              onClick={() => setActiveIdx(idx)}
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="font-serif text-xs tracking-wider text-white font-semibold">{img.title}</span>
                </div>
                {/* Maximize zoom button indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP GALLERY VIEW (Premium Masonry Grid Layout) */}
        <div className="hidden md:grid grid-cols-3 gap-6 w-full max-w-3xl">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`glass-panel p-2 rounded-2xl border border-luxury-gold/20 shadow-md overflow-hidden relative group cursor-pointer ${img.aspect}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Smooth hover overlays */}
                <div className="absolute inset-0 bg-luxury-maroon-darkest/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-sm tracking-[0.15em] text-luxury-gold font-bold uppercase mb-2">
                    {img.title}
                  </span>
                  <div className="w-8 h-[1px] bg-luxury-gold mb-3" />
                  <Maximize2 className="w-5 h-5 text-luxury-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HIGH FIDELITY LIGHTBOX PREVIEW OVERLAY MODAL */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActiveIdx(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors duration-300 z-[210] active:scale-95"
                onClick={() => setActiveIdx(null)}
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Arrow */}
              <button
                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors duration-300 z-[210] active:scale-95"
                onClick={handlePrev}
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Arrow */}
              <button
                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors duration-300 z-[210] active:scale-95"
                onClick={handleNext}
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Central Image Container */}
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center relative select-none"
                onClick={(e) => e.stopPropagation()} // stop close modal on image click
              >
                <img
                  src={images[activeIdx].src}
                  alt={images[activeIdx].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-luxury-gold/30 shadow-2xl"
                />
                
                {/* Title Indicator */}
                <div className="mt-4 text-center">
                  <h4 className="font-serif text-base font-bold tracking-wider text-luxury-gold">
                    {images[activeIdx].title}
                  </h4>
                  <span className="font-sans text-[10px] text-white/50 uppercase tracking-widest mt-1 block">
                    Photo {activeIdx + 1} of {images.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
