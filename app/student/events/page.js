'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CalendarDays, MapPin, Users, ChevronLeft, Search, Filter, Calendar, Tag } from 'lucide-react';

export default function StudentEvents() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  // Mock data for events
  const events = [
    { 
      id: 1, 
      title: "Tech Career Fair", 
      date: "Jun 15, 2024", 
      time: "10:00 AM - 4:00 PM",
      location: "Virtual", 
      type: "Career Fair",
      description: "Connect with top tech companies looking to hire fresh graduates and interns. Bring your resume and prepare your elevator pitch!",
      attendees: 230,
      registered: true
    },
    { 
      id: 2, 
      title: "Resume Workshop", 
      date: "Jun 22, 2024", 
      time: "3:00 PM - 5:00 PM",
      location: "Campus Center", 
      type: "Workshop",
      description: "Learn how to craft a resume that stands out to recruiters. Get personal feedback from industry professionals.",
      attendees: 85,
      registered: true
    },
    { 
      id: 3, 
      title: "Interview Skills Webinar", 
      date: "Jun 30, 2024", 
      time: "5:00 PM - 6:30 PM",
      location: "Virtual", 
      type: "Webinar",
      description: "Master the art of technical and behavioral interviews. Practice with mock interviews and get feedback from recruiters.",
      attendees: 120,
      registered: false
    },
    { 
      id: 4, 
      title: "Networking Mixer - Tech Industry", 
      date: "Jul 05, 2024", 
      time: "6:00 PM - 8:00 PM",
      location: "Innovation Hub", 
      type: "Networking",
      description: "Meet professionals from top tech companies in a casual setting. Great opportunity to make industry connections!",
      attendees: 75,
      registered: false
    },
    { 
      id: 5, 
      title: "Startup Founders Panel", 
      date: "Jul 12, 2024", 
      time: "4:00 PM - 6:00 PM",
      location: "Virtual", 
      type: "Panel",
      description: "Hear from successful startup founders about their journey, challenges, and advice for young entrepreneurs.",
      attendees: 150,
      registered: false
    }
  ];

  // Filter events
  const filteredEvents = events.filter(event => {
    // Filter by search query
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !event.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !event.type.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by registration status
    if (filter === 'registered' && !event.registered) {
      return false;
    }
    if (filter === 'upcoming' && event.registered) {
      return false;
    }
    
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/student/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center mb-2 text-sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Events & Workshops</h1>
          <p className="text-gray-600 mt-1">Discover opportunities to learn, network, and grow</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Filter className="text-gray-500 h-5 w-5" />
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Events
              </button>
              <button 
                onClick={() => setFilter('registered')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'registered' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Registered
              </button>
              <button 
                onClick={() => setFilter('upcoming')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'upcoming' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Not Registered
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`h-2 ${
                event.type === 'Career Fair' ? 'bg-purple-500' : 
                event.type === 'Workshop' ? 'bg-blue-500' : 
                event.type === 'Webinar' ? 'bg-green-500' : 
                event.type === 'Networking' ? 'bg-orange-500' : 'bg-indigo-500'
              }`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
                      <span className={`ml-3 px-2.5 py-1 rounded-full text-xs font-medium ${
                        event.registered ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {event.registered ? 'Registered' : 'Not Registered'}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{event.type}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                    <Calendar className="h-4 w-4 inline mr-1" /> 
                    {event.date}
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600">{event.description}</p>
                
                <div className="mt-5 flex flex-wrap items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="h-4 w-4 mr-2 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      {event.attendees} attending
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    <button className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors">
                      Details
                    </button>
                    {!event.registered ? (
                      <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                        Register
                      </button>
                    ) : (
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                        Cancel Registration
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <CalendarDays className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No events found</h3>
            <p className="text-gray-500 mt-2">Try changing your search or filters</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 