'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sparkles, Users, Clock, Calendar, Award, ChevronRight, GraduationCap, Building, BookOpen, Trophy, Bell, Flame, CloudSun, Sunset, Coffee, Music } from 'lucide-react';

export default function UniversityPage() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [universityCount, setUniversityCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
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
      window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 overflow-hidden relative">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image 
                src="/download (1).jpeg" 
                alt="Notification"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <div>
              <p className="font-medium text-lg">University Fair Coming Soon</p>
              <p className="text-sm text-blue-50">10+ top schools will be recruiting. Join us!</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Stats Button */}
      <button 
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500"
        onClick={() => window.alert("University stats dashboard coming soon!")}
      >
        <GraduationCap className="w-6 h-6 text-white" />
      </button>
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <h1 className="text-4xl font-bold mb-4 text-slate-800">
                  Partner <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">Universities</span>
                </h1>
                <div className="absolute -top-6 -right-6">
                  <div className="bg-amber-300 text-teal-900 px-3 py-1 rounded-full transform rotate-6 text-sm shadow-lg">
                    Join Today!
                  </div>
                </div>
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Level up your career services by connecting with talented students around the globe. Create a harmonious pathway from education to meaningful employment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/universities/register" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all duration-300 inline-flex items-center justify-center shadow-md transform hover:-translate-y-1">
                  Register Your University
                </Link>
                <Link href="/contact" className="bg-white text-teal-600 border border-teal-200 px-6 py-3 rounded-xl font-medium hover:bg-teal-50 transition-all duration-300 inline-block text-center">
                  Contact Us
                </Link>
              </div>
              
              <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-teal-100 shadow-sm">
                <h3 className="font-bold text-teal-600 flex items-center mb-3">
                  <Trophy className="w-5 h-5 mr-2" /> Why Partner With Us?
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Connect with 500K+ talented students worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Showcase your programs to targeted audiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Access real-time analytics and conversion data</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl transform rotate-3 -z-10 opacity-20"></div>
                <div className="p-1 md:p-2 rounded-3xl overflow-hidden">
                  <Image 
                    src="/R.png" 
                    alt="University Dashboard Preview"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="absolute -top-4 -right-4 animate-pulse">
                  <div className="bg-amber-300 text-teal-900 px-3 py-1 rounded-full transform rotate-6 text-sm shadow-lg">
                    <span>New Dashboard!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-teal-600 font-medium tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> Features <Sparkles className="w-5 h-5" />
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Comprehensive Career Services Platform
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
      <section className="py-24 bg-gradient-to-r from-teal-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-16 text-white">Growing Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="mb-2 font-bold text-4xl text-white">
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                </div>
                <p className="text-teal-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-teal-600 font-medium tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Universities Thriving With GradLyft
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
                  <p className="text-teal-600 font-medium text-sm mt-1">{story.result}</p>
                  <div className="mt-4">
                    <Link href={`/universities/case-studies/${index + 1}`} className="text-teal-600 hover:text-blue-600 font-medium flex items-center">
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
              <span className="block">Ready to transform your career services?</span>
              <span className="block text-blue-100">Join <span className="font-medium">{Math.floor(Math.random() * 5) + 1}</span> other universities who partnered this week</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-5">
              <div className="inline-flex rounded-xl shadow-md">
                <Link href="/universities/register" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-teal-700 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  Get started now
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/universities/demo" className="inline-flex items-center justify-center px-8 py-3 bg-teal-400/30 backdrop-blur-sm border border-white/30 text-base font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-300">
                  See platform demo
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