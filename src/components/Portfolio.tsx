import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Editorial Fashion',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2671&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Luxury Real Estate',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Wedding Visuals',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Corporate Branding',
    category: 'Portraiture',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Selected Works</h2>
            <p className="text-brand-300 text-lg">
              A curated collection of our recent commissions. Every frame is composed with intention, blending raw emotion with polished, high-end aesthetics.
            </p>
          </div>
          <a href="#contact" className="text-brand-300 hover:text-white flex items-center gap-2 group transition-colors whitespace-nowrap">
            Discuss your moodboard
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-brand-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-brand-400 text-sm tracking-wide uppercase">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
