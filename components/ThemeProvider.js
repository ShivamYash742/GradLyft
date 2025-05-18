'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Apply default theme immediately to prevent flash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set dark theme initially
      document.documentElement.setAttribute('data-theme', 'dark');
      
      // Check for user's saved theme preference
      try {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
          setTheme(savedTheme);
        } else {
          // If no saved preference, default to dark
          localStorage.setItem('theme', 'dark');
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
      
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      try {
        // Update theme in localStorage and document
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      } catch (error) {
        console.error('Error setting theme:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 