'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircle, Briefcase, CalendarDays, BookMarked, ChartBar, Bell, Award, Sparkles, ChevronRight, ArrowRight, FileText, 
         Rocket, GraduationCap, Target, Users, Book, Star } from 'lucide-react';
import { themeClasses } from '../../../lib/theme';

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
    { label: "Profile Strength", value: "75%", icon: <UserCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />, color: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Jobs Viewed", value: "24", icon: <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />, color: "bg-indigo-50 dark:bg-indigo-900/20" },
    { label: "Applications", value: "5", icon: <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />, color: "bg-green-50 dark:bg-green-900/20" },
    { label: "Saved Jobs", value: "8", icon: <BookMarked className="h-5 w-5 text-orange-600 dark:text-orange-400" />, color: "bg-orange-50 dark:bg-orange-900/20" }
  ];

  const learningPaths = [
    { title: "Web Development", progress: 65, icon: <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" /> },
    { title: "Data Science", progress: 40, icon: <ChartBar className="h-6 w-6 text-blue-600 dark:text-blue-400" /> },
    { title: "UI/UX Design", progress: 25, icon: <Target className="h-6 w-6 text-pink-600 dark:text-pink-400" /> }
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
    <div className={`min-h-screen ${themeClasses.mainBg} py-8 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className={`${themeClasses.cardBg} rounded-2xl p-6 ${themeClasses.shadow} mb-8`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className={`text-3xl font-bold ${themeClasses.textPrimary}`}>
                  Hi, {user?.student?.name?.split(' ')[0] || 'Student'}
                </h1>
                <div className={`${themeClasses.success} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                  <Sparkles className="h-4 w-4" />
                  Active
                </div>
              </div>
              <p className={`mt-1 ${themeClasses.textSecondary}`}>Let's continue your journey to success!</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className={`${themeClasses.secondaryButton} p-2 rounded-lg relative`}>
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className={`${themeClasses.cardBg} ${themeClasses.shadow} rounded-xl p-4 ${stat.color} border border-opacity-5 ${themeClasses.border}`}>
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <div>
                      <div className={`text-sm ${themeClasses.textSecondary}`}>{stat.label}</div>
                      <div className={`text-2xl font-bold ${themeClasses.textPrimary}`}>{stat.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className={`${themeClasses.cardBg} ${themeClasses.shadow} rounded-xl p-6`}>
              <h2 className={`text-xl font-bold ${themeClasses.textPrimary} mb-4`}>Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Link href="/student/jobs" 
                      className={`flex flex-col items-center ${themeClasses.cardBg} p-4 rounded-xl ${themeClasses.shadow} ${themeClasses.border} hover:scale-105 transition-transform`}>
                  <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span className={`${themeClasses.textPrimary} font-medium`}>Find Jobs</span>
                </Link>
                <Link href="/profile" 
                      className={`flex flex-col items-center ${themeClasses.cardBg} p-4 rounded-xl ${themeClasses.shadow} ${themeClasses.border} hover:scale-105 transition-transform`}>
                  <UserCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <span className={`${themeClasses.textPrimary} font-medium`}>Edit Profile</span>
                </Link>
                <Link href="/student/events" 
                      className={`flex flex-col items-center ${themeClasses.cardBg} p-4 rounded-xl ${themeClasses.shadow} ${themeClasses.border} hover:scale-105 transition-transform`}>
                  <CalendarDays className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
                  <span className={`${themeClasses.textPrimary} font-medium`}>Events</span>
                </Link>
              </div>
            </div>

            {/* Recent Applications */}
            <div className={`${themeClasses.cardBg} ${themeClasses.shadow} rounded-xl p-6`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-bold ${themeClasses.textPrimary}`}>Recent Applications</h2>
                <Link href="/student/applications" 
                      className={`${themeClasses.link} text-sm font-medium flex items-center gap-1`}>
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} 
                       className={`${themeClasses.cardBg} ${themeClasses.border} rounded-xl p-4 hover:border-blue-500/50 transition-colors`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-bold ${themeClasses.textPrimary}`}>{app.role}</h3>
                        <p className={`${themeClasses.textSecondary} text-sm mt-1`}>{app.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        app.status === 'Interview' 
                          ? themeClasses.success
                          : themeClasses.info
                      }`}>
                        {app.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className={`text-xs ${themeClasses.textMuted}`}>{app.date}</span>
                      <button className={`${themeClasses.link} text-sm font-medium`}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
                
                {recentApplications.length === 0 && (
                  <div className={`text-center py-8 ${themeClasses.textSecondary}`}>
                    <FileText className="h-12 w-12 mx-auto opacity-40 mb-3" />
                    <p>You haven't applied to any jobs yet</p>
                    <Link href="/student/jobs" className={`${themeClasses.link} mt-2 inline-block`}>
                      Browse Jobs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Learning Progress */}
            <div className={`${themeClasses.cardBg} ${themeClasses.shadow} rounded-xl p-6`}>
              <h2 className={`text-xl font-bold ${themeClasses.textPrimary} mb-6`}>Learning Progress</h2>
              <div className="space-y-6">
                {learningPaths.map((path, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {path.icon}
                        <span className={`font-medium ${themeClasses.textPrimary}`}>{path.title}</span>
                      </div>
                      <span className={`${themeClasses.textSecondary} text-sm`}>{path.progress}%</span>
                    </div>
                    <div className={`h-2 rounded-full bg-gray-100 dark:bg-gray-800`}>
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                           style={{ width: `${path.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className={`${themeClasses.cardBg} ${themeClasses.shadow} rounded-xl p-6`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-bold ${themeClasses.textPrimary}`}>Upcoming Events</h2>
                <Link href="/student/events" 
                      className={`${themeClasses.link} text-sm font-medium flex items-center gap-1`}>
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} 
                       className={`${themeClasses.cardBg} ${themeClasses.border} rounded-xl p-4 hover:border-blue-500/50 transition-colors`}>
                    <div className="flex gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center`}>
                        <CalendarDays className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className={`font-medium ${themeClasses.textPrimary}`}>{event.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${themeClasses.info}`}>
                            {event.type}
                          </span>
                          <span className={`text-xs ${themeClasses.textMuted}`}>{event.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {upcomingEvents.length === 0 && (
                  <div className={`text-center py-6 ${themeClasses.textSecondary}`}>
                    <CalendarDays className="h-12 w-12 mx-auto opacity-40 mb-2" />
                    <p>No upcoming events</p>
                  </div>
                )}
              </div>
              
              <Link href="/events" 
                    className={`block w-full text-center ${themeClasses.secondaryButton} mt-4 py-2 rounded-lg text-sm transition-colors`}>
                Explore All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 