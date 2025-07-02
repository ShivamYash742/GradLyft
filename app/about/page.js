'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, Briefcase, GraduationCap, Award, Globe, Heart, 
  ArrowRight, CheckCircle, Star, Zap, Target, Code, 
  Smile, Coffee, Rocket, ChevronDown, ArrowUpRight
} from 'lucide-react';

export default function AboutPage() {
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
    <main className="bg-white">
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
                  ? 'bg-indigo-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Abstract shapes */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Transforming Career Connections
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                We're <span className="text-indigo-600">GradLyft</span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">Connecting Talent with Opportunity</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                We're building the bridge between ambitious students and forward-thinking employers, creating meaningful connections that launch careers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/register" 
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all flex items-center group"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href="#mission" 
                  className="px-8 py-4 border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 font-medium rounded-lg transition-all"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-8 border-white">
                <div className="aspect-video relative">
                  <Image 
                    src="/R.png" 
                    alt="GradLyft Team" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 flex items-end">
                    <div className="p-6">
                      <button 
                        onClick={toggleVideo}
                        className="flex items-center gap-2 bg-white/90 hover:bg-white px-4 py-2 rounded-lg text-sm font-medium text-indigo-900 transition-all"
                      >
                        {isPlaying ? 'Pause Video' : 'Watch Our Story'}
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                          {isPlaying ? (
                            <span className="w-3 h-3 bg-white rounded-sm"></span>
                          ) : (
                            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white ml-1"></div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
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
        id="mission"
        ref={sectionRefs.mission}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-100 rounded-full"></div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-100 rounded-full"></div>
                
                <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="aspect-square relative">
                      <Image 
                        src="/download.jpeg" 
                        alt="Student Success" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="aspect-square relative">
                      <Image 
                        src="/download (1).jpeg" 
                        alt="Employer Connection" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="aspect-square relative">
                      <Image 
                        src="/download (2).jpeg" 
                        alt="University Partnership" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="aspect-square relative">
                      <Image 
                        src="/R.png" 
                        alt="Career Growth" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Our Purpose
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Reimagining Career Development for the Digital Age
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  GradLyft was born from a simple observation: despite the abundance of talented graduates and employers seeking fresh talent, making meaningful connections between them remained unnecessarily stressful.
                </p>
                
                <p className="text-lg">
                  Our mission is to create a more equitable, efficient, and enjoyable career development ecosystem where talent and opportunity meet seamlessly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p>
                      <strong className="font-medium text-gray-900">For Students:</strong> We provide the tools, resources, and connections to launch rewarding careers aligned with their skills and passions.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p>
                      <strong className="font-medium text-gray-900">For Employers:</strong> We offer access to diverse, qualified talent pools and streamlined recruitment processes that save time and resources.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <p>
                      <strong className="font-medium text-gray-900">For Universities:</strong> We enhance career services capabilities and improve graduate outcomes through innovative technology and industry partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={sectionRefs.values}
        className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              <Heart className="w-4 h-4 mr-2" />
              What We Stand For
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-indigo-100">
              These principles guide everything we do, from product development to customer service and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 group hover:border-white/30"
              >
                <div className="bg-white/20 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-indigo-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={sectionRefs.team}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              The People Behind GradLyft
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Passionate experts committed to transforming how students and employers connect in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6 w-full">
                      <p className="text-white text-sm italic mb-4">"{member.quote}"</p>
                      <a 
                        href={member.linkedin} 
                        className="inline-flex items-center gap-2 bg-white/90 hover:bg-white px-4 py-2 rounded-lg text-sm font-medium text-indigo-900 transition-all w-full justify-center"
                      >
                        Connect on LinkedIn
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={sectionRefs.stats}
        className="py-24 bg-indigo-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              GradLyft by the Numbers
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Since our founding in 2021, we've grown rapidly to become a leading force in career development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1"
              >
                <p className="text-5xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section 
        ref={sectionRefs.journey}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Our Story
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The GradLyft Journey</h2>
            <p className="text-lg text-gray-600">
              From a small startup to a global platform connecting talent with opportunity.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg">
                  {milestone.year}
                </div>
                
                <div className="w-1/2"></div>
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
