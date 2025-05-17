import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Partner Resources | GradLyft',
  description: 'Access exclusive resources and tools to maximize your partnership with GradLyft.',
};

export default function PartnerResourcesPage() {
  const resourceCategories = [
    {
      title: 'Marketing Materials',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      resources: [
        { name: 'GradLyft Brand Guidelines', type: 'PDF', size: '2.4 MB' },
        { name: 'Partner Logo Pack', type: 'ZIP', size: '18.7 MB' },
        { name: 'Social Media Templates', type: 'PSD/AI', size: '34.2 MB' },
        { name: 'Email Announcement Templates', type: 'HTML', size: '1.2 MB' },
        { name: 'Student Recruitment Flyers', type: 'PDF', size: '5.8 MB' },
      ],
    },
    {
      title: 'Implementation Guides',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      resources: [
        { name: 'Getting Started Guide', type: 'PDF', size: '3.1 MB' },
        { name: 'Platform Integration Documentation', type: 'PDF', size: '4.7 MB' },
        { name: 'API Reference Guide', type: 'HTML', size: '2.3 MB' },
        { name: 'Single Sign-On (SSO) Setup', type: 'PDF', size: '1.8 MB' },
        { name: 'Data Migration Walkthrough', type: 'PDF', size: '2.9 MB' },
      ],
    },
    {
      title: 'Training Materials',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      resources: [
        { name: 'Admin User Training', type: 'VIDEO', size: '124 MB' },
        { name: 'Student Portal Walkthrough', type: 'VIDEO', size: '98 MB' },
        { name: 'Reporting Dashboard Guide', type: 'PDF', size: '2.5 MB' },
        { name: 'Event Management Tutorial', type: 'VIDEO', size: '156 MB' },
        { name: 'Content Management Guide', type: 'PDF', size: '3.2 MB' },
      ],
    },
    {
      title: 'Best Practices',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      resources: [
        { name: 'Student Engagement Playbook', type: 'PDF', size: '4.3 MB' },
        { name: 'Employer Recruitment Strategy', type: 'PDF', size: '2.8 MB' },
        { name: 'Career Fair Best Practices', type: 'PDF', size: '3.5 MB' },
        { name: 'Platform Adoption Guide', type: 'PDF', size: '2.1 MB' },
        { name: 'Success Metrics & KPIs', type: 'XLSX', size: '1.7 MB' },
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Header */}
      <div className="bg-[var(--section-dark)] py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Partner Resources
            </h1>
            <p className="mt-6 text-xl text-[var(--text-secondary)]">
              Access exclusive tools, guides, and materials to help you maximize your GradLyft partnership and provide the best possible experience for your students and employers.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {resourceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-[var(--btn-primary)] bg-opacity-10 rounded-full flex items-center justify-center text-[var(--btn-primary)] mr-3">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                {category.title}
              </h2>
            </div>
            
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-[var(--card-border)]">
                <div className="grid grid-cols-8 p-4 bg-[var(--section-bg)] text-sm font-medium">
                  <div className="col-span-4">Resource Name</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-1">Size</div>
                  <div className="col-span-1"></div>
                </div>
                
                {category.resources.map((resource, index) => (
                  <div key={index} className="grid grid-cols-8 p-4 items-center">
                    <div className="col-span-4 font-medium text-[var(--text-primary)]">
                      {resource.name}
                    </div>
                    <div className="col-span-2 text-[var(--text-secondary)]">
                      {resource.type}
                    </div>
                    <div className="col-span-1 text-[var(--text-secondary)]">
                      {resource.size}
                    </div>
                    <div className="col-span-1 text-right">
                      <button className="px-3 py-1 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-sm rounded hover:bg-opacity-80 transition">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Webinar Section */}
      <div className="bg-[var(--section-bg)] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
            Partner Webinars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Webinar 1 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[Webinar Thumbnail]</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-[var(--btn-primary)] mb-2">
                  IMPLEMENTATION
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Platform Integration Strategies for Universities
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  Learn best practices for integrating GradLyft with your existing systems and maximizing adoption across your institution.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)] text-sm">47 minutes</span>
                  <button className="px-3 py-1 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-sm rounded hover:bg-opacity-80 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Webinar 2 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[Webinar Thumbnail]</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-[var(--btn-primary)] mb-2">
                  STUDENT ENGAGEMENT
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Driving Student Adoption and Engagement
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  Explore proven strategies to boost student usage of the GradLyft platform and increase engagement with career services.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)] text-sm">53 minutes</span>
                  <button className="px-3 py-1 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-sm rounded hover:bg-opacity-80 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Webinar 3 */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">[Webinar Thumbnail]</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-[var(--btn-primary)] mb-2">
                  EMPLOYER RELATIONS
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  Building Strong Employer Partnerships
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  Discover how to attract and maintain relationships with top employers to create valuable opportunities for your students.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--text-muted)] text-sm">41 minutes</span>
                  <button className="px-3 py-1 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-sm rounded hover:bg-opacity-80 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="#" className="text-[var(--link-color)] font-medium hover:underline">
              View All Webinars →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Support Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Need Additional Support?
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Our partner success team is here to help you with any questions or challenges you may face. Contact us through any of these channels:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--btn-primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--text-primary)] font-medium">Email Support</strong>
                    <p className="text-[var(--text-secondary)]">partners@gradlyft.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--btn-primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--text-primary)] font-medium">Phone Support</strong>
                    <p className="text-[var(--text-secondary)]">1-800-GRADLYFT (Premium & Enterprise Only)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--btn-primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--text-primary)] font-medium">Live Chat</strong>
                    <p className="text-[var(--text-secondary)]">Available Monday-Friday, 8am-8pm EST</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--btn-primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--text-primary)] font-medium">Partner Manager</strong>
                    <p className="text-[var(--text-secondary)]">Contact your dedicated partner manager (Enterprise Only)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--section-bg)] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Submit a Support Request
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 bg-[var(--input-bg)] border border-[var(--card-border)] rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-[var(--input-bg)] border border-[var(--card-border)] rounded"
                    placeholder="your.email@university.edu"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Category</label>
                  <select
                    id="category"
                    className="w-full p-2 bg-[var(--input-bg)] border border-[var(--card-border)] rounded"
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing Question</option>
                    <option value="implementation">Implementation Help</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 bg-[var(--input-bg)] border border-[var(--card-border)] rounded"
                    placeholder="Describe your question or issue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[var(--btn-primary)] text-white rounded hover:bg-[var(--btn-primary-hover)] transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 