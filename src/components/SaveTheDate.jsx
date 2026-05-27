"use client";

import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Share2 } from 'lucide-react';

export default function SaveTheDate() {
  // Calendar days of December 2026 (Starts on a Tuesday)
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const totalDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: 2 }, () => null); // padding for Tuesday start

  const calendarDays = [...paddingDays, ...totalDays];

  // Direct Google Calendar Event Link
  const gCalUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Rahul+%E2%9D%A4+Priya&dates=20261218T100000Z/20261219T020000Z&details=You+are+cordially+invited+to+celebrate+the+union+of+Rahul+and+Priya.+Please+RSVP+via+our+website.&location=The+Royal+Palace,+Udaipur,+Rajasthan,+India";

  return (
    <section className="py-20 px-4 w-full bg-luxury-cream-light dark:bg-luxury-charcoal-dark transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      {/* Visual Gold Floral Border Elements */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Save the Date</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">The Invitation</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* Card and Calendar Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-3xl">
          
          {/* Card Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-8 rounded-2xl border border-luxury-gold/30 shadow-xl shadow-black/10 relative overflow-hidden text-center flex flex-col items-center h-full justify-between"
          >
            {/* Elegant physical card header */}
            <div className="border border-luxury-gold/15 p-6 rounded-lg w-full h-full flex flex-col items-center justify-center">
              <span className="font-serif text-xs tracking-[0.3em] text-luxury-gold/80 uppercase mb-4 block">Auspicious Ceremony</span>
              <h3 className="font-serif text-3xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold mb-6">The Wedding</h3>
              
              <div className="flex flex-col gap-4 text-sm text-luxury-maroon/80 dark:text-luxury-cream-light/80 font-sans mb-8">
                <div className="flex items-center gap-3 justify-center">
                  <CalendarDays className="w-4 h-4 text-luxury-gold" />
                  <span>Friday, December 18, 2026</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Clock className="w-4 h-4 text-luxury-gold" />
                  <span>Auspicious Muhurat: 10:30 AM</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span>The Royal Palace, Udaipur</span>
                </div>
              </div>

              <a
                href={gCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-luxury-maroon dark:bg-luxury-gold hover:bg-luxury-maroon-deep dark:hover:bg-luxury-gold-dark text-luxury-gold dark:text-luxury-charcoal py-3 px-6 rounded-full font-serif font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-md transform active:scale-95"
              >
                Add To Calendar
              </a>
            </div>
          </motion.div>

          {/* Calendar Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl border border-luxury-gold/30 shadow-xl shadow-black/10 flex flex-col items-center w-full"
          >
            <h4 className="font-serif text-base font-semibold tracking-[0.2em] text-luxury-maroon dark:text-luxury-gold uppercase mb-4">December 2026</h4>
            <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center w-full text-sm">
              {/* Weekdays */}
              {weekdays.map((day, idx) => (
                <div key={idx} className="font-serif text-luxury-gold font-bold text-xs opacity-75">
                  {day}
                </div>
              ))}

              {/* Days */}
              {calendarDays.map((day, idx) => {
                const isWeddingDate = day === 18;

                return (
                  <div
                    key={idx}
                    className={`h-8 w-8 flex items-center justify-center rounded-full font-sans text-xs relative ${
                      day ? 'text-luxury-maroon/80 dark:text-luxury-cream-light/80' : ''
                    }`}
                  >
                    {isWeddingDate && (
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-luxury-gold rounded-full border border-luxury-maroon dark:border-luxury-gold-light opacity-30"
                      />
                    )}

                    {isWeddingDate ? (
                      <span className="z-10 font-bold text-luxury-maroon dark:text-luxury-gold bg-luxury-gold/20 rounded-full w-full h-full flex items-center justify-center border border-luxury-gold">
                        18
                      </span>
                    ) : (
                      <span>{day}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
