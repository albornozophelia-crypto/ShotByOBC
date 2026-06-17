import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1554046920-90dcac023691?q=80&w=2784&auto=format&fit=crop"
              alt="Eniola Olaitan Olatunbosun - Photographer"
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-brand-800/50" />
            
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-900 -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-brand-400 uppercase tracking-widest text-sm mb-4 block">The Visionary</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Eniola Olaitan Olatunbosun</h2>
            
            <div className="space-y-6 text-brand-300 text-lg leading-relaxed">
              <p>
                Based in Lagos, Nigeria, ShotByOBC was founded on a singular premise: that true luxury lies in the details.
              </p>
              <p>
                As a lead photographer and creative director, I approach every session with an editorial mindset. Whether we are capturing a global brand campaign, a monumental life event, or a personal portrait, my goal is to distill the essence of the subject into imagery that is both striking and timeless.
              </p>
              <p>
                My process is collaborative, deeply intentional, and focused entirely on delivering an exceptional aesthetic experience from consultation to final gallery delivery.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="px-6 py-4 bg-brand-900 border border-brand-800">
                <span className="block text-2xl font-serif text-white mb-1">5+</span>
                <span className="text-sm text-brand-400">Years Experience</span>
              </div>
              <div className="px-6 py-4 bg-brand-900 border border-brand-800">
                <span className="block text-2xl font-serif text-white mb-1">200+</span>
                <span className="text-sm text-brand-400">Clients Trust Us</span>
              </div>
            </div>
            
             <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-white hover:text-brand-300 transition-colors group w-fit"
            >
              <span className="font-medium underline underline-offset-4">Work with Eniola</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
