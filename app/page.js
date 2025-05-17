'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Briefcase, Calendar, ChevronRight, Star, GraduationCap, Building, BookOpen, MoreHorizontal, Video, Smile, Flame, Trophy, Bell, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // Feature grid color shuffle
  const [colorOrder, setColorOrder] = useState([0, 1, 2, 3]);
  const [hovered, setHovered] = useState(null);
  const [streakCount, setStreakCount] = useState(3);
  const [showStreakPopup, setShowStreakPopup] = useState(false);
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'Profile Star', completed: true, icon: <Star className="text-yellow-400" /> },
    { id: 2, name: 'Event Explorer', completed: true, icon: <Calendar className="text-blue-500" /> },
    { id: 3, name: 'Network Builder', completed: false, icon: <Users className="text-purple-500" /> },
    { id: 4, name: 'Skill Master', completed: false, icon: <Trophy className="text-amber-500" /> },
  ]);
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, name: 'Tech Career Fair', date: 'Today', hot: true },
    { id: 2, name: 'Resume Workshop', date: 'Tomorrow', hot: false },
    { id: 3, name: 'Coding Challenge', date: 'In 3 days', hot: true },
  ]);
  
  const colorPalettes = [
    'bg-blue-100',      // Events
    'bg-purple-100',    // Webinars
    'bg-yellow-100',    // Hackathons
    'bg-pink-100'       // More
  ];
  
  // Universities carousel
  const universities = [
    { name: 'Harvard University', logo: '/yogi-bear3.png' },
    { name: 'Stanford University', logo: '/download.jpeg' },
    { name: 'MIT', logo: '/download (1).jpeg' },
    { name: 'Oxford University', logo: '/download (2).jpeg' },
    { name: 'Cambridge University', logo: '/little-einsteins-cartoon-characters-png-3.png' },
    { name: 'Yale University', logo: '/R.png' },
    { name: 'Princeton University', logo: '/download.jpeg' },
    { name: 'Columbia University', logo: '/download (1).jpeg' },
    { name: 'UC Berkeley', logo: '/download (2).jpeg' },
    { name: 'Caltech', logo: '/yogi-bear3.png' },
  ];
  
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const shuffleColors = () => {
      const newOrder = [...colorOrder];
      for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
      }
      setColorOrder(newOrder);
    };
    shuffleColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    // Auto scroll for university logos
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      };
      
      const timer = setInterval(scroll, 20);
      return () => clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    // Show streak popup after a short delay
    const timer = setTimeout(() => {
      setShowStreakPopup(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setShowStreakPopup(false);
      }, 5000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const featureItems = [
    {
      id: 'events',
      title: 'Events',
      description: 'Explore All Events',
      icon: <Calendar size={24} />,
      href: '/events',
      character: '/download.jpeg',
      explanation: 'Find and join exciting events to boost your career and network with professionals.'
    },
    {
      id: 'webinars',
      title: 'Webinars',
      description: 'Join Live Webinars',
      icon: <span className="flex items-center gap-1"><Video size={22} /><Smile size={20} /></span>,
      href: '/webinars',
      character: '/download (1).jpeg',
      explanation: 'Attend live webinars hosted by industry experts and enhance your knowledge.'
    },
    {
      id: 'hackathons',
      title: 'Hackathons',
      description: 'Compete & Win',
      icon: <Award size={24} />,
      href: '/hackathons',
      character: '/download (2).jpeg',
      explanation: 'Participate in hackathons, solve real-world problems, and win amazing prizes!'
    },
    {
      id: 'more',
      title: 'More',
      description: 'Discover More',
      icon: <MoreHorizontal size={24} />,
      href: '/more',
      character: '/yogi-bear3.png',
      explanation: 'Explore more opportunities and resources to help you grow.'
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Streak popup */}
      {showStreakPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 pulse-glow">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image 
                src="/little-einsteins-cartoon-characters-png-3.png" 
                alt="Streak Character"
                fill
                className="object-contain"
              />
              <Flame className="w-8 h-8 text-yellow-300 absolute -bottom-2 -right-2" />
            </div>
            <div>
              <p className="font-bold text-lg">🔥 {streakCount} Day Streak!</p>
              <p className="text-sm">You're on fire! Come back tmrw!</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Achievement Button */}
      <button 
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 pulse-glow"
        onClick={() => window.alert("Achievements dashboard coming soon!")}
      >
        <Trophy className="w-6 h-6 text-white" />
      </button>
      
      {/* Hero Section */}
      <section className="relative gradient-primary text-white overflow-hidden emoji-bg">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-6 h-6 text-pink-300" />
        </div>
        <div className="absolute top-40 left-1/4 animate-pulse delay-500">
          <Sparkles className="w-7 h-7 text-blue-300" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-700">
          <Sparkles className="w-5 h-5 text-green-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Left: Hero Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                Level Up Your <span className="text-[var(--youth-yellow)] animate-pulse">Career</span>
              </h1>
              {/* New tag */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-sm shadow-lg pulse-glow">
                🔥 Hot Events!
              </div>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
              Ready to crush it? Find the sickest opportunities, flex your skills, & get hired by your dream company!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 pulse-glow">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/about" className="text-white bg-transparent border border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 inline-block text-center">
                Learn More
              </Link>
            </div>
          </div>
          {/* Right: Feature Grid */}
          <div className="md:w-1/2 md:pl-10 animate-slide-up w-full">
            <div className="grid grid-cols-2 gap-4 w-full relative">
              {/* Hot label */}
              <div className="absolute -top-6 -left-2 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Don't miss out!
                </div>
              </div>
              
              {/* Events Card */}
              <Link href="/events" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-pink-200 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-200/50 z-[1] rounded-lg"></div>
                    <Image 
                      src="/download (2).jpeg" 
                      alt="Events" 
                      fill 
                      className="object-cover rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col h-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">Events</span>
                      <div className="ml-auto bg-pink-500/20 p-1 rounded-full">
                        <Calendar size={16} className="text-pink-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">Explore All Events</p>
                    <div className="mt-auto">
                      <span className="text-xs bg-pink-500/20 rounded-full px-2 py-1 text-pink-700">🔥 Popular</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Webinars Card */}
              <Link href="/webinars" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex flex-col h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-yellow-200 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-200/50 z-[1] rounded-lg"></div>
                    <Image 
                      src="/OIP.jpeg" 
                      alt="Webinars" 
                      fill 
                      className="object-cover rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col h-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">Webinars</span>
                      <div className="ml-auto bg-yellow-500/20 p-1 rounded-full">
                        <Video size={16} className="text-yellow-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">Join Live Webinars</p>
                    <div className="mt-auto">
                      <span className="text-xs bg-yellow-500/20 rounded-full px-2 py-1 text-yellow-700">✨ New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Hackathons Card */}
              <Link href="/hackathons" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-blue-200 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-200/50 z-[1] rounded-lg"></div>
                    <Image 
                      src="/3d-cartoon-boy-studying-wearing-glasses_988987-175.avif" 
                      alt="Hackathons" 
                      fill 
                      className="object-cover rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col h-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">Hackathons</span>
                      <div className="ml-auto bg-blue-500/20 p-1 rounded-full">
                        <Award size={16} className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">Compete & Win</p>
                    <div className="mt-auto">
                      <span className="text-xs bg-blue-500/20 rounded-full px-2 py-1 text-blue-700">🏆 Win Prizes</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* More Card */}
              <Link href="/more" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 flex flex-col h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-sky-200 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sky-200/50 z-[1] rounded-lg"></div>
                    <Image 
                      src="/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28549.avif" 
                      alt="More" 
                      fill 
                      className="object-cover rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col h-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">More</span>
                      <div className="ml-auto bg-sky-500/20 p-1 rounded-full">
                        <MoreHorizontal size={16} className="text-sky-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">Discover More</p>
                    <div className="mt-auto">
                      <span className="text-xs bg-sky-500/20 rounded-full px-2 py-1 text-sky-700">👀 Explore</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Engagement Section - Moved from Hero */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Your Vibe Section */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-indigo-100">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                <h3 className="font-bold text-xl text-white flex items-center">
                  <span>Your Vibe</span>
                  <div className="ml-2 flex">
                    <Flame className="w-5 h-5 text-orange-300 animate-pulse" />
                    <span className="ml-1">{streakCount}</span>
                  </div>
                </h3>
              </div>
              <div className="p-6">
                <div className="flex gap-3 mb-3">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className={`w-12 h-12 flex items-center justify-center rounded-full ${achievement.completed ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white pulse-glow' : 'bg-gray-200 text-gray-400'}`}>
                      {achievement.icon}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Level up your profile to unlock more achievements! 🏆
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="/profile" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center">
                    View All Achievements <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* FOMO Alert Section */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-indigo-100">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                <h3 className="font-bold text-xl text-white flex items-center">
                  <span>🔥 FOMO Alert!</span>
                  <Bell className="w-5 h-5 text-yellow-300 animate-pulse ml-auto" />
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <Link href="/events" className="flex items-center justify-between p-3 rounded-md bg-orange-50 hover:bg-orange-100 transition-colors">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden ring-2 ring-orange-300 animate-pulse">
                        <Image 
                          src="/yogi-bear3.png" 
                          alt="Tech Career Fair"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Tech Career Fair</span>
                        <p className="text-xs text-gray-500">Connect with top employers</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm mr-2 bg-red-500 text-white px-2 py-0.5 rounded-full">Today</span>
                      <Flame className="w-4 h-4 text-orange-400" />
                    </div>
                  </Link>
                  
                  <Link href="/events" className="flex items-center justify-between p-3 rounded-md bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="flex items-center">
                      <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden ring-2 ring-pink-300">
                        <Image 
                          src="/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5510.avif" 
                          alt="Resume Workshop"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Resume Workshop</span>
                        <p className="text-xs text-gray-500">Learn how to stand out</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm bg-yellow-500 text-white px-2 py-0.5 rounded-full">Tomorrow</span>
                    </div>
                  </Link>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-center">
                  <span className="text-orange-600 font-bold animate-pulse">237 students</span> are viewing these events right now!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-gradient-primary">The Hype is Real! 🔥</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Join the squad and be part of something epic</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Universities */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-lg">
                <Image 
                  src="/yogi-bear3.png" 
                  alt="Universities"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                <GraduationCap className="text-indigo-600 w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-indigo-600">500+</h3>
              <p className="text-gray-600">Universities</p>
              <div className="mt-3">
                <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full group-hover:bg-indigo-200 transition-colors">Lit! 🔥</span>
              </div>
            </div>
            
            {/* Students */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-lg">
                <Image 
                  src="/3d-cartoon-boy-studying-wearing-glasses_988987-175.avif" 
                  alt="Students"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Users className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-blue-600">2M+</h3>
              <p className="text-gray-600">Students</p>
              <div className="mt-3">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full group-hover:bg-blue-200 transition-colors">Growing</span>
              </div>
            </div>
            
            {/* Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-lg">
                <Image 
                  src="/download (1).jpeg" 
                  alt="Events"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                <Calendar className="text-pink-600 w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-pink-600">10K+</h3>
              <p className="text-gray-600">Events</p>
              <div className="mt-3">
                <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full group-hover:bg-pink-200 transition-colors">Fire! 🚀</span>
              </div>
            </div>
            
            {/* Employers */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-lg">
                <Image 
                  src="/download (2).jpeg" 
                  alt="Employers"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Briefcase className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold mb-1 text-green-600">5K+</h3>
              <p className="text-gray-600">Employers</p>
              <div className="mt-3">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full group-hover:bg-green-200 transition-colors">Hiring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Section */}
      <section className="py-16 bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Trusted by Leading Universities</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Partner with us to connect your students with top employers and opportunities worldwide.
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--section-dark)] to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--section-dark)] to-transparent"></div>
            
            <div className="slider-track py-8 overflow-hidden">
              <div className="slide-track flex items-center">
                {/* First set of universities */}
                {universities.map((university, index) => (
                  <div key={`first-${index}`} className="slide flex-shrink-0 flex flex-col items-center mx-6">
                    <div className="w-32 h-32 relative rounded-full overflow-hidden bg-white p-2 shadow-md">
                      <Image 
                        src={university.logo} 
                        alt={university.name} 
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-1"
                      />
                    </div>
                    <p className="mt-3 text-sm text-[var(--text-secondary)] font-medium">{university.name}</p>
                  </div>
                ))}
                
                {/* Duplicate set for seamless looping */}
                {universities.map((university, index) => (
                  <div key={`second-${index}`} className="slide flex-shrink-0 flex flex-col items-center mx-6">
                    <div className="w-32 h-32 relative rounded-full overflow-hidden bg-white p-2 shadow-md">
                      <Image 
                        src={university.logo} 
                        alt={university.name} 
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-1"
                      />
                    </div>
                    <p className="mt-3 text-sm text-[var(--text-secondary)] font-medium">{university.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/universities/register" 
              className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
            >
              Become a Partner University <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Epic Opportunities Await You 🤩</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Level up your skills and build your personal brand with these sick opportunities!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-bold px-8 py-1 transform rotate-45">
                🔥 Popular
              </div>
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Competitions & Hackathons</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Show off your skills and crush it in challenges that'll boost your resume and make recruiters notice!
              </p>
              <Link href="/events" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                Explore Events <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Internships & Jobs</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Connect with top employers looking for fresh talent like you. Time to secure that bag! 💰
              </p>
              <Link href="/employer" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                Find Opportunities <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-bold px-8 py-1 transform rotate-45">
                ✨ New
              </div>
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Calendar className="text-white" size={28} />
              </div>
              <div className="float-right ml-4 mb-2">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image 
                    src="/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28549.avif" 
                    alt="Workshop Participant" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Workshops & Webinars</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Learn from the pros in super cool interactive sessions. Major knowledge flex incoming!
              </p>
              <Link href="/events" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                View Schedule <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">What Our Users Say</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Hear from students and professionals who have transformed their careers with GradLyft.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                "GradLyft helped me land my dream internship at a top tech company. The platform made it easy to connect with employers and showcase my skills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Aisha Smith</h4>
                  <p className="text-[var(--text-muted)]">Computer Science Student</p>
                </div>
              </div>
            </div>
            
            <div className="card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                "The hackathons on GradLyft are incredible! I've built my portfolio, networked with industry professionals, and gained valuable skills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Raj Johnson</h4>
                  <p className="text-[var(--text-muted)]">Engineering Graduate</p>
                </div>
              </div>
            </div>
            
            <div className="card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-[var(--text-secondary)] mb-6">
                "As a university representative, GradLyft has transformed how we connect with talented students. The platform is intuitive and effective."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold">LP</span>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Lisa Parker</h4>
                  <p className="text-[var(--text-muted)]">University Admissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-primary py-20 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-12 left-1/4 animate-ping">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          <div className="absolute top-1/3 left-1/2 animate-ping delay-300">
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-ping delay-700">
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
          <div className="absolute bottom-1/2 right-1/4 animate-ping delay-500">
            <div className="w-4 h-4 rounded-full bg-white/20"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 relative">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started? 🚀</h2>
            <div className="absolute -top-6 -right-6 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of students who are already living their best career lives on GradLyft!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="bg-white text-[var(--primary-end)] px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Create Your Account
            </Link>
            <Link href="/about" className="text-white bg-transparent border border-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-all duration-300 inline-block">
              Learn More About Us
            </Link>
          </div>
          
          {/* FOMO element */}
          <div className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <div className="relative mr-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-green-400 flex items-center justify-center text-white">
                <Image 
                  src="/download (1).jpeg" 
                  alt="Active users"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse flex items-center justify-center">
                <Users className="w-2 h-2 text-white" />
              </div>
            </div>
            <span>37 people registered in the last hour! Don't miss out!</span>
          </div>
        </div>
      </section>

      {/* Add this style block at the end of your component, right before the final return closing bracket */}
      <style jsx global>{`
        /* Perfect animation for university logos */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 10));
          }
        }
        
        .slider-track {
          width: 100%;
          height: auto;
          margin: auto;
          overflow: hidden;
          position: relative;
        }
        
        .slide-track {
          animation: scroll 40s linear infinite;
          width: calc(250px * 20);
        }
        
        .slide-track:hover {
          animation-play-state: paused;
        }
        
        .slide {
          width: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </main>
  );
}
