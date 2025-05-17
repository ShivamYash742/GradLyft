import React from 'react';

export const metadata = {
  title: 'Career Resources | GradLyft',
  description: 'Access career development resources, guides, and tutorials to boost your job search.',
};

export default function CareerResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[var(--text-primary)]">Career Resources</h1>
        <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Access guides, tutorials, and resources to help you navigate your career journey successfully.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Resume Writing */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Resume Writing</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Create a standout resume that highlights your skills and experience effectively.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>Resume Templates for Every Career Stage</li>
            <li>ATS-Friendly Resume Guide</li>
            <li>Action Words to Power Up Your Resume</li>
            <li>How to Tailor Your Resume for Specific Jobs</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            Browse Resume Resources →
          </button>
        </div>

        {/* Interview Preparation */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Interview Preparation</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Ace your interviews with comprehensive preparation guides and practice tools.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>Common Interview Questions & Answers</li>
            <li>Behavioral Interview Technique</li>
            <li>Technical Interview Practice</li>
            <li>Virtual Interview Best Practices</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            Explore Interview Resources →
          </button>
        </div>

        {/* Career Planning */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Career Planning</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Develop a strategic career path that aligns with your goals and aspirations.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>Career Path Exploration Tools</li>
            <li>Industry Trend Reports</li>
            <li>Skill Gap Analysis</li>
            <li>Professional Development Planning</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            View Career Planning Tools →
          </button>
        </div>

        {/* Networking */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Networking</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Build meaningful professional relationships that can open doors to opportunities.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>LinkedIn Profile Optimization</li>
            <li>Networking Event Strategies</li>
            <li>Informational Interview Guide</li>
            <li>Building Your Personal Brand</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            Access Networking Resources →
          </button>
        </div>

        {/* Skills Development */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Skills Development</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Enhance your skills with curated learning resources and certificates.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>Free Online Course Directory</li>
            <li>In-Demand Skills by Industry</li>
            <li>Certification Value Guide</li>
            <li>Peer Learning Communities</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            Discover Learning Resources →
          </button>
        </div>

        {/* Job Search Strategies */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">Job Search Strategies</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Learn effective strategies to find and land your dream job.
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>Hidden Job Market Access</li>
            <li>Application Tracking Systems Guide</li>
            <li>Salary Negotiation Techniques</li>
            <li>Remote Work Opportunities</li>
          </ul>
          <button className="mt-6 text-[var(--link-color)] font-medium hover:underline">
            View Job Search Resources →
          </button>
        </div>
      </div>

      <div className="mt-16 bg-[var(--section-bg)] border border-[var(--card-border)] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Need Personalized Guidance?</h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
          Schedule a one-on-one session with a career advisor to get personalized feedback on your career development.
        </p>
        <button className="mt-6 px-6 py-3 bg-[var(--btn-primary)] text-white font-medium rounded-lg hover:bg-[var(--btn-primary-hover)] transition duration-300">
          Book a Career Consultation
        </button>
      </div>
    </div>
  );
} 