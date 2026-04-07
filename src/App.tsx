import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GlobalHeader } from './components/GlobalHeader';
import { ScrollToTop, LoadingFallback } from './components/Layout';
import { KonamiEasterEgg } from './components/UIComponents';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as any } }
};

const AboutView = React.lazy(() => import('./pages/AboutView').then(m => ({ default: m.AboutView })));
const GardenView = React.lazy(() => import('./pages/GardenView').then(m => ({ default: m.GardenView })));
const JournalDetail = React.lazy(() => import('./pages/JournalDetail').then(m => ({ default: m.JournalDetail })));
const NotFound = React.lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function AnimatedRoutes({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<AboutView isDark={isDark} onThemeToggle={toggleTheme} />} />
          <Route path="/garden" element={<GardenView isDark={isDark} onThemeToggle={toggleTheme} />} />
          <Route path="/journal/:id" element={<JournalDetail isDark={isDark} onThemeToggle={toggleTheme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = React.useCallback(() => setIsDark(prev => !prev), []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <KonamiEasterEgg />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent-olive)] focus:text-white focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>
      <GlobalHeader isDark={isDark} onThemeToggle={toggleTheme} />
      <main id="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <AnimatedRoutes isDark={isDark} toggleTheme={toggleTheme} />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}