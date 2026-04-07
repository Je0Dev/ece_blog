import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Search, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { StatusIcon, getTypeIcon } from './UIComponents';

export const NoteItem = React.memo(({ id, title, date, status, category, type, excerpt }: any) => (
  <Link 
    to={`/journal/${id}`}
    className="group flex flex-col gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-0"
  >
    <div className="flex items-start gap-3">
      <div className="mt-1">
        {getTypeIcon(type || category)}
      </div>
      <div className="flex-1">
        <h4 className="font-serif text-lg text-zinc-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--accent-olive)] group-hover:to-[var(--accent-moss)] transition-all duration-300 leading-tight">{title}</h4>
        {excerpt && <p className="text-zinc-500 text-xs mt-2 line-clamp-2">{excerpt}</p>}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
            <span>{type || category}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{date}</span>
          </div>
          <StatusIcon status={status} />
        </div>
      </div>
    </div>
  </Link>
));

export const JournalCard = React.memo(({ id, date, title, excerpt, tech, category, type, readingTime, image, onPreview }: any) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-[#161616] rounded-none border-b-2 border-[var(--color-border)] overflow-hidden hover:border-[var(--accent-olive)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--accent-olive)]/10 flex flex-col h-full"
    >
      {image && (
        <div className="aspect-[3/2] overflow-hidden relative bg-[#111]">
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        {!image && (
          <div className="mb-3">
            {getTypeIcon(type || category)}
          </div>
        )}
        
        <Link to={`/journal/${id}`} className="block group/title">
          <h3 className="text-lg font-serif text-zinc-100 mb-2 leading-snug group-hover/title:text-[var(--accent-tomato)] group-hover/title:underline group-hover/title:decoration-2 group-hover/title:underline-offset-4 transition-all duration-300">
            {title}
          </h3>
        </Link>
        
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.slice(0, 4).map((t: string) => (
              <Link 
                key={t} 
                to={`/?tag=${encodeURIComponent(t)}#journal`}
                className="px-2 py-0.5 rounded-md bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold text-[var(--accent-olive)] uppercase tracking-wider hover:bg-[var(--accent-olive)]/30 hover:text-[var(--accent-moss)] transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                #{t}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span>{type || category}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{date}</span>
          </div>
          <span>{readingTime} min</span>
        </div>
      </div>
    </motion.div>
  );
});
