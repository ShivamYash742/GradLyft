'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircle, Briefcase, CalendarDays, BookMarked, ChartBar, Bell, Award, Sparkles, ChevronRight, ArrowRight, FileText } from 'lucide-react';

export default function StudentDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [notifications, setNotifications] = useState(3);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  // Mock data for the dashboard
  const upcomingEvents = [
    { id: 1, title: "Resume Workshop", date: "Tomorrow, 3:00 PM", type: "Workshop" },
    { id: 2, title: "Tech Career Fair", date: "June 15, 10:00 AM", type: "Career Fair" }
  ];

  const recentApplications = [
    { id: 1, role: "Junior Developer", company: "TechSolutions", date: "Applied 2 days ago", status: "Under Review" },
    { id: 2, role: "UX/UI Intern", company: "InnovateCorp", date: "Applied 1 week ago", status: "Interview" }
  ];

  const quickStats = [
    { label: "Profile Strength", value: "75%", icon: <UserCircle className="h-5 w-5 text-blue-600" /> },
    { label: "Jobs Viewed", value: "24", icon: <Briefcase className="h-5 w-5 text-indigo-600" /> },
    { label: "Applications", value: "5", icon: <FileText className="h-5 w-5 text-green-600" /> },
    { label: "Saved Jobs", value: "8", icon: <BookMarked className="h-5 w-5 text-orange-600" /> }
  ];

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
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 shadow-lg text-white mb-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute -right-5 -bottom-10 w-28 h-28 bg-indigo-500 rounded-full opacity-20"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">Hi, {user?.student?.name?.split(' ')[0] || 'Student'}</h1>
              <div className="ml-3 bg-yellow-400 text-blue-900 px-2 py-0.5 rounded-full text-xs font-bold transform -rotate-3">
                <Sparkles className="h-3 w-3 inline mr-1" /> Active
              </div>
            </div>
            <p className="text-blue-100 mt-1">Welcome back to your dashboard</p>
          </div>
          
          <div className="relative">
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {notifications}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              {stat.icon}
              <div className="ml-3">
                <div className="text-gray-500 text-sm">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Activity Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link href="/student/jobs" className="flex flex-col items-center bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <Briefcase className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-blue-800 font-medium text-sm">Find Jobs</span>
              </Link>
              <Link href="/profile" className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors">
                <UserCircle className="h-8 w-8 text-indigo-600 mb-2" />
                <span className="text-indigo-800 font-medium text-sm">Edit Profile</span>
              </Link>
              <Link href="/student/events" className="flex flex-col items-center bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors">
                <CalendarDays className="h-8 w-8 text-green-600 mb-2" />
                <span className="text-green-800 font-medium text-sm">Events</span>
              </Link>
              <Link href="/student/bookmarks" className="flex flex-col items-center bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-colors">
                <BookMarked className="h-8 w-8 text-orange-600 mb-2" />
                <span className="text-orange-800 font-medium text-sm">Bookmarks</span>
              </Link>
              <Link href="/student/resources" className="flex flex-col items-center bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors">
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <span className="text-purple-800 font-medium text-sm">Resources</span>
              </Link>
              <Link href="/student/analytics" className="flex flex-col items-center bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors">
                <ChartBar className="h-8 w-8 text-teal-600 mb-2" />
                <span className="text-teal-800 font-medium text-sm">Analytics</span>
              </Link>
            </div>
          </div>
          
          {/* Recent Applications */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recent Applications</h2>
              <Link href="/student/applications" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-800">{app.role}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      app.status === 'Interview' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{app.company}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-400 text-xs">{app.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
              
              {recentApplications.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>You haven't applied to any jobs yet</p>
                  <Link href="/student/jobs" className="text-blue-600 hover:underline mt-2 inline-block">
                    Browse Jobs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800">Upcoming Events</h2>
              <Link href="/student/events" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start p-3 border-l-4 border-blue-500 bg-gray-50 rounded-r-lg">
                  <CalendarDays className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">{event.title}</h3>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <div className="bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 mr-2">
                        {event.type}
                      </div>
                      {event.date}
                    </div>
                  </div>
                </div>
              ))}
              
              {upcomingEvents.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  <p>No upcoming events</p>
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <Link href="/events" className="block w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm transition-colors">
                Explore All Events
              </Link>
            </div>
          </div>
          
          {/* Profile Completion Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-xl shadow-md text-white">
            <h2 className="font-bold mb-2 flex items-center">
              <Award className="h-5 w-5 mr-2" /> Profile Completion
            </h2>
            <div className="w-full bg-white/20 rounded-full h-2 mb-4 mt-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-blue-100 text-sm mb-3">Complete your profile to be more visible to employers!</p>
            <Link href="/profile" className="block w-full text-center bg-white hover:bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-medium transition-colors">
              Complete Profile <ArrowRight className="inline h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
          
          {/* Job Recommendations Teaser */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="font-bold text-gray-800 mb-3">Recommended For You</h2>
            <p className="text-gray-500 text-sm mb-4">Based on your profile and interests</p>
            
            <div className="space-y-2">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">5 new matched jobs</h3>
                  <p className="text-xs text-gray-500">Updated today</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Link href="/student/jobs" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
                View Job Matches
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 