'use client';

import { Users, Briefcase, GraduationCap, Award, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: 'Universities', value: '120+' },
    { label: 'Employers', value: '5,000+' },
    { label: 'Students', value: '250,000+' },
    { label: 'Job Placements', value: '40,000+' }
  ];

  const values = [
    {
      title: 'Student Success',
      description: 'We believe in empowering students to reach their full potential through meaningful career opportunities.',
      icon: <GraduationCap className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve our platform and services to stay ahead of the changing needs of the job market.',
      icon: <Award className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Inclusivity',
      description: 'Were committed to creating equal opportunities for all students, regardless of background or circumstances.',
      icon: <Heart className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Partnership',
      description: 'We forge meaningful relationships between students, universities, and employers to create sustainable success.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Quality',
      description: 'We strive for excellence in everything we do, from our platform technology to our customer service.',
      icon: <Briefcase className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Global Impact',
      description: 'We seek to transform career development and talent acquisition on a global scale.',
      icon: <Globe className="w-6 h-6 text-[var(--primary-start)]" />
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former university career services director with 15+ years of experience connecting students with employers.',
      image: '/download.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech visionary with previous experience at leading recruitment platforms and a passion for AI-powered solutions.',
      image: '/download (1).jpeg'
    },
    {
      name: 'Priya Patel',
      role: 'Chief University Officer',
      bio: 'Expert in higher education partnerships with a background in university administration and student success.',
      image: '/download (2).jpeg'
    },
    {
      name: 'James Wilson',
      role: 'Chief Employer Officer',
      bio: 'Former corporate recruiter who understands the challenges employers face in finding the right talent.',
      image: '/yogi-bear3.png'
    }
  ];

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
            About <span className="text-gradient-primary">GradLyft</span>
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            We're on a mission to transform how students connect with meaningful career opportunities and how employers discover exceptional talent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Our Story</h2>
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
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="aspect-video rounded-xl overflow-hidden bg-[var(--section-dark)]">
                {/* This would be an image or video about the company */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-[var(--text-muted)]">Company Story Video</p>
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
              <div key={index} className="card p-6 rounded-xl">
                <p className="text-4xl font-bold text-[var(--primary-start)]">{stat.value}</p>
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
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{value.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{value.description}</p>
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
              <div key={index} className="card p-6 rounded-xl text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-[var(--card-bg)] mb-4 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{member.name}</h3>
                <p className="text-[var(--primary-start)] mb-2">{member.role}</p>
                <p className="text-sm text-[var(--text-secondary)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
            Join Our Journey
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Whether you're a student starting your career journey, a university looking to improve student outcomes, 
            or an employer seeking exceptional talent, we invite you to be part of the GradLyft community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/careers" 
              className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-md hover:bg-[var(--primary-subtle)] transition"
            >
              Careers at GradLyft
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 