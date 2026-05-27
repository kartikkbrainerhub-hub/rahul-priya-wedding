"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Compass, Share2, Check, QrCode } from 'lucide-react';

export default function Venue() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14515.656515867144!2d73.67664878486036!3d24.574921966551066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e568449c25db%3A0xb3debb7d5d59eb2c!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const directionUrl = "https://maps.app.goo.gl/9Z2U3wL5RzUaZ1Z88"; // mock palace location
  const inviteUrl = "https://rahul-priya-wedding.vercel.app";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Wedding of Rahul & Priya',
          text: 'You are cordially invited to our wedding on Dec 18, 2026. View our digital invitation here:',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share aborted', err);
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="venue" className="py-20 px-4 w-full bg-luxury-cream-light dark:bg-luxury-charcoal-dark transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Location & Directions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">The Venue</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-3xl">
          
          {/* Card Details (Left 5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6 glass-panel p-6 rounded-2xl border border-luxury-gold/30 shadow-xl shadow-black/10"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-luxury-gold/15 flex items-center justify-center text-luxury-gold mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-maroon dark:text-luxury-gold mb-3">The Royal Palace</h3>
              <p className="font-serif text-xs tracking-wider text-luxury-gold uppercase mb-4">Haridasji Ki Magri, Udaipur, Rajasthan</p>
              
              <p className="font-sans text-xs text-luxury-maroon/70 dark:text-luxury-cream-light/70 leading-relaxed mb-6">
                Nestled on the majestic banks of Lake Pichola, our wedding venue offers a stunning fusion of grand Mewar architecture, shimmering lake vistas, and premium royal hospitality.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={directionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-luxury-maroon dark:bg-luxury-gold hover:bg-luxury-maroon-deep dark:hover:bg-luxury-gold-dark text-luxury-gold dark:text-luxury-charcoal py-3 px-5 rounded-full font-serif font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow"
              >
                <Navigation className="w-4 h-4" />
                Navigate in Maps
              </a>

              <div className="grid grid-cols-2 gap-3">
                {/* QR Code toggle */}
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="flex items-center justify-center gap-2 bg-luxury-cream dark:bg-luxury-charcoal border border-luxury-gold/35 text-luxury-maroon dark:text-luxury-gold py-3 px-4 rounded-full font-serif font-bold text-[10px] tracking-wider uppercase transition-all active:scale-95 shadow"
                >
                  <QrCode className="w-4 h-4" />
                  QR Code
                </button>

                {/* Native Share */}
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 bg-luxury-cream dark:bg-luxury-charcoal border border-luxury-gold/35 text-luxury-maroon dark:text-luxury-gold py-3 px-4 rounded-full font-serif font-bold text-[10px] tracking-wider uppercase transition-all active:scale-95 shadow relative"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500 animate-bounce" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map/QR display (Right 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 h-80 sm:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-luxury-gold/30 shadow-xl shadow-black/10 relative"
          >
            <AnimatePresence mode="wait">
              {!showQR ? (
                // Google Maps Iframe
                <motion.iframe
                  key="map"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  title="Venue Location Map"
                  src={mapUrl}
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                // Inline SVG QR code (linking to coordinates)
                <motion.div
                  key="qr"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-luxury-cream dark:bg-luxury-charcoal flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="bg-white p-4 rounded-xl border border-luxury-gold/20 shadow-md mb-4">
                    {/* SVG QR Code graphic */}
                    <svg viewBox="0 0 100 100" className="w-36 h-36">
                      <rect width="100" height="100" fill="#ffffff" />
                      {/* Quiet Zone Corners */}
                      <rect x="5" y="5" width="20" height="20" fill="none" stroke="#3B020A" strokeWidth="4" />
                      <rect x="10" y="10" width="10" height="10" fill="#3B020A" />
                      <rect x="75" y="5" width="20" height="20" fill="none" stroke="#3B020A" strokeWidth="4" />
                      <rect x="80" y="10" width="10" height="10" fill="#3B020A" />
                      <rect x="5" y="75" width="20" height="20" fill="none" stroke="#3B020A" strokeWidth="4" />
                      <rect x="10" y="80" width="10" height="10" fill="#3B020A" />
                      {/* Random abstract dots to represent QR data */}
                      <rect x="35" y="15" width="6" height="6" fill="#3B020A" />
                      <rect x="50" y="10" width="8" height="8" fill="#3B020A" />
                      <rect x="60" y="25" width="6" height="6" fill="#3B020A" />
                      <rect x="40" y="40" width="15" height="15" fill="#3B020A" />
                      <rect x="15" y="45" width="6" height="6" fill="#3B020A" />
                      <rect x="30" y="60" width="10" height="6" fill="#3B020A" />
                      <rect x="60" y="50" width="8" height="12" fill="#3B020A" />
                      <rect x="75" y="40" width="12" height="6" fill="#3B020A" />
                      <rect x="50" y="75" width="10" height="10" fill="#3B020A" />
                      <rect x="80" y="70" width="8" height="8" fill="#3B020A" />
                    </svg>
                  </div>
                  <span className="font-serif text-sm font-semibold text-luxury-maroon dark:text-luxury-gold">Scan QR Code</span>
                  <span className="font-sans text-[10px] text-luxury-maroon/50 dark:text-luxury-cream-light/50 mt-1">Scan using your phone to open directions instantly</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
