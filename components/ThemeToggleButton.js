'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to show the toggle to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // placeholder with same dimensions
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden shadow-md transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-[#251333] border border-[#6B42D9]/30'
          : 'bg-gray-200'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className={`text-[var(--text-primary)] transform transition-transform duration-300`} />
        ) : (
          <Sun className={`text-[#E5B8FF] transform transition-transform duration-300`} />
        )}
      </div>
      <div 
        className={`absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 ${
          theme === 'dark'
            ? 'bg-[#A384FF]'
            : 'bg-[var(--primary-start)]'
        }`}
      />
    </button>
  );
} 