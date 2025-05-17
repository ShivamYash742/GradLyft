'use client';

import { UserPlus, Users, CheckSquare, Award, ClipboardList, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function UniversityStudentManagementPage() {
  const features = [
    {
      title: 'Student Profile Management',
      description: 'View and manage comprehensive student profiles including skills, experience, and academic achievements.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor students job search progress, application status, and career development activities.',
      icon: <CheckSquare className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Achievement Recognition',
      description: 'Acknowledge and showcase student achievements, certifications, and special skills to potential employers.',
      icon: <Award className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Bulk Management Tools',
      description: 'Efficiently manage large student cohorts with bulk actions and automated notifications.',
      icon: <ClipboardList className="w-6 h-6 text-[var(--primary-start)]" />
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Register Your University',
      description: 'Create an institutional account and verify your university credentials.'
    },
    {
      number: 2,
      title: 'Import Student Data',
      description: 'Securely upload student information or invite students to join the platform.'
    },
    {
      number: 3,
      title: 'Set Up Departments',
      description: 'Organize your career services structure with department-specific settings.'
    },
    {
      number: 4,
      title: 'Start Managing Students',
      description: 'Begin tracking student progress and connecting them with opportunities.'
    }
  ];

  return (
    <main className="bg-[var(--section-light)] relative emoji-bg">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-start)]/10 to-white relative">
        {/* Animated sparkles */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Users className="w-6 h-6 text-[var(--primary-start)]" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Award className="w-4 h-4 text-[var(--primary-end)]" />
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <div className="relative">
                <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                  Level Up Your <span className="text-gradient-primary">Student Management</span>
                </h1>
                <div className="absolute -top-6 -right-6">
                  <div className="fun-badge">
                    New Tools! 🔥
                  </div>
                </div>
              </div>
              <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
                An epic platform to manage your students' career journeys from enrollment to landing their dream jobs!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/universities/register" 
                  className="bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] text-white px-6 py-3 rounded-full hover:opacity-90 transition shadow-md hover:shadow-lg pulse-glow"
                >
                  Register Your University
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-full hover:bg-[var(--primary-start)]/5 transition"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] rounded-3xl transform rotate-3 -z-10 opacity-20"></div>
                <div className="card p-1 md:p-2 rounded-3xl overflow-hidden shadow-lg">
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[var(--section-dark)]">
                    {/* This would be a video or image showcasing the platform */}
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--primary-start)]/5 to-[var(--primary-end)]/5 p-4">
                      <Users className="w-16 h-16 text-[var(--primary-start)] mb-4" />
                      <p className="text-[var(--text-primary)] font-bold text-lg">Student Dashboard</p>
                      <p className="text-[var(--text-secondary)]">Coming Soon!</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 animate-pulse">
                  <div className="bg-[var(--youth-yellow)] text-[var(--primary-end)] font-bold px-3 py-1 rounded-full transform rotate-12 text-xs shadow-lg">
                    <span>Sneak Peek!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            Supercharge Your Student Management 🚀
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-[var(--primary-start)]/10 float">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg gradient-primary">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-[var(--primary-start)]/10 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-[var(--primary-start)] font-medium">250+ universities already using these tools!</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            4 Simple Steps to Get Started 👇
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="card p-6 rounded-xl relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-[var(--primary-start)]/10 float">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] flex items-center justify-center text-white font-bold shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-4">{step.title}</h3>
                <p className="text-[var(--text-secondary)] mt-2">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              href="/universities/register" 
              className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium px-6 py-2 rounded-full bg-[var(--primary-start)]/10 hover:bg-[var(--primary-start)]/20 transition-colors"
            >
              Get started now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] text-white relative overflow-hidden">
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
            </div>
            
            <div className="md:flex md:items-center md:justify-between relative z-10">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold">Ready to transform your student management? 🚀</h2>
                <p className="mt-4 text-white/90">
                  Join leading universities that are using GradLyft to streamline their career services and improve student outcomes.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link 
                  href="/universities/register" 
                  className="bg-white text-[var(--primary-end)] px-6 py-3 rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg inline-flex items-center font-bold"
                >
                  <UserPlus className="mr-2 w-5 h-5" />
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 