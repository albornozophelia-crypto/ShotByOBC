import { motion } from 'motion/react';
import { Camera, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-950/90 backdrop-blur-md border-b border-brand-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-brand-50 group-hover:text-brand-300 transition-colors" />
          <span className="font-serif text-xl font-medium tracking-wide group-hover:text-brand-300 transition-colors">ShotByOBC</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-brand-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-white text-brand-950 text-sm font-medium hover:bg-brand-200 transition-colors"
          >
            Book Session
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-brand-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full inset-x-0 bg-brand-950 border-b border-brand-800 py-4 px-6 shadow-2xl"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-300 hover:text-white font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-3 text-center bg-white text-brand-950 font-medium hover:bg-brand-200 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Session
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
