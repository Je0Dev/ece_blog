import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, BookOpen, Flame, Leaf, Code2 } from 'lucide-react';
import { ThemeToggle } from './UIComponents';
import { SearchModal } from './FeatureComponents';
import { JOURNAL_ENTRIES } from '../data/entries';

export const GlobalHeader = React.memo(({ isDark, onThemeToggle }: { isDark: boolean, onThemeToggle: () => void }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isGarden = location.pathname.startsWith('/garden');

  const navItems = [
    { path: '/', label: 'About', icon: BookOpen },
    { path: '/garden', label: 'Garden', icon: Leaf },
  ];

  const handleQuickLinkClick = (filter: string) => {
    navigate(`/garden?type=${filter}`);
  };

  const quickLinks = [
    { label: 'Projects', filter: 'project', icon: Code2 },
    { label: 'Notes', filter: 'note', icon: Flame },
  ];

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header 
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl bg-[var(--color-surface)]/95 backdrop-blur-xl border-2 border-[var(--color-border)] rounded-2xl p-2 flex justify-between items-center shadow-2xl"
        role="banner"
      >
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-3 py-2 group relative"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
            aria-label="George's Garden - Home"
          >
            <motion.div 
              className="w-11 h-11 rounded-none bg-gradient-to-br from-[var(--accent-olive)] to-[var(--accent-moss)] flex items-center justify-center font-black text-white shadow-lg text-xl relative overflow-hidden border-2 border-[var(--accent-olive)]/30"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isHoveringLogo ? (
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxHOGTdzJC/giphy.gif"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg"
                  alt="logo"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </motion.div>
            <div className="hidden sm:block relative">
              <span className={`font-bold tracking-wide text-lg transition-colors font-serif ${isHome ? 'text-[var(--accent-olive)]' : 'text-[var(--color-text)] group-hover:text-[var(--accent-olive)]'}`}>
                {isHome ? 'Home' : isGarden ? 'Garden' : 'Journal'}
              </span>
              <span className={`absolute -bottom-0.5 left-0 w-full h-0.5 bg-[var(--accent-olive)] rounded-full transition-all duration-300 ${isHoveringLogo ? 'opacity-100' : 'opacity-0'}`} />
              <span className="block text-[10px] text-[var(--color-text-muted)] font-medium">ECE Student</span>
            </div>
          </Link>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {quickLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleQuickLinkClick(link.filter)}
              className="px-3 py-2 rounded-none font-bold text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all flex items-center gap-2 font-serif"
            >
              <link.icon size={14} className="text-[var(--accent-olive)]" />
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block w-72">
            <button 
              onClick={() => setIsSearchModalOpen(true)}
              className="w-full relative flex items-center bg-[var(--color-bg)]/60 border-2 border-[var(--color-border)] rounded-none py-2.5 pl-10 pr-4 text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--accent-olive)]/50 hover:bg-[var(--color-bg)] transition-all text-left group"
              aria-label="Search the garden"
            >
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--accent-olive)] group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[var(--accent-olive)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[var(--color-text-muted)] font-serif">Search the garden...</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-[var(--color-surface)] px-2 py-1 rounded-none border border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors font-mono" aria-hidden="true">⌘K</span>
            </button>
          </div>

          <nav className="flex gap-2" role="navigation" aria-label="Main navigation">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative px-3 md:px-4 py-2.5 rounded-none font-bold text-sm transition-all flex items-center gap-2 font-serif ${isActive ? 'text-[var(--accent-olive)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <item.icon size={16} className={isActive ? 'text-[var(--accent-olive)]' : ''} />
                  <span className="hidden sm:inline">{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-[var(--accent-olive)] rounded-full" />
                  )}
                </Link>
              );
            })}
            <button 
              onClick={() => setIsSearchModalOpen(true)}
              className="md:hidden p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all"
              aria-label="Open search"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-surface)] border-l border-[var(--color-border)] z-[95] p-6 overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-black text-[var(--color-text)] font-serif">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 mb-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-none font-bold font-serif transition-all ${
                location.pathname === item.path 
                  ? 'text-[var(--accent-olive)] underline decoration-2 decoration-[var(--accent-olive)] underline-offset-4' 
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 mb-8">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] px-4 mb-2 font-serif">Quick Links</h3>
          {quickLinks.map(link => (
            <button
              key={link.label}
              onClick={() => { setIsMobileMenuOpen(false); handleQuickLinkClick(link.filter); }}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-none font-bold font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all"
            >
              <link.icon size={20} className="text-[var(--accent-olive)]" />
              {link.label}
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-[var(--color-border)]">
          <button 
            onClick={() => setIsSearchModalOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-none font-bold font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all"
          >
            <Search size={20} className="text-[var(--accent-olive)]" />
            Search
          </button>
        </div>
      </motion.div>
      
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
        entries={JOURNAL_ENTRIES} 
      />
    </>
  );
});
