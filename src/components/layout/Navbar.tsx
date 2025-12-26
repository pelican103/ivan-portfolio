import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigationScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../utils/smoothScroll';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'resume', label: 'Resume', href: '#resume' },
  ];

  const activeSection = useNavigationScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = async (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setPendingSection(sectionId);
    
    try {
      await scrollToSection(sectionId);
    } finally {
      setTimeout(() => setPendingSection(null), 2000); 
    }
  };

  const displayActiveSection = pendingSection || activeSection;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-sm border-b border-gray-100' : ''
      } ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => handleNavClick('hero')}
              className="text-heading-3 font-semibold text-[#2774AE] hover:text-[#1e5a8a] transition-colors duration-300 focus:outline-none"
              style={{ 
                outline: 'none !important', 
                border: 'none !important', 
                boxShadow: 'none !important',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              Ivan Fang
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-body-small font-medium transition-all duration-300 relative rounded-lg ${
                    displayActiveSection === item.id
                      ? 'text-[#2774AE]'
                      : 'text-gray-600 hover:text-[#2774AE] hover:bg-gray-50/50'
                  }`}
                  style={{ 
                    outline: 'none !important', 
                    border: 'none !important', 
                    boxShadow: 'none !important',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-[#2774AE] hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              style={{ 
                outline: 'none !important', 
                border: 'none !important', 
                boxShadow: 'none !important',
                WebkitTapHighlightColor: 'transparent'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none ${
                    displayActiveSection === item.id
                      ? 'text-[#2774AE]'
                      : 'text-gray-600 hover:text-[#2774AE] hover:bg-gray-50'
                  }`}
                  style={{ 
                    outline: 'none !important', 
                    border: 'none !important', 
                    boxShadow: 'none !important',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;