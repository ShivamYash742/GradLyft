'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      theme === 'light'
        ? scrolled ? 'bg-[var(--section-light)] shadow-md py-3' : 'bg-[var(--section-light)]/90 backdrop-blur-md py-4'
        : scrolled ? 'bg-[var(--section-dark)] shadow-md py-3' : 'bg-[var(--section-dark)]/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient-primary">
              GradLyft
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/student" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              For Students
            </Link>
            <Link href="/universities" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              For Universities
            </Link>
            <Link href="/employer" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              For Employers
            </Link>
            <Link href="/events" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              Events
            </Link>
            <Link href="/about" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleButton />
            <Link href="/login" className="text-[var(--text-primary)] hover:text-[var(--link-hover)] transition">
              Log in
            </Link>
            <Link href="/register" className="gradient-button text-white px-4 py-2 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg">
              Register
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <button 
              onClick={toggleMenu}
              className="text-[var(--text-primary)] hover:text-[var(--link-hover)] focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            theme === 'light' 
              ? 'bg-[var(--section-light)]/95' 
              : 'bg-[var(--section-dark)]/95'
          } backdrop-blur-md shadow-lg rounded-b-xl`}>
            <Link 
              href="/student" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--card-bg)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Students
            </Link>
            <Link 
              href="/universities" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--card-bg)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Universities
            </Link>
            <Link 
              href="/employer" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--card-bg)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              href="/events" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--card-bg)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--card-bg)]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Link 
                href="/login" 
                className="px-4 py-2 text-center text-[var(--text-primary)] hover:text-[var(--link-hover)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/register" 
                className="gradient-button text-white px-4 py-2 rounded-md shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
