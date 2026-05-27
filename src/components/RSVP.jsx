"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, MessageSquare, Users, Phone, User, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    phone: '',
    status: 'attending', // attending | declined
    diet: 'none',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfetti = () => {
    // Elegant royal gold, maroon and blush pink confetti blast
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#D4AF37', '#AA7C11', '#FFF0F2', '#E8C5C8', '#800020'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and contact number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      handleConfetti();
    }, 1800);
  };

  const handleWhatsApp = () => {
    const phoneNo = "919999999999"; // Wedding coordinator contact
    const attendanceText = formData.status === 'attending' 
      ? `🎉 YES! I will be attending your auspicious wedding!` 
      : `🙏 Regretfully decline. Wishing you both a lifetime of happiness!`;

    const text = `*WEDDING RSVP CARD* 💌\n\n*Guest Name:* ${formData.name}\n*Contact No:* ${formData.phone}\n*Attendance:* ${attendanceText}\n*No. of Guests:* ${formData.guests}\n*Message to Couple:* ${formData.note || 'None'}`;
    const waUrl = `https://wa.me/${phoneNo}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="rsvp" className="py-20 px-4 w-full bg-luxury-cream dark:bg-luxury-charcoal transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-xl mx-auto w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Be Our Guest</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">RSVP Online</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* RSVP Card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full glass-panel p-6 sm:p-8 rounded-3xl border border-luxury-gold/30 shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              // The Form
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-sm"
              >
                
                {/* Attendance selection radio grid */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <label className={`border-2 rounded-xl py-3 px-4 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    formData.status === 'attending' 
                      ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-maroon dark:text-luxury-gold font-semibold' 
                      : 'border-luxury-gold/15 hover:border-luxury-gold/40 text-luxury-maroon/60 dark:text-luxury-cream-light/60'
                  }`}>
                    <input
                      type="radio"
                      name="status"
                      value="attending"
                      checked={formData.status === 'attending'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span>Yes, I Will Attend</span>
                  </label>

                  <label className={`border-2 rounded-xl py-3 px-4 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    formData.status === 'declined' 
                      ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-maroon dark:text-luxury-gold font-semibold' 
                      : 'border-luxury-gold/15 hover:border-luxury-gold/40 text-luxury-maroon/60 dark:text-luxury-cream-light/60'
                  }`}>
                    <input
                      type="radio"
                      name="status"
                      value="declined"
                      checked={formData.status === 'declined'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span>Regretfully Decline</span>
                  </label>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs font-semibold tracking-wider text-luxury-gold uppercase">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter guest name"
                      className="w-full pl-10 pr-4 py-3 bg-luxury-cream-light dark:bg-luxury-charcoal-dark border border-luxury-gold/25 focus:border-luxury-gold rounded-xl outline-none transition-all text-luxury-maroon dark:text-luxury-cream-light placeholder-luxury-maroon/30 dark:placeholder-luxury-cream-light/30"
                    />
                  </div>
                </div>

                {/* Contact and Guest count row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-serif text-xs font-semibold tracking-wider text-luxury-gold uppercase">Contact Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Contact number"
                        className="w-full pl-10 pr-4 py-3 bg-luxury-cream-light dark:bg-luxury-charcoal-dark border border-luxury-gold/25 focus:border-luxury-gold rounded-xl outline-none transition-all text-luxury-maroon dark:text-luxury-cream-light placeholder-luxury-maroon/30 dark:placeholder-luxury-cream-light/30"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-serif text-xs font-semibold tracking-wider text-luxury-gold uppercase">Number of Guests</label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-luxury-gold absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-luxury-cream-light dark:bg-luxury-charcoal-dark border border-luxury-gold/25 focus:border-luxury-gold rounded-xl outline-none transition-all text-luxury-maroon dark:text-luxury-cream-light cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs font-semibold tracking-wider text-luxury-gold uppercase">Wishes / Notes</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-luxury-gold absolute left-3 top-3" />
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="Send a sweet message to Rahul & Priya"
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 bg-luxury-cream-light dark:bg-luxury-charcoal-dark border border-luxury-gold/25 focus:border-luxury-gold rounded-xl outline-none transition-all text-luxury-maroon dark:text-luxury-cream-light placeholder-luxury-maroon/30 dark:placeholder-luxury-cream-light/30 resize-none"
                    />
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-luxury-maroon dark:bg-luxury-gold hover:bg-luxury-maroon-deep dark:hover:bg-luxury-gold-dark text-luxury-gold dark:text-luxury-charcoal py-3.5 px-6 rounded-full font-serif font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow shadow-black/15 disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-luxury-gold dark:border-luxury-charcoal border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send RSVP Card
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // Success Animation Screen
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="flex flex-col items-center text-center py-6"
              >
                {/* Sealing golden envelope animation */}
                <motion.div
                  initial={{ y: 20, rotate: -5 }}
                  animate={{ y: [0, -10, 0], rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="w-20 h-20 bg-luxury-gold/15 rounded-2xl flex items-center justify-center text-luxury-gold border-2 border-luxury-gold/40 mb-6 shadow shadow-luxury-gold/10"
                >
                  <Mail className="w-10 h-10 animate-bounce" />
                </motion.div>

                <h3 className="font-serif text-2xl font-bold text-luxury-maroon dark:text-luxury-gold mb-3">
                  RSVP Sent Successfully!
                </h3>
                <p className="font-sans text-xs text-luxury-maroon/70 dark:text-luxury-cream-light/70 leading-relaxed max-w-sm mb-8">
                  {formData.status === 'attending' 
                    ? `Thank you, ${formData.name}! We have added your presence (${formData.guests} ${formData.guests === '1' ? 'guest' : 'guests'}) to our guestlist. We look forward to celebrating with you!`
                    : `We are sad you won't be able to join us, ${formData.name}. Thank you so much for sending your warm wishes!`}
                </p>

                {/* Double check WhatsApp options */}
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-full font-serif font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow shadow-black/10 active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Share RSVP on WhatsApp
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-serif font-bold text-luxury-gold hover:text-luxury-gold-dark tracking-widest uppercase mt-4 underline decoration-dotted"
                  >
                    Edit RSVP Card
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
