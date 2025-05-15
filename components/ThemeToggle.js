'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <div className="flex items-center">
          <Moon className="h-5 w-5 text-[var(--text-primary)]" />
          <span className="ml-2 text-sm hidden md:inline text-[var(--text-primary)]">Dark Mode</span>
        </div>
      ) : (
        <div className="flex items-center">
          <Sun className="h-5 w-5 text-[var(--primary-start)]" />
          <span className="ml-2 text-sm hidden md:inline text-[var(--text-primary)]">Light Mode</span>
        </div>
      )}
    </button>
  );
} 