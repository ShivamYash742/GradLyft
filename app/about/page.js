'use client';

import { Users, Briefcase, GraduationCap, Award, Globe, Heart, Sparkles, Trophy, ArrowRight, ChevronDown, Coffee, Music, Sunset, CloudSun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [expandedValue, setExpandedValue] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Universities', value: '120+', icon: <GraduationCap className="w-5 h-5" /> },
    { label: 'Employers', value: '5,000+', icon: <Briefcase className="w-5 h-5" /> },
    { label: 'Students', value: '250,000+', icon: <Users className="w-5 h-5" /> },
    { label: 'Job Placements', value: '40,000+', icon: <Trophy className="w-5 h-5" /> }
  ];

  const values = [
    {
      title: 'Student Success',
      description: 'We believe in empowering students to reach their full potential through meaningful career opportunities.',
      icon: <GraduationCap className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'Our platform is designed from the ground up to help students showcase their skills and connect with employers who value their unique talents.'
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve our platform and services to stay ahead of the changing needs of the job market.',
      icon: <Award className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'From AI-powered matching to real-time analytics, we leverage cutting-edge technology to create the best experience for our users.'
    },
    {
      title: 'Balance',
      description: 'We promote work-life harmony and believe career growth should complement personal wellbeing.',
      icon: <Sunset className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'We champion opportunities that value both professional achievement and personal fulfillment, creating paths to sustainable success.'
    },
    {
      title: 'Community',
      description: 'We build meaningful connections between students, universities, and employers that foster collective growth.',
      icon: <Users className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'Our ecosystem thrives on collaboration and mutual support, creating a space where everyone feels valued and empowered.'
    },
    {
      title: 'Quality',
      description: 'We strive for excellence in everything we do, from our platform technology to our customer service.',
      icon: <Coffee className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'We take time to perfect our craft, prioritizing thoughtful design and attention to detail in every aspect of our service.'
    },
    {
      title: 'Global Impact',
      description: 'We seek to transform career development and talent acquisition on a global scale.',
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      extendedInfo: 'With users from over 50 countries, we"re building a worldwide network that transcends geographical boundaries to connect talent with opportunity.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former university career services director with 15+ years of experience connecting students with employers.',
      image: '/download.jpeg',
      funFact: 'Once backpacked through 12 countries in 3 months before starting GradLyft!'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech visionary with previous experience at leading recruitment platforms and a passion for AI-powered solutions.',
      image: '/download (1).jpeg',
      funFact: 'Started coding at age 11 and launched his first app before finishing high school.'
    },
    {
      name: 'Priya Patel',
      role: 'Chief University Officer',
      bio: 'Expert in higher education partnerships with a background in university administration and student success.',
      image: '/download (2).jpeg',
      funFact: 'Volunteers as a mentor for first-generation college students in her spare time.'
    },
    {
      name: 'James Wilson',
      role: 'Chief Employer Officer',
      bio: 'Former corporate recruiter who understands the challenges employers face in finding the right talent.',
      image: '/yogi-bear3.png',
      funFact: 'Trained as a professional chef before pivoting to a career in talent acquisition.'
    }
  ];

  return (
    <main className="bg-gradient-to-b from-blue-50 to-teal-50 overflow-hidden">
      {/* Floating Join Button with gentler animation */}
      <Link 
        href="/register"
        className="fixed right-8 bottom-8 z-40 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-2"
      >
        <span className="text-white font-medium">Join Us</span>
        <ArrowRight className="w-5 h-5 text-white" />
      </Link>
      
      {/* Hero Section with Parallax Effect */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-teal-50 to-blue-50">
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
              About GradLyft
            </h1>
            <p className="mt-6 text-xl text-slate-700 leading-relaxed">
              We're creating a more mindful approach to career connections, where talent meets opportunity in harmony.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-teal-100 shadow-sm">
                <CloudSun className="w-5 h-5 text-teal-500" />
                <span className="text-slate-700">Est. 2021</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-teal-100 shadow-sm">
                <Music className="w-5 h-5 text-blue-500" />
                <span className="text-slate-700">Balanced Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 relative">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full"></div>
              </div>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  GradLyft was born from a simple observation: despite the abundance of talented graduates and employers seeking fresh talent, making meaningful connections between them remained unnecessarily stressful.
                </p>
                <p>
                  Founded in 2021 by Sarah Johnson and Michael Chen, GradLyft began as a small pilot program at three universities. Our platform quickly gained traction as students found jobs they loved and employers discovered exceptional candidates they might have otherwise missed.
                </p>
                <p>
                  Today, GradLyft serves hundreds of universities and thousands of employers worldwide, but our mission remains the same: to empower students in their career journeys and help organizations find their next generation of leaders, all while promoting balance and well-being.
                </p>
              </div>
              
              <div className="mt-8 inline-flex items-center bg-white/70 backdrop-blur-sm px-5 py-3 rounded-xl text-sm border border-teal-100 shadow-sm">
                <div className="relative mr-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white">
                    <Trophy className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-slate-700 font-medium">Named Top EdTech Startup of 2023</span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-700">
                <Image 
                  src="/R.png"
                  alt="GradLyft Team"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Our founding team at launch day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-white">Our Journey in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-teal-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${expandedValue === index ? 'from-teal-50 to-blue-50' : 'from-gray-50 to-white'} p-8 rounded-2xl hover:shadow-lg transition-all duration-500 ${expandedValue === index ? 'ring-2 ring-teal-300' : ''}`}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className="flex items-start">
                  <div className="mr-5 p-3 rounded-xl bg-white shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center">
                      {value.title}
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${expandedValue === index ? 'rotate-180' : ''}`} />
                    </h3>
                    <p className="text-slate-600 mt-2">{value.description}</p>
                    
                    {expandedValue === index && (
                      <div className="mt-4 text-sm bg-white p-4 rounded-xl animate-fade-in shadow-inner">
                        {value.extendedInfo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative border border-teal-100"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 mb-6 relative ring-4 ring-white shadow-md">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  {/* Fun fact indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6">
                    <div 
                      className={`bg-gradient-to-r from-amber-300 to-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                        hoveredMember === index ? 'opacity-100 transform-none' : 'opacity-0 transform -translate-y-2'
                      }`}
                    >
                      Fun Fact
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-teal-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
                
                {/* Fixed height container with smooth transition for fun fact */}
                <div className="h-20 mt-6 flex items-center justify-center overflow-hidden">
                  <div 
                    className={`bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm w-full transition-all duration-300 ${
                      hoveredMember === index ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    "{member.funFact}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-teal-500 to-blue-600 text-white relative overflow-hidden">
        {/* Gentle wave pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="white" fillOpacity="1" 
                  d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-8 relative">
            <h2 className="text-3xl font-bold">
              Join Our Journey
            </h2>
            <div className="absolute -top-6 -right-6 animate-pulse">
              <Sparkles className="w-6 h-6 text-yellow-200" />
            </div>
          </div>
          <p className="max-w-3xl mx-auto mb-10 text-lg text-blue-50 leading-relaxed">
            Whether you're a student starting your career journey, a university looking to improve student outcomes, 
            or an employer seeking exceptional talent, we invite you to be part of the GradLyft community.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link 
              href="/contact" 
              className="bg-white text-teal-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
            >
              Contact Us
            </Link>
            <Link 
              href="/register" 
              className="bg-teal-400/30 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Create an Account
            </Link>
          </div>
          
          {/* Social proof element */}
          <div className="mt-12 inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl text-sm border border-white/20">
            <div className="relative mr-4">
              <div className="w-10 h-10 rounded-full bg-teal-400/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-blue-50">Join the 500+ new members who found their path this week</span>
          </div>
        </div>
      </section>
      
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
      `}</style>
    </main>
  );
} 