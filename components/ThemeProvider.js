'use client';

import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  // Set light theme when component mounts
  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const value = {
    theme: 'light',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 