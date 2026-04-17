import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Rss, Menu, X, Hash, BookOpen, Code, Cpu, Lightbulb, Heart, Github } from 'lucide-react';

import { JOURNAL_ENTRIES } from '../data/entries';
import { BackToTop, ThemeToggle } from '../components/UIComponents';
import { PixelIcon } from './helpers/JournalHelpers';

type TabType = 'all' | 'project' | 'note' | 'essay';

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Je0Dev', icon: 'github', color: 'hover:text-white' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/geomas', icon: 'linkedin', color: 'hover:text-blue-400' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter', color: 'hover:text-cyan-400' },
];

const SITE_LINKS = [
  { name: 'About', url: '/', icon: BookOpen },
  { name: 'Garden', url: '/garden', icon: Code },
  { name: 'RSS Feed', url: '/rss.xml', icon: Rss },
  { name: 'My Projects', url: 'https://github.com/Je0Dev?tab=repositories', icon: Cpu, external: true },
];

const ALL_TAGS = [...new Set(JOURNAL_ENTRIES.flatMap(e => e.tech || []))].sort();

const TAG_COLORS: Record<string, string> = {
  'React': 'text-[var(--accent-olive)] bg-[var(--accent-olive)]/20 border-[var(--accent-olive)]/30',
  'TypeScript': 'text-[var(--accent-brown)] bg-[var(--accent-brown)]/20 border-[var(--accent-brown)]/30',
  'Python': 'text-[var(--accent-amber)] bg-[var(--accent-amber)]/20 border-[var(--accent-amber)]/30',
  'C': 'text-[var(--accent-tomato)] bg-[var(--accent-tomato)]/20 border-[var(--accent-tomato)]/30',
  'C++': 'text-[var(--accent-rust)] bg-[var(--accent-rust)]/20 border-[var(--accent-rust)]/30',
  'JavaScript': 'text-[var(--accent-amber)] bg-[var(--accent-amber)]/20 border-[var(--accent-amber)]/30',
  'Rust': 'text-[var(--accent-clay)] bg-[var(--accent-clay)]/20 border-[var(--accent-clay)]/30',
  'Go': 'text-[var(--accent-olive)] bg-[var(--accent-olive)]/20 border-[var(--accent-olive)]/30',
  'ESP32': 'text-[var(--accent-moss)] bg-[var(--accent-moss)]/20 border-[var(--accent-moss)]/30',
  'Embedded Systems': 'text-[var(--accent-moss)] bg-[var(--accent-moss)]/20 border-[var(--accent-moss)]/30',
  'Web Development': 'text-[var(--accent-tomato)] bg-[var(--accent-tomato)]/20 border-[var(--accent-tomato)]/30',
};

const getTagStyle = (tag: string) => {
  return TAG_COLORS[tag] || 'text-[var(--accent-olive)] bg-[var(--accent-olive)]/20 border-[var(--accent-olive)]/30';
};

export const GardenView = ({ isDark, onThemeToggle }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tag = searchParams.get('tag');
    const type = searchParams.get('type');
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags([tag]);
    } else if (!tag && selectedTags.length > 0 && searchParams.toString() === '') {
      setSelectedTags([]);
    }
    if (type && ['all', 'project', 'note', 'essay'].includes(type)) {
      setActiveTab(type as TabType);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedTags.length > 0 || activeTab !== 'all') {
      const params = new URLSearchParams();
      if (activeTab !== 'all') {
        params.set('type', activeTab);
      }
      selectedTags.forEach(tag => params.append('tag', tag));
      setSearchParams(params);
    } else {
      setSearchParams({});
    }
  }, [activeTab, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev : [...prev, tag]
    );
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  const clearTags = () => {
    setSelectedTags([]);
    setSearchParams({});
  };

  const tabs = [
    { id: 'all' as TabType, label: 'All', icon: BookOpen },
    { id: 'project' as TabType, label: 'Projects', icon: Code },
    { id: 'note' as TabType, label: 'Notes', icon: Lightbulb },
  ];

  const filteredEntries = React.useMemo(() => {
    let entries = activeTab === 'all' ? JOURNAL_ENTRIES : JOURNAL_ENTRIES.filter(e => e.type === activeTab);
    if (selectedTags.length > 0) {
      entries = entries.filter(e => e.tech?.some(t => selectedTags.includes(t)));
    }
    return entries;
  }, [activeTab, selectedTags]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Navigation</h3>
          <nav className="space-y-1">
            {SITE_LINKS.map(link => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
                  onClick={onClose}
                >
                  {link.icon && <link.icon size={14} />}
                  {link.name}
                  <sup className="text-[10px]">↗</sup>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    link.url === '/garden' 
                      ? 'text-[var(--accent-olive)] bg-[var(--accent-olive)]/10' 
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                  }`}
                  onClick={onClose}
                >
                  {link.icon && <link.icon size={14} />}
                  {link.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Topics</h3>
            {selectedTags.length > 0 && (
              <button onClick={clearTags} className="text-xs text-[var(--accent-olive)] hover:text-[var(--accent-moss)]">
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.slice(0, 15).map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-md text-xs font-medium border transition-all ${
                  selectedTags.includes(tag)
                    ? getTagStyle(tag)
                    : 'text-[var(--color-text-muted)] bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--accent-olive)]/50'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Connect</h3>
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--color-text-muted)] ${link.color} hover:bg-[var(--color-surface)] transition-colors`}
              >
                <PixelIcon type={link.icon} size={14} />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--color-border)]">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </aside>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[var(--accent-olive)] border-t-transparent rounded-full animate-spin" />
          <p className="text-[var(--color-text-muted)] font-bold text-sm uppercase tracking-widest">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--accent-olive)]/30">
      <BackToTop />
      
      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">
        <div className="flex-1 min-w-0">
          <header className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-black font-serif text-[var(--color-text)]">
                  The Garden
                </h1>
              </div>
              <nav className="flex items-center gap-2 text-sm font-medium">
                <Link to="/garden" className="text-[var(--accent-olive)] hover:text-[var(--accent-moss)] hover:underline underline-offset-4 transition-colors">
                  Garden
                </Link>
                <span className="text-[var(--color-text-muted)]">→</span>
                <span className="text-[var(--color-text)]">
                  {activeTab === 'all' ? 'All Posts' : activeTab === 'project' ? 'Projects' : 'Notes'}
                </span>
              </nav>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
              {filteredEntries.length} posts · A collection of my projects & notes
            </p>
            
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {selectedTags.length > 1 && (
                  <button 
                    onClick={clearTags}
                    className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-tomato)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:underline-offset-2 transition-all"
                  >
                    Clear All
                  </button>
                )}
                {selectedTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => removeTag(tag)}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium border-b-2 border-[var(--accent-olive)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--accent-olive)] hover:text-white transition-all group"
                  >
                    <Hash size={12} />
                    <span>{tag}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">✕</span>
                  </button>
                ))}
              </div>
            )}
          </header>

          <nav className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-[var(--color-border)]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors whitespace-nowrap font-serif ${
                  activeTab === tab.id 
                    ? 'text-[var(--accent-olive)] underline decoration-2 decoration-[var(--accent-olive)] underline-offset-4' 
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredEntries.map((entry, index) => (
                <motion.article
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group"
                >
                    <Link 
                    to={`/journal/${entry.id}`}
                    className="block p-5 -mx-5 rounded-none hover:bg-[var(--color-surface)] transition-all hover:shadow-lg hover:shadow-[var(--accent-olive)]/5 border-b-2 border-transparent hover:border-[var(--accent-olive)]"
                  >
                    <div className="flex gap-5">
                      {entry.image && (
                        <div className="w-28 h-24 flex-shrink-0 rounded-none overflow-hidden bg-gradient-to-br from-[var(--accent-olive)]/20 to-[var(--accent-moss)]/20">
                          <img 
                            src={entry.image} 
                            alt="" 
                            loading="lazy"
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 text-xs">
                          <span className={`px-2 py-0.5 font-medium border-b-2 ${
                            entry.type === 'project' ? 'border-[var(--accent-tomato)] text-[var(--accent-tomato)] bg-[var(--accent-tomato)]/10' :
                            'border-[var(--accent-olive)] text-[var(--accent-olive)] bg-[var(--accent-olive)]/10'
                          }`}>
                            {entry.type === 'project' ? 'Project' : 'Note'}
                          </span>
                          <span className="text-[var(--color-text-muted)] italic text-sm">{formatDate(entry.date)}</span>
                          <span className="text-[var(--color-text-muted)] flex items-center gap-1">
                            <Clock size={12} />
                            {entry.readingTime}m
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-2 text-[var(--color-text)] font-serif hover:underline decoration-2 decoration-[var(--accent-tomato)] underline-offset-4 transition-all">
                          {entry.title}
                        </h2>
                        
                        <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 mb-3">
                          {entry.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {entry.tech?.slice(0, 5).map(tech => (
                            <button 
                              key={tech} 
                              onClick={(e) => { e.preventDefault(); toggleTag(tech); }}
                              className={`px-2 py-0.5 text-[10px] font-medium border-b-2 transition-all hover:underline hover:decoration-2 hover:underline-offset-2 cursor-pointer font-serif ${
                                selectedTags.includes(tech)
                                  ? 'bg-[var(--accent-olive)] text-white border-[var(--accent-olive)]'
                                  : 'text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)]'
                              }`}
                            >
                              #{tech}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredEntries.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-muted)] mb-4 font-serif">No posts found.</p>
              <button onClick={clearTags} className="text-[var(--accent-olive)] hover:text-[var(--accent-moss)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 font-serif transition-all">
                Clear filters
              </button>
            </div>
          )}

          <footer className="mt-16 pt-8 border-t border-[var(--color-border)] text-center" />
        </div>
        
        <div className="flex justify-center py-8 px-4">
          <div className="inline-block p-2 border-2 border-[var(--color-border)] rounded-none">
            <img 
              src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
              alt="" 
              className="w-48 h-32 md:w-56 md:h-36 object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors inline-block relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/garden" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors inline-block relative group">
                Garden
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </Link>
              <a href="/rss.xml" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors inline-block relative group">
                RSS Feed
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://github.com/Je0Dev" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors inline-block relative group">
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-center">
            <Link to="/" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors inline-block relative group">
              © 2026 George's Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--color-border)] text-center">
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--accent-olive)]">✦</span> Images by <a href="https://www.oldbookillustrations.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all">Old Book Illustrations</a> — Vintage illustrations for a timeless aesthetic.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};