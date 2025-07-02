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
    'conference',
    'webinar',
    'contest'
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
      
      featuredEvents.forEach(event => {
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
      id: 12,
      title: 'Tech Industry Trends Webinar',
      description: 'Join industry experts as they discuss emerging technology trends and career opportunities in the evolving tech landscape.',
      category: 'webinar',
      format: 'virtual',
      date: 'June 18, 2024',
      location: 'Online',
      attendees: 1200,
      image: '/download (2).jpeg',
      rsvp: 210
    },
    {
      id: 10,
      title: 'Student Pitch Competition',
      description: 'Present your startup ideas to a panel of venture capitalists and industry experts for a chance to win seed funding.',
      category: 'contest',
      format: 'hybrid',
      date: 'July 22, 2024',
      location: 'Austin & Virtual',
      attendees: 300,
      image: '/R.png',
      rsvp: 89
    }
  ];

  const upcomingEvents = [];

  // Filter events based on search query, category, and format
  const filteredEvents = featuredEvents.filter(event => {
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

  // Check if event type should be displayed normally or with coming soon badge
  const isActiveEventType = (category) => {
    return false; // Always return false to show "Coming Soon" for all events
    // Original code: return category === 'webinar' || category === 'workshop' || category === 'contest';
  };

  return (
    <main className="bg-[var(--section-light)] relative">
      {/* Event Notification Popup */}
      {showPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-xl flex items-center gap-3 pulse-glow">
            <Bell className="w-8 h-8 text-yellow-300 animate-pulse" />
            <div>
              <p className="font-bold text-lg">New Event Added! 🔥</p>
              <p className="text-sm">Interview Skills Masterclass - June 12</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Save Button */}
      <Link 
        href="/profile/saved"
        className="fixed left-8 bottom-8 z-40 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 pulse-glow"
      >
        <Heart className={`w-6 h-6 text-white ${savedEvents.length > 0 ? 'fill-white' : ''}`} />
        {savedEvents.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center text-slate-900">
            {savedEvents.length}
                  </span>
        )}
      </Link>
    
      <section className="relative gradient-primary text-white py-16 mb-12 overflow-hidden emoji-bg">
        <div className="absolute top-8 right-[20%] animate-pulse">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
        <div className="absolute bottom-10 left-[30%] animate-pulse delay-1000">
          <Sparkles className="w-5 h-5 text-[var(--youth-yellow)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events 🔥</h1>
            <div className="absolute -top-6 -right-6">
              <div className="fun-badge">
                Hot This Week!
              </div>
            </div>
          </div>
          <p className="text-xl mb-10 max-w-3xl">
            Discover and join epic events that'll level up your career and connect you with awesome professionals!
          </p>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gradient-primary">Featured Events</h2>
          <div className="inline-flex items-center bg-[var(--primary-start)]/10 px-3 py-1 rounded-full text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-[var(--primary-start)] font-medium">237 students viewing now</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => {
            const { isHot, isSaved, daysLeft } = getEventInfo(event);
            return (
              <div key={index} className="card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative float">
                {isHot && (
                  <div className="absolute left-4 top-4 z-10">
                    <div className="fun-badge flex items-center gap-1">
                      <Flame className="w-3 h-3" /> Trending
                    </div>
                  </div>
                )}
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{event.title}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      isActiveEventType(event.category) 
                      ? 'bg-youth-green-10 text-[var(--youth-green)]' 
                      : 'bg-orange-100 text-orange-600'
                    }`}>
                      {isActiveEventType(event.category) ? event.category : 'Coming Soon'}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-[var(--text-muted)]">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    {isActiveEventType(event.category) ? (
                      <Link href={`/events/${event.id}`} className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium flex items-center">
                        Join Now <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm italic">Available Soon</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => toggleSavedEvent(event.id)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-[var(--primary-end)] text-[var(--primary-end)]' : 'text-gray-600'}`} />
                </button>
              </div>
            );
          })}
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