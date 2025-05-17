import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'University Partners | GradLyft',
  description: 'Partner with GradLyft to enhance career outcomes for your students and alumni.',
};

export default function UniversitiesPage() {
  const partnerBenefits = [
    {
      title: 'Improved Placement Rates',
      description: 'Boost your institution\'s graduate employment metrics through our extensive employer network.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Customized Career Portal',
      description: 'A branded platform tailored to your institution\'s needs and career service offerings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Employer Connections',
      description: 'Gain access to our network of over 5,000 actively hiring companies across industries.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Career Events',
      description: 'Host virtual and in-person career fairs, workshops, and networking events.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track student engagement, application success rates, and employment outcomes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Alumni Engagement',
      description: 'Maintain connections with graduates and facilitate alumni mentoring programs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const partnerUniversities = [
    'Stanford University',
    'MIT',
    'University of California, Berkeley',
    'Harvard University',
    'Columbia University',
    'University of Michigan',
    'Georgia Tech',
    'University of Texas at Austin',
    'University of Washington',
    'NYU',
    'Northwestern University',
    'Carnegie Mellon University',
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="bg-[var(--section-dark)] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Empower Your Students' Career Journey
              </h1>
              <p className="mt-6 text-xl text-[var(--text-secondary)]">
                Partner with GradLyft to provide your students with unparalleled 
                career opportunities, resources, and connections to top employers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
                  Request a Demo
                </button>
                <button className="px-8 py-3 border border-[var(--card-border)] rounded-lg hover:bg-[var(--section-bg)] transition">
                  View Partnership Guide
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Schedule a Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">University Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-lg"
                      placeholder="Enter your university's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Contact Person</label>
                    <input
                      type="text"
                      id="contact"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-lg"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-lg"
                      placeholder="name@university.edu"
                    />
                  </div>
                  <div>
                    <label htmlFor="students" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Number of Students</label>
                    <select
                      id="students"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--card-border)] rounded-lg"
                    >
                      <option value="">Select range</option>
                      <option value="under1000">Under 1,000</option>
                      <option value="1000to5000">1,000 - 5,000</option>
                      <option value="5000to15000">5,000 - 15,000</option>
                      <option value="15000to30000">15,000 - 30,000</option>
                      <option value="over30000">Over 30,000</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition"
                  >
                    Request Partnership Information
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Why Partner With GradLyft?
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Join over 200 institutions worldwide that have transformed their career services with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-12 w-12 bg-[var(--btn-primary)] bg-opacity-10 rounded-full flex items-center justify-center text-[var(--btn-primary)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-[var(--section-bg)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Join Leading Universities
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              GradLyft partners with top institutions to provide exceptional career services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerUniversities.map((university, index) => (
              <div 
                key={index} 
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 flex items-center justify-center min-h-[100px]"
              >
                <span className="text-lg font-medium text-center text-[var(--text-primary)]">{university}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/success-stories" className="text-[var(--link-color)] font-medium hover:underline">
              View Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-[var(--section-dark)] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Ready to Transform Your Career Services?
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Join the GradLyft university network and give your students the career advantage they deserve.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
                Schedule a Demo
              </button>
              <button className="px-8 py-3 border border-[var(--card-border)] rounded-lg hover:bg-[var(--section-bg)] transition">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 