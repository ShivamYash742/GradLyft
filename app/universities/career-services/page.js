'use client';

import { CheckCircle, ArrowRight, BookOpen, Users, BarChart2, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function UniversityCareerServicesPage() {
  const features = [
    {
      title: 'Career Counseling Support',
      description: 'Enhance your existing career counseling with our integrated digital platform that helps track student progress and outcomes.',
      icon: <BookOpen className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Employer Partnerships',
      description: 'Leverage our growing network of employers looking to hire recent graduates and students for internships.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Career Events Management',
      description: 'Easily organize and promote career fairs, workshops, and networking events through our platform.',
      icon: <Calendar className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Outcome Tracking',
      description: 'Track graduate outcomes and employment rates with comprehensive analytics dashboards.',
      icon: <BarChart2 className="w-6 h-6 text-[var(--primary-start)]" />
    }
  ];

  const benefits = [
    'Improved student placement rates',
    'Enhanced employer relationships',
    'Data-driven decision making',
    'Streamlined career services operations',
    'Increased student engagement',
    'Better tracking of graduate outcomes'
  ];

  const testimonials = [
    {
      quote: "GradLyft has transformed how we deliver career services. Our students are more engaged, and employers are consistently impressed with our graduates.",
      author: "Dr. Emily Chen",
      title: "Director of Career Services",
      university: "Pacific State University"
    },
    {
      quote: "The analytics and tracking features have been invaluable in demonstrating our program's success to university leadership and accreditation bodies.",
      author: "Marcus Johnson",
      title: "Associate Dean",
      university: "Northeast College"
    }
  ];

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                Transform Your University's <span className="text-gradient-primary">Career Services</span>
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
                Empower your career services department with modern tools to help students succeed 
                in their professional journeys and improve your institution's placement metrics.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/universities/register" 
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
                >
                  Partner With Us
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-md hover:bg-[var(--primary-subtle)] transition"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="card p-6 rounded-xl shadow-lg">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/yogi-bear3.png"
                    alt="Analytics Dashboard Preview"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            Comprehensive Career Services Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            What Career Services Directors Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 rounded-xl">
                <p className="text-[var(--text-secondary)] italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">{testimonial.author}</p>
                  <p className="text-[var(--text-muted)]">{testimonial.title}, {testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              href="/universities/register" 
              className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
            >
              Join our network of partner universities <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
            Ready to Elevate Your Career Services?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Join leading universities that are revolutionizing how they prepare students for the workforce.
            Schedule a demo to see how GradLyft can enhance your career services offerings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/universities/register" 
              className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-md hover:bg-[var(--primary-subtle)] transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 