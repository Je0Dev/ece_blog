import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Check, Search, X, Menu, LayoutTemplate, BookOpen, FlaskConical, 
  FileText, Layers, Gamepad2, Activity, Sparkles
} from 'lucide-react';
import { ThemeToggle } from './UIComponents';
import { StatusIcon } from './UIComponents';
import { JOURNAL_ENTRIES } from '../data/entries';

export const ContactForm = React.memo(() => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-xl bg-[var(--color-surface)] p-8 rounded-3xl border border-[var(--color-border)] shadow-2xl relative z-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-left">
          <label htmlFor="name" className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all"
            placeholder="Your Name"
          />
        </div>
        <div className="space-y-2 text-left">
          <label htmlFor="email" className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div className="space-y-2 text-left">
          <label htmlFor="message" className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all resize-none"
            placeholder="What's on your mind?"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 cursor-star-glove ${
            status === 'success' 
              ? 'bg-emerald-500 text-white' 
              : 'bg-white text-black hover:bg-zinc-200 hover:-translate-y-1 active:translate-y-0'
          } disabled:opacity-70 disabled:hover:translate-y-0`}
        >
          {status === 'idle' && <><Send size={20} /> Send Message</>}
          {status === 'sending' && <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />}
          {status === 'success' && <><Check size={20} /> Message Sent!</>}
          {status === 'error' && "Something went wrong"}
        </button>
      </form>
    </div>
  );
});

export const GlobalSearch = React.memo(({ entries }: { entries: any[] }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const results = query.trim() === "" ? [] : entries.filter(e => 
    e.title.toLowerCase().includes(query.toLowerCase()) || 
    e.category.toLowerCase().includes(query.toLowerCase()) ||
    e.tech.some((t: string) => t.toLowerCase().includes(query.toLowerCase()))
  ).map(e => ({
    ...e,
    matchedTags: e.tech?.filter((t: string) => t.toLowerCase().includes(query.toLowerCase())) || []
  }));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input 
          type="text"
          placeholder="Search garden..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full sm:w-64 bg-black/20 border border-[var(--color-border)] rounded-xl py-2 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all placeholder:text-zinc-600"
        />
        {query && (
          <button 
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && query && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 w-full sm:w-96 right-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto p-2 no-scrollbar">
                {results.map(result => (
                  <button
                    key={result.id}
                    onClick={() => {
                      navigate(`/journal/${result.id}`);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="w-full text-left p-4 rounded-xl hover:bg-[var(--color-bg)] transition-all group flex items-start gap-4"
                  >
                    <div className="mt-1"><StatusIcon status={result.status} /></div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[var(--accent-olive)] transition-colors text-sm">{result.title}</h4>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500 uppercase tracking-widest">
                        <span>{result.category}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>{result.type}</span>
                      </div>
                      {result.matchedTags && result.matchedTags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.matchedTags.map((tag: string) => (
                            <span key={tag} className="px-1.5 py-0.5 rounded bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold text-[var(--accent-olive)] uppercase tracking-wider">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-zinc-500 font-bold text-sm">
                No results found for "{query}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export const SidebarLink = React.memo(({ active, onClick, icon: Icon, text, color }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all group relative overflow-hidden ${active ? "text-white bg-white/5" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
  >
    {active && (
      <motion.div 
        layoutId={`sidebar-active-${text}`}
        className={`absolute inset-0 ${color} opacity-10`}
      />
    )}
    <Icon size={18} className={`transition-colors ${active ? "text-white" : "group-hover:text-white"}`} />
    <span className="relative z-10">{text}</span>
    {active && (
      <motion.div 
        layoutId={`sidebar-dot-${text}`}
        className={`absolute right-4 w-1.5 h-1.5 rounded-full ${color}`}
      />
    )}
  </button>
));

export const HighlightMatch = React.memo(({ text, query }: { text: string, query: string }) => {
  if (!query || !text) return <>{text}</>;
  try {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          i % 2 === 1 ? (
            <span key={i} className="bg-[var(--accent-olive)]/30 text-[var(--accent-olive)] font-bold px-0.5 rounded-sm shadow-[0_0_10px_rgba(93,112,66,0.3)] border border-[var(--accent-olive)]/20">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  } catch (e) {
    return <>{text}</>;
  }
});

export const SearchModal = React.memo(({ isOpen, onClose, entries }: { isOpen: boolean, onClose: () => void, entries: any[] }) => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'notes'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(-1);
    } else {
      setQuery("");
      setSuggestion("");
      setSelectedIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(-1);
    if (query.trim().length > 0) {
      const allPossibleMatches = [
        ...new Set(entries.flatMap(e => [e.title, ...(e.tech || []), e.category]))
      ];
      const match = allPossibleMatches.find(m => 
        m.toLowerCase().startsWith(query.toLowerCase()) && m.toLowerCase() !== query.toLowerCase()
      );
      if (match) {
        setSuggestion(query + match.slice(query.length));
      } else {
        setSuggestion("");
      }
    } else {
      setSuggestion("");
    }
  }, [query, entries]);

  const { groupedResults, flattenedResults } = React.useMemo(() => {
    const grouped: Record<string, any[]> = {};
    const flattened: any[] = [];
    
    // Filter entries by type based on activeTab
    const filteredEntries = activeTab === 'all' 
      ? entries 
      : entries.filter((e: any) => e.type === activeTab.slice(0, -1)); // 'projects' -> 'project', 'notes' -> 'note'
    
    if (query.trim().length > 0) {
      try {
        const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        filteredEntries.forEach((entry: any) => {
          const matchesTitle = regex.test(entry.title);
          const matchesExcerpt = regex.test(entry.excerpt);
          const matchesContent = regex.test(entry.content);
          const matchedTags = entry.tech?.filter((t: string) => regex.test(t)) || [];
          const matchesTags = matchedTags.length > 0;

          if (matchesTitle || matchesExcerpt || matchesContent || matchesTags) {
            const groupKey = `${entry.category || 'Uncategorized'} > ${entry.type || 'Entry'}`;
            if (!grouped[groupKey]) grouped[groupKey] = [];
            const resultItem = { ...entry, matchedTags };
            grouped[groupKey].push(resultItem);
            flattened.push(resultItem);
          }
        });
      } catch (e) {
        // Invalid regex, ignore
      }
    } else {
      // Show recent entries when query is empty
      const recent = [...filteredEntries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
      recent.forEach((entry: any) => {
        const groupKey = "Recent Activity";
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(entry);
        flattened.push(entry);
      });
    }
    return { groupedResults: grouped, flattenedResults: flattened };
  }, [query, entries]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && suggestion) {
        e.preventDefault();
        setQuery(suggestion);
        setSuggestion("");
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < flattenedResults.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === 'Enter') {
        if (selectedIndex >= 0) {
          e.preventDefault();
          const selectedItem = flattenedResults[selectedIndex];
          if (selectedItem) {
            navigate(`/journal/${selectedItem.id}`);
            onClose();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, suggestion, selectedIndex, flattenedResults, navigate]);

  useEffect(() => {
    if (selectedIndex >= 0) {
      const selectedElement = document.querySelector('[data-selected="true"]');
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  let itemIndex = 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-4xl bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-none shadow-2xl overflow-hidden flex max-h-[65vh]"
      >
        {/* Sidebar */}
        <div className="w-48 border-r border-[var(--color-border)] bg-[var(--color-bg)]/30 p-4 hidden md:block">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-4 font-serif">Quick Links</h3>
          <nav className="space-y-2">
            {[
              { label: 'About', path: '/' },
              { label: 'Garden', path: '/garden' },
              { label: 'Projects', path: '/garden?type=project' },
              { label: 'Notes', path: '/garden?type=note' },
              { label: 'RSS Feed', path: '/rss.xml', external: true },
            ].map(link => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={onClose}
                  className="block px-3 py-2 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-center px-6 py-4 border-b-2 border-[var(--color-border)] relative bg-[var(--color-bg)]/50">
            <div className="relative">
              <Search size={24} className="text-[var(--accent-olive)] mr-4" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--accent-olive)] rounded-full" />
            </div>
            <div className="flex-1 relative">
              {suggestion && (
                <div className="absolute inset-0 flex items-center text-xl pointer-events-none">
                  <span className="text-transparent">{query}</span>
                  <span className="text-[var(--color-text-muted)]/50">{suggestion.slice(query.length)}</span>
                  <span className="ml-2 text-[10px] bg-[var(--color-surface)] text-[var(--color-text-muted)] px-1.5 py-0.5 rounded border border-[var(--color-border)] font-mono">TAB</span>
                </div>
              )}
              <input 
                ref={inputRef}
                type="text"
                placeholder="Search the garden..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-xl text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 relative z-10 font-serif"
              />
            </div>
            <button onClick={onClose} className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] rounded-none transition-colors border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)]">
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-0 px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]/30">
            {[
              { id: 'all', label: 'All' },
              { id: 'projects', label: 'Projects' },
              { id: 'notes', label: 'Notes' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-sm font-bold font-serif transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[var(--accent-olive)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent-olive)] rounded-full" />
                )}
              </button>
            ))}
          </div>

        <div className="overflow-y-auto p-4 no-scrollbar flex-1 scroll-smooth">
          {flattenedResults.length > 0 ? (
            <div className="flex flex-col gap-6">
              {Object.entries(groupedResults).map(([groupPath, items]) => (
                <div key={groupPath} className="space-y-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)] px-2 flex items-center gap-2 font-serif">
                    <span className="text-[var(--accent-olive)]">#</span> {groupPath}
                  </div>
                  <div className="flex flex-col gap-1">
                    {items.map(item => {
                      const currentIndex = itemIndex++;
                      const isSelected = currentIndex === selectedIndex;
                      return (
                          <Link 
                           key={item.id}
                           to={`/journal/${item.id}`}
                           onClick={onClose}
                           data-selected={isSelected}
                           className={`flex flex-col gap-1 px-4 py-4 rounded-none transition-all group border-b-2 ${
                             isSelected 
                               ? "bg-[var(--accent-olive)]/10 border-[var(--accent-olive)] ring-1 ring-[var(--accent-olive)]/30" 
                               : "border-transparent hover:border-[var(--accent-olive)] hover:bg-[var(--color-bg)]"
                           }`}
                         >
                           <span className={`text-base font-bold font-serif transition-all ${
                             isSelected 
                               ? "text-[var(--accent-olive)] underline decoration-2 decoration-[var(--accent-olive)] underline-offset-4" 
                               : "text-[var(--color-text)] group-hover:text-[var(--accent-olive)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4"
                           }`}>
                             <HighlightMatch text={item.title} query={query} />
                           </span>
                          <span className="text-sm text-[var(--color-text-muted)] line-clamp-2 font-serif">
                            <HighlightMatch text={item.excerpt} query={query} />
                          </span>
                          
                          {item.matchedTags && item.matchedTags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {item.matchedTags.map((tag: string) => (
                                <span key={tag} className="px-2 py-0.5 rounded-none bg-[var(--accent-olive)]/10 border-b-2 border-[var(--accent-olive)]/20 text-[10px] font-bold text-[var(--accent-olive)] uppercase tracking-wider font-serif">
                                  #<HighlightMatch text={tag} query={query} />
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-2 text-[10px] text-[var(--color-text-muted)] italic flex items-center gap-1.5 font-serif">
                            <span className="text-[var(--accent-brown)]">•</span>
                            {item.tech && item.tech.length > 0
                              ? `${item.tech.slice(0, 3).join(' • ')}`
                              : `A ${item.readingTime} min read on ${item.category}`}
                          </div>

                          {item.content && query.trim().length > 0 && new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(item.content) && !new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(item.title) && !new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(item.excerpt) && (
                            <span className="text-xs text-[var(--color-text-muted)]/70 line-clamp-1 mt-1 italic">
                              ...<HighlightMatch text={item.content.substring(Math.max(0, item.content.toLowerCase().indexOf(query.toLowerCase()) - 30), item.content.toLowerCase().indexOf(query.toLowerCase()) + query.length + 30)} query={query} />...
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-[var(--color-text-muted)] font-bold">
              {query.trim().length > 0 ? `No results found for "${query}"` : "Start typing to search across all entries..."}
            </div>
          )}
        </div>
        </div>
      </motion.div>
    </div>
  );
});

export const SidebarNav = React.memo(({ categories, tags, availableTypes, hasHobbies, hasActivity, selectedFilters = [], onFilterToggle, isOpen, onToggle, isDark, onThemeToggle }: any) => {
  const filteredCategories = categories;
  const filteredTags = tags || [];
  
  const navLinks = [
    { icon: LayoutTemplate, text: "All Garden", filter: "All", color: "bg-[var(--accent-olive)]" },
    { icon: BookOpen, text: "Essays", filter: "essay", color: "bg-blue-500" },
    { icon: FlaskConical, text: "Lab Notes", filter: "lab-note", color: "bg-orange-500" },
    { icon: FileText, text: "Notes", filter: "note", color: "bg-emerald-500" },
    { icon: Layers, text: "Projects", filter: "project", color: "bg-pink-500" },
    { icon: Gamepad2, text: "Hobbies", filter: "Hobbies", color: "bg-yellow-500" },
    { icon: Activity, text: "Activity", filter: "activity", color: "bg-cyan-500" },
  ].filter(link => {
    if (link.filter === "All") return true;
    if (link.filter === "Hobbies") return hasHobbies;
    if (link.filter === "activity") return hasActivity;
    return availableTypes?.includes(link.filter);
  });

  return (
    <>
    {/* Mobile Toggle Button */}
    <button 
      onClick={onToggle}
      className="lg:hidden fixed bottom-8 left-8 z-[60] w-14 h-14 rounded-2xl bg-white text-black shadow-2xl flex items-center justify-center hover:-translate-y-1 active:translate-y-0 transition-all border-2 border-black"
      aria-label="Toggle Sidebar"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    {/* Sidebar Overlay */}
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggle}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
        />
      )}
    </AnimatePresence>

    <aside className={`
      fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-fit w-72 lg:w-80 bg-[var(--color-bg)] lg:bg-transparent z-[56] lg:z-0
      p-8 lg:p-0 border-r border-[var(--color-border)] lg:border-none transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      flex flex-col gap-12 overflow-y-auto no-scrollbar gliding-sidebar
    `}>
      <div className="flex items-center justify-between lg:hidden mb-2">
        <span className="text-xl font-black text-white">Navigation</span>
        <button onClick={onToggle} className="text-zinc-400 hover:text-white"><X size={24} /></button>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4">Navigation</h3>
        <nav className="flex flex-col gap-2">
          {navLinks.map(link => {
            const isActive = link.filter === "All" ? selectedFilters.length === 0 : selectedFilters.includes(link.filter);
            return (
              <SidebarLink 
                key={link.text}
                active={isActive} 
                onClick={() => { 
                  if (link.filter === 'activity') {
                    const activitySection = document.getElementById('activity');
                    if (activitySection) activitySection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onFilterToggle(link.filter); 
                  }
                  if(window.innerWidth < 1024) onToggle(); 
                }}
                icon={link.icon} 
                text={link.text} 
                color={link.color}
              />
            );
          })}
        </nav>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4">View Mode</h3>
        <div className="px-4">
          <button 
            onClick={() => onFilterToggle('Projects Only')}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
              selectedFilters.includes('Projects Only')
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <FlaskConical size={16} className={selectedFilters.includes('Projects Only') ? "text-cyan-400" : "text-zinc-600"} />
              <span className="text-xs font-black uppercase tracking-widest">Projects Only</span>
            </div>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${selectedFilters.includes('Projects Only') ? "bg-cyan-500" : "bg-zinc-800"}`}>
              <div className={`absolute top-1 w-2 h-2 rounded-full bg-white transition-all ${selectedFilters.includes('Projects Only') ? "left-5" : "left-1"}`} />
            </div>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4">Topics</h3>
        <nav className="flex flex-col gap-1">
          {filteredCategories.filter((c: string) => c !== "All").map((category: string) => (
            <button 
              key={category}
              onClick={() => { onFilterToggle(category); if(window.innerWidth < 1024) onToggle(); }}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl font-bold transition-all text-left group ${selectedFilters.includes(category) ? "text-white bg-white/5" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-all ${selectedFilters.includes(category) ? "bg-[var(--accent-olive)] scale-125" : "bg-zinc-800 group-hover:bg-zinc-600"}`} />
              {category}
            </button>
          ))}
        </nav>
      </div>

      {filteredTags.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Tags</h3>
            {selectedFilters.length > 0 && (
              <button 
                onClick={() => onFilterToggle("CLEAR_ALL")}
                className="text-[9px] font-black uppercase tracking-widest text-[var(--accent-olive)] hover:text-[var(--accent-moss)] transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
          <nav className="flex flex-wrap gap-2 px-4">
            {filteredTags.map((tag: string) => {
              const count = JOURNAL_ENTRIES.filter(e => e.tech && e.tech.includes(tag)).length;
              return (
                <button 
                  key={tag}
                  onClick={() => { onFilterToggle(tag); if(window.innerWidth < 1024) onToggle(); }}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border flex items-center gap-2 ${
                    selectedFilters.includes(tag) 
                      ? "bg-[var(--accent-olive)]/20 border-[var(--accent-olive)]/50 text-[var(--accent-olive)]" 
                      : "bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span>#{tag}</span>
                  <span className={`text-[8px] opacity-50 ${selectedFilters.includes(tag) ? "text-[var(--accent-olive)]" : "text-zinc-600"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      <div className="mt-auto pt-8 border-t border-[var(--color-border)] lg:hidden">
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </aside>
  </>
  );
});
