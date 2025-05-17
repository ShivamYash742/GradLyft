'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, MapPin, Users, Filter, ChevronRight } from 'lucide-react';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const categories = [
    'all',
    'career fair',
    'workshop',
    'networking',
    'hackathon',
    'conference'
  ];

  const formats = [
    'all',
    'in-person',
    'virtual',
    'hybrid'
  ];

  const featuredEvents = [
    {
      id: 1,
      title: 'Global Tech Career Fair 2024',
      description: 'Connect with leading technology companies looking to hire talented graduates and students for various roles.',
      category: 'career fair',
      format: 'hybrid',
      date: 'June 15-16, 2024',
      location: 'San Francisco & Virtual',
      attendees: 5000,
      image: '/R.png'
    },
    {
      id: 2,
      title: 'Resume Building Workshop',
      description: 'Learn how to craft a standout resume that highlights your skills and experiences effectively.',
      category: 'workshop',
      format: 'virtual',
      date: 'May 28, 2024',
      location: 'Online',
      attendees: 500,
      image: '/download (1).jpeg'
    },
    {
      id: 3,
      title: 'Student-Employer Networking Evening',
      description: 'An exclusive opportunity to network with recruiters and professionals from various industries in a relaxed setting.',
      category: 'networking',
      format: 'in-person',
      date: 'June 5, 2024',
      location: 'New York City',
      attendees: 300,
      image: '/download (2).jpeg'
    }
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: 'Summer Internship Fair',
      description: 'Explore internship opportunities with 50+ companies across multiple industries for the upcoming summer.',
      category: 'career fair',
      format: 'in-person',
      date: 'June 20, 2024',
      location: 'Chicago',
      attendees: 1200,
      image: '/placeholder.jpg'
    },
    {
      id: 5,
      title: 'Healthcare Careers Summit',
      description: 'Discover career paths in healthcare, from clinical roles to administration and technology.',
      category: 'conference',
      format: 'hybrid',
      date: 'July 8-9, 2024',
      location: 'Boston & Virtual',
      attendees: 800,
      image: '/placeholder.jpg'
    },
    {
      id: 6,
      title: 'Interview Skills Masterclass',
      description: 'Master the art of interviewing with practical exercises and feedback from professional recruiters.',
      category: 'workshop',
      format: 'virtual',
      date: 'June 12, 2024',
      location: 'Online',
      attendees: 400,
      image: '/placeholder.jpg'
    },
    {
      id: 7,
      title: 'Finance Industry Networking Breakfast',
      description: 'Network with professionals from leading financial institutions over breakfast and short presentations.',
      category: 'networking',
      format: 'in-person',
      date: 'June 25, 2024',
      location: 'London',
      attendees: 150,
      image: '/placeholder.jpg'
    },
    {
      id: 8,
      title: 'Sustainable Innovation Hackathon',
      description: 'Create innovative solutions to environmental challenges in this 48-hour hackathon with industry mentors.',
      category: 'hackathon',
      format: 'hybrid',
      date: 'July 15-17, 2024',
      location: 'Berlin & Virtual',
      attendees: 600,
      image: '/placeholder.jpg'
    },
    {
      id: 9,
      title: 'Diversity in Tech Conference',
      description: 'Explore initiatives and career opportunities promoting diversity and inclusion in the technology sector.',
      category: 'conference',
      format: 'hybrid',
      date: 'August 5-6, 2024',
      location: 'Toronto & Virtual',
      attendees: 1000,
      image: '/placeholder.jpg'
    }
  ];

  // Filter events based on search query, category, and format
  const filteredEvents = [...featuredEvents, ...upcomingEvents].filter(event => {
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    const matchesFormat = activeFormat === 'all' || event.format === activeFormat;
    
    return matchesSearch && matchesCategory && matchesFormat;
  });

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
            GradLyft <span className="text-gradient-primary">Events</span>
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Connect with employers, learn new skills, and expand your professional network with our career-focused events.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events by title, description, or location..."
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
          <div className="flex flex-col md:flex-row gap-4 md:items-center mb-8">
            <div className="flex items-center">
              <Filter className="text-[var(--text-secondary)] mr-2" />
              <span className="text-[var(--text-secondary)] font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-[var(--text-secondary)] mr-2">Type:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-md capitalize text-sm ${
                    activeCategory === category 
                      ? 'bg-[var(--primary-light)] text-[var(--primary-start)]' 
                      : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                  } transition-colors duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-[var(--text-secondary)] mr-2">Format:</span>
              {formats.map(format => (
                <button
                  key={format}
                  onClick={() => setActiveFormat(format)}
                  className={`px-3 py-1 rounded-md capitalize text-sm ${
                    activeFormat === format 
                      ? 'bg-[var(--primary-light)] text-[var(--primary-start)]' 
                      : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                  } transition-colors duration-200`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {searchQuery === '' && activeCategory === 'all' && activeFormat === 'all' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)]">Featured Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredEvents.map(event => (
                <div key={event.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-[var(--section-dark)] relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute top-0 left-0 bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-br-lg capitalize text-sm font-medium">
                      {event.category}
                    </div>
                    <div className="absolute top-0 right-0 bg-[var(--card-bg)] text-[var(--text-secondary)] px-3 py-1 rounded-bl-lg text-sm">
                      {event.format}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      <Link href={`/events/${event.id}`} className="hover:text-[var(--primary-start)] transition-colors">
                        {event.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <Calendar className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <MapPin className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <Users className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.attendees.toLocaleString()} Expected Attendees
                      </div>
                    </div>
                    <Link 
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
                    >
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
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
            {searchQuery !== '' || activeCategory !== 'all' || activeFormat !== 'all' ? 'Events Matching Your Criteria' : 'All Upcoming Events'}
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <div key={event.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-[var(--section-dark)] relative">
                    {/* This would be an event image */}
                    <div className="absolute top-0 left-0 bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-br-lg capitalize text-sm font-medium">
                      {event.category}
                    </div>
                    <div className="absolute top-0 right-0 bg-[var(--card-bg)] text-[var(--text-secondary)] px-3 py-1 rounded-bl-lg text-sm">
                      {event.format}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      <Link href={`/events/${event.id}`} className="hover:text-[var(--primary-start)] transition-colors">
                        {event.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <Calendar className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <MapPin className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-[var(--text-secondary)]">
                        <Users className="w-4 h-4 mr-2 text-[var(--primary-start)]" />
                        {event.attendees.toLocaleString()} Expected Attendees
                      </div>
                    </div>
                    <Link 
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
                    >
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)] text-lg">No events found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all'); setActiveFormat('all');}}
                className="mt-4 text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl bg-gradient-to-r from-[var(--primary-subtle)] to-[var(--section-light)]">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Want to host an event?</h2>
                <p className="mt-4 text-[var(--text-secondary)]">
                  Partner with GradLyft to organize career fairs, workshops, or networking events for students and employers.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link 
                  href="/contact" 
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-flex items-center"
                >
                  Contact Our Events Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 