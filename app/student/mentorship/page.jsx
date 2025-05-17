import React from 'react';

export const metadata = {
  title: 'Find a Mentor | GradLyft',
  description: 'Connect with industry professionals who can guide you through your career journey.',
};

export default function MentorshipPage() {
  // Dummy mentor data
  const featuredMentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      experience: '10+ years',
      expertise: ['Web Development', 'System Architecture', 'Career Coaching'],
      image: '/images/mentors/mentor1.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Global Brand Partners',
      experience: '12+ years',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Market Research'],
      image: '/images/mentors/mentor2.jpg',
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Data Science Lead',
      company: 'Analytics AI',
      experience: '8+ years',
      expertise: ['Machine Learning', 'Data Visualization', 'Statistical Analysis'],
      image: '/images/mentors/mentor3.jpg',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Finance Manager',
      company: 'Capital Growth Partners',
      experience: '15+ years',
      expertise: ['Financial Analysis', 'Investment Strategy', 'Business Planning'],
      image: '/images/mentors/mentor4.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[var(--text-primary)]">Find a Mentor</h1>
        <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
          Connect with industry professionals who can provide guidance, share insights, and help you navigate your career journey.
        </p>
      </header>

      <div className="bg-[var(--section-bg)] border border-[var(--card-border)] rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Why Find a Mentor?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Industry Insights:</strong> Gain firsthand knowledge about your desired industry from someone who's been there.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Professional Growth:</strong> Accelerate your career development through personalized guidance and feedback.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Networking:</strong> Build valuable connections that can open doors to future opportunities.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Skill Development:</strong> Identify and develop the specific skills needed to succeed in your field.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:pl-8 lg:border-l lg:border-[var(--card-border)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">How It Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Create your profile</strong> highlighting your background, career goals, and what you're seeking in a mentor.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Browse mentor profiles</strong> and filter by industry, expertise, or experience level.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Request mentorship</strong> from professionals whose background aligns with your goals.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-[var(--btn-primary)] rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  <strong>Schedule sessions</strong> through our platform's integrated calendar system.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Featured Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {featuredMentors.map(mentor => (
          <div key={mentor.id} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-500">[Mentor Image]</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{mentor.name}</h3>
              <p className="text-[var(--text-muted)] mb-2">{mentor.role}</p>
              <p className="text-[var(--text-secondary)] text-sm mb-3">{mentor.company} • {mentor.experience}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((skill, index) => (
                  <span key={index} className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="w-full text-center py-2 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--section-bg)] border border-[var(--card-border)] rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to Find Your Mentor?</h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
          Create your profile and start connecting with industry professionals who are excited to share their knowledge and help you succeed.
        </p>
        <button className="mt-6 px-8 py-3 bg-[var(--btn-primary)] text-white font-medium rounded-lg hover:bg-[var(--btn-primary-hover)] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
} 