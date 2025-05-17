'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, FileText, Video, Calendar, Download, ExternalLink } from 'lucide-react';

export default function StudentResourcesPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const resources = [
    {
      id: 1,
      title: 'Resume Building Workshop',
      description: 'Learn how to craft a compelling resume that stands out to employers.',
      type: 'video',
      icon: <Video className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      duration: '45 min'
    },
    {
      id: 2,
      title: 'Interview Preparation Guide',
      description: 'Comprehensive guide to ace your job interviews with confidence.',
      type: 'guide',
      icon: <FileText className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      pages: 24
    },
    {
      id: 3,
      title: 'Networking for Career Success',
      description: 'Strategies for building professional relationships that advance your career.',
      type: 'article',
      icon: <BookOpen className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      readTime: '10 min'
    },
    {
      id: 4,
      title: 'Technical Interview Workshop',
      description: 'Join our live workshop to practice common technical interview questions.',
      type: 'event',
      icon: <Calendar className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      date: 'Jun 15, 2024'
    },
    {
      id: 5,
      title: 'Career Path Exploration Tool',
      description: 'Interactive tool to discover potential career paths based on your interests and skills.',
      type: 'tool',
      icon: <ExternalLink className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#'
    },
    {
      id: 6,
      title: 'Cover Letter Templates',
      description: 'Customizable templates to help you create professional cover letters.',
      type: 'template',
      icon: <Download className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      count: 5
    },
    {
      id: 7,
      title: 'Salary Negotiation Tactics',
      description: 'Learn effective strategies to negotiate your compensation package.',
      type: 'article',
      icon: <BookOpen className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      readTime: '15 min'
    },
    {
      id: 8,
      title: 'LinkedIn Profile Optimization',
      description: 'Tips to enhance your LinkedIn profile to attract recruiters.',
      type: 'video',
      icon: <Video className="w-6 h-6 text-[var(--primary-start)]" />,
      link: '#',
      duration: '30 min'
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-[var(--text-primary)]">Career Resources</h1>
              <p className="mt-4 text-[var(--text-secondary)] max-w-3xl">
                Explore our collection of resources designed to help you succeed in your career journey. 
                From resume building to interview preparation, we've got you covered.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 relative">
              <div className="aspect-video rounded-xl overflow-hidden relative">
                <Image 
                  src="/little-einsteins-cartoon-characters-png-3.png"
                  alt="Career Resources"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resource Type Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {['all', 'article', 'guide', 'video', 'event', 'tool', 'template'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab 
                    ? 'bg-[var(--primary-light)] text-[var(--primary-start)]' 
                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                } transition-colors duration-200 capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{resource.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{resource.description}</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-[var(--text-muted)] capitalize">
                        {resource.type}
                        {resource.duration && ` • ${resource.duration}`}
                        {resource.readTime && ` • ${resource.readTime}`}
                        {resource.pages && ` • ${resource.pages} pages`}
                        {resource.date && ` • ${resource.date}`}
                        {resource.count && ` • ${resource.count} templates`}
                      </span>
                      <Link href={resource.link} className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium">
                        View Resource
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No resources found for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 