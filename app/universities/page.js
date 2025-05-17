'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, Clock, Calendar, Award, ChevronRight, GraduationCap, Building, BookOpen, Trophy, Bell, Flame } from 'lucide-react';

export default function UniversityPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [universityCount, setUniversityCount] = useState(0);

  useEffect(() => {
    // Animate university count on load
    const interval = setInterval(() => {
      if (universityCount < 100) {
        setUniversityCount(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    // Show notification after a delay
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [universityCount]);

  const features = [
    {
      title: "Student Management",
      description: "Track student progress, manage profiles, and monitor career outcomes",
      icon: <Users className="h-6 w-6" />,
      link: "/universities/students",
      expanded: "Our student management system lets you create personalized career paths for each student, track their skill development, and celebrate their achievements with our gamified progress system."
    },
    {
      title: "Career Services",
      description: "Manage career fairs, workshops, and employer partnerships",
      icon: <Calendar className="h-6 w-6" />,
      link: "/universities/career-services",
      expanded: "Plan and promote engaging events with our interactive tools. Students can RSVP, add to their calendars, and earn participation points that boost their visibility to employers."
    },
    {
      title: "Analytics Dashboard",
      description: "Track placement rates, student engagement, and employer feedback",
      icon: <Award className="h-6 w-6" />,
      link: "/universities/analytics",
      expanded: "Our real-time analytics dashboard shows you trending opportunities, student engagement metrics, and predictive insights on industry demand to help guide your career services strategy."
    }
  ];

  const stats = [
    {
      label: "Partner Universities",
      value: "100+",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      label: "Student Placements",
      value: "50K+",
      icon: <Users className="h-6 w-6" />
    },
    {
      label: "Employer Partners",
      value: "1000+",
      icon: <Building className="h-6 w-6" />
    }
  ];

  const successStories = [
    {
      name: "University of Innovation",
      result: "37% increase in student placements",
      image: "/download.jpeg"
    },
    {
      name: "Central State University",
      result: "2x employer engagement",
      image: "/download (1).jpeg"
    },
    {
      name: "Tech Institute",
      result: "45% more internship opportunities",
      image: "/download (2).jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--section-light)] relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <Bell className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="font-bold text-lg">New University Partner!</p>
              <p className="text-sm">Tech Institute joined GradLyft this week</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Achievement Button */}
      <Link 
        href="/universities/success-stories"
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-green-600 to-teal-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <Trophy className="w-6 h-6 text-white" />
      </Link>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-600 to-green-700 text-white relative overflow-hidden">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-teal-300" />
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block relative">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Empower Your Students' Success
              </h1>
              <div className="absolute -top-4 -right-8">
                <div className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-sm shadow-lg">
                  Trending Now!
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Connect your university with top employers, track student outcomes, and enhance your career services.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/universities/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Partner With Us
              </Link>
              <Link href="/universities/demo" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300">
                Book a Demo
              </Link>
            </div>
            
            {/* Live Activity Indicator */}
            <div className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
              <div className="relative mr-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 animate-ping"></div>
              </div>
              <span className="font-medium">
                <span className="font-bold">{universityCount}</span> universities active right now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> Features <Sparkles className="w-5 h-5" />
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Career Services Platform
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`relative p-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${expandedFeature === index ? 'shadow-lg bg-green-50 ring-2 ring-green-500' : 'hover:shadow-md'}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        <div className="mt-4 text-sm bg-white p-3 rounded-lg animate-fade-in border border-green-100">
                          {feature.expanded}
                          <div className="mt-2">
                            <Link href={feature.link} className="flex items-center text-green-600 hover:text-green-500 font-medium">
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
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">GradLyft Impact</h2>
            <p className="mt-2 text-gray-600">Join our growing community of educational institutions making a difference</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="relative group">
                <div className="text-center p-6 rounded-lg bg-white shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-extrabold text-green-600">{stat.value}</div>
                  <div className="mt-2 text-base text-gray-500">{stat.label}</div>
                </div>
                {/* Hot indicator for one stat */}
                {stat.label === "Student Placements" && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full group-hover:animate-pulse">
                    <Flame className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Universities Thriving With GradLyft
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
                  <p className="text-green-600 font-medium text-sm mt-1">{story.result}</p>
                  <div className="mt-4">
                    <Link href={`/universities/case-studies/${index + 1}`} className="text-green-600 hover:text-green-700 font-medium flex items-center">
                      Read case study <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 relative overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0d9488" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,208C672,192,768,160,864,165.3C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between relative">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your career services?</span>
              <span className="block text-green-600">Join <span className="font-bold animate-pulse">{Math.floor(Math.random() * 5) + 1}</span> other universities who signed up this week!</span>
            </h2>
            <div className="mt-8 flex gap-4">
              <div className="inline-flex rounded-md shadow">
                <Link href="/universities/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1">
                  Get started now
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/universities/demo" className="inline-flex items-center justify-center px-5 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-all duration-300">
                  See platform demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 