'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, Briefcase, MapPin, ChevronLeft, Search, Filter, BookMarked, Clock, Building, DollarSign, Trash2, ArrowUpRight } from 'lucide-react';

export default function StudentBookmarks() {
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

  // Mock data for bookmarked jobs
  const bookmarkedJobs = [
    { 
      id: 1, 
      role: "Junior Developer", 
      company: "TechSolutions",
      logo: "/download.jpeg",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      deadline: "3 days left",
      description: "We are seeking a talented Junior Developer to join our growing team. This role is perfect for recent graduates with strong programming fundamentals.",
      date_saved: "2 weeks ago",
      tags: ["JavaScript", "React", "Node.js"]
    },
    { 
      id: 2, 
      role: "UX/UI Designer",
      company: "InnovateCorp",
      logo: "/download (1).jpeg",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      deadline: "5 days left",
      description: "Join our design team to create beautiful user experiences for our flagship products. Looking for someone with a keen eye for design and user-centered thinking.",
      date_saved: "1 week ago", 
      tags: ["Figma", "UI Design", "User Research"]
    },
    { 
      id: 3, 
      role: "Data Analyst Intern", 
      company: "DataCraft", 
      logo: "/download.jpeg",
      location: "Chicago, IL (On-site)",
      type: "Internship",
      salary: "$25/hour",
      deadline: "1 week left",
      description: "Summer internship opportunity for students interested in data analytics. You'll work with real client data and contribute to meaningful projects.",
      date_saved: "3 days ago",
      tags: ["SQL", "Python", "Data Visualization"]
    },
    { 
      id: 4, 
      role: "Marketing Associate", 
      company: "GrowthHackers",
      logo: "/download (1).jpeg",
      location: "Remote",
      type: "Full-time",
      salary: "$55,000 - $70,000",
      deadline: "2 weeks left",
      description: "Looking for a creative marketer to join our digital marketing team. Help us create compelling campaigns for our tech clients.",
      date_saved: "5 days ago",
      tags: ["Digital Marketing", "Social Media", "Content Creation"]
    }
  ];

  // Filter jobs
  const filteredJobs = bookmarkedJobs.filter(job => {
    // Filter by search query
    if (searchQuery && !job.role.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Filter by job type
    if (filter === 'full-time' && job.type !== 'Full-time') {
      return false;
    }
    if (filter === 'internship' && job.type !== 'Internship') {
      return false;
    }
    if (filter === 'remote' && !job.location.toLowerCase().includes('remote')) {
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
          <Link href="/profile/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center mb-2 text-sm">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Saved Jobs</h1>
          <p className="text-gray-600 mt-1">Keep track of opportunities that interest you</p>
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
                placeholder="Search saved jobs..."
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
                All Jobs
              </button>
              <button 
                onClick={() => setFilter('full-time')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'full-time' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Full-time
              </button>
              <button 
                onClick={() => setFilter('internship')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'internship' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Internship
              </button>
              <button 
                onClick={() => setFilter('remote')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === 'remote' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Remote
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Saved Jobs List */}
      <div className="space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    {job.logo ? (
                      <Image src={job.logo} alt={job.company} width={64} height={64} />
                    ) : (
                      <Building className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="ml-5 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">{job.role}</h2>
                        <p className="text-gray-600">{job.company}</p>
                        
                        <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-y-2">
                          <span className="flex items-center mr-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center mr-4">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <button className="text-red-500 hover:text-red-700 p-2" title="Remove from saved">
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <BookMarked className="h-5 w-5 text-blue-600 ml-1" />
                      </div>
                    </div>
                    
                    <p className="mt-3 text-gray-600 text-sm line-clamp-2">{job.description}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-orange-600 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Deadline: {job.deadline}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-500">Saved {job.date_saved}</span>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors">
                          View Details <ArrowUpRight className="h-4 w-4 ml-1" />
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Bookmark className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No saved jobs found</h3>
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
      
      {/* Find More Jobs CTA */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-2">Looking for more opportunities?</h2>
        <p className="mb-4">Discover thousands of new job postings tailored to your profile</p>
        <Link href="/student/jobs" className="inline-block px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-colors">
          Browse All Jobs
        </Link>
      </div>
    </div>
  );
} 