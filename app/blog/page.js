'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, User, Clock, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'career advice',
    'student tips',
    'industry insights',
    'employer resources',
    'university partnerships'
  ];

  const featuredPosts = [
    {
      id: 1,
      title: '10 Skills Every Graduate Needs in Today\'s Job Market',
      excerpt: 'Discover the most in-demand skills employers are looking for and how to develop them during your university years.',
      category: 'career advice',
      author: 'Sarah Johnson',
      date: 'May 15, 2024',
      readTime: '8 min read',
      image: '/download.jpeg'
    },
    {
      id: 2,
      title: 'How to Build a Professional Network While Still in University',
      excerpt: 'Networking doesn\'t have to wait until graduation. Learn effective strategies to build valuable professional connections during your studies.',
      category: 'student tips',
      author: 'Michael Chen',
      date: 'May 8, 2024',
      readTime: '6 min read',
      image: '/little-einsteins-cartoon-characters-png-3.png'
    },
    {
      id: 3,
      title: 'The Future of Work: Trends Reshaping Graduate Employment',
      excerpt: 'Explore the emerging trends in remote work, digital collaboration, and flexible careers that are transforming the landscape for new graduates.',
      category: 'industry insights',
      author: 'Priya Patel',
      date: 'April 29, 2024',
      readTime: '10 min read',
      image: '/R.png'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Creating an Inclusive Campus Recruiting Strategy',
      excerpt: 'How employers can develop recruiting practices that attract diverse talent and foster inclusive work environments.',
      category: 'employer resources',
      author: 'James Wilson',
      date: 'May 12, 2024',
      readTime: '7 min read',
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      title: 'Reimagining University Career Services for the Digital Age',
      excerpt: 'How universities are transforming their career services to better support students in a rapidly changing job market.',
      category: 'university partnerships',
      author: 'Emma Rodriguez',
      date: 'May 5, 2024',
      readTime: '9 min read',
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      title: 'Mastering the Virtual Interview: Tips from Hiring Managers',
      excerpt: 'Expert advice on how to present yourself professionally and effectively in remote job interviews.',
      category: 'career advice',
      author: 'David Kim',
      date: 'April 22, 2024',
      readTime: '6 min read',
      image: '/placeholder.jpg'
    },
    {
      id: 7,
      title: 'The Power of Internships: Turning Experience into Job Offers',
      excerpt: 'How to maximize your internship experience and position yourself for full-time employment opportunities.',
      category: 'student tips',
      author: 'Sarah Johnson',
      date: 'April 18, 2024',
      readTime: '7 min read',
      image: '/placeholder.jpg'
    },
    {
      id: 8,
      title: 'Building Effective University-Employer Partnerships',
      excerpt: 'A comprehensive guide to creating mutually beneficial relationships between educational institutions and employers.',
      category: 'university partnerships',
      author: 'Michael Chen',
      date: 'April 10, 2024',
      readTime: '8 min read',
      image: '/placeholder.jpg'
    },
    {
      id: 9,
      title: 'The Rise of Skills-Based Hiring: What Students Need to Know',
      excerpt: 'How the shift toward skills-based hiring is changing recruitment and what it means for university students.',
      category: 'industry insights',
      author: 'Priya Patel',
      date: 'April 3, 2024',
      readTime: '9 min read',
      image: '/placeholder.jpg'
    }
  ];

  // Filter posts based on search query and active category
  const filteredPosts = [...featuredPosts, ...recentPosts].filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
            GradLyft <span className="text-gradient-primary">Blog</span>
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Career advice, industry insights, and success stories to help you navigate your professional journey.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md capitalize ${
                  activeCategory === category 
                    ? 'bg-[var(--primary-light)] text-[var(--primary-start)]' 
                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {searchQuery === '' && activeCategory === 'all' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-[var(--section-dark)] relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-0 left-0 bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-br-lg capitalize text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-[var(--primary-start)] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-[var(--text-muted)] space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">
            {searchQuery !== '' || activeCategory !== 'all' ? 'Search Results' : 'Recent Articles'}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-[var(--section-dark)] relative">
                    {/* This would be a post image */}
                    <div className="absolute top-0 left-0 bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-br-lg capitalize text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-[var(--primary-start)] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-[var(--text-muted)] space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)] text-lg">No articles found matching your search criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-4 text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Get the latest career advice, industry insights, and GradLyft news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow p-3 rounded-l-md border-y border-l border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)]"
              />
              <button className="gradient-button text-white px-4 py-3 rounded-r-md hover:gradient-button-hover transition">
                Subscribe
              </button>
            </div>
          </div>
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            By subscribing, you agree to our <Link href="/privacy" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </main>
  );
} 