'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, X } from 'lucide-react';

export default function ProfileCompletionAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in and profile is incomplete
    const checkProfileCompletion = async () => {
      try {
        // Get the user's token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          // No token, user isn't logged in
          setIsLoading(false);
          return;
        }
        
        // Get the user profile
        const response = await fetch('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          setIsLoading(false);
          return;
        }
        
        const userData = await response.json();
        
        // Check if the user's profile is incomplete (student profile)
        if (userData.role === 'STUDENT') {
          const student = userData.student;
          // Check for empty fields that should be completed
          const isIncomplete = 
            !student.college || 
            student.college === 'Not specified' ||
            !student.degree || 
            student.degree === 'Not specified' ||
            !student.branch || 
            student.branch === 'Not specified';
          
          setIsVisible(isIncomplete);
        }
        // Employer profile check
        else if (userData.role === 'EMPLOYER') {
          const employer = userData.employer;
          // Check for empty employer fields
          const isIncomplete = 
            !employer.company || 
            employer.company === 'Not specified' ||
            !employer.designation || 
            employer.designation === 'Not specified';
          
          setIsVisible(isIncomplete);
        }
        
      } catch (error) {
        console.error('Error checking profile completion:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Wait a bit to avoid showing the alert right after login
    const timer = setTimeout(() => {
      checkProfileCompletion();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading || !isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 max-w-md z-50 animate-slide-up">
      <div className="bg-amber-50 border border-amber-300 rounded-lg shadow-lg p-4 backdrop-blur-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <AlertCircle className="h-5 w-5 text-amber-500" />
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-amber-800">Complete Your Profile</h3>
            <div className="mt-2 text-sm text-amber-700">
              <p>Your profile is incomplete. Complete your profile to get personalized opportunities and improve your visibility.</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Link href="/profile" className="inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-all">
                Complete Profile
              </Link>
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-amber-900 ring-1 ring-inset ring-amber-300 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-all"
              >
                Remind Later
              </button>
            </div>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 text-amber-500 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 