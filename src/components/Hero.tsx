import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop"
          alt="Photographer holding camera" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-300 font-medium tracking-widest uppercase text-sm mb-6 block">
              Professional Photography • Lagos, Nigeria
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-balance text-white">
              Capturing life's <br />
              <span className="italic text-brand-300">fleeting</span> moments.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-300 mb-10 max-w-xl text-balance leading-relaxed"
          >
            Led by Eniola Olaitan Olatunbosun. We craft timeless visuals with a modern, editorial approach. Premium photography for brands, events, and portraiture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-brand-950 font-medium hover:bg-brand-200 transition-colors flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-brand-700 text-white font-medium hover:bg-brand-900 transition-colors flex items-center justify-center"
            >
              Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
