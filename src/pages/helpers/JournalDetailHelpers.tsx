import React from 'react';
import { Link } from 'react-router-dom';
import { Rss, ExternalLink, BookOpen, Code, List } from 'lucide-react';
import { ThemeToggle } from '../../components/UIComponents';

export { PixelIcon } from './JournalHelpers';
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Je0Dev', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/geomas', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];

export const LinkPreview = ({ href, children }: { href: string, children: React.ReactNode }) => {
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

export const SITE_LINKS = [
  { name: 'About', url: '/', icon: BookOpen },
  { name: 'Garden', url: '/garden', icon: Code },
  { name: 'RSS Feed', url: '/rss.xml', icon: Rss },
  { name: 'Personal Website', url: 'https://je0dev.github.io/personal_website/', icon: ExternalLink, external: true },
];

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface JournalSidebarProps {
  tableOfContents: Heading[];
  showToc: boolean;
  onToggleToc: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onClose?: () => void;
}

export const JournalSidebar = React.memo(({
  tableOfContents,
  showToc,
  onToggleToc,
  isDark,
  onThemeToggle,
  onClose
}: JournalSidebarProps) => (
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
            onClick={onToggleToc}
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

      <div className="pt-4 border-t border-[var(--color-border)]">
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </div>
  </aside>
));

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const extractHeadings = (content: string): Heading[] => {
  const headings: Heading[] = [];
  const headingRegex = /^#{1,3}\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const level = match[0].match(/^#+/)?.[0].length || 2;
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    headings.push({ id, text, level });
  }
  return headings;
};

export const getRelatedEntries = (currentEntry: any, allEntries: any[], limit = 2) => {
  if (!currentEntry) return [];
  return allEntries
    .filter(e => e.id !== currentEntry.id)
    .sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      if (a.category === currentEntry.category) scoreA += 3;
      if (b.category === currentEntry.category) scoreB += 3;
      if (a.type === currentEntry.type) scoreA += 2;
      if (b.type === currentEntry.type) scoreB += 2;
      const commonTechA = a.tech.filter((t: string) => currentEntry.tech.includes(t)).length;
      const commonTechB = b.tech.filter((t: string) => currentEntry.tech.includes(t)).length;
      scoreA += commonTechA;
      scoreB += commonTechB;
      if (scoreB !== scoreA) return scoreB - scoreA;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
};