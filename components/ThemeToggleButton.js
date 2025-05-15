'use client';

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
          ? 'bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)]'
          : 'bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)]'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="text-white transform transition-transform duration-300" />
        ) : (
          <Sun className="text-white transform transition-transform duration-300" />
        )}
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${
          theme === 'dark'
            ? 'from-[var(--primary-start)] to-[var(--primary-end)] opacity-0'
            : 'from-[var(--primary-start)] to-[var(--primary-end)] opacity-0'
        } hover:opacity-80 transition-opacity duration-300`}
      />
    </button>
  );
} 