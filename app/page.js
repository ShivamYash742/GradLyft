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
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-pink-300" />
        </div>
        <div className="absolute top-40 left-1/4 animate-pulse delay-500">
          <Sparkles className="w-5 h-5 text-blue-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Left: Hero Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                Level Up Your <span className="text-[var(--youth-yellow)]">Career</span>
              </h1>
              {/* New tag */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-sm shadow-lg">
                🔥 Hot Events!
              </div>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
              Ready to crush it? Find the sickest opportunities, flex your skills, & get hired by your dream company!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/about" className="text-white bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-all duration-300 inline-block text-center">
                Learn More
              </Link>
            </div>
            
            {/* User progress section */}
            <div className="mt-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg flex items-center">
                  <span>Your Vibe</span>
                  <div className="ml-2 flex">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="ml-1">{streakCount}</span>
                  </div>
                </h3>
                <Link href="/profile" className="text-sm hover:underline">View All</Link>
              </div>
              <div className="flex gap-3 mb-3">
                {achievements.map(achievement => (
                  <div key={achievement.id} className={`w-10 h-10 flex items-center justify-center rounded-full ${achievement.completed ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white' : 'bg-white/30'}`}>
                    {achievement.icon}
                  </div>
                ))}
              </div>
              <div className="text-xs text-white/80">
                Level up your profile to unlock more achievements! 🏆
              </div>
            </div>
          </div>
          {/* Right: Feature Grid */}
          <div className="md:w-1/2 md:pl-10 animate-slide-up w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
              {featureItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                >
                  <Link 
                    href={item.href}
                    className="group relative block focus:outline-none"
                  >
                    <div className={`p-4 rounded-xl ${colorPalettes[colorOrder[index]]} flex flex-col h-[120px] md:h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 text-lg md:text-xl">{item.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 flex-1">{item.description}</p>
                      <div className="mt-auto flex justify-end">
                        {item.icon}
                      </div>
                    </div>
                  </Link>
                  {/* Character Popup */}
                  {hovered === item.id && (
                    <div className="absolute z-50 left-full top-1/2 -translate-y-1/2 ml-4 w-64 bg-white text-gray-800 rounded-xl shadow-2xl p-4 flex flex-col items-center animate-fade-in border border-gray-100">
                      <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-100 mb-2">
                        <Image 
                          src={item.character} 
                          alt={item.title + ' character'} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="font-bold mb-1 text-base text-center">{item.title}</div>
                      <div className="text-sm text-center">{item.explanation}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Trending events sidebar */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg flex items-center">
                  <span>🔥 FOMO Alert!</span>
                </h3>
                <Bell className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
              <div className="space-y-2">
                {upcomingEvents.map(event => (
                  <Link href="/events" key={event.id} className="flex items-center justify-between p-2 rounded-md hover:bg-white/10 transition-colors">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 mr-2 rounded-full overflow-hidden">
                        <Image 
                          src={event.hot ? "/yogi-bear3.png" : "/R.png"} 
                          alt={event.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>{event.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">{event.date}</span>
                      {event.hot && <Flame className="w-4 h-4 text-orange-400" />}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-3 pt-2 border-t border-white/10 text-xs text-center">
                <span className="text-[var(--youth-yellow)]">237 students</span> are viewing these events right now!
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">GradLyft Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[var(--primary-start)]/10 relative overflow-hidden">
              <div className="w-full h-32 mb-4 relative">
                <Image 
                  src="/yogi-bear3.png" 
                  alt="Universities"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-1"
                />
              </div>
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">500+</h3>
              <p className="text-[var(--text-secondary)]">Universities</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[var(--primary-mid)]/10 relative overflow-hidden">
              <div className="w-full h-32 mb-4 relative">
                <Image 
                  src="/download.jpeg" 
                  alt="Students"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-1"
                />
              </div>
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">2M+</h3>
              <p className="text-[var(--text-secondary)]">Students</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[var(--primary-end)]/10 relative overflow-hidden">
              <div className="w-full h-32 mb-4 relative">
                <Image 
                  src="/download (1).jpeg" 
                  alt="Events"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-1"
                />
              </div>
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">10K+</h3>
              <p className="text-[var(--text-secondary)]">Events</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[var(--primary-start)]/10 relative overflow-hidden">
              <div className="w-full h-32 mb-4 relative">
                <Image 
                  src="/download (2).jpeg" 
                  alt="Employers"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-1"
                />
              </div>
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">5K+</h3>
              <p className="text-[var(--text-secondary)]">Employers</p>
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
            
            <div 
              ref={scrollRef}
              className="flex items-center gap-12 py-8 overflow-x-scroll no-scrollbar"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Double the universities array to create continuous loop effect */}
              {[...universities, ...universities].map((university, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center">
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
      <section className="py-20 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Opportunities That Await You</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Explore a world of opportunities designed to help you grow professionally and personally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-bold px-8 py-1 transform rotate-45">
                Popular
              </div>
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Competitions & Hackathons</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Participate in challenges that test your skills and creativity while competing with peers.
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
                Connect with top employers looking for talented individuals to join their teams.
              </p>
              <Link href="/employer" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                Find Opportunities <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold px-8 py-1 transform rotate-45">
                New
              </div>
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Workshops & Webinars</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Learn from industry experts through interactive sessions designed to enhance your skills.
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Take the Next Step?</h2>
            <div className="absolute -top-6 -right-6 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of students and professionals who have already discovered the power of GradLyft.
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
            <span>37 people registered in the last hour</span>
          </div>
        </div>
      </section>
    </main>
  );
}
