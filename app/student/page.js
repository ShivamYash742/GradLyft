'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, Clock, ChevronRight, Briefcase, UserCircle, ClipboardList, Trophy, Bell, Flame, ArrowRight, Star, Bookmark, CloudSun, Sunset, Coffee, Music } from 'lucide-react';

export default function StudentPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [availableJobs, setAvailableJobs] = useState(0);
  const [achievementProgress, setAchievementProgress] = useState(35);
  const [peersOnline, setPeersOnline] = useState(42);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
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
      link: "/profile/dashboard",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 overflow-hidden relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
            <Bell className="w-8 h-8 text-blue-100 animate-pulse" />
            <div>
              <p className="font-medium text-lg">New Opportunity</p>
              <p className="text-sm text-blue-100">5 new software development roles just posted</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Saved Jobs Button */}
      <button
        onClick={() => window.location.href = '/student/saved-jobs'}
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center"
      >
        <Bookmark className="w-6 h-6 text-white" />
        {savedJobs.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-amber-300 text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center text-slate-800">
            {savedJobs.length}
          </span>
        )}
      </button>
      
      {/* Hero Section with Parallax */}
      <div className="bg-gradient-to-b from-teal-600 to-blue-600 text-white relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div 
          className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                Launch Your Career
              </h1>
              <div className="absolute -top-6 -right-8">
                <div className="bg-amber-300 text-teal-900 px-3 py-1 rounded-full transform rotate-6 text-sm shadow-lg">
                  Your Path
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-50 leading-relaxed">
              Connect with top employers, find your dream job, and take the next step in your career journey in harmony with your personal goals.
            </p>
            <div className="mt-10 flex justify-center gap-5">
              <Link href="/student/jobs" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-teal-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Browse Jobs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/student/profile" className="inline-flex items-center px-8 py-3 bg-teal-400/30 backdrop-blur-sm border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                Complete Profile
              </Link>
            </div>
            
            {/* Achievement Progress */}
            <div className="mt-10 max-w-md mx-auto bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-amber-300 mr-2" />
                  <span className="font-medium">Profile Strength</span>
                </div>
                <span className="text-sm">{achievementProgress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2.5 mb-2">
                <div className="bg-gradient-to-r from-teal-400 to-blue-400 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${achievementProgress}%` }}></div>
              </div>
              <div className="text-xs text-white/80">
                Complete your profile to increase visibility to employers!
              </div>
            </div>
            
            {/* Live Activity Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm border border-white/20">
                <div className="relative mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="font-medium">
                  <span className="font-bold">{availableJobs.toLocaleString()}</span> jobs available
                </span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm border border-white/20">
                <Users className="w-4 h-4 mr-3" />
                <span className="font-medium">
                  <span className="font-bold">{peersOnline}</span> peers online now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-teal-600 font-medium tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> Features <Sparkles className="w-5 h-5" />
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Resources for Your Career Journey
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer ${expandedFeature === index ? 'bg-gradient-to-br from-teal-50 to-blue-50 ring-2 ring-teal-300 shadow-lg' : 'bg-white hover:shadow-md border border-slate-100'}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex flex-col">
                    <div className="flex-shrink-0 mb-5">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 flex items-center">
                        {feature.title}
                        <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${expandedFeature === index ? 'rotate-90' : ''}`} />
                      </h3>
                      <p className="mt-3 text-slate-600">{feature.description}</p>
                      
                      {expandedFeature === index && (
                        <div className="mt-5 text-sm bg-white p-4 rounded-xl animate-fade-in shadow-inner">
                          {feature.expanded}
                          <div className="mt-3">
                            <Link href={feature.link} className="flex items-center text-teal-600 hover:text-blue-600 font-medium">
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

      {/* Events Section */}
      <div className="py-24 bg-gradient-to-r from-teal-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="teal" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
              <Sunset className="h-7 w-7 text-teal-500" /> Upcoming Opportunities <Sunset className="h-7 w-7 text-teal-500" />
            </h2>
            <p className="mt-3 text-slate-600">Events and opportunities to enhance your career journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-teal-100">
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-slate-800">{event.title}</h3>
                    <div className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {event.participants} attending
                    </div>
                  </div>
                  <div className="flex items-center mt-3 text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-6">
                    <Link href={`/events/${event.id}`} className="w-full inline-flex justify-center items-center px-5 py-2 border border-teal-600 text-teal-600 bg-white hover:bg-teal-50 rounded-lg text-sm font-medium transition-colors">
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
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-slate-800">Your Saved Jobs</h2>
            <Link href="/student/saved-jobs" className="text-teal-600 hover:text-blue-600 text-sm font-medium">View All</Link>
          </div>
          
          {savedJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {savedJobs.map(job => (
                <div key={job.id} className="border border-slate-100 rounded-xl p-6 flex items-center gap-5 hover:shadow-md transition-all duration-300 bg-white">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-slate-50">
                    <Image 
                      src={job.logo} 
                      alt={job.company}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-slate-800 text-lg">{job.role}</h3>
                    <p className="text-slate-600 text-sm">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-amber-600 text-xs font-medium">{job.deadline}</div>
                    <Link href={`/jobs/${job.id}`} className="text-teal-600 hover:text-blue-600 text-sm mt-2 font-medium">Apply</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl">
              <p className="text-slate-600">You haven't saved any jobs yet.</p>
              <Link href="/student/jobs" className="mt-4 inline-block text-teal-600 hover:text-blue-600 font-medium">
                Browse Jobs
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-teal-500 to-blue-600 text-white relative overflow-hidden">
        {/* Gentle wave pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" 
                  d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative z-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="block">Ready to begin your journey?</span>
              <span className="block text-blue-100">Join <span className="font-medium">{Math.floor(Math.random() * 12) + 8}</span> other students who found their path today</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-5">
              <div className="inline-flex rounded-xl shadow-md">
                <Link href="/student/profile" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-teal-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Create your profile
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/student/explore" className="inline-flex items-center justify-center px-8 py-3 bg-teal-400/30 backdrop-blur-sm border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                  Explore platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 30px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 