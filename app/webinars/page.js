'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Video, Clock, Users, Filter, Search, ChevronRight } from 'lucide-react';

export default function Webinars() {
  // Demo webinar data
  const webinars = [
    {
      id: 1,
      title: "Mastering Modern Web Development",
      description: "Learn the latest trends and techniques in web development with industry experts.",
      speaker: "Alex Johnson",
      speakerRole: "Senior Developer at TechCorp",
      date: "June 15, 2024",
      time: "3:00 PM - 4:30 PM EST",
      attendees: 234,
      image: "/OIP.jpeg",
      tags: ["Web Development", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Data Science Career Paths",
      description: "Explore various career opportunities in the field of data science and machine learning.",
      speaker: "Sophia Chen",
      speakerRole: "Data Scientist at DataTech",
      date: "June 17, 2024",
      time: "1:00 PM - 2:00 PM EST",
      attendees: 187,
      image: "/download (1).jpeg",
      tags: ["Data Science", "Career", "Machine Learning"]
    },
    {
      id: 3,
      title: "Resume Building Workshop",
      description: "Craft a standout resume that will catch recruiters' attention and land you interviews.",
      speaker: "Marcus Lee",
      speakerRole: "Hiring Manager at RecruitPro",
      date: "June 20, 2024",
      time: "5:00 PM - 6:30 PM EST",
      attendees: 312,
      image: "/download (2).jpeg",
      tags: ["Resume", "Career", "Job Search"]
    },
    {
      id: 4,
      title: "Intro to Artificial Intelligence",
      description: "Get started with AI concepts and applications in today's tech landscape.",
      speaker: "Priya Patel",
      speakerRole: "AI Research Lead at InnovateTech",
      date: "June 22, 2024",
      time: "11:00 AM - 12:30 PM EST",
      attendees: 276,
      image: "/yogi-bear3.png",
      tags: ["AI", "Machine Learning", "Technology"]
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white to-indigo-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-indigo-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Webinars</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Join live sessions with industry experts and boost your skills and knowledge.
          </p>
        </div>
      </header>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-grow max-w-md w-full">
            <input 
              type="text" 
              placeholder="Search webinars..."
              className="w-full rounded-full py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Featured webinar */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow">
          <div className="md:flex">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image 
                src="/download (1).jpeg"
                alt="Featured Webinar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
                <div className="text-white md:hidden">
                  <h3 className="text-xl font-bold">Technical Interview Preparation</h3>
                  <p className="text-sm opacity-90">June 25, 2024 • 2:00 PM EST</p>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-3/5 md:flex md:flex-col">
              <div className="hidden md:block">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">Technical Interview Preparation</h2>
                <p className="text-gray-600 mb-4">Master coding interviews with practical examples and expert tips. Covers algorithms, problem-solving approaches, and common interview questions.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Interview Prep</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Algorithms</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Coding</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm space-x-4 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>June 25, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2:00 PM - 3:30 PM EST</span>
                </div>
              </div>
              <div className="flex items-center text-sm mb-6">
                <div className="w-8 h-8 rounded-full overflow-hidden relative mr-3 ring-2 ring-indigo-500">
                  <Image 
                    src="/yogi-bear3.png" 
                    alt="Speaker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Emily Zhang</p>
                  <p className="text-gray-500">Senior Engineer at TechGiant</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">456 people registered</span>
                </div>
                <Link href="/webinars/featured" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming webinars grid */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Webinars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((webinar) => (
            <div key={webinar.id} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image 
                  src={webinar.image}
                  alt={webinar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Live
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{webinar.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{webinar.description}</p>
                <div className="flex items-center text-gray-600 text-xs space-x-3 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                <div className="flex items-center text-xs mb-4">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative mr-2">
                    <Image 
                      src={webinar.image}
                      alt={webinar.speaker}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{webinar.speaker}</p>
                    <p className="text-gray-500">{webinar.speakerRole}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {webinar.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{webinar.attendees} registered</span>
                  </div>
                  <Link href={`/webinars/${webinar.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center">
                    Register <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-10 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
            Load More Webinars
          </button>
        </div>
      </section>
    </main>
  );
} 