import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../components/ThemeProvider';

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
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section with improved contrast */}
      <section className="relative py-24 overflow-hidden bg-[var(--section-dark)]">
        {/* Decorative blobs for visual interest - visible in both light/dark modes */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[var(--floating-bg-1)] opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[var(--floating-bg-3)] opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                Empower Your Students' <span className="text-gradient-primary">Career Journey</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--text-secondary)]">
                Partner with GradLyft to provide your students with unparalleled 
                career opportunities, resources, and connections to top employers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 gradient-button text-white rounded-lg transition shadow-lg hover:shadow-xl">
                  Request a Demo
                </button>
                <button className="px-8 py-3 border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--section-bg)] transition">
                  View Partnership Guide
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 shadow-lg backdrop-blur-sm bg-opacity-80">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Schedule a Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">University Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition text-[var(--form-text)]"
                      placeholder="Enter your university's name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Contact Person</label>
                    <input
                      type="text"
                      id="contact"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition text-[var(--form-text)]"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition text-[var(--form-text)]"
                      placeholder="name@university.edu"
                    />
                  </div>
                  <div>
                    <label htmlFor="students" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Number of Students</label>
                    <select
                      id="students"
                      className="w-full p-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition text-[var(--form-text)]"
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
                    className="w-full py-3 gradient-button text-white rounded-lg transition shadow-md hover:shadow-lg opacity-75 cursor-not-allowed"
                    disabled
                  >
                    Request Partnership Information <span className="ml-2 text-xs font-medium  text-[var(--text-primary)] px-2 py-1 rounded-full">Coming Soon</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with improved card design */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Why Partner With <span className="text-gradient-primary">GradLyft</span>?
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Join over 200 institutions worldwide that have transformed their career services with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-300"
              >
                <div className="h-12 w-12 gradient-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities with improved visual design */}
      <section className="py-20 bg-[var(--section-bg)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              Join Leading <span className="text-gradient-primary">Universities</span>
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              GradLyft partners with top institutions to provide exceptional career services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerUniversities.map((university, index) => (
              <div 
                key={index} 
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 flex items-center justify-center min-h-[100px] hover:shadow-md transition hover:border-[var(--primary-start)] group"
              >
                <span className="text-lg font-medium text-center text-[var(--text-primary)] group-hover:text-[var(--link-color)] transition-colors">{university}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/success-stories" className="text-[var(--link-color)] font-medium hover:underline inline-flex items-center">
              View Success Stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action with gradient background */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl p-12 text-center">
            {/* Gradient background that works in both light and dark mode */}
            <div className="absolute inset-0 gradient-primary opacity-90"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Career Services?
              </h2>
              <p className="mt-4 text-xl text-white opacity-90 max-w-3xl mx-auto">
                Join the GradLyft university network and give your students the career advantage they deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-[var(--primary-start)] font-medium rounded-lg hover:bg-opacity-90 transition shadow-lg">
                  Schedule a Demo
                </button>
                <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition">
                  Download Partnership Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - New Addition */}
      <section className="py-20 bg-[var(--section-bg)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              What Universities <span className="text-gradient-primary">Say About Us</span>
            </h2>
            <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Hear from our university partners about their experience with GradLyft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--primary-start)] flex items-center justify-center text-white font-bold text-xl">S</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[var(--text-primary)]">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Career Services Director, Stanford University</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] italic">"GradLyft has revolutionized how we connect students with employers. Our placement rates have increased by 32% since implementation."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--youth-purple)] flex items-center justify-center text-white font-bold text-xl">M</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[var(--text-primary)]">Prof. Michael Chen</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Dean of Students, MIT</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] italic">"The analytics dashboard provides invaluable insights into student career paths and helps us tailor our curriculum to industry needs."</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[var(--youth-green)] flex items-center justify-center text-white font-bold text-xl">J</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[var(--text-primary)]">Jessica Williams</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Alumni Relations, UC Berkeley</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] italic">"Our alumni love staying connected through GradLyft. The mentorship program has created meaningful relationships between graduates and current students."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}