import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Leaf } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-lg"
      >
        <div className="text-8xl font-black text-[var(--accent-olive)] opacity-30 font-serif">
          404
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black font-serif">
          Page not found
        </h1>
        
        <p className="text-[var(--color-text-muted)] text-lg">
          The page you're looking for seems to have wandered off into the garden. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-olive)] text-white font-bold hover:opacity-90 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all"
          >
            <Home size={18} />
            Go Home
          </Link>
          
          <Link 
            to="/garden" 
            className="flex items-center gap-2 px-6 py-3 bg-[var(--color-surface)] border-b-2 border-[var(--color-border)] text-[var(--color-text)] font-bold hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] transition-all"
          >
            <Leaf size={18} />
            Visit Garden
          </Link>
        </div>
        
        <div className="pt-12">
          <img 
            src="https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg" 
            alt="" 
            className="w-48 h-48 mx-auto object-cover opacity-20 rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;