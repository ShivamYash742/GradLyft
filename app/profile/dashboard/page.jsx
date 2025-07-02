'use client';

import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BarChart, Briefcase, Calendar, Bookmark, Clock, Users, Award, FileText, ChevronRight } from 'lucide-react';

export default function ProfileDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    applications: 0,
    bookmarks: 0,
    events: 0,
    messages: 0
  });
  const [events, setEvents] = useState([]);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    if (user) {
      // Simulate API fetch for user stats
      setStats({
        applications: Math.floor(Math.random() * 10),
        bookmarks: Math.floor(Math.random() * 15),
        events: Math.floor(Math.random() * 5),
        messages: Math.floor(Math.random() * 8)
      });

      // Mock event data
      setEvents([
        {
          id: 1,
          title: "Career Fair 2023",
          date: "November 15, 2023",
          location: "Online",
          isRegistered: true
        },
        {
          id: 2,
          title: "Resume Building Workshop",
          date: "November 22, 2023",
          location: "Main Campus",
          isRegistered: false
        },
        {
          id: 3,
          title: "Tech Industry Trends Webinar",
          date: "December 5, 2023",
          location: "Online",
          isRegistered: true
        },
        {
          id: 4,
          title: "Student Pitch Competition",
          date: "December 15, 2023",
          location: "Innovation Center",
          isRegistered: false
        }
      ]);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-10 w-10 rounded-full border-4 border-[var(--primary-start)] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row mb-8 gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
            <div className="flex items-center mb-6">
              <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mr-4">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-xl font-semibold text-[var(--text-primary)]">
                  {user.student?.name || user.employer?.name || 'Admin User'}
                </div>
                <div className="text-[var(--text-secondary)]">{user.email}</div>
                <div className="text-sm text-[var(--primary-start)] font-medium mt-1">
                  {user.role === 'STUDENT' ? 'Student' : user.role === 'EMPLOYER' ? 'Employer' : 'Administrator'}
                </div>
              </div>
            </div>

            <nav className="space-y-1">
              <Link 
                href="/profile" 
                className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
              >
                Profile Overview
              </Link>
              <Link 
                href="/profile/dashboard" 
                className="block px-3 py-2 rounded-md bg-[var(--section-light)] text-[var(--primary-start)] font-medium"
              >
                Dashboard
              </Link>
              
              {user.role === 'STUDENT' && (
                <>
                  <Link 
                    href="/profile/applications" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    My Applications
                  </Link>
                  <Link 
                    href="/profile/bookmarks" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Bookmarked Jobs
                  </Link>
                  <Link 
                    href="/profile/events" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Registered Events
                  </Link>
                </>
              )}
              
              {user.role === 'EMPLOYER' && (
                <>
                  <Link 
                    href="/employer/jobs" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    My Job Listings
                  </Link>
                  <Link 
                    href="/employer/applications" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Applications Received
                  </Link>
                </>
              )}
              
              {user.role === 'ADMIN' && (
                <>
                  <Link 
                    href="/admin/users" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Manage Users
                  </Link>
                  <Link 
                    href="/admin/jobs" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Review Jobs
                  </Link>
                  <Link 
                    href="/admin/events" 
                    className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
                  >
                    Manage Events
                  </Link>
                </>
              )}
              
              <Link 
                href="/profile/settings" 
                className="block px-3 py-2 rounded-md text-[var(--text-primary)] hover:text-[var(--link-hover)] hover:bg-[var(--section-light)]"
              >
                Account Settings
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">Dashboard</h1>
            <p className="text-[var(--text-secondary)]">Welcome back! Here's an overview of your activity.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {user.role === 'STUDENT' && (
              <>
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Briefcase className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Applications</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.applications}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <Bookmark className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Bookmarks</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.bookmarks}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <Calendar className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Events</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.events}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-rose-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Pending</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.applications - 2}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {user.role === 'EMPLOYER' && (
              <>
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Briefcase className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Active Jobs</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.applications}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Applications</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.bookmarks}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <Award className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Hired</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{Math.floor(stats.bookmarks / 3)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-rose-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Pending</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{stats.bookmarks - Math.floor(stats.bookmarks / 3)}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {user.role === 'ADMIN' && (
              <>
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Total Users</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{120 + Math.floor(Math.random() * 50)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <Briefcase className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Active Jobs</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{35 + Math.floor(Math.random() * 15)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <Calendar className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Events</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{12 + Math.floor(Math.random() * 8)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[var(--card-bg)]">
                  <div className="flex items-center">
                    <div className="bg-rose-100 rounded-full p-3 mr-4">
                      <BarChart className="h-6 w-6 text-rose-500" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-secondary)]">Site Visits</div>
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{1200 + Math.floor(Math.random() * 800)}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Recent Activity */}
          <div className="card rounded-lg shadow-md p-6 mb-8 bg-[var(--card-bg)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Recent Activity</h2>
            
            <div className="space-y-4">
              {user.role === 'STUDENT' && (
                <>
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Applied to Frontend Developer at TechCorp</div>
                      <div className="text-sm text-[var(--text-secondary)]">2 days ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-purple-100 rounded-full p-2 mr-4">
                      <Bookmark className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Bookmarked UX Designer position at DesignHub</div>
                      <div className="text-sm text-[var(--text-secondary)]">3 days ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <Calendar className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Registered for Career Fair 2023</div>
                      <div className="text-sm text-[var(--text-secondary)]">5 days ago</div>
                    </div>
                  </div>
                </>
              )}
              
              {user.role === 'EMPLOYER' && (
                <>
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Posted new job: Senior Developer</div>
                      <div className="text-sm text-[var(--text-secondary)]">1 day ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-purple-100 rounded-full p-2 mr-4">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Received 5 new applications</div>
                      <div className="text-sm text-[var(--text-secondary)]">2 days ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <Award className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Hired John Doe as Junior Developer</div>
                      <div className="text-sm text-[var(--text-secondary)]">1 week ago</div>
                    </div>
                  </div>
                </>
              )}
              
              {user.role === 'ADMIN' && (
                <>
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">5 new users registered</div>
                      <div className="text-sm text-[var(--text-secondary)]">Today</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start border-b border-[var(--card-border)] pb-4">
                    <div className="bg-purple-100 rounded-full p-2 mr-4">
                      <Briefcase className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Approved 3 job listings</div>
                      <div className="text-sm text-[var(--text-secondary)]">Yesterday</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <FileText className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-[var(--text-primary)]">Updated site policy</div>
                      <div className="text-sm text-[var(--text-secondary)]">3 days ago</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
            <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Quick Actions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.role === 'STUDENT' && (
                <>
                  <div className="gradient-button text-white px-4 py-3 rounded-md transition-colors text-center font-medium relative">
                    <span className="flex items-center justify-center">
                      Browse Jobs
                      <span className="ml-2 text-xs bg-orange-300 text-orange-800 px-2 py-0.5 rounded-full">Coming Soon</span>
                    </span>
                  </div>
                  
                  <Link 
                    href="/events"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Upcoming Events
                  </Link>
                  
                  <Link 
                    href="/profile/settings"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Update Profile
                  </Link>
                  
                  <div className="border border-[var(--card-border)] text-[var(--text-primary)] px-4 py-3 rounded-md text-center font-medium relative">
                    <span className="flex items-center justify-center">
                      Upskilling Resources
                      <span className="ml-2 text-xs bg-orange-300 text-orange-800 px-2 py-0.5 rounded-full">Coming Soon</span>
                    </span>
                  </div>
                </>
              )}
              
              {user.role === 'EMPLOYER' && (
                <>
                  <Link 
                    href="/employer/jobs/create"
                    className="gradient-button text-white px-4 py-3 rounded-md hover:gradient-button-hover transition-colors text-center font-medium"
                  >
                    Post New Job
                  </Link>
                  
                  <Link 
                    href="/employer/applications"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Review Applications
                  </Link>
                  
                  <Link 
                    href="/employer/jobs"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Manage Job Listings
                  </Link>
                  
                  <Link 
                    href="/profile/settings"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Company Profile
                  </Link>
                </>
              )}
              
              {user.role === 'ADMIN' && (
                <>
                  <Link 
                    href="/admin/jobs/pending"
                    className="gradient-button text-white px-4 py-3 rounded-md hover:gradient-button-hover transition-colors text-center font-medium"
                  >
                    Review Pending Jobs
                  </Link>
                  
                  <Link 
                    href="/admin/users"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Manage Users
                  </Link>
                  
                  <Link 
                    href="/admin/events/create"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    Create Event
                  </Link>
                  
                  <Link 
                    href="/admin/analytics"
                    className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-3 rounded-md transition-colors text-center font-medium"
                  >
                    View Analytics
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Add a new Registered Events section for students */}
          {user.role === 'STUDENT' && (
            <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)] mt-8">
              <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Events Registration Status</h2>
              
              {events.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[var(--card-border)]">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Event</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Location</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--card-border)]">
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary)]">{event.title}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">{event.date}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">{event.location}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm">
                            {event.isRegistered ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Registered
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                Not Registered
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-[var(--text-secondary)] text-center py-8">No events found</p>
              )}
              
              <div className="mt-4 text-center">
                <Link 
                  href="/events"
                  className="text-[var(--primary-start)] hover:text-[var(--link-hover)] font-medium inline-flex items-center"
                >
                  Browse More Events <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 