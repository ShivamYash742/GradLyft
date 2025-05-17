'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, FileText, BarChart3, ChevronRight, Building, GraduationCap, Bell, Trophy, Flame, Clock, ArrowRight } from 'lucide-react';

export default function EmployerPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [liveJobs, setLiveJobs] = useState(0);
  const [activeRecruiter, setActiveRecruiter] = useState(false);

  useEffect(() => {
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
      expanded: "Our gamified candidate management system helps you identify top performers through skill badges, challenge completions, and peer endorsements."
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
    <div className="min-h-screen bg-[var(--section-light)] relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <Bell className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="font-bold text-lg">New Talent Alert!</p>
              <p className="text-sm">15 new graduates with React skills just joined</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Stats Button */}
      <Link 
        href="/employer/insights"
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <Trophy className="w-6 h-6 text-white" />
      </Link>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-purple-300" />
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Find Your Next Great Hire
              </h1>
              <div className="absolute -top-4 -right-12">
                <div className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-sm shadow-lg">
                  Fastest Hiring!
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Connect with talented students and recent graduates. Post jobs, manage applications, and build your team.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/employer/post-job" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Post a Job <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/employer/browse-talent" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                Browse Talent
              </Link>
            </div>
            
            {/* Live Activity Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <div className="relative mr-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
                </div>
                <span className="font-medium">
                  <span className="font-bold">{liveJobs.toLocaleString()}</span> active jobs
                </span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">Average response time: <span className="font-bold">24 hours</span></span>
              </div>
              
              <div className={`inline-flex items-center ${activeRecruiter ? 'bg-green-500/20' : 'bg-white/10'} backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20`}>
                <div className="relative mr-2">
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
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> Features <Sparkles className="w-5 h-5" />
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to hire
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`relative p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${expandedFeature === index ? 'shadow-lg bg-indigo-50 ring-2 ring-indigo-500' : 'hover:shadow-md'}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                        <div className="mt-4 text-sm bg-white p-3 rounded-lg animate-fade-in border border-indigo-100">
                          {feature.expanded}
                          <div className="mt-2">
                            <Link href={feature.link} className="flex items-center text-indigo-600 hover:text-indigo-500 font-medium">
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
      <div className="bg-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4f46e5" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,208C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
          </svg>
        </div>
      
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Platform Metrics</h2>
            <p className="mt-2 text-gray-600">Join hundreds of companies finding talent on GradLyft</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative group">
              <div className="text-center p-6 rounded-lg bg-white shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-indigo-600">10K+</div>
                <div className="mt-2 text-base text-gray-500">Active Students</div>
              </div>
            </div>
            <div className="relative group">
              <div className="text-center p-6 rounded-lg bg-white shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Building className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-indigo-600">500+</div>
                <div className="mt-2 text-base text-gray-500">Companies Hiring</div>
              </div>
              {/* Hot indicator */}
              <div className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full group-hover:animate-pulse">
                <Flame className="w-4 h-4" />
              </div>
            </div>
            <div className="relative group">
              <div className="text-center p-6 rounded-lg bg-white shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <FileText className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-extrabold text-indigo-600">1K+</div>
                <div className="mt-2 text-base text-gray-500">Jobs Posted Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Companies Finding Top Talent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
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
                  <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                  <p className="text-gray-600 text-sm">{story.position}</p>
                  <p className="text-indigo-600 font-medium text-sm mt-1">{story.result}</p>
                  <div className="mt-4">
                    <Link href={`/employer/stories/${index + 1}`} className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
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
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to start hiring?</span>
              <span className="block text-indigo-600">Join <span className="font-bold animate-pulse">{Math.floor(Math.random() * 7) + 3}</span> other companies who signed up today!</span>
            </h2>
            <div className="mt-8 flex gap-4">
              <div className="inline-flex rounded-md shadow">
                <Link href="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  Create employer account
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/employer/demo" className="inline-flex items-center justify-center px-5 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300">
                  Request demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 