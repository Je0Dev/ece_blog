import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, Sparkles, Gitlab, ExternalLink, Globe, Mail, Rss, ChevronUp, GraduationCap, Cpu } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { JOURNAL_ENTRIES } from '../data/entries';
import { ThemeToggle, HoverText, StatusIcon, TimeGreeting, GardenStats, BackToTop } from '../components/UIComponents';

const GITHUB_USERNAME = 'Je0Dev';
const YEARS = [2026, 2025];

const ContributionGraph = ({ isDark }: { isDark: boolean }) => {
  const [selectedYear, setSelectedYear] = useState(2026);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2">
        {YEARS.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              selectedYear === year 
                ? 'bg-[var(--accent-olive)] text-white' 
                : 'text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] hover:bg-[var(--accent-olive)]/10'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      
      <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-x-auto p-4">
        <GitHubCalendar 
          username={GITHUB_USERNAME} 
          year={selectedYear}
          colorScheme={isDark ? "dark" : "light"}
          theme={{
            light: ['#f0f0f0', '#d4f4dd', '#8cd47e', '#4ac26b', '#27a745'],
            dark: ['#161b22', '#2d4a2d', '#3d6b3d', '#4d8b4d', '#5dab5d'],
          }}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          showWeekdayLabels={false}
        />
      </div>
    </div>
  );
};

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Je0Dev', icon: Github, color: 'link-green' },
  { name: 'GitLab', url: 'https://gitlab.com/mag30-admin', icon: Gitlab, color: 'link-orange' },
  { name: 'Codeberg', url: 'https://codeberg.org/Je0Dev', icon: Globe, color: 'link-blue' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/geomas', icon: Linkedin, color: 'link-blue' },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter, color: 'link-cyan' },
  { name: 'Mastodon', url: 'https://mastodon.social/@Je0Dev', icon: Globe, color: 'link-green' },
  { name: 'Website', url: 'https://je0dev.github.io/personal_website/', icon: ExternalLink, color: 'link-cyan' },
  { name: 'Lang App', url: 'https://je0dev.github.io/lang_website/', icon: Globe, color: 'link-indigo' },
];

export const AboutView = ({ isDark, onThemeToggle }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.startsWith('/garden') ? 'garden' : 'journal';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: 300, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -300, behavior: 'smooth' });
      } else if (e.key === 'g' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        navigate('/garden');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--accent-olive)]/30 overflow-x-hidden relative">
      <div className="fixed top-24 left-6 z-20 hidden lg:block">
        <TimeGreeting />
      </div>
      <div className="fixed top-24 right-6 z-20 hidden lg:block">
        <GardenStats />
      </div>
      <main className="pt-24 md:pt-48 pb-16 md:pb-32 px-4 md:px-6 max-w-4xl mx-auto">
        <section className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12 md:space-y-16"
          >
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--color-text)] leading-[1.1] md:leading-none font-serif">
                <span className="relative inline-block">
                  Welcome to my
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-olive)] to-[var(--accent-moss)] rounded-full" />
                </span>
                <br />
                <span className="text-[var(--color-text)]">digital garden</span>
              </h1>
              
              {/* Education Section */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] transition-all group">
                  <GraduationCap size={14} className="text-[var(--accent-olive)]" />
                  <a href="https://www.uop.gr/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-olive)] transition-colors">
                    University of Peloponnese
                  </a>
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] transition-all group">
                  <Cpu size={14} className="text-[var(--accent-brown)]" />
                  <a href="https://ece.uop.gr/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-olive)] transition-colors">
                    ECE Department
                  </a>
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6 text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
              <p>
                I'm <strong className="text-[var(--color-text)] font-serif">George (Je0Dev)</strong>, an Electrical & Computer Engineering student at the <a href="https://www.uop.gr/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all">University of Peloponnese</a> — obsessed with the intersection of hardware and software. 
              </p>
              
              <p>
                Currently exploring <HoverText text="embedded systems" color="decoration-[var(--accent-olive)]" gifUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxHOGTdzJC/giphy.gif" className="cursor-pointer" onClick={() => navigate('/garden?tag=Embedded Systems')} />, 
                <HoverText text="web development" color="decoration-[var(--accent-brown)]" gifUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxHOGTdzJC/giphy.gif" className="cursor-pointer" onClick={() => navigate('/garden?tag=Web Development')} />, and 
                <HoverText text="systems programming" color="decoration-[var(--accent-tomato)]" gifUrl="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxHOGTdzJC/giphy.gif" className="cursor-pointer" onClick={() => navigate('/garden?tag=Systems Programming')} />.
              </p>
              
              <p>
                This digital garden is where I document my <span className="text-[var(--accent-olive)] font-serif underline decoration-[var(--accent-brown)] decoration-2 underline-offset-4 hover:decoration-[var(--accent-olive)] cursor-pointer transition-all" onClick={() => navigate('/garden?tag=project')}>projects</span>, 
                <span className="text-[var(--accent-brown)] font-serif underline decoration-[var(--accent-brown)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-brown)] cursor-pointer transition-all" onClick={() => navigate('/garden?tag=Learning')}>learning journey</span>, and 
                <span className="text-[var(--accent-tomato)] font-serif underline decoration-[var(--accent-tomato)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-tomato)] cursor-pointer transition-all" onClick={() => navigate('/garden?tag=Software')}>software builds</span>.
              </p>
              
              <p>
                I believe in <span className="text-[var(--accent-olive)] font-serif underline decoration-[var(--accent-olive)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-olive)] cursor-pointer transition-all" onClick={() => window.open('https://github.com/Je0Dev', '_blank')}>open-source software</span> and 
                <span className="text-[var(--accent-brown)] font-serif underline decoration-[var(--accent-brown)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-brown)] cursor-pointer transition-all" onClick={() => navigate('/garden?tag=Embedded Systems')}>rigorous engineering</span>. Whether it's 
                building a <span className="text-[var(--accent-tomato)] font-serif underline decoration-[var(--accent-tomato)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-tomato)] cursor-pointer transition-all" onClick={() => navigate('/journal/esp32-timer-sensor')}>ESP32 sensor system</span> or 
                <span className="text-[var(--accent-olive)] font-serif underline decoration-[var(--accent-olive)]/50 decoration-2 underline-offset-4 hover:decoration-[var(--accent-olive)] cursor-pointer transition-all" onClick={() => navigate('/journal/personal-website')}>designing a web portfolio</span>, 
                I'm always exploring new technologies.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Rust', 'Go', 'Zig', 'C++', 'C#', 'Python', 'TypeScript'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => navigate(`/garden?tag=${lang}`)}
                    className="px-3 py-1 text-xs font-bold border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] transition-all group"
                  >
                    <span className="text-[var(--accent-olive)]">#</span>{lang}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent-olive)]">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Web References */}
            <div className="pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img 
                  src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
                  alt="" 
                  className="w-12 h-12 object-cover opacity-60 rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-text-muted)] flex items-center gap-4 font-serif">
                  Design References
                  <span className="text-[8px] text-[var(--color-text-muted)] normal-case tracking-normal font-medium font-serif">inspiration for this site</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Manuel Moreale', url: 'https://manuelmoreale.com/' },
                  { name: 'Anthony Nelzin', url: 'https://anthonynelzin.com/' },
                  { name: 'Sébastien Ronsse', url: 'https://ronsse.net/' },
                  { name: 'Josh Comeau', url: 'https://joshcomeau.com/' },
                  { name: 'Lee Robinson', url: 'https://leerob.io/' },
                  { name: 'Rich Harris', url: 'https://rich-harris.com/' },
                ].map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 py-2 text-sm font-bold bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:bg-[var(--accent-olive)]/5 transition-all"
                  >
                    <span className="font-serif text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] group-hover:underline group-hover:decoration-2 group-hover:decoration-[var(--accent-olive)] group-hover:underline-offset-4 transition-all">
                      {link.name}
                    </span>
                    <span className="absolute top-1 right-1 text-[8px] text-[var(--accent-olive)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub Contributions */}
            <div className="pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img 
                  src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
                  alt="" 
                  className="w-12 h-12 object-cover opacity-60 rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-serif">GitHub Activity</h2>
              </div>
              <ContributionGraph isDark={isDark} />
            </div>

            {/* Social Links */}
            <div className="pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img 
                  src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
                  alt="" 
                  className="w-12 h-12 object-cover opacity-60 rounded-sm"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-text-muted)] flex items-center gap-4 font-serif">
                  Connect with me
                  <a href="/rss.xml" className="inline-flex items-center gap-1 text-[var(--accent-amber)] hover:text-[var(--accent-brown)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-amber)] hover:underline-offset-4 transition-colors text-xs font-bold px-2 py-1 rounded-none border-b-2 border-[var(--color-border)] hover:border-[var(--accent-amber)] font-serif">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 6.36a3 3 0 0 1 3 3h3a3 3 0 0 1 0-6h-3"/></svg>
                    RSS
                  </a>
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 py-3 bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:bg-[var(--accent-olive)]/5 transition-all"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <link.icon size={18} className="text-[var(--color-text-muted)] group-hover:text-[var(--accent-olive)] transition-colors" />
                      <span className={`text-sm font-bold ${link.color === 'link-green' ? 'text-[var(--color-text)] group-hover:text-[var(--accent-olive)]' : link.color === 'link-blue' ? 'text-[var(--color-text)] group-hover:text-[var(--accent-brown)]' : 'text-[var(--color-text)] group-hover:text-[var(--accent-tomato)]'} group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 transition-all`}>
                        {link.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--accent-olive)]/20 rounded-none transition-all pointer-events-none" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <div className="p-6 md:p-10 rounded-none bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <img 
                    src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
                    alt="" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/90 to-[var(--color-surface)]" />
                <div className="max-w-xl relative z-10">
                  <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-4 font-serif">
                    Subscribe to the newsletter
                  </h2>
                  <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                    Get weekly insights on software development, embedded systems, and systems programming. 
                    No spam, just quality content.
                  </p>
                  
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const email = (e.target as HTMLFormElement).email.value;
                      alert(`Thanks for subscribing! I'll send updates to ${email}.`);
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                    >
                    <input 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      required
                      className="flex-1 px-4 py-3 rounded-none bg-[var(--color-bg)] border-b-2 border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all font-mono text-sm"
                    />
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-[var(--accent-olive)] to-[var(--accent-moss)] text-white rounded-none font-bold hover:opacity-90 hover:underline hover:decoration-2 hover:decoration-white hover:underline-offset-4 transition-all shadow-lg shadow-[var(--accent-olive)]/20"
                    >
                      Subscribe
                    </button>
                  </form>
                  
                  <p className="mt-4 text-xs text-[var(--color-text-muted)] font-serif">
                    No spam, unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-16 md:pt-24 border-t border-[var(--color-border)]">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-text-muted)] mb-8 md:mb-12 font-serif">Latest from the garden</h2>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {JOURNAL_ENTRIES.slice(0, 3).map(entry => (
                  <Link 
                    key={entry.id} 
                    to={`/journal/${entry.id}`}
                    className="group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-6 rounded-none bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)] transition-all"
                  >
                    <div className="w-full md:w-32 h-24 md:h-20 rounded-none overflow-hidden bg-[var(--color-bg)] flex-shrink-0">
                      <img src={entry.image} alt="" loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] font-serif">{entry.category}</span>
                      <h3 className="text-base md:text-xl font-bold font-serif text-[var(--color-text)] group-hover:text-[var(--accent-olive)] group-hover:underline group-hover:decoration-2 group-hover:decoration-[var(--accent-tomato)] group-hover:underline-offset-4 transition-all">{entry.title}</h3>
                    </div>
                    <ArrowRight className="hidden md:block w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] group-hover:translate-x-2 transition-all" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 md:mt-12 text-center">
                <Link to="/garden" className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[var(--accent-tomato)] text-white rounded-2xl md:rounded-3xl font-black hover:opacity-80 transition-all group">
                  Explore the full garden <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-surface)]/50">
        <div className="px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors inline-block relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/garden" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors inline-block relative group">
                Garden
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </Link>
              <a href="/rss.xml" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors inline-block relative group">
                RSS Feed
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://github.com/Je0Dev?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors inline-block relative group">
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
            <div className="flex-shrink-0">
              <div className="p-1 border-2 border-[var(--color-border)] rounded-none">
                <img 
                  src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
                  alt="" 
                  className="w-24 h-20 md:w-28 md:h-24 object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-center">
            <a href="/" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--accent-olive)] transition-colors inline-block relative group">
              © 2026 George's Garden
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-olive)] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
        
        {/* Image Credits */}
        <div className="px-4 md:px-6 max-w-4xl mx-auto mt-6">
          <div className="pt-6 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-muted)]">
              <span className="text-[var(--accent-olive)]">✦</span> Images by <a href="https://www.oldbookillustrations.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all">Old Book Illustrations</a> — Vintage illustrations for a timeless aesthetic.
            </p>
          </div>
        </div>
        <BackToTop />
      </footer>
    </div>
  );
};
