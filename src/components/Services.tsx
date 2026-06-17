import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Users, Film } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Brand Identity & Commercial',
    description: 'Elevate your brand with high-end visual storytelling designed for conversion. We craft campaigns that align with your luxury positioning.',
  },
  {
    icon: Users,
    title: 'Corporate & Executive Portraits',
    description: 'Authoritative, polished portraiture for executives, founders, and teams. Build immediate trust with your audience.',
  },
  {
    icon: ImageIcon,
    title: 'Editorial & Fashion',
    description: 'Striking, magazine-ready imagery. From lookbooks to full editorial spreads, we bring creative direction to life.',
  },
  {
    icon: Film,
    title: 'Event Highlights',
    description: 'Discreet, comprehensive coverage of premium events, capturing both the grandeur and the intimate candid moments.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-900 border-y border-brand-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Our Expertise</h2>
          <p className="text-brand-300 text-lg">
            ShotByOBC provides comprehensive visual solutions. We partner with clients to understand their strategic goals, translating them into compelling photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center bg-brand-950/50">
                    <Icon className="w-5 h-5 text-brand-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white font-medium mb-3">{service.title}</h3>
                  <p className="text-brand-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
