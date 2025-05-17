'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, FileText, BarChart3, ChevronRight, Building, GraduationCap, Bell, Trophy, Flame, Clock, ArrowRight, CloudSun, Sunset, Coffee } from 'lucide-react';

export default function EmployerPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [liveJobs, setLiveJobs] = useState(0);
  const [activeRecruiter, setActiveRecruiter] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Animate jobs count
    const interval = setInterval(() => {
      if (liveJobs < 1000) {
        setLiveJobs(prev => prev + Math.floor(Math.random() * 10) + 5);
      } else {
        clearInterval(interval);
      }
    }, 50);

    // Show notification after delay
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 2500);
    
    // Toggle active recruiter status periodically
    const recruiterTimer = setInterval(() => {
      setActiveRecruiter(prev => !prev);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearInterval(recruiterTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Post Jobs",
      description: "Create and manage job listings to attract top talent",
      icon: <FileText className="h-6 w-6" />,
      link: "/employer/post-job",
      expanded: "Create eye-catching job listings with custom badges, trend indicators, and engagement metrics to attract the most qualified candidates."
    },
    {
      title: "Manage Candidates",
      description: "Review applications and manage your candidate pipeline",
      icon: <Users className="h-6 w-6" />,
      link: "/employer/dashboard",
      expanded: "Our candidate management system helps you identify top performers through skill badges, challenge completions, and peer endorsements in a harmonious workflow."
    },
    {
      title: "Analytics",
      description: "Track job performance and candidate engagement metrics",
      icon: <BarChart3 className="h-6 w-6" />,
      link: "/employer/analytics",
      expanded: "Get real-time insights into your recruitment performance with interactive dashboards showing engagement trends, candidate activity, and competitive benchmarks."
    }
  ];

  const successStories = [
    {
      name: "TechGrowth Inc.",
      position: "Software Developer",
      result: "Found perfect candidate in just 48 hours",
      image: "/download.jpeg"
    },
    {
      name: "Finance Forward",
      position: "Data Analyst",
      result: "80% reduction in time-to-hire",
      image: "/download (1).jpeg"
    },
    {
      name: "Creative Solutions",
      position: "UI/UX Designer",
      result: "2x qualified applicants vs. traditional platforms",
      image: "/download (2).jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 overflow-hidden relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
            <Bell className="w-8 h-8 text-blue-100 animate-pulse" />
            <div>
              <p className="font-medium text-lg">New Talent Update</p>
              <p className="text-sm text-blue-50">15 new graduates with React skills just joined</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Stats Button */}
      <Link 
        href="/employer/insights"
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500"
      >
        <Trophy className="w-6 h-6 text-white" />
      </Link>
      
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
                Find Your Next Great Hire
              </h1>
              <div className="absolute -top-6 -right-8">
                <div className="bg-amber-300 text-teal-900 px-3 py-1 rounded-full transform rotate-6 text-sm shadow-lg">
                  Mindful Hiring
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-50 leading-relaxed">
              Connect with talented students and recent graduates. Post jobs, manage applications, and build your team with harmony and balance.
            </p>
            <div className="mt-10 flex justify-center gap-5">
              <Link href="/employer/post-job" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-teal-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Post a Job <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/employer/browse-talent" className="inline-flex items-center px-8 py-3 bg-teal-400/30 backdrop-blur-sm border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                Browse Talent
              </Link>
            </div>
            
            {/* Live Activity Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm border border-white/20">
                <div className="relative mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="font-medium">
                  <span className="font-bold">{liveJobs.toLocaleString()}</span> active jobs
                </span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm border border-white/20">
                <Clock className="w-4 h-4 mr-3" />
                <span className="font-medium">Average response time: <span className="font-bold">24 hours</span></span>
              </div>
              
              <div className={`inline-flex items-center ${activeRecruiter ? 'bg-green-500/20' : 'bg-white/10'} backdrop-blur-sm px-5 py-2 rounded-full text-sm border border-white/20`}>
                <div className="relative mr-3">
                  <div className={`w-2 h-2 ${activeRecruiter ? 'bg-green-400' : 'bg-gray-400'} rounded-full`}></div>
                  {activeRecruiter && <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>}
                </div>
                <span className="font-medium">
                  Recruiter {activeRecruiter ? 'online now' : 'last active 5m ago'}
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
              Everything you need to hire
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

      {/* Stats Section */}
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
      
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Platform Metrics</h2>
            <p className="mt-3 text-slate-600">Join hundreds of companies finding talent on GradLyft</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative group">
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1 border border-teal-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-600">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-teal-600">10K+</div>
                <div className="mt-2 text-base text-slate-600">Active Students</div>
              </div>
            </div>
            <div className="relative group">
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1 border border-teal-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-600">
                    <Building className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-teal-600">500+</div>
                <div className="mt-2 text-base text-slate-600">Companies Hiring</div>
              </div>
              {/* Hot indicator */}
              <div className="absolute -top-3 -right-3 bg-amber-400 text-white p-2 rounded-full animate-pulse">
                <Flame className="w-4 h-4" />
              </div>
            </div>
            <div className="relative group">
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1 border border-teal-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-600">
                    <FileText className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-teal-600">1K+</div>
                <div className="mt-2 text-base text-slate-600">Jobs Posted Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-teal-600 font-medium tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Companies Finding Top Talent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-teal-100">
                <div className="h-48 w-full relative">
                  <Image 
                    src={story.image}
                    alt={story.name}
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-800">{story.name}</h3>
                  <p className="text-slate-600 text-sm">{story.position}</p>
                  <p className="text-teal-600 font-medium text-sm mt-1">{story.result}</p>
                  <div className="mt-4">
                    <Link href={`/employer/stories/${index + 1}`} className="text-teal-600 hover:text-blue-600 font-medium flex items-center">
                      Read full story <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              <span className="block">Ready to start hiring?</span>
              <span className="block text-blue-100">Join <span className="font-medium">{Math.floor(Math.random() * 7) + 3}</span> other companies who found the perfect match today</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-5">
              <div className="inline-flex rounded-xl shadow-md">
                <Link href="/register" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-teal-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Create employer account
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/employer/demo" className="inline-flex items-center justify-center px-8 py-3 bg-teal-400/30 backdrop-blur-sm border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                  Request demo
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