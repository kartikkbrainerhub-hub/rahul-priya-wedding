"use client";

import { motion } from 'framer-motion';

export default function Family() {
  const families = {
    groom: {
      title: 'Groom\'s Family',
      parents: { relation: 'Parents', names: ['Mr. Vijay Sharma', 'Mrs. Rekha Sharma'] },
      members: [
        { relation: 'Paternal Grandparents', names: ['Late Shri. R. K. Sharma', 'Smt. Kamla Sharma'] },
        { relation: 'Siblings', names: ['Neha Sharma (Sister)'] },
        { relation: 'Uncle & Aunt', names: ['Mr. & Mrs. Suresh Sharma'] }
      ]
    },
    bride: {
      title: 'Bride\'s Family',
      parents: { relation: 'Parents', names: ['Mr. Rajesh Malhotra', 'Mrs. Poonam Malhotra'] },
      members: [
        { relation: 'Maternal Grandparents', names: ['Late Shri. D. N. Kapoor', 'Smt. Shanti Kapoor'] },
        { relation: 'Siblings', names: ['Amit Malhotra (Brother)', 'Sneha Malhotra (Sister)'] },
        { relation: 'Uncle & Aunt', names: ['Mr. & Mrs. Sunil Kapoor'] }
      ]
    }
  };

  return (
    <section className="py-20 px-4 w-full bg-luxury-cream-light dark:bg-luxury-charcoal-dark transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-serif text-xs tracking-[0.2em] text-luxury-gold uppercase block mb-2">Blessed & Welcomed</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-luxury-maroon dark:text-luxury-gold">Family & Compliments</h2>
          <div className="w-16 h-[2px] bg-luxury-gold mt-4 mx-auto" />
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
          
          {/* Groom's Family Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-luxury-gold/20 shadow text-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-luxury-gold/45" />
            <h3 className="font-serif text-xl font-bold text-luxury-maroon dark:text-luxury-gold mb-6 uppercase tracking-wider">
              {families.groom.title}
            </h3>

            {/* Parents */}
            <div className="mb-6 border-b border-luxury-gold/15 pb-6">
              <span className="text-[10px] font-sans font-bold tracking-widest text-luxury-gold uppercase block mb-2">
                {families.groom.parents.relation}
              </span>
              {families.groom.parents.names.map((name, idx) => (
                <p key={idx} className="font-serif text-base font-medium text-luxury-maroon dark:text-luxury-cream-light my-0.5">
                  {name}
                </p>
              ))}
            </div>

            {/* Other Members */}
            <div className="flex flex-col gap-5">
              {families.groom.members.map((member, idx) => (
                <div key={idx}>
                  <span className="text-[9px] font-sans tracking-widest text-luxury-gold/75 uppercase block mb-1">
                    {member.relation}
                  </span>
                  {member.names.map((name, nameIdx) => (
                    <p key={nameIdx} className="font-serif text-sm text-luxury-maroon/80 dark:text-luxury-cream-light/80 my-0.5">
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bride's Family Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-luxury-gold/20 shadow text-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-luxury-gold/45" />
            <h3 className="font-serif text-xl font-bold text-luxury-maroon dark:text-luxury-gold mb-6 uppercase tracking-wider">
              {families.bride.title}
            </h3>

            {/* Parents */}
            <div className="mb-6 border-b border-luxury-gold/15 pb-6">
              <span className="text-[10px] font-sans font-bold tracking-widest text-luxury-gold uppercase block mb-2">
                {families.bride.parents.relation}
              </span>
              {families.bride.parents.names.map((name, idx) => (
                <p key={idx} className="font-serif text-base font-medium text-luxury-maroon dark:text-luxury-cream-light my-0.5">
                  {name}
                </p>
              ))}
            </div>

            {/* Other Members */}
            <div className="flex flex-col gap-5">
              {families.bride.members.map((member, idx) => (
                <div key={idx}>
                  <span className="text-[9px] font-sans tracking-widest text-luxury-gold/75 uppercase block mb-1">
                    {member.relation}
                  </span>
                  {member.names.map((name, nameIdx) => (
                    <p key={nameIdx} className="font-serif text-sm text-luxury-maroon/80 dark:text-luxury-cream-light/80 my-0.5">
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Traditional Bottom Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-xs text-center text-luxury-gold tracking-widest uppercase mt-12 leading-relaxed max-w-sm"
        >
          "With best compliments from all relatives & friends."
        </motion.p>
      </div>
    </section>
  );
}
