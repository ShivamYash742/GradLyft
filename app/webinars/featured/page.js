'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FeaturedWebinarRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the dynamic route
    router.push('/webinars/featured');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-indigo-600 font-medium">Redirecting to webinar...</p>
      </div>
    </div>
  );
} 