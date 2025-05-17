'use client';

import { Users, Briefcase, GraduationCap, Award, Globe, Heart, Sparkles, Trophy, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [expandedValue, setExpandedValue] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

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
      icon: <GraduationCap className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'Our platform is designed from the ground up to help students showcase their skills and connect with employers who value their unique talents.'
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve our platform and services to stay ahead of the changing needs of the job market.',
      icon: <Award className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'From AI-powered matching to real-time analytics, we leverage cutting-edge technology to create the best experience for our users.'
    },
    {
      title: 'Inclusivity',
      description: 'We\'re committed to creating equal opportunities for all students, regardless of background or circumstances.',
      icon: <Heart className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'We actively work to eliminate bias and ensure that talent and potential are the only factors that matter in career advancement.'
    },
    {
      title: 'Partnership',
      description: 'We forge meaningful relationships between students, universities, and employers to create sustainable success.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'Our three-sided marketplace creates value for all participants, fostering a community where everyone benefits from collaboration.'
    },
    {
      title: 'Quality',
      description: 'We strive for excellence in everything we do, from our platform technology to our customer service.',
      icon: <Briefcase className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'Quality isn\'t just a value - it\'s our standard. We continuously gather feedback and make improvements to exceed expectations.'
    },
    {
      title: 'Global Impact',
      description: 'We seek to transform career development and talent acquisition on a global scale.',
      icon: <Globe className="w-6 h-6 text-[var(--primary-start)]" />,
      extendedInfo: 'With users from over 50 countries, we\'re building a worldwide network that transcends geographical boundaries to connect talent with opportunity.'
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
    <main className="bg-[var(--section-light)] overflow-hidden">
      {/* Floating Achievement Button */}
      <Link 
        href="/register"
        className="fixed right-8 bottom-8 z-40 bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2"
      >
        <span className="text-white font-bold">Join Us</span>
        <ArrowRight className="w-5 h-5 text-white" />
      </Link>
      
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)] relative">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Sparkles className="w-6 h-6 text-[var(--primary-start)]" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-4 h-4 text-[var(--primary-mid)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative inline-block mx-auto">
            <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
              About <span className="text-gradient-primary">GradLyft</span>
            </h1>
            <div className="absolute -top-2 -right-6">
              <div className="animate-bounce-in">
                <div className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-xs shadow-lg">
                  Est. 2021
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            We're on a mission to transform how students connect with meaningful career opportunities and how employers discover exceptional talent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Our Story</h2>
                <div className="absolute -left-8 top-1/2 w-3 h-full bg-gradient-to-b from-[var(--primary-start)] to-[var(--primary-end)] rounded-full"></div>
              </div>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  GradLyft was born from a simple observation: despite the abundance of talented graduates and employers seeking fresh talent, making meaningful connections between them remained unnecessarily difficult.
                </p>
                <p>
                  Founded in 2021 by Sarah Johnson and Michael Chen, GradLyft began as a small pilot program at three universities. Our platform quickly gained traction as students found jobs they loved and employers discovered exceptional candidates they might have otherwise missed.
                </p>
                <p>
                  Today, GradLyft serves hundreds of universities and thousands of employers worldwide, but our mission remains the same: to empower students in their career journeys and help organizations find their next generation of leaders.
                </p>
              </div>
              
              <div className="mt-6 inline-flex items-center bg-[var(--primary-subtle)] px-4 py-3 rounded-full text-sm border border-[var(--primary-start)]/20">
                <div className="relative mr-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] flex items-center justify-center text-white">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-[var(--text-primary)] font-medium">Named Top EdTech Startup of 2023</span>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <Image 
                  src="/R.png"
                  alt="GradLyft Team"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Our founding team at launch day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16 text-gradient-primary">GradLyft By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-subtle)] flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-4xl font-bold text-gradient-primary">{stat.value}</p>
                <p className="text-[var(--text-secondary)] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`card p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${expandedValue === index ? 'ring-2 ring-[var(--primary-start)]' : ''}`}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center">
                      {value.title}
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${expandedValue === index ? 'rotate-180' : ''}`} />
                    </h3>
                    <p className="text-[var(--text-secondary)] mt-2">{value.description}</p>
                    
                    {expandedValue === index && (
                      <div className="mt-4 text-sm bg-[var(--primary-subtle)]/50 p-3 rounded-lg animate-fade-in">
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

      <section className="py-16 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="card p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-[var(--card-bg)] mb-4 relative ring-4 ring-[var(--primary-subtle)]">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  {hoveredMember === index && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-bounce-in">
                      Fun Fact!
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{member.name}</h3>
                <p className="text-[var(--primary-start)] mb-2">{member.role}</p>
                <p className="text-sm text-[var(--text-secondary)]">{member.bio}</p>
                
                {hoveredMember === index && (
                  <div className="mt-4 bg-[var(--primary-subtle)]/50 p-3 rounded-lg text-xs animate-fade-in">
                    "{member.funFact}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] text-white relative overflow-hidden">
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
            <h2 className="text-3xl font-bold">
              Join Our Journey
            </h2>
            <div className="absolute -top-6 -right-6 animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
          <p className="max-w-3xl mx-auto mb-8">
            Whether you're a student starting your career journey, a university looking to improve student outcomes, 
            or an employer seeking exceptional talent, we invite you to be part of the GradLyft community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
            >
              Contact Us
            </Link>
            <Link 
              href="/register" 
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              Create an Account
            </Link>
          </div>
          
          {/* FOMO element */}
          <div className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <div className="relative mr-3">
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white">
                <Users className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <span>Over 500 new members joined this week!</span>
          </div>
        </div>
      </section>
    </main>
  );
} 