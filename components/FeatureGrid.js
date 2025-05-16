'use client';

import Link from 'next/link';
import { Briefcase, GraduationCap, Building, Calendar, BookOpen, Award, Layers, MoreHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';

const FeatureGrid = () => {
  const [colorOrder, setColorOrder] = useState([0, 1, 2, 3, 4, 5]);

  // Color palette
  const colorPalettes = [
    'bg-emerald-100',   // Internships
    'bg-orange-100',    // Mentorships
    'bg-blue-100',      // Jobs
    'bg-purple-100',    // Practice
    'bg-yellow-100',    // Competitions
    'bg-pink-100'       // More
  ];

  // Initialize with shuffled colors on component mount
  useEffect(() => {
    const shuffleColors = () => {
      const newOrder = [...colorOrder];
      for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
      }
      setColorOrder(newOrder);
    };
    
    shuffleColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featureItems = [
    {
      id: 'internships',
      title: 'Internships',
      description: 'Gain Practical Experience',
      icon: <Briefcase size={24} />,
      href: '/internships'
    },
    {
      id: 'mentorships',
      title: 'Mentorships',
      description: 'Guidance From Top Mentors',
      icon: <GraduationCap size={24} />,
      href: '/mentorships'
    },
    {
      id: 'jobs',
      title: 'Jobs',
      description: 'Explore Diverse Careers',
      icon: <Building size={24} />,
      href: '/jobs'
    },
    {
      id: 'practice',
      title: 'Practice',
      description: 'Refine Skills Daily',
      icon: <BookOpen size={24} />,
      href: '/practice'
    },
    {
      id: 'competitions',
      title: 'Competitions',
      description: 'Battle For Excellence',
      icon: <Award size={24} />,
      href: '/competitions'
    },
    {
      id: 'more',
      title: 'More',
      description: '',
      icon: <MoreHorizontal size={24} />,
      href: '/more'
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 mt-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Unlock Your Career</h1>
      <p className="text-gray-600 mb-10">
        Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureItems.map((item, index) => (
          <Link 
            key={item.id}
            href={item.href}
            className="group relative"
          >
            <div className={`p-5 rounded-xl ${colorPalettes[colorOrder[index]]} flex flex-col h-[160px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
              <h3 className="font-semibold text-gray-800 text-xl mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
              <div className="mt-auto flex justify-end">
                {item.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid; 