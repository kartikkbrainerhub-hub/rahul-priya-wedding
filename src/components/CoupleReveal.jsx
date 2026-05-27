"use client";

import { motion } from 'framer-motion';

export default function CoupleReveal() {
  const storyEvents = [
    {
      year: '2022',
      title: 'How We Met',
      desc: 'It started with a shared textbook and a coffee shop conversation. From classmates to best friends, we quickly realized we were inseparable.',
    },
    {
      year: '2025',
      title: 'The Proposal',
      desc: 'Under the quiet starlit sky of a chilly winter night, he asked the question, and she said "Yes!" through happy tears. The journey of forever began.',
    },
    {
      year: '2026',
      title: 'The Yes!',
      desc: 'Now, we are ready to seal our vows before our loved ones, entering the beautiful bond of marriage. We cannot wait to celebrate with you.',
    },
  ];

  return (
    <section id="story" className="py-20 px-4 w-full bg-luxury-cream dark:bg-luxury-charcoal transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Mandala */}
      <div className="absolute -right-20 -top-20 w-80 h-80 border-2 border-luxury-gold/5 rounded-full pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 border-2 border-luxury-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Introducing the Soulmates</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">Bride & Groom</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* Bride & Groom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full mb-20">
          
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center glass-panel p-6 rounded-2xl border border-luxury-gold/25 relative group"
          >
            <div className="absolute top-3 right-3 text-[10px] font-serif tracking-widest text-luxury-gold/55 uppercase border border-luxury-gold/15 px-2 py-0.5 rounded">Groom</div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-luxury-gold/40 mb-6 relative shadow-lg shadow-black/10 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/groom.png"
                alt="Groom Rahul"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-luxury-maroon dark:text-luxury-gold mb-1">Rahul Sharma</h3>
            <p className="font-serif text-xs tracking-wider text-luxury-gold mb-4 uppercase">Son of Mr. & Mrs. Vijay Sharma</p>
            <p className="font-sans text-sm text-luxury-maroon/70 dark:text-luxury-cream-light/70 leading-relaxed max-w-xs">
              A tech explorer, photography lover, and romantic at heart. Rahul believes that life is a grand adventure, best shared with the perfect partner.
            </p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center glass-panel p-6 rounded-2xl border border-luxury-gold/25 relative group"
          >
            <div className="absolute top-3 right-3 text-[10px] font-serif tracking-widest text-luxury-gold/55 uppercase border border-luxury-gold/15 px-2 py-0.5 rounded">Bride</div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-luxury-gold/40 mb-6 relative shadow-lg shadow-black/10 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/bride.png"
                alt="Bride Priya"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-luxury-maroon dark:text-luxury-gold mb-1">Priya Malhotra</h3>
            <p className="font-serif text-xs tracking-wider text-luxury-gold mb-4 uppercase">Daughter of Mr. & Mrs. Rajesh Malhotra</p>
            <p className="font-sans text-sm text-luxury-maroon/70 dark:text-luxury-cream-light/70 leading-relaxed max-w-xs">
              An artist, baker, and lover of classical music. Priya brings warmth and creative color to every room she enters, ready to co-author a beautiful new chapter.
            </p>
          </motion.div>

        </div>

        {/* Love Story Timeline */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-1">Our Journey</span>
            <h3 className="font-serif text-2xl font-semibold text-luxury-maroon dark:text-luxury-gold">The Love Timeline</h3>
          </motion.div>

          <div className="relative border-l border-luxury-gold/30 pl-6 sm:pl-8 ml-2 flex flex-col gap-10">
            {storyEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-luxury-gold border-2 border-luxury-cream dark:border-luxury-charcoal shadow shadow-luxury-gold/40 group-hover:scale-125 transition-transform duration-300" />
                
                <span className="font-serif text-sm font-bold text-luxury-gold tracking-widest uppercase">{event.year}</span>
                <h4 className="font-serif text-lg font-semibold text-luxury-maroon dark:text-luxury-gold mt-1 mb-2">{event.title}</h4>
                <p className="font-sans text-sm text-luxury-maroon/70 dark:text-luxury-cream-light/70 leading-relaxed max-w-lg">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
