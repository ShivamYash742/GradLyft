import React from 'react';

export const metadata = {
  title: 'Success Stories | GradLyft',
  description: 'Discover how universities and employers are achieving exceptional results with GradLyft.',
};

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 1,
      university: 'Stanford University',
      logo: '/images/partners/stanford.png',
      name: 'Dr. Rebecca Chen',
      role: 'Director of Career Services',
      image: '/images/testimonials/rebecca-chen.jpg',
      quote: 'GradLyft has transformed our career services department. We\'ve seen a 78% increase in student engagement and a 42% improvement in job placement rates since implementation.',
      metrics: [
        { label: 'Placement Rate', value: '94%', increase: '+42%' },
        { label: 'Student Engagement', value: '84%', increase: '+78%' },
        { label: 'Employer Partners', value: '1,200+', increase: '+65%' },
      ],
      caseSummary: 'Stanford University partnered with GradLyft to modernize their career services platform and improve student engagement. By implementing our comprehensive solution, they were able to streamline their job posting process, host virtual career fairs, and provide personalized career guidance at scale.'
    },
    {
      id: 2,
      university: 'University of Michigan',
      logo: '/images/partners/umich.png',
      name: 'Michael Thompson',
      role: 'Associate Dean of Career Development',
      image: '/images/testimonials/michael-thompson.jpg',
      quote: 'The analytics dashboard has been game-changing for us. We can now track student interactions with employers and measure outcomes in real-time, allowing us to continuously improve our services.',
      metrics: [
        { label: 'Career Fair Attendance', value: '5,200', increase: '+125%' },
        { label: 'Interview Conversions', value: '68%', increase: '+32%' },
        { label: 'Alumni Engagement', value: '47%', increase: '+89%' },
      ],
      caseSummary: 'University of Michigan leveraged GradLyft\'s analytics platform to gain deeper insights into student outcomes and employer relationships. The data-driven approach allowed them to optimize career fair strategies, resulting in record attendance and significantly higher interview conversion rates.'
    },
    {
      id: 3,
      university: 'Georgia Tech',
      logo: '/images/partners/gatech.png',
      name: 'Dr. Sarah Williams',
      role: 'Executive Director of Career Development',
      image: '/images/testimonials/sarah-williams.jpg',
      quote: 'As a technical institution, we needed a platform that could handle complex recruiting needs for engineering and computer science students. GradLyft delivered customized solutions that perfectly matched our requirements.',
      metrics: [
        { label: 'Technical Interviews', value: '3,400+', increase: '+87%' },
        { label: 'Avg. Starting Salary', value: '$92K', increase: '+14%' },
        { label: 'Internship Placements', value: '1,800', increase: '+53%' },
      ],
      caseSummary: 'Georgia Tech partnered with GradLyft to create a specialized platform for STEM career development. Our team implemented custom integrations with technical assessment platforms and developed industry-specific career path visualizations for engineering and computer science students.'
    },
  ];

  const employerStories = [
    {
      company: 'TechCorp Global',
      logo: '/images/employers/techcorp.png',
      quote: 'GradLyft has significantly streamlined our campus recruitment efforts. We\'ve been able to increase our reach while reducing recruitment costs by 35%.',
      name: 'Jennifer Liu',
      role: 'Head of University Recruitment'
    },
    {
      company: 'Innovate Finance',
      logo: '/images/employers/innovate.png',
      quote: 'The quality of candidates we\'ve sourced through GradLyft has been exceptional. Their matching algorithm truly understands our company culture and skill requirements.',
      name: 'Marcus Johnson',
      role: 'VP of Talent Acquisition'
    },
    {
      company: 'HealthTech Solutions',
      logo: '/images/employers/healthtech.png',
      quote: 'As a growing company, we needed to establish relationships with top universities efficiently. GradLyft gave us immediate access to a network of excellent institutions and qualified candidates.',
      name: 'Dr. Priya Patel',
      role: 'Chief People Officer'
    },
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Header */}
      <div className="bg-[var(--section-dark)] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Success Stories
          </h1>
          <p className="mt-6 text-xl text-[var(--text-secondary)]">
            Discover how universities and employers are achieving exceptional results with GradLyft's career development platform.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[var(--section-bg)] py-10 border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--btn-primary)]">200+</div>
              <div className="mt-2 text-[var(--text-secondary)]">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--btn-primary)]">5,000+</div>
              <div className="mt-2 text-[var(--text-secondary)]">Employer Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--btn-primary)]">500K+</div>
              <div className="mt-2 text-[var(--text-secondary)]">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--btn-primary)]">92%</div>
              <div className="mt-2 text-[var(--text-secondary)]">Partner Retention Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* University Success Stories */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-4">
          University Partner Success
        </h2>
        <p className="text-[var(--text-secondary)] text-center max-w-3xl mx-auto mb-16">
          See how leading institutions have transformed their career services and achieved outstanding outcomes with GradLyft.
        </p>

        {successStories.map((story, index) => (
          <div 
            key={story.id} 
            className={`mb-24 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } flex flex-col lg:flex-row items-center gap-12`}
          >
            <div className="lg:w-1/2">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden p-6">
                <div className="mb-6 h-16 flex items-center">
                  <div className="bg-gray-100 rounded p-2 h-12 w-36 flex items-center justify-center">
                    <span className="text-sm text-gray-500">[University Logo]</span>
                  </div>
                </div>
                
                <blockquote className="text-xl italic text-[var(--text-secondary)] mb-6 relative">
                  <svg className="absolute -top-6 -left-6 h-12 w-12 text-[var(--btn-primary)] opacity-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v12H6v-8c0-2.2 1.8-4 4-4zm12 0v12h-4v-8c0-2.2 1.8-4 4-4z" />
                  </svg>
                  {story.quote}
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-14 w-14 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xs text-gray-500">[Photo]</span>
                  </div>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">{story.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{story.role}</div>
                    <div className="text-sm text-[var(--text-muted)]">{story.university}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {story.metrics.map((metric, i) => (
                    <div key={i} className="bg-[var(--section-bg)] p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-[var(--text-primary)]">{metric.value}</div>
                      <div className="text-xs text-[var(--text-secondary)] mb-1">{metric.label}</div>
                      <div className="text-xs font-medium text-green-600">{metric.increase}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                {story.university}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                {story.caseSummary}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[var(--btn-primary)] bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--btn-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Challenge:</strong> Outdated career services platform with low student engagement.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--btn-primary)] bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--btn-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Solution:</strong> Implemented GradLyft's comprehensive career platform with personalized student pathways and employer matching.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--btn-primary)] bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--btn-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    <strong>Results:</strong> Dramatic increases in student engagement, job placement rates, and employer partnerships.
                  </p>
                </div>
              </div>
              
              <button className="mt-8 inline-flex items-center text-[var(--link-color)] hover:underline">
                Read Full Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Employer Testimonials */}
      <div className="bg-[var(--section-bg)] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-4">
            Employer Perspectives
          </h2>
          <p className="text-[var(--text-secondary)] text-center max-w-3xl mx-auto mb-16">
            Learn how employers are connecting with top talent and streamlining their recruitment processes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employerStories.map((employer, index) => (
              <div key={index} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
                <div className="mb-6 h-12 flex items-center">
                  <div className="bg-gray-100 rounded p-2 h-8 w-32 flex items-center justify-center">
                    <span className="text-xs text-gray-500">[Company Logo]</span>
                  </div>
                </div>
                
                <blockquote className="text-lg italic text-[var(--text-secondary)] mb-8 relative min-h-[100px]">
                  {employer.quote}
                </blockquote>
                
                <div className="flex items-center">
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">{employer.name}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{employer.role}</div>
                    <div className="text-sm text-[var(--text-muted)]">{employer.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="bg-[var(--section-dark)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Join Our Success Stories
          </h2>
          <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Partner with GradLyft and transform your institution's career services. Book a demo today to see our platform in action.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
              Schedule a Demo
            </button>
            <button className="px-8 py-3 border border-[var(--card-border)] rounded-lg hover:bg-[var(--section-bg)] transition">
              View Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 