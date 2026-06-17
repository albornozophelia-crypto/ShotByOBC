import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Inquire</h2>
            <p className="text-brand-300 text-lg mb-12 max-w-md text-balance">
              We accept a limited number of commissions per season to ensure the highest level of dedication and quality for our clients. Connect with us to discuss your project.
            </p>

            <div className="space-y-8">
              <a href="mailto:Omobabacity01@hotmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center bg-brand-950 flex-shrink-0 group-hover:bg-brand-800 transition-colors">
                  <Mail className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-brand-400 group-hover:text-brand-300 transition-colors">Omobabacity01@hotmail.com</p>
                </div>
              </a>

              <a href="tel:+2349021885163" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center bg-brand-950 flex-shrink-0 group-hover:bg-brand-800 transition-colors">
                  <Phone className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-brand-400 group-hover:text-brand-300 transition-colors">09021885163</p>
                </div>
              </a>

              <a href="https://wa.me/2349021885163" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center bg-brand-950 flex-shrink-0 group-hover:bg-brand-800 transition-colors">
                  <MessageCircle className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <p className="text-brand-400 group-hover:text-brand-300 transition-colors">+234 902 188 5163</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center bg-brand-950 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-brand-400">Lagos, Nigeria</p>
                  <p className="text-sm text-brand-500 mt-1">Available for travel worldwide.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-950 p-8 md:p-12 border border-brand-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-brand-300 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-brand-900 border border-brand-700 focus:border-white focus:ring-0 text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-brand-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-brand-900 border border-brand-700 focus:border-white focus:ring-0 text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-brand-900 border border-brand-700 focus:border-white focus:ring-0 text-white px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-brand-300 mb-2">Project Type</label>
                <select
                  id="project"
                  className="w-full bg-brand-900 border border-brand-700 focus:border-white focus:ring-0 text-white px-4 py-3 outline-none transition-colors appearance-none"
                >
                  <option>Commercial / Brand Campaign</option>
                  <option>Wedding / Event Coverage</option>
                  <option>Editorial / Fashion</option>
                  <option>Corporate Portraiture</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-brand-900 border border-brand-700 focus:border-white focus:ring-0 text-white px-4 py-3 outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-brand-950 font-medium hover:bg-brand-200 transition-colors uppercase tracking-wide text-sm"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
