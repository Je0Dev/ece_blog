import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Share2, TerminalSquare, Cpu, Zap, FileCode2, Activity, Radio, Hash,
  Sparkles, ChevronDown, BookOpen, FileText, FlaskConical, Layers, Gamepad2,
  Rabbit, MousePointer2
} from 'lucide-react';

export const TimeGreeting = React.memo(() => {
  const [greeting, setGreeting] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
    setShowAnimation(true);
  }, []);
  
  const messages = {
    "Good morning": ["☀️ Rise and shine!", "🌱 Fresh start!", "☕ Coffee time!"],
    "Good afternoon": ["⚡ Keep going!", "🌻 Halfway there!", "🚀 Power through!"],
    "Good evening": ["🌙 Almost there!", "⭐ Night owl!", "🦉 Owl mode activate!"]
  };
  
  const emojis = ["✨", "🌱", "🚀", "💫", "⭐", "🌈", "🦄", "🎯"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomMessage = messages[greeting as keyof typeof messages]?.[Math.floor(Math.random() * 3)] || "";
  
  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-sm text-[var(--color-text-muted)] flex items-center gap-2"
        >
          <span>{greeting}</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {randomEmoji}
          </motion.span>
          <span className="text-xs opacity-60 hidden sm:inline">• {randomMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export const GardenStats = React.memo(() => {
  const [stats, setStats] = useState({ plants: 0, seeds: 0, thoughts: 0 });
  
  useEffect(() => {
    const target = { plants: 8, seeds: 5, thoughts: 7 };
    let frame = 0;
    const animate = () => {
      frame++;
      const progress = Math.min(frame / 30, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStats({
        plants: Math.floor(target.plants * eased),
        seeds: Math.floor(target.seeds * eased),
        thoughts: Math.floor(target.thoughts * eased)
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    setTimeout(animate, 500);
  }, []);
  
  const statItems = [
    { label: "Projects", value: stats.plants, icon: Layers, color: "text-pink-400" },
    { label: "Notes", value: stats.seeds, icon: FlaskConical, color: "text-orange-400" },
    { label: "Essays", value: stats.thoughts, icon: BookOpen, color: "text-blue-400" }
  ];
  
  return (
    <div className="flex items-center gap-4 text-xs">
      {statItems.map((item, i) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <item.icon size={12} className={item.color} />
          <span className="font-bold text-[var(--color-text)]">{item.value}</span>
          <span className="text-[var(--color-text-muted)]">{item.label}</span>
        </div>
      ))}
    </div>
  );
});

export const KonamiEasterEgg = React.memo(() => {
  const [activated, setActivated] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);
  
  useEffect(() => {
    const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let position = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[position]) {
        position++;
        if (position === konamiCode.length) {
          setActivated(true);
          const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            color: ["#c084fc", "#67e8f9", "#fcd34d", "#6ee7b7", "#f472b6"][Math.floor(Math.random() * 5)]
          }));
          setParticles(newParticles);
          setTimeout(() => setActivated(false), 3000);
          position = 0;
        }
      } else {
        position = 0;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  return (
    <AnimatePresence>
      {activated && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-[200]"
        >
          {particles.map(p => (
            <motion.div
              key={p.id}
              initial={{ x: p.x, y: p.y, scale: 0 }}
              animate={{ 
                y: [p.y, p.y - 200, p.y - 400],
                x: [p.x, p.x + (Math.random() - 0.5) * 100],
                scale: [0, 1.5, 0],
                rotate: [0, Math.random() * 360]
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute text-2xl"
              style={{ color: p.color }}
            >
              {["🌸", "✨", "🌟", "💫", "🎉", "🦄"][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0, y: window.innerHeight / 2 }}
            animate={{ scale: 1, y: window.innerHeight / 2 - 50 }}
            className="absolute left-1/2 -translate-x-1/2 text-6xl"
          >
            🎮
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-16 text-2xl font-black text-white bg-[var(--accent-olive)] px-6 py-2 rounded-2xl"
          >
            CHEAT ACTIVATED!
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export const MouseTrail = React.memo(() => {
  const [trails, setTrails] = useState<Array<{id: number, x: number, y: number}>>([]);
  const idRef = useRef(0);
  
  useEffect(() => {
    let animationFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      setTrails(prev => [...prev.slice(-20), { id: idRef.current++, x: e.clientX, y: e.clientY }]);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
      {trails.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ x: t.x, y: t.y, scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-2 h-2 rounded-full bg-[var(--accent-olive)]/30"
          style={{ left: t.x - 4, top: t.y - 4 }}
        />
      ))}
    </div>
  );
});

export const FunFactBanner = React.memo(() => {
  const facts = [
    "🐛 Debugging is like being a detective in a crime movie where you're also the murderer.",
    "💻 There's a function called 'sleep' in every language... but productivity never sleeps.",
    "🤖 The first computer bug was an actual moth found in the Mark II in 1947.",
    "📱 Your phone has more computing power than the Apollo 11 guidance computer.",
    "🌐 The first website is still online at info.cern.ch!",
    "🧠 Humans can only hold about 7 items in short-term memory. Plus or minus 2.",
    "🐍 Python is named after Monty Python, not the snake!",
    "⌨️ The QWERTY keyboard was designed to slow down typists to prevent jams.",
  ];
  
  const [fact, setFact] = useState("");
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setFact(facts[dayOfYear % facts.length]);
    setTimeout(() => setShow(true), 2000);
  }, []);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-xl z-40"
        >
          <div className="flex items-start gap-3">
            <Sparkles size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{fact}</p>
            <button onClick={() => setShow(false)} className="text-zinc-500 hover:text-white flex-shrink-0">
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

const X = ({ size, className }: { size: number, className?: string }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M18 6L6 18M6 6l12 12"/></svg>;

export const getTypeIcon = (type: string) => {
  switch (type?.toLowerCase()) {
    case 'essay': return <BookOpen size={16} className="text-blue-400" />;
    case 'note': return <FileText size={16} className="text-emerald-400" />;
    case 'lab-note': return <FlaskConical size={16} className="text-orange-400" />;
    case 'project': return <Layers size={16} className="text-pink-400" />;
    case 'hobbies': return <Gamepad2 size={16} className="text-yellow-400" />;
    default: return <FileText size={16} className="text-[var(--accent-olive)]" />;
  }
};

export const ShareButton = React.memo(({ title, url }: { title: string, url: string }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-bg)] text-[var(--color-text)] transition-all duration-200 border border-[var(--color-border)] font-bold text-sm"
      aria-label="Share this content"
    >
      {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
      {copied ? "Copied!" : "Share"}
    </button>
  );
});

export const HoverText = React.memo(({ text, color, gifUrl, className = "", onClick }: { text: string, color: string, gifUrl: string, className?: string, onClick?: () => void }) => {
  return (
    <span 
      onClick={onClick}
      className={`relative inline-block font-bold underline decoration-4 underline-offset-4 transition-all duration-300 gif-hover-bg ${color} ${className}`}
      style={{ '--gif-url': `url(${gifUrl})` } as React.CSSProperties}
    >
      {text}
    </span>
  );
});

export const TAG_ICONS: Record<string, any> = {
  "C / C++": TerminalSquare,
  "STM32": Cpu,
  "Robotics": Zap,
  "Python": FileCode2,
  "OpenCV": Activity,
  "I2C": Radio,
  "Hardware": Cpu,
  "Protocols": Activity,
  "Embedded Systems": Cpu,
  "Default": Hash
};

const getTagColor = (text: string) => {
  const colors = [
    "from-[var(--accent-olive)]/50 to-[var(--accent-brown)]/50",
    "from-[var(--accent-tomato)]/50 to-[var(--accent-rust)]/50",
    "from-[var(--accent-olive)]/50 to-[var(--accent-moss)]/50",
    "from-[var(--accent-brown)]/50 to-[var(--accent-clay)]/50",
    "from-[var(--accent-amber)]/50 to-[var(--accent-tomato)]/50"
  ];
  const index = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

export const Tag = React.memo(({ text, onClick, colorClass = "bg-[var(--color-surface)]", textColorClass = "text-[var(--color-text-muted)]" }: { text: string, onClick?: () => void, colorClass?: string, textColorClass?: string }) => {
  const Icon = TAG_ICONS[text] || TAG_ICONS["Default"];
  const gradient = getTagColor(text);
  
  return (
    <button 
      onClick={onClick}
      className="group relative px-3 py-1 text-xs font-bold font-serif rounded-none border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 cursor-corgi"
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <Icon size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent-olive)] transition-all duration-300" />
        <span className="underline decoration-[var(--color-border)] group-hover:decoration-[var(--accent-olive)] underline-offset-4">{text}</span>
      </span>
    </button>
  );
});

export const Doodle = React.memo(({ children, className, delay = 0 }: any) => (
  <motion.div 
    className={`absolute pointer-events-none opacity-20 hidden md:block ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
    aria-hidden="true"
  >
    {children}
  </motion.div>
));

export const SectionHeader = React.memo(({ title, description, gradient, underline }: any) => (
  <div className="group relative mb-8 inline-block w-full md:w-auto z-20">
    <h2 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient} underline ${underline} underline-offset-8 cursor-help`}>
      {title}
    </h2>
    <div className="absolute left-0 -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-2 pointer-events-none whitespace-nowrap z-50">
      <div className="bg-[var(--color-surface)] text-[var(--color-text)] text-sm font-bold px-4 py-2 rounded-xl shadow-2xl border border-[var(--color-border)] flex items-center gap-2">
        <Sparkles size={14} className="text-yellow-400 animate-pulse" />
        {description}
      </div>
    </div>
  </div>
));

export const NavButton = React.memo(({ href, icon: Icon, text, colorClass, shadowClass, gifUrl }: any) => {
  const isExternal = href.startsWith('http');
  const className = `relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl font-bold text-white transition-all duration-150 border-b-[4px] active:border-b-0 active:translate-y-1 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 group overflow-hidden whitespace-nowrap ${colorClass} ${shadowClass}`;
  const content = (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
        <img 
          src={gifUrl} 
          alt="" 
          className="w-full h-full object-cover mix-blend-overlay" 
          referrerPolicy="no-referrer"
        />
      </div>
      <Icon size={18} className="group-hover:scale-110 transition-transform relative z-10" aria-hidden="true" />
      <span className="hidden md:inline group-hover:underline decoration-white/30 underline-offset-4 relative z-10">{text}</span>
    </>
  );

  if (isExternal) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Navigate to ${text} section`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      to={href}
      aria-label={`Navigate to ${text} section`}
      className={className}
    >
      {content}
    </Link>
  );
});

export const ThemeToggle = React.memo(({ isDark, onToggle }: { isDark: boolean, onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="group px-3 py-2 rounded-none border-b-2 border-[var(--color-border)] transition-all duration-150 hover:border-[var(--accent-olive)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 bg-[var(--color-surface)] text-[var(--color-text)] font-serif text-sm"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    <span className="group-hover:underline group-hover:decoration-2 group-hover:decoration-[var(--accent-olive)] group-hover:underline-offset-4">
      {isDark ? 'Light' : 'Dark'}
    </span>
  </button>
));

export const SocialIcon = React.memo(({ icon: Icon, hoverColorClass, href, ariaLabel }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`p-3 rounded-2xl bg-[var(--color-surface)] border-b-[4px] border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-150 hover:-translate-y-2 active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 ${hoverColorClass}`}
  >
    <Icon size={24} aria-hidden="true" />
  </a>
));

export const FooterIcon = React.memo(({ icon: Icon, hoverColorClass, href, ariaLabel }: any) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className={`w-14 h-14 rounded-full bg-[var(--color-surface)] border-b-[4px] border-[var(--color-border)] text-[var(--color-text-muted)] flex items-center justify-center transition-all duration-150 hover:-translate-y-2 active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 ${hoverColorClass}`}
  >
    <Icon size={24} strokeWidth={2} aria-hidden="true" />
  </a>
));

export const StatusIcon = React.memo(({ status }: { status: string }) => {
  switch (status) {
    case 'seedling': 
      return <span title="Seedling" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-olive)]">Seedling</span>;
    case 'budding': 
      return <span title="Budding" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-brown)]/10 border border-[var(--accent-brown)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-brown)]">Budding</span>;
    case 'published': 
      return <span title="Published" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-moss)]/10 border border-[var(--accent-moss)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-moss)]">Published</span>;
    case 'in-progress':
      return <span title="In Progress" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-amber)]">In Progress</span>;
    case 'completed':
      return <span title="Completed" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-olive)]">Completed</span>;
    case 'draft':
      return <span title="Draft" className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--color-text-muted)]/10 border border-[var(--color-text-muted)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Draft</span>;
    default: 
      return null;
  }
});

export const BackToTop = React.memo(() => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[var(--color-surface)] text-[var(--color-text-muted)] rounded-none shadow-lg border-b-4 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all group font-serif text-sm"
          aria-label="Back to top"
        >
          <span className="flex items-center gap-2">
            Top
            <ChevronDown size={16} className="rotate-180 group-hover:translate-y-[-2px] transition-transform" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
});
