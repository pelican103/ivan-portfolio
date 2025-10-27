import { Navbar, Hero, About, Projects, Experience, Education, Resume, Footer } from './components';
import { useScrollSpy } from './hooks';
import { scrollToTop } from './utils/smoothScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
  const activeSection = useScrollSpy(['hero', 'about', 'projects', 'experience', 'education', 'resume']);
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2774AE] to-blue-500">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="text-white text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Resume />
        </main>

        <Footer />

        {/* Scroll to top button */}
        <motion.button
          className="fixed bottom-8 right-8 z-40 p-3 bg-[#2774AE] text-white rounded-full shadow-lg hover:bg-[#1e5a8a] transition-all duration-300 hover:scale-110"
          onClick={() => scrollToTop({ duration: 400 })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: activeSection !== 'hero' ? 1 : 0,
            scale: activeSection !== 'hero' ? 1 : 0
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

export default App
