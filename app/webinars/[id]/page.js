'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Bell, Users, Share2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function WebinarComingSoon() {
  const params = useParams();
  const webinarId = params.id;
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Handle countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would normally send the email to your backend
      console.log(`Subscribing ${email} to webinar ${webinarId} notifications`);
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/webinars" className="inline-flex items-center text-indigo-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Webinars</span>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Webinar Registration</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Coming Soon Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Purple banner with icon */}
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 py-6 px-8 flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Bell className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Webinar Registration Coming Soon</h2>
              <p className="text-indigo-100">Be the first to know when registration opens</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left content */}
              <div className="md:w-3/5">
                <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-indigo-900 mb-3">We're preparing something amazing!</h3>
                  <p className="text-indigo-700">
                    Our team is working hard to bring you a high-quality webinar experience. 
                    Registration will open soon, but you can join our waitlist to get notified immediately.
                  </p>
                </div>
                
                {/* Countdown */}
                <div className="mb-8">
                  <h3 className="text-gray-700 font-medium mb-4">Registration opens in:</h3>
                  <div className="flex justify-between max-w-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                        {countdown.days}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">DAYS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                        {countdown.hours}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">HOURS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                        {String(countdown.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">MINUTES</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                        {String(countdown.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">SECONDS</div>
                    </div>
                  </div>
                </div>
                
                {/* Waitlist form */}
                <div>
                  <h3 className="text-gray-800 font-medium mb-3">Join the waitlist</h3>
                  {isSubscribed ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                      Thank you! We'll notify you when registration opens.
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button 
                        type="submit"
                        className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-violet-700 transition-colors"
                      >
                        Notify Me
                      </button>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Right content */}
              <div className="md:w-2/5">
                <div className="rounded-xl overflow-hidden shadow-md relative h-64">
                  <Image 
                    src={webinarId === 'featured' ? "/download (1).jpeg" : "/OIP.jpeg"} 
                    alt="Webinar preview" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center text-white mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Coming Soon</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Duration: 90 minutes</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-xl p-5">
                  <h3 className="font-medium text-gray-800 mb-3">Webinar highlights:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-600">Expert speakers from top companies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-600">Interactive Q&A sessions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-600">Downloadable resources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                      <span className="ml-2 text-gray-600">Networking opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm">312 people interested</span>
                  </div>
                  <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                    <Share2 className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related webinars section - could be added here */}
      </div>
    </main>
  );
} 