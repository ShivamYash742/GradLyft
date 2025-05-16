'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
        
        <div className="mb-8 flex items-center">
          <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-2xl font-bold mr-4">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="text-xl font-semibold">
              {user.student?.name || user.employer?.name || 'Admin User'}
            </div>
            <div className="text-gray-600">{user.email}</div>
            <div className="text-sm text-blue-600 font-medium mt-1">
              {user.role === 'STUDENT' ? 'Student' : user.role === 'EMPLOYER' ? 'Employer' : 'Administrator'}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          
          {user.role === 'STUDENT' && user.student && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-gray-600 text-sm">Full Name</div>
                <div>{user.student.name}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">College</div>
                <div>{user.student.college}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Degree</div>
                <div>{user.student.degree}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Expected Graduation</div>
                <div>{user.student.year}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-gray-600 text-sm">Interests</div>
                <div>{user.student.interests}</div>
              </div>
              {user.student.cvUrl && (
                <div className="md:col-span-2">
                  <div className="text-gray-600 text-sm">Resume/CV</div>
                  <a 
                    href={user.student.cvUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View CV
                  </a>
                </div>
              )}
            </div>
          )}

          {user.role === 'EMPLOYER' && user.employer && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-gray-600 text-sm">Full Name</div>
                <div>{user.employer.name}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Company</div>
                <div>{user.employer.company}</div>
              </div>
              <div>
                <div className="text-gray-600 text-sm">Designation</div>
                <div>{user.employer.designation}</div>
              </div>
            </div>
          )}

          {user.role === 'ADMIN' && (
            <div>
              <p className="text-gray-700">
                You are an administrator of the GradLyft platform.
              </p>
              <div className="mt-4">
                <Link 
                  href="/admin/dashboard" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Go to Admin Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>

        {user.role === 'STUDENT' && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Your Activity</h2>
            <div className="flex space-x-4">
              <Link 
                href="/profile/bookmarks" 
                className="text-blue-600 hover:underline"
              >
                Bookmarked Jobs
              </Link>
              <Link 
                href="/profile/applications" 
                className="text-blue-600 hover:underline"
              >
                Applications
              </Link>
              <Link 
                href="/profile/events" 
                className="text-blue-600 hover:underline"
              >
                Registered Events
              </Link>
            </div>
          </div>
        )}

        {user.role === 'EMPLOYER' && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Employer Dashboard</h2>
            <div className="flex space-x-4">
              <Link 
                href="/employer/dashboard" 
                className="text-blue-600 hover:underline"
              >
                Manage Jobs
              </Link>
              <Link 
                href="/employer/applications" 
                className="text-blue-600 hover:underline"
              >
                View Applications
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 