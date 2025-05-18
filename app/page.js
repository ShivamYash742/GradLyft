'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Briefcase, Calendar, ChevronRight, Star, GraduationCap, MoreHorizontal, Video, Smile, Flame, Trophy, Bell, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const streakCount = 3;
  const [showStreakPopup, setShowStreakPopup] = useState(false);
  
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
      
      {/* SECTION A: Main Hero Section with Login/Profile Completion */}
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
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link href="/register" className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 pulse-glow z-10">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/profile" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center z-10">
                Complete Your Profile <ChevronRight className="ml-2 w-4 h-4" />
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
              
              {/* Events Card - First Column (Spans 2 rows) */}
              <Link href="/events" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105 row-span-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col h-[276px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-pink-200 relative overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">Events</span>
                      <div className="ml-auto bg-pink-500/20 p-1 rounded-full">
                        <Calendar size={16} className="text-pink-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Explore All Events</p>
                    <div className="mb-2">
                      <span className="text-xs bg-pink-500/20 rounded-full px-2 py-1 text-pink-700">🔥 Popular</span>
                    </div>
                    <div className="mt-auto relative h-36 w-full overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-200/50 to-transparent z-[1]"></div>
                      <Image 
                        src="/download (2).jpeg" 
                        alt="Events" 
                        fill 
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Webinars Card - Second Column, First Row */}
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
              
              {/* Profile Card - Second Column, Second Row */}
              <Link href="/profile" className="group block focus:outline-none transform transition-all duration-300 hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 flex flex-col h-[130px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-sky-200 relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-sky-200/50 z-[1] rounded-lg"></div>
                    <Image 
                      src="/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28549.avif" 
                      alt="Profile" 
                      fill 
                      className="object-cover rounded-lg mix-blend-multiply"
                    />
                  </div>
                  <div className="w-[55%] flex flex-col h-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-xl">Profile</span>
                      <div className="ml-auto bg-sky-500/20 p-1 rounded-full">
                        <Users size={16} className="text-sky-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 flex-1">Complete Profile</p>
                    <div className="mt-auto">
                      <span className="text-xs bg-sky-500/20 rounded-full px-2 py-1 text-sky-700">👀 Boost</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Upcoming Events */}
      <section className="py-12 bg-gradient-to-r from-indigo-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-primary">Upcoming Events</h2>
            <Link href="/events" className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium flex items-center">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/events" className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative float group">
              <div className="absolute left-4 top-4 z-10">
                <div className="fun-badge flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Trending
                </div>
              </div>
              <div className="relative h-48">
                <Image
                  src="/download (1).jpeg"
                  alt="Resume Building Workshop"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-start)] transition-colors">Resume Building Workshop</h3>
                  <span className="bg-[var(--youth-green)]/10 text-[var(--youth-green)] text-xs font-medium px-2 py-1 rounded">
                    workshop
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">Learn how to craft a standout resume that highlights your skills and experiences effectively.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-[var(--text-muted)]">
                    <Calendar className="w-4 h-4 mr-1" />
                    May 28, 2024
                  </div>
                  <span className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium flex items-center">
                    Join Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/events" className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative float group">
              <div className="relative h-48">
                <Image
                  src="/download (2).jpeg"
                  alt="Tech Industry Trends Webinar"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-start)] transition-colors">Tech Industry Trends Webinar</h3>
                  <span className="bg-[var(--youth-green)]/10 text-[var(--youth-green)] text-xs font-medium px-2 py-1 rounded">
                    webinar
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">Join industry experts as they discuss emerging technology trends and career opportunities in the evolving tech landscape.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-[var(--text-muted)]">
                    <Calendar className="w-4 h-4 mr-1" />
                    June 18, 2024
                  </div>
                  <span className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium flex items-center">
                    Join Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/events" className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative float group">
              <div className="relative h-48">
                <Image
                  src="/R.png"
                  alt="Student Pitch Competition"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-start)] transition-colors">Student Pitch Competition</h3>
                  <span className="bg-[var(--youth-green)]/10 text-[var(--youth-green)] text-xs font-medium px-2 py-1 rounded">
                    contest
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">Present your startup ideas to a panel of venture capitalists and industry experts for a chance to win seed funding.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-[var(--text-muted)]">
                    <Calendar className="w-4 h-4 mr-1" />
                    July 22, 2024
                  </div>
                  <span className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium flex items-center">
                    Join Now <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION C: The Hype Stats Section */}
      <section className="py-16 bg-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-gradient-primary">The Hype is Real! 🔥</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Join the squad and be part of something epic</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Universities */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
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

      {/* SECTION D: Unstop - Why Unstop */}
      <section className="py-16 bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Why GradLyft?</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Here's what GradLyft can do for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">All-in-one Platform</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Access events, competitions, workshops, and networking opportunities in one seamless experience. No more juggling multiple platforms.
              </p>
            </div>

            <div className="card p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Career Growth</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Get noticed by top employers, build your profile, showcase your skills, and open doors to incredible internship and job opportunities.
              </p>
            </div>

            <div className="card p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Community</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Join a thriving ecosystem of students, universities and employers. Make connections that will help shape your future career path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: Sponsorship and Campus Ambassadors */}
      <section className="py-20 bg-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Get Involved 🚀</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Become part of our community through sponsorship or as a campus ambassador
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sponsorship Card */}
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-bold px-8 py-1 transform rotate-45">
                🔥 Partner
              </div>
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Sponsorship Opportunities</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Sponsor events, hackathons or student initiatives. Get your brand in front of thousands of talented students and young professionals.
              </p>
              <Link href="/sponsorship" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                Become a Sponsor <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Campus Ambassador Card */}
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users className="text-white" size={28} />
              </div>
              <div className="float-right ml-4 mb-2">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image 
                    src="/3d-cartoon-boy-studying-wearing-glasses_988987-175.avif" 
                    alt="Campus Ambassador" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Campus Ambassador Program</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Represent GradLyft on your campus, gain leadership experience, exclusive perks, and build your professional network.
              </p>
              <Link href="/ca-program" className="link font-medium flex items-center group hover:text-[var(--link-hover)]">
                Join CA Program <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Style block for animations */}
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
          justify-center: center;
        }
      `}</style>
    </main>
  );
}
