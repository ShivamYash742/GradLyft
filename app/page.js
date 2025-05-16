'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Briefcase, Calendar, ChevronRight, Star, GraduationCap, Building, BookOpen, MoreHorizontal, Video, Smile } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  // Feature grid color shuffle
  const [colorOrder, setColorOrder] = useState([0, 1, 2, 3]);
  const [hovered, setHovered] = useState(null);
  const colorPalettes = [
    'bg-blue-100',      // Events
    'bg-purple-100',    // Webinars
    'bg-yellow-100',    // Hackathons
    'bg-pink-100'       // More
  ];
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
  const featureItems = [
    {
      id: 'events',
      title: 'Events',
      description: 'Explore All Events',
      icon: <Calendar size={24} />,
      href: '/events',
      character: '/characters/events.png',
      explanation: 'Find and join exciting events to boost your career and network with professionals.'
    },
    {
      id: 'webinars',
      title: 'Webinars',
      description: 'Join Live Webinars',
      icon: <span className="flex items-center gap-1"><Video size={22} /><Smile size={20} /></span>,
      href: '/webinars',
      character: '/characters/webinars.png',
      explanation: 'Attend live webinars hosted by industry experts and enhance your knowledge.'
    },
    {
      id: 'hackathons',
      title: 'Hackathons',
      description: 'Compete & Win',
      icon: <Award size={24} />,
      href: '/hackathons',
      character: '/characters/hackathons.png',
      explanation: 'Participate in hackathons, solve real-world problems, and win amazing prizes!'
    },
    {
      id: 'more',
      title: 'More',
      description: 'Discover More',
      icon: <MoreHorizontal size={24} />,
      href: '/more',
      character: '/characters/more.png',
      explanation: 'Explore more opportunities and resources to help you grow.'
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Left: Hero Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              Unlock Your Career
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Get Started
              </Link>
              <Link href="/about" className="text-white bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-all duration-300 inline-block text-center">
                Learn More
              </Link>
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
                      <Image src={item.character} alt={item.title + ' character'} width={80} height={80} className="mb-2 rounded-full bg-gray-100" />
                      <div className="font-bold mb-1 text-base text-center">{item.title}</div>
                      <div className="text-sm text-center">{item.explanation}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">500+</h3>
              <p className="text-[var(--text-secondary)]">Universities</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">2M+</h3>
              <p className="text-[var(--text-secondary)]">Students</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">10K+</h3>
              <p className="text-[var(--text-secondary)]">Events</p>
            </div>
            <div className="p-6 card rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">5K+</h3>
              <p className="text-[var(--text-secondary)]">Employers</p>
            </div>
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
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
            
            <div className="card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
            <div className="card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
      <section className="gradient-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
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
        </div>
      </section>
    </main>
  );
}
