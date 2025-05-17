'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, Clock, ChevronRight, Briefcase, UserCircle, ClipboardList, Trophy, Bell, Flame, ArrowRight, Star, Bookmark } from 'lucide-react';

export default function StudentPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [availableJobs, setAvailableJobs] = useState(0);
  const [achievementProgress, setAchievementProgress] = useState(35);
  const [peersOnline, setPeersOnline] = useState(42);

  useEffect(() => {
    // Animate available jobs count
    const interval = setInterval(() => {
      if (availableJobs < 1250) {
        setAvailableJobs(prev => prev + Math.floor(Math.random() * 8) + 3);
      } else {
        clearInterval(interval);
      }
    }, 40);

    // Show notification after delay
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 2000);
    
    // Animate achievement progress
    const progressTimer = setInterval(() => {
      setAchievementProgress(prev => {
        if (prev < 40) return prev + 1;
        return prev;
      });
    }, 300);
    
    // Fluctuate peers count
    const peersTimer = setInterval(() => {
      setPeersOnline(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearInterval(progressTimer);
      clearInterval(peersTimer);
    };
  }, [availableJobs]);

  const features = [
    {
      title: "Find Jobs",
      description: "Browse through thousands of job opportunities from top companies",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/student/jobs",
      expanded: "Discover personalized job matches based on your skills and interests. New opportunities are highlighted with trending indicators to help you apply to the hottest positions first."
    },
    {
      title: "Build Profile",
      description: "Create a professional profile to showcase your skills and experience",
      icon: <UserCircle className="h-6 w-6" />,
      link: "/student/profile",
      expanded: "Earn profile completion badges and increase your visibility to employers. Add skill tags, project showcases, and recommendation tokens to stand out from the crowd."
    },
    {
      title: "Track Applications",
      description: "Monitor your job applications and interview status",
      icon: <ClipboardList className="h-6 w-6" />,
      link: "/student/dashboard",
      expanded: "Watch your application progress in real-time with our interactive dashboard. Get instant notifications on status changes and interview requests from employers."
    }
  ];

  const upcomingEvents = [
    { id: 1, title: "Resume Workshop", time: "Tomorrow, 3:00 PM", participants: 85 },
    { id: 2, title: "Interview Skills Webinar", time: "Friday, 5:00 PM", participants: 112 },
    { id: 3, title: "Tech Career Fair", time: "Next Tuesday", participants: 230 }
  ];

  const savedJobs = [
    { id: 1, company: "TechSolutions", role: "Junior Developer", deadline: "3 days left", logo: "/download.jpeg" },
    { id: 2, company: "InnovateCorp", role: "UX/UI Designer", deadline: "5 days left", logo: "/download (1).jpeg" }
  ];

  return (
    <div className="min-h-screen bg-[var(--section-light)] relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <Bell className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="font-bold text-lg">Hot Job Alert!</p>
              <p className="text-sm">5 new software development roles just posted</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Saved Jobs Button */}
      <button
        onClick={() => window.location.href = '/student/saved-jobs'}
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <Bookmark className="w-6 h-6 text-white" />
        {savedJobs.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-blue-900">
            {savedJobs.length}
          </span>
        )}
      </button>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-cyan-300" />
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Launch Your Career
              </h1>
              <div className="absolute -top-4 -right-8">
                <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-sm shadow-lg">
                  Top Rated!
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Connect with top employers, find your dream job, and take the next step in your career journey.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/student/jobs" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Browse Jobs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/student/profile" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                Complete Profile
              </Link>
            </div>
            
            {/* Achievement Progress */}
            <div className="mt-10 max-w-md mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="font-bold">Profile Strength</span>
                </div>
                <span className="text-sm">{achievementProgress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2.5 mb-1">
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${achievementProgress}%` }}></div>
              </div>
              <div className="text-xs text-white/80">
                Complete your profile to increase visibility to employers!
              </div>
            </div>
            
            {/* Live Activity Indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <div className="relative mr-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="font-medium">
                  <span className="font-bold">{availableJobs.toLocaleString()}</span> jobs available
                </span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <Users className="w-4 h-4 mr-2" />
                <span className="font-medium">
                  <span className="font-bold">{peersOnline}</span> peers online now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> Features <Sparkles className="w-5 h-5" />
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`relative p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${expandedFeature === index ? 'shadow-lg bg-blue-50 ring-2 ring-blue-500' : 'hover:shadow-md'}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                        {feature.title}
                        <ChevronRight className={`ml-2 w-4 h-4 transition-transform ${expandedFeature === index ? 'rotate-90' : ''}`} />
                      </h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                      
                      {expandedFeature === index && (
                        <div className="mt-4 text-sm bg-white p-3 rounded-lg animate-fade-in border border-blue-100">
                          {feature.expanded}
                          <div className="mt-2">
                            <Link href={feature.link} className="flex items-center text-blue-600 hover:text-blue-500 font-medium">
                              Learn more <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Don't Miss Out Section */}
      <div className="bg-blue-50 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1d4ed8" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,208C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
          </svg>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <Flame className="h-7 w-7 text-red-500" /> Don't Miss Out <Flame className="h-7 w-7 text-red-500" />
            </h2>
            <p className="mt-2 text-gray-600">Upcoming events and opportunities to boost your career</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {event.participants} attending
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-4">
                    <Link href={`/events/${event.id}`} className="w-full inline-flex justify-center items-center px-4 py-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-md text-sm font-medium transition-colors">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Saved Jobs Preview */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Your Saved Jobs</h2>
            <Link href="/student/saved-jobs" className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</Link>
          </div>
          
          {savedJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {savedJobs.map(job => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-all">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={job.logo} 
                      alt={job.company}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900">{job.role}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-red-500 text-xs font-medium">{job.deadline}</div>
                    <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:text-blue-700 text-sm mt-1">Apply</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">You haven't saved any jobs yet.</p>
              <Link href="/student/jobs" className="mt-2 inline-block text-blue-600 hover:text-blue-700">
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-600">Join <span className="font-bold animate-pulse">{Math.floor(Math.random() * 12) + 8}</span> other students who signed up today!</span>
            </h2>
            <div className="mt-8 flex gap-4">
              <div className="inline-flex rounded-md shadow">
                <Link href="/student/profile" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                  Create your profile
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/student/explore" className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300">
                  Explore platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 