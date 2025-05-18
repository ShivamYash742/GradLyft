'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Award, GraduationCap, Briefcase, ChevronRight, ExternalLink, Check, Star, Smile } from 'lucide-react';

export default function More() {
  // Demo resources data
  const resources = [
    {
      id: 1,
      title: "Study Materials Library",
      description: "Access thousands of books, articles, and academic resources across various fields.",
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      color: "blue",
      url: "/resources/library"
    },
    {
      id: 2,
      title: "Scholarship Opportunities",
      description: "Find and apply for scholarships suited to your academic background and interests.",
      icon: <Award className="h-10 w-10 text-purple-500" />,
      color: "purple",
      url: "/resources/scholarships"
    },
    {
      id: 3,
      title: "Course Recommendations",
      description: "Get personalized course recommendations based on your career goals.",
      icon: <GraduationCap className="h-10 w-10 text-green-500" />,
      color: "green",
      url: "/resources/courses"
    },
    {
      id: 4,
      title: "Internship Marketplace",
      description: "Browse and apply for internships at top companies and organizations.",
      icon: <Briefcase className="h-10 w-10 text-orange-500" />,
      color: "orange",
      url: "/resources/internships"
    }
  ];

  // Demo programs data
  const programs = [
    {
      id: 1,
      title: "Mentorship Program",
      description: "Get matched with industry professionals who can guide your career journey.",
      image: "/download (1).jpeg",
      stats: "1,200+ mentors"
    },
    {
      id: 2,
      title: "Study Abroad",
      description: "Explore international education opportunities and exchange programs.",
      image: "/yogi-bear3.png",
      stats: "50+ countries"
    },
    {
      id: 3,
      title: "Skill Certification",
      description: "Earn industry-recognized certificates to enhance your resume.",
      image: "/download (2).jpeg",
      stats: "300+ courses"
    }
  ];

  // Demo testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "The resources I found through GradLyft helped me secure my dream job right after graduation!",
      author: "Jamie Smith",
      role: "Computer Science Graduate",
      school: "Stanford University",
      image: "/download (2).jpeg"
    },
    {
      id: 2,
      quote: "The mentorship program was a game changer for my career planning. I highly recommend it!",
      author: "Alex Johnson",
      role: "Business Major",
      school: "Harvard University",
      image: "/download (1).jpeg"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-indigo-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold mb-4">More Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover additional tools and opportunities to accelerate your academic and career growth.
          </p>
        </div>
      </header>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Resource Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 pb-2 border-b border-gray-200">
            Explore Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link href={resource.url} key={resource.id} className="group">
                <div className={`bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-${resource.color}-500 h-full flex flex-col`}>
                  <div className="mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{resource.description}</p>
                  <span className={`text-${resource.color}-600 text-sm font-medium flex items-center group-hover:underline`}>
                    Explore <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Premium Membership */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl mb-16 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="inline-flex items-center bg-indigo-800/40 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-1 fill-yellow-300 text-yellow-300" />
                <span>Premium Membership</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Take Your Career to the Next Level</h2>
              <p className="text-indigo-100 mb-6 text-lg">
                Unlock exclusive benefits with our premium membership, designed to give you the competitive edge in today's job market.
              </p>
              <ul className="mb-8 space-y-3">
                {['Unlimited access to all courses', 'One-on-one career coaching', 'Direct hiring opportunities', 'Advanced resume builder'].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-indigo-200 mr-2 mt-0.5" />
                    <span className="text-indigo-100">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors shadow-md hover:shadow-lg">
                Learn More About Premium
              </button>
            </div>
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-transparent md:from-transparent md:via-transparent md:to-indigo-600 z-10"></div>
              <div className="relative h-64 md:h-full">
                <Image 
                  src="/3d-cartoon-boy-studying-wearing-glasses_988987-175.avif" 
                  alt="Premium membership" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 pb-2 border-b border-gray-200">
            Special Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                        {program.stats}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm">{program.description}</p>
                  <Link href={`/programs/${program.id}`} className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Learn more <ExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/programs" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
              View All Programs <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Success Stories</h2>
            <div className="ml-4 flex items-center">
              <Smile className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="text-gray-500 text-sm">From our community</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.author}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.school}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-100 to-indigo-100 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to explore more?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who are discovering new opportunities every day.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Sign Up Now
            </Link>
            <Link href="/contact" className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 