'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentProfileRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main profile page
    router.push('/profile');
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
    </div>
  );
} 