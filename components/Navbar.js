'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

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

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      router.push('/');
      setProfileDropdownOpen(false);
    }
  };

  const getUserDisplayName = () => {
    if (!user) return '';
    return user.student?.name || user.employer?.name || user.email;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--section-light,#ffffff)] shadow-md py-3' : 'bg-[var(--section-light,#ffffff)]/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient-primary">
              GradLyft
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/student" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
              For Students
            </Link>
            <Link href="/universities" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
              For Universities
            </Link>
            <Link href="/employer" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
              For Employers
            </Link>
            <Link href="/events" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
              Events
            </Link>
            <Link href="/about" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
              About
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggleButton />
            {loading ? (
              <div className="h-5 w-5 rounded-full border-2 border-[var(--primary-start)] border-t-transparent animate-spin"></div>
            ) : user ? (
              <div className="relative">
                <button 
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-2 text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition"
                >
                  <User size={18} />
                  <span className="font-medium">{getUserDisplayName()}</span>
                </button>
                
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[var(--card-bg,#ffffff)] rounded-md shadow-lg py-1 z-50 border border-[var(--card-border,#f3f4f6)]">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-[var(--section-light,#ffffff)] transition-colors text-[var(--text-primary,#171717)]"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    
                    {user.role === 'ADMIN' && (
                      <Link
                        href="/admin/dashboard"
                        className="block px-4 py-2 hover:bg-[var(--section-light,#ffffff)] transition-colors text-[var(--text-primary,#171717)]"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    
                    {user.role === 'EMPLOYER' && (
                      <Link
                        href="/employer/dashboard"
                        className="block px-4 py-2 hover:bg-[var(--section-light,#ffffff)] transition-colors text-[var(--text-primary,#171717)]"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        Employer Dashboard
                      </Link>
                    )}
                    
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-[var(--section-light,#ffffff)] transition-colors text-[var(--text-primary,#171717)]"
                    >
                      <span className="flex items-center">
                        <LogOut size={16} className="mr-2" />
                        Log out
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] transition">
                  Log in
                </Link>
                <Link href="/register" className="gradient-button text-white px-4 py-2 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg">
                  Register
                </Link>
              </>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--section-light,#ffffff)]/95 backdrop-blur-md shadow-lg rounded-b-xl">
            <Link 
              href="/student" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Students
            </Link>
            <Link 
              href="/universities" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Universities
            </Link>
            <Link 
              href="/employer" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              href="/events" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="px-3 py-2 flex justify-center">
              <ThemeToggleButton />
            </div>
            
            {user ? (
              <>
                <Link 
                  href="/profile" 
                  className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                
                {user.role === 'ADMIN' && (
                  <Link 
                    href="/admin/dashboard" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                
                {user.role === 'EMPLOYER' && (
                  <Link 
                    href="/employer/dashboard" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Employer Dashboard
                  </Link>
                )}
                
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-[var(--text-primary,#171717)] hover:text-[var(--link-hover,#FF5A00)] hover:bg-[var(--card-bg,#ffffff)]"
                >
                  Log out
                </button>
              </>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
