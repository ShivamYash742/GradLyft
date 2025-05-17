'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, MapPin, Users, Filter, ChevronRight, Star, Clock, Flame, Heart, Bell, Sparkles, Trophy } from 'lucide-react';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');
  const [savedEvents, setSavedEvents] = useState([1, 5]); // Pre-saved events for demo
  const [hotEvents, setHotEvents] = useState([1, 3, 8]); // Hot trending events
  const [countdowns, setCountdowns] = useState({});
  const [showPopup, setShowPopup] = useState(false);

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

  // Calculate days remaining for each event
  useEffect(() => {
    const calculateDaysRemaining = () => {
      const today = new Date();
      const newCountdowns = {};
      
      [...featuredEvents, ...upcomingEvents].forEach(event => {
        const eventDate = parseEventDate(event.date);
        if (eventDate) {
          const diffTime = eventDate - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          newCountdowns[event.id] = diffDays >= 0 ? diffDays : 0;
        }
      });
      
      setCountdowns(newCountdowns);
    };
    
    calculateDaysRemaining();
    
    // Trigger popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Helper function to parse dates like "June 15-16, 2024"
  const parseEventDate = (dateString) => {
    try {
      // Extract the first date in case of ranges like "June 15-16, 2024"
      const firstDate = dateString.split('-')[0].trim();
      // Handle "Month Day, Year" format
      const match = firstDate.match(/(\w+)\s+(\d+),\s+(\d+)/);
      if (match) {
        const [_, month, day, year] = match;
        const monthIndex = new Date(`${month} 1, 2000`).getMonth();
        return new Date(parseInt(year), monthIndex, parseInt(day));
      }
      return null;
    } catch (e) {
      return null;
    }
  };
  
  const toggleSavedEvent = (eventId) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter(id => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
      // Show brief confirmation animation or message
    }
  };

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
      image: '/R.png',
      rsvp: 287
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
      image: '/download (1).jpeg',
      rsvp: 124
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
      image: '/download (2).jpeg',
      rsvp: 98
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
      image: '/yogi-bear3.png',
      rsvp: 76
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
      image: '/download.jpeg',
      rsvp: 112
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
      image: '/download (2).jpeg',
      rsvp: 54
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
      image: '/download (1).jpeg',
      rsvp: 32
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
      image: '/R.png',
      rsvp: 145
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
      image: '/yogi-bear3.png',
      rsvp: 67
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

  // Get event card info (countdown, popularity, etc.)
  const getEventInfo = (event) => {
    const daysLeft = countdowns[event.id] || 0;
    const isHot = hotEvents.includes(event.id);
    const isSaved = savedEvents.includes(event.id);
    
    return { daysLeft, isHot, isSaved };
  };

  return (
    <main className="bg-[var(--section-light)] relative">
      {/* Event Notification Popup */}
      {showPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-lg shadow-xl flex items-center gap-3">
            <Bell className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="font-bold text-lg">New Event Added!</p>
              <p className="text-sm">Interview Skills Masterclass - June 12</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Save Button */}
      <Link 
        href="/profile/saved"
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        <Heart className={`w-6 h-6 text-white ${savedEvents.length > 0 ? 'fill-white' : ''}`} />
        {savedEvents.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-slate-900">
            {savedEvents.length}
          </span>
        )}
      </Link>
    
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)] relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute top-12 right-32 animate-pulse">
          <Calendar className="w-6 h-6 text-[var(--primary-start)]" />
        </div>
        <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
          <Sparkles className="w-5 h-5 text-[var(--primary-mid)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative inline-block mx-auto">
            <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
              GradLyft <span className="text-gradient-primary">Events</span>
            </h1>
            <div className="absolute -top-2 -right-6">
              <div className="animate-bounce-in">
                <div className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full transform rotate-12 font-bold text-xs shadow-lg">
                  <span className="animate-pulse">New!</span>
                </div>
              </div>
            </div>
          </div>
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
                className="w-full p-4 pl-12 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--primary-start)] transition-all"
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
                  } transition-all duration-200 hover:scale-105`}
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
                  } transition-all duration-200 hover:scale-105`}
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
            <h2 className="text-2xl font-bold mb-8 text-[var(--text-primary)] flex items-center">
              Featured Events
              <Star className="ml-2 w-5 h-5 text-yellow-400 fill-yellow-400" />
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredEvents.map(event => {
                const { daysLeft, isHot, isSaved } = getEventInfo(event);
                
                return (
                  <div key={event.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative group">
                    {/* Save button */}
                    <button 
                      className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full transition-all duration-300 hover:bg-white"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSavedEvent(event.id);
                      }}
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                    </button>
                  
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
                      <div className="absolute top-0 right-12 bg-[var(--card-bg)] text-[var(--text-secondary)] px-3 py-1 rounded-bl-lg text-sm">
                        {event.format}
                      </div>
                      
                      {/* Countdown overlay */}
                      {daysLeft <= 14 && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {daysLeft === 0 ? 'Today!' : daysLeft === 1 ? 'Tomorrow!' : `${daysLeft} days left`}
                        </div>
                      )}
                      
                      {/* Hot event indicator */}
                      {isHot && (
                        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                          <Flame className="w-4 h-4 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-start)] transition-colors">
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
                          <span>{event.attendees.toLocaleString()} Expected Attendees</span>
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            +{event.rsvp} RSVPs
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Link 
                          href={`/events/${event.id}`}
                          className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium group"
                        >
                          View Details 
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        {/* Achievement badge */}
                        {event.id === 1 && (
                          <span className="flex items-center gap-1 text-xs bg-[var(--primary-subtle)] text-[var(--primary-start)] px-2 py-1 rounded-full">
                            <Trophy className="w-3 h-3" /> Popular Event
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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
              {filteredEvents.map(event => {
                const { daysLeft, isHot, isSaved } = getEventInfo(event);
                
                return (
                  <div key={event.id} className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative group">
                    {/* Save button */}
                    <button 
                      className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full transition-all duration-300 hover:bg-white"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSavedEvent(event.id);
                      }}
                    >
                      <Heart className={`w-5 h-5 ${isSaved ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                    </button>
                  
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
                      <div className="absolute top-0 right-12 bg-[var(--card-bg)] text-[var(--text-secondary)] px-3 py-1 rounded-bl-lg text-sm">
                        {event.format}
                      </div>
                      
                      {/* Countdown overlay */}
                      {daysLeft <= 14 && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {daysLeft === 0 ? 'Today!' : daysLeft === 1 ? 'Tomorrow!' : `${daysLeft} days left`}
                        </div>
                      )}
                      
                      {/* Hot event indicator */}
                      {isHot && (
                        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                          <Flame className="w-4 h-4 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-start)] transition-colors">
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
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                            +{event.rsvp} RSVPs
                          </span>
                        </div>
                      </div>
                      <Link 
                        href={`/events/${event.id}`}
                        className="inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium group"
                      >
                        View Details 
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
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
          <div className="card p-8 rounded-xl bg-gradient-to-r from-[var(--primary-subtle)] to-[var(--section-light)] relative overflow-hidden">
            {/* Animated sparkles */}
            <div className="absolute top-4 right-8 animate-pulse">
              <Sparkles className="w-6 h-6 text-[var(--primary-start)]" />
            </div>
            
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
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-flex items-center group"
                >
                  Contact Our Events Team
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Social proof */}
            <div className="mt-4 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <div className="relative mr-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--primary-start)]">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[var(--text-primary)]">12 events hosted in the last month</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 