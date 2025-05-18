'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Trophy, UserCircle, ClipboardList, Briefcase, BookOpen, Award, CheckCircle, X, AlertCircle, Sparkles } from 'lucide-react';

export default function StudentPage() {
  const [achievementProgress, setAchievementProgress] = useState(35);
  const [profileSections, setProfileSections] = useState({
    personalInfo: true,
    education: true,
    skills: false,
    experience: false,
    projects: false,
    resume: false,
    references: false,
    certifications: false
  });

  useEffect(() => {
    // Calculate profile completion based on sections
    const calculateProgress = () => {
      const totalSections = Object.keys(profileSections).length;
      const completedSections = Object.values(profileSections).filter(Boolean).length;
      return Math.floor((completedSections / totalSections) * 100);
    };

    setAchievementProgress(calculateProgress());
  }, [profileSections]);

  const profileRequirements = [
    { id: 1, name: "Personal Information", completed: profileSections.personalInfo, icon: <UserCircle className="w-5 h-5" /> },
    { id: 2, name: "Education History", completed: profileSections.education, icon: <BookOpen className="w-5 h-5" /> },
    { id: 3, name: "Skills & Expertise", completed: profileSections.skills, icon: <Award className="w-5 h-5" /> },
    { id: 4, name: "Work Experience", completed: profileSections.experience, icon: <Briefcase className="w-5 h-5" /> },
    { id: 5, name: "Projects", completed: profileSections.projects, icon: <ClipboardList className="w-5 h-5" /> },
    { id: 6, name: "Resume Upload", completed: profileSections.resume, icon: <ClipboardList className="w-5 h-5" /> },
    { id: 7, name: "References", completed: profileSections.references, icon: <UserCircle className="w-5 h-5" /> },
    { id: 8, name: "Certifications", completed: profileSections.certifications, icon: <Award className="w-5 h-5" /> }
  ];

  const upcomingEvents = [
    { id: 1, title: "Resume Workshop", time: "Tomorrow, 3:00 PM", participants: 85 },
    { id: 2, title: "Interview Skills Webinar", time: "Friday, 5:00 PM", participants: 112 },
    { id: 3, title: "Tech Career Fair", time: "Next Tuesday", participants: 230 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-800">Student Profile Completion</h1>
            <div className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
              {achievementProgress < 100 ? 'Incomplete' : 'Complete'}
            </div>
          </div>

          {/* Profile Completion Progress */}
          <div className="mb-6 bg-slate-100 p-5 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-amber-500 mr-2" />
                <span className="font-medium">Profile Strength</span>
              </div>
              <span className="text-sm font-bold">{achievementProgress}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
              <div 
                className={`h-2.5 rounded-full transition-all duration-1000 ${
                  achievementProgress < 50 
                    ? 'bg-red-400' 
                    : achievementProgress < 100 
                      ? 'bg-amber-400' 
                      : 'bg-green-500'
                }`} 
                style={{ width: `${achievementProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500">
              {achievementProgress < 100 
                ? 'Complete your profile to participate in events and connect with HR opportunities!' 
                : 'Your profile is complete! You can now register for all events.'}
            </div>
          </div>

          {/* Profile Requirements Checklist */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-slate-700">Profile Checklist</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {profileRequirements.map(item => (
                <div key={item.id} className="flex items-center p-3 rounded-lg border border-slate-200">
                  <div className={`mr-3 p-2 rounded-full ${item.completed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-slate-700">{item.name}</p>
                  </div>
                  <div>
                    {item.completed 
                      ? <CheckCircle className="w-5 h-5 text-green-500" /> 
                      : <X className="w-5 h-5 text-red-500" />}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/student/profile" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Complete Your Profile
              </Link>
            </div>
          </div>

          {/* HR Section Connection */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-5 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-amber-800 px-3 py-1 rounded-bl-lg text-xs font-medium">
              Coming Soon
            </div>
            <div className="flex items-center mb-3">
              <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-slate-700">HR Connection Portal</h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Soon you'll be able to connect directly with HR representatives from top companies.
              A complete profile is required to access this feature.
            </p>
            <div className={`flex items-center ${achievementProgress < 100 ? 'text-amber-600' : 'text-green-600'}`}>
              <AlertCircle className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">
                {achievementProgress < 100 
                  ? 'Complete your profile to unlock this feature' 
                  : 'Your profile is ready for HR connections when launched'}
              </span>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Upcoming Events</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="border-b border-slate-100 last:border-0 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-800">{event.title}</h3>
                  <p className="text-sm text-slate-500">{event.time} • {event.participants} participants</p>
                </div>
                <div>
                  {achievementProgress < 100 ? (
                    <div className="bg-slate-100 text-slate-500 px-3 py-1 text-xs font-medium rounded">
                      Complete Profile to Register
                    </div>
                  ) : (
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 text-sm font-medium rounded transition-colors">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="text-sm text-center text-red-600 font-medium">
              Profile completion is required to register for events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 