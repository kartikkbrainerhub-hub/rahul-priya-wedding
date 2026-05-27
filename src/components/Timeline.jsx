"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Clock, Shirt, Sparkles, Music, Heart, GlassWater, Flame } from 'lucide-react';

export default function Timeline() {
  const [expandedCard, setExpandedCard] = useState(null);

  const events = [
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      date: 'December 16, 2026',
      time: '10:00 AM',
      venue: 'Suryagarh Lawn, Udaipur',
      description: 'Prepare to be drenched in yellow, turmeric, and pure joy! Join us for a morning filled with traditional songs, laughter, and lighthearted celebrations.',
      dressCode: 'Traditional wear in shades of Mustard or Yellow',
      highlights: 'Traditional Dhol, organic turmeric paste ritual, lassi station.',
      icon: Flame,
      color: 'border-yellow-500 bg-yellow-500/5',
      iconColor: 'text-yellow-500',
    },
    {
      id: 'mehendi',
      title: 'Mehendi Rasam',
      date: 'December 16, 2026',
      time: '03:00 PM',
      venue: 'Poolside Verandah, Udaipur',
      description: 'Let the aroma of fresh henna fill the air. Get your hands decorated with intricate floral and abstract bridal designs while sipping cool cocktails.',
      dressCode: 'Sartorial greens, lightweight lehengas, and kurtas',
      highlights: 'Intricate Henna Artists, live folk singers, custom floral jewelry.',
      icon: Sparkles,
      color: 'border-green-600 bg-green-600/5',
      iconColor: 'text-green-600',
    },
    {
      id: 'sangeet',
      title: 'Sangeet & Ring Ceremony',
      date: 'December 17, 2026',
      time: '07:00 PM',
      venue: 'Grand Ballroom, Udaipur',
      description: 'A grand musical face-off between the families, dazzling dance choreographies, and the formal ring exchange. Get ready to dance the night away!',
      dressCode: 'Glamorous Indo-Western or glittering ethnic wear',
      highlights: 'Professional choreography, live DJ, multi-cuisine banquet.',
      icon: Music,
      color: 'border-purple-500 bg-purple-500/5',
      iconColor: 'text-purple-500',
    },
    {
      id: 'wedding',
      title: 'Main Wedding (Shaadi)',
      date: 'December 18, 2026',
      time: '10:30 AM',
      venue: 'Royal Mandap, Udaipur',
      description: 'The sacred union under the royal floral canopy. Witness the ancient Vedic chants, Phere around the sacred fire, and the eternal promise of togetherness.',
      dressCode: 'Regal traditional wear (Sherwanis & Heavy silks)',
      highlights: 'Grand Baraat procession, Vedic Phere, traditional wedding lunch.',
      icon: Heart,
      color: 'border-luxury-maroon bg-luxury-maroon/5',
      iconColor: 'text-luxury-maroon dark:text-luxury-gold',
    },
    {
      id: 'reception',
      title: 'Grand Reception',
      date: 'December 19, 2026',
      time: '08:00 PM',
      venue: 'Palace Gardens, Udaipur',
      description: 'A formal sit-down evening of royalty, champagne toasts, speeches, and our first public dance as husband and wife. A celebration of love under the stars.',
      dressCode: 'Formal suits, Tuxedos, or Elegant evening gowns',
      highlights: 'Red carpet entry, premium champagne toast, live jazz ensemble.',
      icon: GlassWater,
      color: 'border-blue-500 bg-blue-500/5',
      iconColor: 'text-blue-500',
    },
  ];

  const handleToggle = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 w-full bg-luxury-cream dark:bg-luxury-charcoal transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Schedule of Events</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">Wedding Timeline</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* Timeline body */}
        <div className="relative w-full max-w-2xl pl-8 sm:pl-0">
          
          {/* Vertical axis line (centered on desktop, left side on mobile) */}
          <div className="absolute left-3 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-luxury-gold via-luxury-gold/50 to-luxury-gold/10 -translate-x-1/2" />

          {events.map((event, idx) => {
            const Icon = event.icon;
            const isExpanded = expandedCard === event.id;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={event.id}
                className={`relative mb-12 w-full flex flex-col sm:flex-row ${
                  isEven ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                
                {/* Visual node anchor dot */}
                <div
                  className={`absolute left-3 sm:left-1/2 -translate-x-1/2 top-2 z-20 w-8 h-8 rounded-full border border-luxury-gold flex items-center justify-center bg-luxury-cream dark:bg-luxury-charcoal shadow-lg ${event.iconColor}`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Timeline Card Container */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`w-full sm:w-[45%] glass-panel rounded-2xl border-l-4 ${event.color} p-5 sm:p-6 shadow-md transition-all relative cursor-pointer`}
                  onClick={() => handleToggle(event.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-luxury-gold uppercase block">
                      {event.date}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-luxury-gold" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-luxury-maroon dark:text-luxury-gold mb-3">
                    {event.title}
                  </h3>

                  {/* Core Timing & Venue Details */}
                  <div className="flex flex-col gap-1.5 text-xs text-luxury-maroon/70 dark:text-luxury-cream-light/70 font-sans mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-luxury-maroon/60 dark:text-luxury-cream-light/50 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Animated Collapse Details Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-luxury-gold/20 mt-4 pt-4 flex flex-col gap-3 text-xs">
                          {/* Dress Code Detail */}
                          <div className="flex items-start gap-2 bg-luxury-gold/5 p-2.5 rounded-lg border border-luxury-gold/10">
                            <Shirt className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                            <div>
                              <strong className="block text-luxury-gold font-serif text-[10px] tracking-wider uppercase mb-0.5">Dress Code</strong>
                              <span className="text-luxury-maroon/80 dark:text-luxury-cream-light/80">{event.dressCode}</span>
                            </div>
                          </div>

                          {/* Highlights Detail */}
                          <div className="flex items-start gap-2 bg-luxury-maroon/5 dark:bg-luxury-gold/5 p-2.5 rounded-lg border border-luxury-gold/10">
                            <Sparkles className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                            <div>
                              <strong className="block text-luxury-gold font-serif text-[10px] tracking-wider uppercase mb-0.5">Celebration Highlights</strong>
                              <span className="text-luxury-maroon/80 dark:text-luxury-cream-light/80">{event.highlights}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
