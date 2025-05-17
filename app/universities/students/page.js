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
      description: 'Monitor students' job search progress, application status, and career development activities.',
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
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                Streamlined <span className="text-gradient-primary">Student Management</span>
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
                A comprehensive platform to manage your students' career development journeys from enrollment to employment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/universities/register" 
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
                >
                  Register Your University
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
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-[var(--section-dark)]">
                {/* This would be a video or image showcasing the platform */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-[var(--text-muted)]">Student Management Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            Powerful Student Management Tools
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
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="card p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] flex items-center justify-center text-white font-bold">
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
              className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
            >
              Get started now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl bg-gradient-to-r from-[var(--primary-subtle)] to-[var(--section-light)]">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Ready to transform your student management?</h2>
                <p className="mt-4 text-[var(--text-secondary)]">
                  Join leading universities that are using GradLyft to streamline their career services and improve student outcomes.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link 
                  href="/universities/register" 
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-flex items-center"
                >
                  <UserPlus className="mr-2 w-5 h-5" />
                  Register Your University
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 