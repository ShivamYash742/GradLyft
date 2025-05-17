'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const sessionStartTime = useRef(null);
  const lastPath = useRef(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setUser(data.user);
          } else {
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Record session start time when component mounts
  useEffect(() => {
    sessionStartTime.current = Date.now();
    lastPath.current = pathname;

    // Track session duration on page unload/tab close
    const handleUnload = () => {
      if (user && sessionStartTime.current) {
        const duration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
        
        // Use navigator.sendBeacon for reliable data sending during page unload
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/track', JSON.stringify({
            page: lastPath.current,
            action: 'PAGE_EXIT',
            duration: duration
          }));
        }
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [user]);

  // Track page views and time spent on each page
  useEffect(() => {
    if (pathname && user) {
      // If we have a previous path, record the time spent there
      if (lastPath.current && lastPath.current !== pathname && sessionStartTime.current) {
        const duration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
        
        // Only track if the user spent at least 1 second on the page
        if (duration >= 1) {
          fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              page: lastPath.current,
              action: 'PAGE_VIEW',
              duration: duration
            }),
          }).catch(error => {
            console.error('Failed to track page duration:', error);
          });
        }
      }

      // Reset the timer for the new page
      sessionStartTime.current = Date.now();
      lastPath.current = pathname;

      // Record initial page view without duration
      const trackPageView = async () => {
        try {
          await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              page: pathname,
              action: 'PAGE_LOAD',
            }),
          });
        } catch (error) {
          console.error('Failed to track page view:', error);
        }
      };
      
      trackPageView();
    }
  }, [pathname, user]);

  const login = async (email, password) => {
    try {
      const res = await fetch('/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.success) {
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, error: data.message || 'Login failed' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      // Record the final page duration before logout
      if (user && sessionStartTime.current && lastPath.current) {
        const duration = Math.floor((Date.now() - sessionStartTime.current) / 1000);
        if (duration >= 1) {
          await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              page: lastPath.current,
              action: 'PAGE_EXIT',
              duration: duration
            }),
          });
        }
      }
      
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 