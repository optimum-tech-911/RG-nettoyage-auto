import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = new URL('../../logo.png', import.meta.url).href;

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="RG Nettoyage" className="w-10 h-10 rounded-2xl object-cover" />
              <span className="font-bold text-xl text-herbes-900 tracking-tight">RG Nettoyage</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-herbes-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-herbes-500 hover:bg-herbes-600 text-white px-6 py-2.5 rounded-2xl font-medium transition-all shadow-sm hover:shadow-md"
            >
              Réserver
            </Link>
            <Link
              to="/client"
              className="text-herbes-600 hover:text-herbes-700 font-medium transition-colors"
            >
              Espace Client
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-herbes-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-2xl text-base font-medium text-gray-700 hover:text-herbes-600 hover:bg-herbes-50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 mt-4 rounded-2xl text-base font-medium text-center text-white bg-herbes-500 hover:bg-herbes-600"
              >
                Réserver
              </Link>
              <Link
                to="/client"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 mt-2 rounded-2xl text-base font-medium text-center text-herbes-600 bg-herbes-50 hover:bg-herbes-100"
              >
                Espace Client
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
