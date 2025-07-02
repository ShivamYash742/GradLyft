'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, Briefcase, GraduationCap, Award, Globe, Heart, 
  ArrowRight, CheckCircle, Star, Zap, Target, Code, 
  Smile, Coffee, Rocket, ChevronDown, ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../../components/ThemeProvider';

export default function AboutPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('mission');
  const [visibleSection, setVisibleSection] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRefs = {
    hero: useRef(null),
    mission: useRef(null),
    values: useRef(null),
    team: useRef(null),
    stats: useRef(null),
    journey: useRef(null)
  };
  
  // Handle video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Intersection observer for section visibility
  useEffect(() => {
    const observers = [];
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px'
    };

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSection(id);
          }
        });
      }, observerOptions);
      
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: '/download.jpeg',
      linkedin: '#',
      quote: 'Building bridges between education and industry is my passion.',
      background: 'Former university career services director with 15+ years of experience.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: '/download (1).jpeg',
      linkedin: '#',
      quote: 'Technology should empower people, not replace them.',
      background: 'Tech visionary with previous experience at leading recruitment platforms.'
    },
    {
      name: 'Priya Patel',
      role: 'Chief University Officer',
      image: '/download (2).jpeg',
      linkedin: '#',
      quote: 'Education is the most powerful catalyst for change.',
      background: 'Expert in higher education partnerships and student success.'
    },
    {
      name: 'James Wilson',
      role: 'Chief Employer Officer',
      image: '/yogi-bear3.png',
      linkedin: '#',
      quote: 'Finding the right talent shouldnt be like finding a needle in a haystack.',
      background: 'Former corporate recruiter with deep industry connections.'
    }
  ];

  // Company values
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Purpose-Driven',
      description: 'Every feature and service we build is designed with student success as our north star.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to solve age-old problems in career development.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community',
      description: 'We believe in the power of networks and connections to transform career journeys.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Empathy',
      description: 'We understand the challenges of job seeking and hiring, and design compassionate solutions.'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Growth',
      description: 'We are committed to helping everyone in our ecosystem reach their full potential.'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Balance',
      description: 'We promote work-life harmony and sustainable approaches to career development.'
    }
  ];

  // Journey milestones
  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'GradLyft was founded with a mission to transform how students connect with employers.'
    },
    {
      year: '2022',
      title: 'First 50 Universities',
      description: 'We expanded our platform to serve 50 universities across the country.'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'GradLyft went global, launching in 12 countries and supporting diverse talent pools.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'We introduced advanced AI tools to better match students with their ideal opportunities.'
    }
  ];

  // Stats data
  const stats = [
    { value: '250K+', label: 'Students Registered' },
    { value: '5,000+', label: 'Employer Partners' },
    { value: '120+', label: 'University Partners' },
    { value: '40K+', label: 'Successful Placements' }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Navigation dots */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {Object.keys(sectionRefs).map((section) => (
            <button
              key={section}
              onClick={() => {
                sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                visibleSection === section 
                  ? 'bg-primary-start scale-125' 
                  : 'bg-text-muted/30 hover:bg-text-muted/50'
              }`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-primary-start/5 via-background to-primary-end/5"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Abstract shapes */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary-start/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-end/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-primary-start/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary-start/10 text-primary-start rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Transforming Career Connections
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We're <span className="text-primary-start">GradLyft</span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">Connecting Talent with Opportunity</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-lg">
                We're building the bridge between ambitious students and forward-thinking employers, creating meaningful connections that launch careers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/register" 
                  className="px-8 py-4 bg-primary-start hover:bg-primary-start/90 text-white font-medium rounded-lg transition-all flex items-center group"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href="#mission" 
                  className="px-8 py-4 border border-card-border hover:border-primary-start hover:text-primary-start font-medium rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    sectionRefs.mission.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-8 border-card-bg">
                <div className="aspect-video relative">
                  <Image 
                    src="/R.png" 
                    alt="GradLyft Team" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-indigo-900 flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-500" />
                Top EdTech Startup 2023
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-green-800 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                40,000+ Successful Placements
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => sectionRefs.mission.current?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce bg-white p-2 rounded-full shadow-lg"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={sectionRefs.mission}
        className="py-24 relative overflow-hidden bg-card-bg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-text-secondary">
              We're on a mission to democratize access to meaningful career opportunities and transform how students connect with employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-card-border hover:border-primary-start/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary-start/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-primary-start" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Students</h3>
              <p className="text-text-secondary mb-6">
                Access personalized career guidance, connect with industry mentors, and discover opportunities aligned with your aspirations.
              </p>
              <Link href="/register" className="inline-flex items-center text-primary-start hover:text-primary-end transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-card-border hover:border-primary-start/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary-start/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-primary-start" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <p className="text-text-secondary mb-6">
                Connect with top talent, streamline your recruitment process, and build a diverse pipeline of qualified candidates.
              </p>
              <Link href="/employer/register" className="inline-flex items-center text-primary-start hover:text-primary-end transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-card-border hover:border-primary-start/50 transition-all group md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-lg bg-primary-start/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-primary-start" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Universities</h3>
              <p className="text-text-secondary mb-6">
                Enhance your career services, track student success, and strengthen employer partnerships through our platform.
              </p>
              <Link href="/universities/register" className="inline-flex items-center text-primary-start hover:text-primary-end transition-colors">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={sectionRefs.values}
        className="py-24 relative overflow-hidden bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-text-secondary">
              The principles that guide us in building a better future for career development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary-start/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-start/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-primary-start">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={sectionRefs.team}
        className="py-24 relative overflow-hidden bg-card-bg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-text-secondary">
              Meet the passionate individuals dedicated to transforming career development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0">
                    <div className="absolute bottom-4 left-4">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary-start" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-text-secondary mb-4">{member.role}</p>
                <p className="text-sm text-text-secondary italic mb-4">"{member.quote}"</p>
                <p className="text-sm text-text-secondary">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={sectionRefs.stats}
        className="py-24 relative overflow-hidden bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary-start/50 transition-all group"
              >
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section 
        ref={sectionRefs.journey}
        className="py-24 relative overflow-hidden bg-card-bg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-text-secondary">
              The milestones that have shaped our growth and impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary-start">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="p-8 rounded-2xl bg-background border border-card-border hover:border-primary-start/50 transition-all">
                    <h3 className="text-xl font-semibold mb-4">{milestone.title}</h3>
                    <p className="text-text-secondary">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-indigo-100 mb-10">
              Whether you're a student, employer, or university, we invite you to be part of the GradLyft ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 font-medium rounded-lg transition-all flex items-center group"
              >
                Create an Account
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="px-8 py-4 border border-white hover:bg-white/10 text-white font-medium rounded-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
            
            <div className="mt-12 inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl text-sm border border-white/20">
              <Smile className="w-5 h-5 mr-3 text-yellow-300" />
              <span className="text-indigo-100">Join the 500+ new members who found their path this week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(0.95); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
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
