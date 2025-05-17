'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, ChevronLeft, Clock, Share2, Heart, Download, Bell, CheckCircle, Mail, Phone, UserCheck } from 'lucide-react';

export default function EventDetails({ params }) {
  const { id } = params;
  const router = useRouter();
  
  // Mock auth context
  const user = null;  // Simulate not logged in
  const loading = false;
  
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    interests: '',
    requirements: '',
    agreeToTerms: false
  });

  // Load event data
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, we'll use mock data
    const mockEvents = [
      {
        id: "1",
        title: 'Global Tech Career Fair 2024',
        description: 'Connect with leading technology companies looking to hire talented graduates and students for various roles. This is your opportunity to meet recruiters face-to-face, learn about company cultures, and discover exciting career paths in tech. Come prepared with your resume and questions for employers!',
        longDescription: `<p>Join us for the biggest technology career fair of the year! This two-day event brings together over 100 leading technology companies from around the world, all actively looking to recruit talented graduates and students.</p>
        <p>The event will feature:</p>
        <ul>
          <li>One-on-one meetings with recruiters</li>
          <li>On-the-spot interviews for qualified candidates</li>
          <li>Resume review sessions by HR professionals</li>
          <li>Panel discussions on careers in technology</li>
          <li>Networking opportunities with industry professionals</li>
          <li>Virtual participation options for those who cannot attend in person</li>
        </ul>
        <p>Companies attending include major tech giants, innovative startups, and everything in between. Roles available span software engineering, data science, product management, UX/UI design, and more.</p>
        <p>Don't miss this chance to jumpstart your tech career!</p>`,
        category: 'career fair',
        format: 'hybrid',
        date: 'June 15-16, 2024',
        time: '10:00 AM - 6:00 PM (both days)',
        location: 'San Francisco Convention Center & Virtual',
        address: '747 Howard St, San Francisco, CA 94103',
        organizer: 'GradLyft & Tech Industry Association',
        attendees: 5000,
        image: '/R.png',
        rsvp: 287,
        goingList: [
          { name: "Alex Johnson", university: "Stanford University" },
          { name: "Priya Patel", university: "UC Berkeley" },
          { name: "Wei Zhang", university: "MIT" }
        ],
        sponsors: [
          { name: "TechCorp", logo: "/sponsor1.png" },
          { name: "InnovateSoft", logo: "/sponsor2.png" },
          { name: "NextGen Labs", logo: "/sponsor3.png" }
        ],
        agenda: [
          { time: "10:00 AM", activity: "Opening Ceremony" },
          { time: "10:30 AM", activity: "Company Booths Open" },
          { time: "12:00 PM", activity: "Lunch & Networking" },
          { time: "1:30 PM", activity: "Panel Discussion: 'Careers in AI'" },
          { time: "3:00 PM", activity: "Resume Workshop" },
          { time: "5:00 PM", activity: "Closing Remarks" }
        ]
      },
      {
        id: "2",
        title: 'Resume Building Workshop',
        description: 'Learn how to craft a standout resume that highlights your skills and experiences effectively.',
        longDescription: `<p>Is your resume getting noticed? In this interactive workshop, HR professionals from top companies will share insider tips on creating resumes that stand out in today's competitive job market.</p>
        <p>You'll learn how to:</p>
        <ul>
          <li>Structure your resume effectively for different industries</li>
          <li>Highlight transferable skills and achievements</li>
          <li>Optimize your resume for ATS (Applicant Tracking Systems)</li>
          <li>Tailor your resume for specific job applications</li>
          <li>Showcase projects and experiences professionally</li>
        </ul>
        <p>The workshop includes a live resume review session where selected participants will receive personalized feedback.</p>
        <p>This is a virtual event - join from anywhere with a stable internet connection!</p>`,
        category: 'workshop',
        format: 'virtual',
        date: 'May 28, 2024',
        time: '1:00 PM - 3:00 PM (EST)',
        location: 'Online (Zoom)',
        address: 'Virtual Event',
        organizer: 'GradLyft Career Center',
        attendees: 500,
        image: '/download (1).jpeg',
        rsvp: 124,
        goingList: [
          { name: "Jordan Lee", university: "NYU" },
          { name: "Maria Garcia", university: "UCLA" },
          { name: "Jamal Washington", university: "Howard University" }
        ],
        agenda: [
          { time: "1:00 PM", activity: "Introduction & Resume Basics" },
          { time: "1:30 PM", activity: "Industry-Specific Resume Tips" },
          { time: "2:15 PM", activity: "Live Resume Reviews" },
          { time: "2:45 PM", activity: "Q&A and Closing" }
        ]
      },
      // Add more events as needed
    ];

    const foundEvent = mockEvents.find(e => e.id === id);
    
    setTimeout(() => {
      if (foundEvent) {
        setEvent(foundEvent);
      }
      setIsLoading(false);
    }, 500); // Simulate loading time
    
  }, [id]);

  // Populate form with user data if available
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.displayName || '',
        email: user.email || '',
        phone: user.phone || ''
      }));
    }
  }, [user]);

  // Check registration status
  useEffect(() => {
    if (!loading && user && event) {
      // Check if user is already registered
      fetch(`/api/events/status?eventId=${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.registered) {
            setRegistrationSuccess(true);
          }
        })
        .catch(error => {
          console.error('Error checking registration status:', error);
        });
    }
  }, [id, user, loading, event]);

  const toggleSaved = () => {
    setIsSaved(!isSaved);
    // In a real app, you would call an API to save/unsave the event
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit registration to the API
      const response = await fetch('/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interests: formData.interests,
          requirements: formData.requirements,
          // Handle resume file separately if needed
        }),
      });

      const data = await response.json();

      if (data.success) {
        setRegistrationSuccess(true);
        // Close modal after showing success message
        setTimeout(() => {
          setShowRegistrationForm(false);
          setSelectedEvent(null);
        }, 2000);
      } else {
        // Handle error
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration submission error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelRegistration = async () => {
    if (!confirm('Are you sure you want to cancel your registration?')) {
      return;
    }

    try {
      const response = await fetch('/api/events/cancel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setRegistrationSuccess(false);
        alert('Your registration has been cancelled.');
      } else {
        alert(data.message || 'Cancellation failed. Please try again.');
      }
    } catch (error) {
      console.error('Cancellation error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="h-12 w-12 rounded-full border-4 border-[var(--primary-start)] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Event not found</h1>
        <p className="mt-4 text-[var(--text-secondary)]">The event you are looking for does not exist or has been removed.</p>
        <Link href="/events" className="mt-6 inline-flex items-center text-[var(--primary-start)] hover:text-[var(--primary-end)]">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[var(--section-light)] relative pb-16">
      {/* Background header */}
      <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden">
          <div className="relative aspect-video md:h-96">
            <Image 
              src={event.image} 
              alt={event.title}
              fill
              style={{objectFit: 'cover'}}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
              <div className="bg-[var(--card-bg)] p-6 rounded-xl max-w-3xl shadow-lg">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {event.category}
                  </span>
                  <span className="bg-[var(--section-dark)] text-[var(--text-secondary)] px-3 py-1 rounded-full text-sm">
                    {event.format}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{event.title}</h1>
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-10">
            {/* Action bar */}
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <div>
                <Link href="/events" className="text-[var(--primary-start)] hover:text-[var(--primary-end)] flex items-center text-sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Events
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggleSaved}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isSaved 
                      ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                      : 'bg-[var(--section-dark)] text-[var(--text-secondary)]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save'}</span>
                </button>
                
                <button 
                  className="bg-[var(--section-dark)] text-[var(--text-secondary)] hover:bg-[var(--card-border)] px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>
            
            {/* Registration success message */}
            {registrationSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-5 rounded-xl mb-8 animate-fade-in dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Registration successful!</h3>
                    <p className="mt-1">You have successfully registered for {event.title}. Check your email for confirmation details.</p>
                    <button
                      onClick={handleCancelRegistration}
                      className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                      Cancel my registration
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Event details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">About This Event</h2>
                  <div className="prose text-[var(--text-secondary)] max-w-none" 
                    dangerouslySetInnerHTML={{ __html: event.longDescription || event.description }}>
                  </div>
                </div>
                
                {event.agenda && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Event Schedule</h2>
                    <div className="space-y-3">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="min-w-[100px] bg-[var(--primary-light)] text-[var(--primary-start)] px-3 py-1 rounded-md text-sm font-semibold">
                            {item.time}
                          </div>
                          <div className="ml-4 bg-[var(--section-light)] px-4 py-2 rounded-md border border-[var(--card-border)] flex-grow">
                            <p className="text-[var(--text-primary)]">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.goingList && (
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">People Attending</h2>
                    <div className="flex flex-wrap items-center gap-4">
                      {event.goingList.map((person, index) => (
                        <div key={index} className="bg-[var(--section-light)] px-4 py-2 rounded-xl border border-[var(--card-border)]">
                          <p className="font-medium text-[var(--text-primary)]">{person.name}</p>
                          <p className="text-sm text-[var(--text-muted)]">{person.university}</p>
                        </div>
                      ))}
                      <div className="bg-[var(--section-dark)] px-4 py-2 rounded-xl border border-[var(--card-border)] text-[var(--text-secondary)]">
                        +{event.rsvp - event.goingList.length} others
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-[var(--section-light)] p-6 rounded-xl border border-[var(--card-border)] space-y-4">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Event Details</h3>
                  
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-[var(--primary-start)] mt-0.5" />
                    <div className="ml-4">
                      <p className="text-[var(--text-primary)] font-medium">Date & Time</p>
                      <p className="text-[var(--text-secondary)]">{event.date}</p>
                      <p className="text-[var(--text-secondary)]">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[var(--primary-start)] mt-0.5" />
                    <div className="ml-4">
                      <p className="text-[var(--text-primary)] font-medium">Location</p>
                      <p className="text-[var(--text-secondary)]">{event.location}</p>
                      {event.address && event.address !== 'Virtual Event' && (
                        <p className="text-[var(--text-secondary)]">{event.address}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-[var(--primary-start)] mt-0.5" />
                    <div className="ml-4">
                      <p className="text-[var(--text-primary)] font-medium">Attendees</p>
                      <p className="text-[var(--text-secondary)]">{event.attendees.toLocaleString()} Expected</p>
                      <p className="text-[var(--text-secondary)]">{event.rsvp} RSVPs</p>
                    </div>
                  </div>
                  
                  {!registrationSuccess ? (
                    <button 
                      onClick={() => setShowRegistrationForm(true)}
                      className="w-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] hover:brightness-110 text-white py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center mt-6"
                    >
                      Register for Event
                    </button>
                  ) : (
                    <button 
                      onClick={handleCancelRegistration}
                      className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center mt-6"
                    >
                      Cancel Registration
                    </button>
                  )}

                  <div className="flex items-center justify-center mt-2">
                    <Bell className="w-4 h-4 text-[var(--text-muted)] mr-2" />
                    <span className="text-sm text-[var(--text-muted)]">
                      {registrationSuccess 
                        ? 'You will receive updates via email'
                        : 'Registration closing soon'}
                    </span>
                  </div>
                </div>
                
                {event.organizer && (
                  <div className="bg-[var(--section-light)] p-6 rounded-xl border border-[var(--card-border)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Organized by</h3>
                    <p className="text-[var(--text-secondary)]">{event.organizer}</p>
                  </div>
                )}
                
                {event.sponsors && event.sponsors.length > 0 && (
                  <div className="bg-[var(--section-light)] p-6 rounded-xl border border-[var(--card-border)]">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Sponsors</h3>
                    <div className="flex flex-wrap gap-4">
                      {event.sponsors.map((sponsor, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-[var(--card-bg)] rounded-md flex items-center justify-center shadow-sm">
                            {sponsor.logo ? (
                              <Image src={sponsor.logo} alt={sponsor.name} width={48} height={48} />
                            ) : (
                              <span className="text-xs text-[var(--text-primary)] font-medium">{sponsor.name}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--card-bg)] rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-[var(--card-border)]">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Register for Event</h2>
              <button 
                onClick={() => setShowRegistrationForm(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 border-b border-[var(--card-border)]">
              <h3 className="font-bold text-[var(--text-primary)]">{event.title}</h3>
              <div className="mt-2 flex items-center text-sm text-[var(--text-secondary)]">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date} • {event.time}
              </div>
              <div className="mt-1 flex items-center text-sm text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-5 w-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-5 w-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              {event.category === 'career fair' && (
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                    Upload Resume (PDF)
                  </label>
                  <div className="relative">
                    <Download className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-5 w-5" />
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Max size: 5MB</p>
                </div>
              )}
              
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  What are you hoping to gain from this event?
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                  placeholder="Share your goals and what you hope to learn..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                  Special Requirements or Accommodations
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-start)] bg-[var(--input-bg)]"
                  placeholder="Any special requirements or accommodations you need..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-[var(--card-border)] text-[var(--primary-start)] focus:ring-[var(--primary-start)]"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="text-[var(--text-secondary)]">
                    I agree to receive communications about this and other events <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] text-white py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </span>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
} 