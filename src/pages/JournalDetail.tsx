import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Clock, ArrowLeft, ArrowRight, Link as LinkIcon, Copy, Check, Menu, X, Rss, ExternalLink, BookOpen, Code, Cpu, Home, List } from 'lucide-react';

import { JOURNAL_ENTRIES } from '../data/entries';
import { StatusIcon, Tag, ThemeToggle } from '../components/UIComponents';
import { JournalCard } from '../components/CardComponents';

const PixelIcon = ({ type, size = 16 }: { type: string, size?: number }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6V11H6V6H4ZM5 4.5C5.5 4.5 6 4 6 3.5C6 3 5.5 2.5 5 2.5C4.5 2.5 4 3 4 3.5C4 4 4.5 4.5 5 4.5ZM6 12V7.5C6 7 6.5 6.5 7 6.5C7.5 6.5 8 7 8 7.5V12H10V7C10 6 9.5 5.5 8.5 5.5C8 5.5 7.5 5.7 7 6V6H7C7.5 6 6 6 6 7V12H6Z" fill="currentColor"/>
      </svg>
    ),
    twitter: (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.5C12 3.2 11.9 2.9 11.8 2.7L11.6 2.4L11.3 2.5C10.9 2.6 10.5 2.7 10.1 2.8L9.8 2.7L9.5 2.8C9.1 2.9 8.7 3 8.3 3.1L8.1 3.2L7.9 3.1C7.5 3 7.1 2.9 6.7 2.8L6.4 2.7L6.2 2.8C5.8 2.9 5.5 3 5.1 3.2L4.9 3.3L4.7 3.2C4.3 3.1 3.9 3 3.6 2.9L3.3 2.8L3.2 2.9C2.8 3 2.5 3.1 2.2 3.2L2 3.3L2.3 3.5C2.6 3.7 2.9 3.9 3.3 4.1L3.5 4.2L3.3 4.3C3 4.5 2.8 4.7 2.5 4.9L2.3 5L2.5 5.2C2.8 5.5 3.1 5.8 3.5 6.1L3.7 6.2L3.5 6.3C3.2 6.5 3 6.7 2.8 7L2.6 7.1L2.8 7.3C3.1 7.6 3.4 7.9 3.8 8.2L4 8.3L3.8 8.4C3.5 8.6 3.3 8.8 3.1 9.1L2.9 9.2L3.1 9.4C3.4 9.7 3.7 10 4.1 10.3L4.3 10.4L4.1 10.5C3.8 10.7 3.6 10.9 3.4 11.2L3.2 11.3L3.4 11.5C3.7 11.8 4 12.1 4.4 12.4L4.6 12.5L4.4 12.6C4.1 12.8 3.9 13 3.7 13.3L3.5 13.4L3.8 13.6L11 6.5L11 3.5L12 3.5Z" fill="currentColor"/>
      </svg>
    ),
  };
  return <span className="pixel-icon">{icons[type]}</span>;
};

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Je0Dev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/geomas', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];

const SITE_LINKS = [
  { name: 'About', url: '/', icon: BookOpen },
  { name: 'Garden', url: '/garden', icon: Code },
  { name: 'RSS Feed', url: '/rss.xml', icon: Rss },
  { name: 'Personal Website', url: 'https://je0dev.github.io/personal_website/', icon: ExternalLink, external: true },
];

const LinkPreview = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  return (
    <span className="relative inline-block">
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-[var(--accent-tomato)] font-bold underline decoration-[var(--accent-brown)]/30 underline-offset-4 hover:decoration-[var(--accent-tomato)] transition-all"
      >
        {children}
        {isExternal && <sup className="ml-0.5 text-[10px]">↗</sup>}
      </a>
    </span>
  );
};

const CodeBlock = ({ children, language, ...props }: any) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeTheme: Record<string, { border: string, gradient: string }> = {
    javascript: { border: 'border-[var(--accent-amber)]', gradient: 'from-yellow-400 to-orange-500' },
    typescript: { border: 'border-[var(--accent-olive)]', gradient: 'from-[var(--accent-olive)] to-[var(--accent-moss)]' },
    python: { border: 'border-[var(--accent-moss)]', gradient: 'from-[var(--accent-moss)] to-[var(--accent-olive)]' },
    c: { border: 'border-[var(--accent-rust)]', gradient: 'from-[var(--accent-rust)] to-[var(--accent-tomato)]' },
    cpp: { border: 'border-[var(--accent-brown)]', gradient: 'from-[var(--accent-brown)] to-[var(--accent-clay)]' },
    rust: { border: 'border-[var(--accent-tomato)]', gradient: 'from-[var(--accent-tomato)] to-[var(--accent-rust)]' },
    go: { border: 'border-[var(--accent-olive)]', gradient: 'from-[var(--accent-olive)] to-[var(--accent-moss)]' },
    java: { border: 'border-[var(--accent-rust)]', gradient: 'from-[var(--accent-rust)] to-[var(--accent-brown)]' },
    bash: { border: 'border-[var(--accent-moss)]', gradient: 'from-[var(--accent-moss)] to-[var(--accent-olive)]' },
    zig: { border: 'border-[var(--accent-amber)]', gradient: 'from-[var(--accent-amber)] to-[var(--accent-brown)]' },
    csharp: { border: 'border-[var(--accent-clay)]', gradient: 'from-[var(--accent-clay)] to-[var(--accent-sepia)]' },
  };

  const theme = codeTheme[language?.toLowerCase()] || { border: 'border-[var(--accent-olive)]', gradient: 'from-[var(--accent-olive)] to-[var(--accent-moss)]' };

  return (
    <div className={`relative group/code my-8 rounded-xl border-2 ${theme.border} overflow-hidden`}>
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-bg)] border-b border-[var(--color-border)] px-4 py-2 flex items-center justify-between z-10">
        <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${theme.gradient} shadow-lg`}>
          {language}
        </div>
        <button 
          onClick={handleCopy}
          className="p-1.5 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        style={atomDark}
        language={language}
        PreTag="div"
        className="rounded-none !bg-[#0d1117] !p-5 pt-12 text-sm"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

export const JournalDetail = ({ isDark, onThemeToggle }: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const [copiedLink, setCopiedLink] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [showToc, setShowToc] = useState(false);
  
  const entryIndex = JOURNAL_ENTRIES.findIndex(e => e.id === id);
  const entry = JOURNAL_ENTRIES[entryIndex];

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  const prevEntry = entryIndex > 0 ? JOURNAL_ENTRIES[entryIndex - 1] : null;
  const nextEntry = entryIndex < JOURNAL_ENTRIES.length - 1 ? JOURNAL_ENTRIES[entryIndex + 1] : null;

  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = React.useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100));
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const relatedEntries = useMemo(() => {
    if (!entry) return [];
    return JOURNAL_ENTRIES
      .filter(e => e.id !== entry.id)
      .sort((a, b) => {
        let scoreA = 0, scoreB = 0;
        if (a.category === entry.category) scoreA += 3;
        if (b.category === entry.category) scoreB += 3;
        if (a.type === entry.type) scoreA += 2;
        if (b.type === entry.type) scoreB += 2;
        const commonTechA = a.tech.filter(t => entry.tech.includes(t)).length;
        const commonTechB = b.tech.filter(t => entry.tech.includes(t)).length;
        scoreA += commonTechA;
        scoreB += commonTechB;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, 2);
  }, [entry]);

  const tableOfContents = useMemo(() => {
    if (!entry) return [];
    const headings: { id: string; text: string; level: number }[] = [];
    const headingRegex = /^#{1,3}\s+(.+)$/gm;
    let match;
    while ((match = headingRegex.exec(entry.content)) !== null) {
      const text = match[1].trim();
      const level = match[0].match(/^#+/)?.[0].length || 2;
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ id, text, level });
    }
    return headings;
  }, [entry]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <aside className="w-56 flex-shrink-0">
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
                  {link.icon && <link.icon size={14} className="text-current" />}
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
                  {link.icon && <link.icon size={14} className="text-current" />}
                  {link.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        {tableOfContents.length > 0 && (
          <div>
            <button
              onClick={() => setShowToc(!showToc)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors w-full"
            >
              <List size={14} />
              Table of Contents
              <span className={`ml-auto transition-transform ${showToc ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {showToc && (
              <nav className="mt-2 space-y-1 max-h-64 overflow-y-auto">
                {tableOfContents.map(heading => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block px-3 py-1.5 text-xs transition-colors hover:text-[var(--accent-olive)] ${
                      heading.level === 2 ? 'text-[var(--color-text-muted)]' : 'pl-6 text-[var(--color-text-muted)]/70'
                    }`}
                    onClick={onClose}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            )}
          </div>
        )}

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Connect</h3>
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
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
          <div className="w-8 h-8 border-3 border-[var(--accent-olive)] border-t-transparent rounded-full animate-spin" />
          <p className="text-[var(--color-text-muted)] text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!entry) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[var(--color-bg)]">
      <h1 className="text-3xl font-bold font-serif text-[var(--color-text)]">Post not found</h1>
      <button onClick={() => navigate('/garden')} className="px-6 py-3 bg-[var(--accent-olive)] rounded-none font-bold hover:bg-[var(--accent-moss)] hover:underline hover:decoration-2 hover:underline-offset-4 transition-all">
        Back to Garden
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--accent-olive)]/30">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-tomato)] z-50 origin-left"
        style={{ scaleX }}
      />
      
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-50 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside 
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              className="lg:hidden fixed top-0 right-0 h-full w-72 bg-[var(--color-bg)] border-l border-[var(--color-border)] z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-20 flex gap-12">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <article className="flex-1 min-w-0">
          <Link 
            to="/garden" 
            className="inline-flex items-center gap-2 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Garden
          </Link>

          <nav className="flex items-center gap-2 text-sm font-medium mb-6 pb-4 border-b border-[var(--color-border)]">
            <Link to="/garden" className="text-[var(--accent-olive)] hover:text-[var(--accent-moss)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-colors font-serif">
              Garden
            </Link>
            <span className="text-[var(--color-text-muted)]">→</span>
            <span className="text-[var(--color-text)] font-serif">
              {entry.type === 'project' ? 'Project' : 'Note'}: {entry.title}
            </span>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4 text-sm text-[var(--color-text-muted)]">
              <StatusIcon status={entry.status} />
              <span className="px-2 py-0.5 font-medium border-b-2 border-[var(--accent-olive)] bg-[var(--accent-olive)]/10 text-[var(--accent-olive)]">
                {entry.type === 'project' ? 'Project' : 'Note'}
              </span>
              <span>·</span>
              <span className="italic">{formatDate(entry.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {entry.readingTime} min read
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 font-serif">
              <span className="text-[var(--color-text)] underline decoration-2 decoration-[var(--accent-tomato)] underline-offset-4">
                {entry.title}
              </span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              {entry.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {entry.tech.map((t: string) => (
                <Tag 
                  key={t} 
                  text={t} 
                  onClick={() => navigate(`/garden?tag=${t}`)}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
              <span className="text-sm text-[var(--color-text-muted)] font-serif underline decoration-[var(--color-border)] underline-offset-4">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(entry.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all border-b-2 border-transparent hover:border-[var(--accent-olive)]"
              >
                <PixelIcon type="twitter" size={16} />
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm font-serif text-[var(--color-text-muted)] hover:text-blue-400 hover:underline hover:decoration-2 hover:decoration-blue-400 hover:underline-offset-4 transition-all border-b-2 border-transparent hover:border-blue-400"
              >
                <PixelIcon type="linkedin" size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Je0Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all border-b-2 border-transparent hover:border-[var(--accent-olive)]"
              >
                <PixelIcon type="github" size={16} />
                <span>GitHub</span>
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-3 py-1 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all border-b-2 border-transparent hover:border-[var(--accent-olive)]"
              >
                <LinkIcon size={16} />
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </header>

          {entry.image && (
            <div className="mb-8 rounded-xl overflow-hidden cursor-zoom-in" onClick={() => setZoomImage(entry.image!)}>
              <img 
                src={entry.image} 
                alt="" 
                loading="lazy" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                h2({ children }: any) {
                  const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h2 id={id} className="text-2xl font-bold font-serif mt-12 mb-4">{children}</h2>;
                },
                h3({ children }: any) {
                  const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return <h3 id={id} className="text-xl font-bold font-serif mt-8 mb-3">{children}</h3>;
                },
                a({ href, children, className, class: classAttr, ...props }: any) {
                  const classes = className || classAttr || '';
                  if (classes.includes('inline-link')) {
                    const colorClass = classes.split(' ').find(c => c.startsWith('link-'));
                    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
                    return (
                      <a 
                        href={href} 
                        target={props.target || (isExternal ? '_blank' : undefined)}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`inline-link ${colorClass || 'link-green'}`}
                      >
                        {children}
                      </a>
                    );
                  }
                  return <LinkPreview href={href}>{children}</LinkPreview>;
                },
                span({ children, className, class: classAttr, ...props }: any) {
                  const classes = className || classAttr || '';
                  if (classes.includes('inline-link')) {
                    const colorClass = classes.split(' ').find(c => c.startsWith('link-'));
                    const href = props.href;
                    const target = props.target;
                    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
                    const finalTarget = target || (isExternal ? '_blank' : undefined);
                    
                    if (href) {
                      return (
                        <a 
                          href={href} 
                          target={finalTarget}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`inline-link ${colorClass || 'link-green'}`}
                        >
                          {children}
                        </a>
                      );
                    }
                    return (
                      <span className={`inline-link ${colorClass || 'link-green'}`}>
                        {children}
                      </span>
                    );
                  }
                  return <span {...props}>{children}</span>;
                },
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <CodeBlock language={match[1]} {...props}>
                      {children}
                    </CodeBlock>
                  ) : (
                    <code className="bg-[var(--color-surface)] px-1.5 py-0.5 rounded text-pink-400 font-mono text-sm" {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {entry.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-lg font-bold font-serif mb-6">More from the garden</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedEntries.map(e => (
                <JournalCard key={e.id} {...e} />
              ))}
            </div>
          </div>

          <nav className="mt-12 pt-8 border-t border-[var(--color-border)] flex justify-between items-start">
            {prevEntry ? (
              <Link 
                to={`/journal/${prevEntry.id}`}
                className="group flex flex-col gap-1"
              >
                <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="font-bold font-serif group-hover:text-[var(--accent-olive)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all">{prevEntry.title}</span>
              </Link>
            ) : <div />}
            
            {nextEntry && (
              <Link 
                to={`/journal/${nextEntry.id}`}
                className="group flex flex-col items-end gap-1 text-right"
              >
                <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                  Next <ArrowRight size={12} />
                </span>
                <span className="font-bold font-serif group-hover:text-[var(--accent-olive)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all">{nextEntry.title}</span>
              </Link>
            )}
          </nav>

          <div className="mt-12 flex justify-center py-8">
            <img 
              src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
              alt="" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover opacity-30 rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-none bg-[var(--color-surface)] border-b-2 border-[var(--color-border)]">
              <div className="flex items-center gap-3">
                <Link 
                  to="/garden" 
                  className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:underline-offset-4 transition-all font-serif"
                >
                  <Home size={18} />
                  <span className="font-bold">Back to Garden</span>
                </Link>
              </div>
              <Link 
                to="/" 
                className="px-4 py-2 rounded-none bg-[var(--color-bg)] border-b-2 border-[var(--color-border)] text-[var(--color-text)] font-bold text-sm hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
              >
                Go to About
              </Link>
            </div>
          </div>
        </article>

        <AnimatePresence>
          {zoomImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setZoomImage(null)}
            >
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={zoomImage}
                alt=""
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setZoomImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};