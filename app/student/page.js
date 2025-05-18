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
    <div className="min-h-screen bg-[#1F0F2C] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#2A1745] rounded-xl shadow-lg shadow-purple-900/30 border border-[#6B42D9]/30 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Student Profile Completion</h1>
            <div className="text-sm bg-[#6B42D9] text-white py-1 px-3 rounded-full">
              {achievementProgress < 100 ? 'Incomplete' : 'Complete'}
            </div>
          </div>

          {/* Profile Completion Progress */}
          <div className="mb-6 bg-[#251333] p-5 rounded-lg border border-[#6B42D9]/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-[#E5B8FF] mr-2" />
                <span className="font-medium text-[#FFFFFF]">Profile Strength</span>
              </div>
              <span className="text-sm font-bold text-[#E5B8FF]">{achievementProgress}%</span>
            </div>
            <div className="w-full bg-[#3A2253] rounded-full h-2.5 mb-2">
              <div 
                className={`h-2.5 rounded-full transition-all duration-1000 ${
                  achievementProgress < 50 
                    ? 'bg-red-400' 
                    : achievementProgress < 100 
                      ? 'bg-[#9BD8FF]' 
                      : 'bg-gradient-to-r from-[#E5B8FF] to-[#A384FF]'
                }`} 
                style={{ width: `${achievementProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-[#CFCFCF]">
              {achievementProgress < 100 
                ? 'Complete your profile to participate in events and connect with HR opportunities!' 
                : 'Your profile is complete! You can now register for all events.'}
            </div>
          </div>

          {/* Profile Requirements Checklist */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-[#E5B8FF]">Profile Checklist</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {profileRequirements.map(item => (
                <div key={item.id} className="flex items-center p-3 rounded-lg border border-[#6B42D9]/30 bg-[#251333]">
                  <div className={`mr-3 p-2 rounded-full ${item.completed ? 'bg-[#6B42D9]/30 text-[#E5B8FF]' : 'bg-red-900/30 text-red-300'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium text-[#FFFFFF]">{item.name}</p>
                  </div>
                  <div>
                    {item.completed 
                      ? <CheckCircle className="w-5 h-5 text-[#9BD8FF]" /> 
                      : <X className="w-5 h-5 text-red-300" />}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/student/profile" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#A384FF] to-[#6B42D9] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Complete Your Profile
              </Link>
            </div>
          </div>

          {/* HR Section Connection */}
          <div className="bg-gradient-to-r from-[#251333] to-[#2A1745] rounded-xl p-5 border border-[#6B42D9]/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#E5B8FF] text-[#1F0F2C] px-3 py-1 rounded-bl-lg text-xs font-medium">
              Coming Soon
            </div>
            <div className="flex items-center mb-3">
              <Sparkles className="w-5 h-5 text-[#E5B8FF] mr-2" />
              <h2 className="text-lg font-semibold text-white">HR Connection Portal</h2>
            </div>
            <p className="text-[#CFCFCF] text-sm mb-4">
              Soon you'll be able to connect directly with HR representatives from top companies.
              A complete profile is required to access this feature.
            </p>
            <div className={`flex items-center ${achievementProgress < 100 ? 'text-[#9BD8FF]' : 'text-[#E5B8FF]'}`}>
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
        <div className="bg-[#2A1745] rounded-xl shadow-lg shadow-purple-900/30 border border-[#6B42D9]/30 p-6">
          <h2 className="text-xl font-bold text-white mb-5">Upcoming Events</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="border-b border-[#6B42D9]/20 last:border-0 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">{event.title}</h3>
                  <p className="text-sm text-[#CFCFCF]">{event.time} • {event.participants} participants</p>
                </div>
                <div>
                  {achievementProgress < 100 ? (
                    <div className="bg-[#251333] text-[#CFCFCF] px-3 py-1 text-xs font-medium rounded border border-[#6B42D9]/20">
                      Complete Profile to Register
                    </div>
                  ) : (
                    <button className="bg-gradient-to-r from-[#A384FF] to-[#6B42D9] hover:shadow-purple-500/30 hover:shadow-md text-white px-3 py-1 text-sm font-medium rounded transition-all">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5 pt-4 border-t border-[#6B42D9]/20">
            <div className="text-sm text-center text-[#E5B8FF] font-medium">
              Profile completion is required to register for events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 