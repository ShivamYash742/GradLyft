'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Trophy, UserCircle, ClipboardList, Briefcase, BookOpen, Award, 
  CheckCircle, X, AlertCircle, Sparkles, Calendar, Users, Clock,
  Bell, ArrowRight, BarChart3, Zap, Layers, Moon, Sun, Loader2
} from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../../components/ThemeProvider';
import { useAuth } from '../context/AuthContext';

export default function StudentPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { user, loading } = useAuth();
  const [achievementProgress, setAchievementProgress] = useState(0);
  const [profileSections, setProfileSections] = useState({
    personalInfo: false,
    education: false,
    skills: false,
    experience: false,
    projects: false,
    resume: false,
    references: false,
    certifications: false
  });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [error, setError] = useState(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?message=Please log in to access the student dashboard&redirect=/student');
    }
  }, [user, loading, router]);

  // If still loading or not authenticated, show loading state
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-start" />
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchProfileStatus = async () => {
      if (!user) return; // Wait until user is loaded
      
      try {
        setLoadingProfile(true);
        const response = await fetch('/api/profile/completion-status');
        
        if (!response.ok) {
          throw new Error('Failed to fetch profile status');
        }
        
        const data = await response.json();
        console.log("Profile API response:", data);
        
        if (data.success) {
          setProfileSections(data.profileSections);
          setAchievementProgress(data.completionPercentage);
        } else {
          throw new Error(data.message || 'Failed to fetch profile data');
        }
      } catch (err) {
        console.error('Error fetching profile status:', err);
        setError(err.message);
        // Keep previously loaded data if any, otherwise use defaults
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfileStatus();
  }, [user]);

  // Log the current theme
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

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
    { 
      id: 1, 
      title: "Resume Workshop", 
      time: "Tomorrow, 3:00 PM", 
      participants: 85, 
      image: "/OIP.jpeg",
      type: "Workshop"
    },
    { 
      id: 2, 
      title: "Interview Skills Webinar", 
      time: "Friday, 5:00 PM", 
      participants: 112,
      image: "/OIP (1).jpeg",
      type: "Webinar" 
    },
    { 
      id: 3, 
      title: "Tech Career Fair", 
      time: "Next Tuesday", 
      participants: 230,
      image: "/OIP (2).jpeg",
      type: "Career Fair" 
    }
  ];
  
  const recommendedSkills = [
    "React.js", "Next.js", "TypeScript", "UI/UX Design", "AWS", "Data Analysis"
  ];
  
  const achievements = [
    { name: "Profile Star", description: "Complete your profile", progress: achievementProgress, icon: <UserCircle /> },
    { name: "Network Builder", description: "Connect with 5 professionals", progress: 20, icon: <Users /> },
    { name: "Event Explorer", description: "Attend 3 events", progress: 33, icon: <Calendar /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section with personalized welcome */}
      <div className="bg-gradient-to-br from-primary-start/30 to-primary-end/5 backdrop-blur-sm border-b border-primary-start/10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient-primary">
                Welcome Back, {user?.student?.name || 'Student'}!
              </h1>
              <p className="text-text-secondary">Continue building your professional journey today</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-card-bg/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-card-border/30 shadow-sm">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-primary-start mr-3" />
                  <div>
                    <p className="text-sm font-medium">2 new notifications</p>
                    <p className="text-xs text-text-muted">Profile views from recruiters</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-card-bg/80 backdrop-blur-sm border border-card-border/30 hover:bg-card-bg transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-text-primary" />
                ) : (
                  <Sun className="w-5 h-5 text-primary-start" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Profile completion and quick actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile completion card */}
            <div className="card rounded-xl overflow-hidden border border-card-border/30 bg-card-bg/80 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-start/10 flex items-center justify-center mr-3">
                      <UserCircle className="w-6 h-6 text-primary-start" />
                    </div>
                    <h2 className="text-lg font-bold">Profile Completion</h2>
                  </div>
                  {loadingProfile ? (
                    <div className="flex items-center">
                      <Loader2 className="w-4 h-4 animate-spin mr-1" />
                      <span className="text-xs">Loading...</span>
                    </div>
                  ) : (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      achievementProgress < 50 ? 'bg-status-error-bg text-status-error-text' :
                      achievementProgress < 100 ? 'bg-status-warning-bg text-status-warning-text' :
                      'bg-status-success-bg text-status-success-text'
                    }`}>
                      {achievementProgress}%
                    </span>
                  )}
                </div>
                
                <div className="w-full bg-section-dark rounded-full h-3 mb-4">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${achievementProgress}%`,
                      background: `${
                        achievementProgress < 50 
                          ? 'var(--status-error-text)' 
                          : achievementProgress < 100 
                            ? 'var(--status-warning-text)' 
                            : 'var(--primary-gradient)'
                      }`
                    }}
                  ></div>
                </div>
                
                {error && (
                  <div className="p-3 mb-4 text-sm rounded-md bg-status-error-bg text-status-error-text">
                    Failed to load profile status. Please refresh the page.
                  </div>
                )}
                
                <div className="space-y-3 mt-5">
                  {loadingProfile ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-6 h-6 animate-spin text-primary-start" />
                    </div>
                  ) : (
                    profileRequirements.map(item => (
                      <div key={item.id} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-primary-start/5 transition-colors">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            item.completed 
                              ? 'bg-status-success-bg text-status-success-text' 
                              : 'bg-status-error-bg text-status-error-text'
                          }`}>
                            {item.icon}
                          </div>
                          <p className="text-sm font-medium">{item.name}</p>
                        </div>
                        {item.completed 
                          ? <CheckCircle className="w-5 h-5 text-status-success-text" /> 
                          : <Link href="/student/profile" className="text-xs px-3 py-1 rounded-full bg-primary-start/10 text-primary-start hover:bg-primary-start/20 transition-colors">
                              Complete
                            </Link>
                        }
                      </div>
                    ))
                  )}
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="/student/profile" 
                    className="w-full flex items-center justify-center px-4 py-2.5 gradient-button text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Complete Your Profile <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="card rounded-xl border border-card-border/30 bg-card-bg/80 backdrop-blur-sm p-6">
              <div className="flex items-center mb-4">
                <Trophy className="w-5 h-5 text-youth-yellow mr-2" />
                <h2 className="text-lg font-bold">Achievements</h2>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-section-dark rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-start/10 flex items-center justify-center mr-2">
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">{achievement.name}</h3>
                          <p className="text-xs text-text-muted">{achievement.description}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold">{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-section-light rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full"
                        style={{ 
                          width: `${achievement.progress}%`, 
                          background: index === 0 ? 'var(--primary-gradient)' : 
                                     index === 1 ? 'var(--youth-purple)' : 'var(--youth-green)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center and right columns - Events, resources, etc. */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Events with cards */}
            <div className="card rounded-xl border border-card-border/30 bg-card-bg/80 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary-start mr-2" />
                    <h2 className="text-lg font-bold">Featured Events</h2>
                  </div>
                  <Link href="/student/events" className="text-sm text-primary-start hover:text-primary-end transition-colors">
                    View All
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="rounded-lg overflow-hidden bg-section-dark border border-card-border/10 hover:border-card-border/30 transition-all hover:shadow-md group">
                      <div className="relative h-32">
                        <Image 
                          src={event.image} 
                          alt={event.title} 
                          fill 
                          className="object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-start/70 to-transparent flex items-end p-3">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-start/20 text-primary-start backdrop-blur-sm">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-bold mb-1 group-hover:text-primary-start transition-colors">{event.title}</h3>
                        <div className="flex items-center text-xs text-text-muted mb-3">
                          <Clock className="w-3 h-3 mr-1" /> {event.time}
                          <span className="mx-2">•</span>
                          <Users className="w-3 h-3 mr-1" /> {event.participants} participants
                        </div>
                        
                        {achievementProgress < 100 ? (
                          <div className="flex items-center text-xs text-text-muted">
                            <AlertCircle className="w-3 h-3 mr-1 text-status-warning-text" />
                            Complete profile to register
                          </div>
                        ) : (
                          <button className="w-full py-1.5 text-sm text-center text-white gradient-button rounded-md transition-all">
                            Register Now
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Career Resources & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card rounded-xl border border-card-border/30 bg-card-bg/80 backdrop-blur-sm p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-5 h-5 text-youth-pink mr-2" />
                  <h2 className="text-lg font-bold">Quick Actions</h2>
                </div>
                
                <div className="space-y-2">
                  <Link href="/student/jobs" className="flex items-center justify-between p-3 rounded-lg bg-section-dark hover:bg-primary-start/10 transition-colors">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-3 text-text-muted" />
                      <span>Browse Jobs</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link href="/student/mentorship" className="flex items-center justify-between p-3 rounded-lg bg-section-dark hover:bg-primary-start/10 transition-colors">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-text-muted" />
                      <span>Find a Mentor</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link href="/student/resources" className="flex items-center justify-between p-3 rounded-lg bg-section-dark hover:bg-primary-start/10 transition-colors">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-text-muted" />
                      <span>Learning Resources</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <Link href="/student/bookmarks" className="flex items-center justify-between p-3 rounded-lg bg-section-dark hover:bg-primary-start/10 transition-colors">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-text-muted" />
                      <span>Saved Items</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="card rounded-xl border border-card-border/30 bg-card-bg/80 backdrop-blur-sm p-6">
                <div className="flex items-center mb-4">
                  <Layers className="w-5 h-5 text-youth-yellow mr-2" />
                  <h2 className="text-lg font-bold">Recommended Skills</h2>
                </div>
                
                <p className="text-sm text-text-muted mb-4">
                  Based on your profile and trending job requirements
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {recommendedSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary-start/10 text-primary-start hover:bg-primary-start/20 transition-colors cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-card-border/10">
                  <Link href="/student/profile#skills" className="text-sm text-primary-start hover:text-primary-end transition-colors flex items-center">
                    Update your skills <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* HR Connection Section */}
            <div className="card rounded-xl overflow-hidden border border-youth-purple/30 bg-gradient-to-r from-youth-purple/20 to-primary-start/10 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-youth-purple/20 flex items-center justify-center mr-3">
                    <Sparkles className="w-6 h-6 text-youth-purple" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-lg font-bold mr-2">HR Connection Portal</h2>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-youth-purple/20 text-youth-purple">Coming Soon</span>
                    </div>
                    <p className="text-sm text-text-muted">Direct connections with top companies</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-section-dark/50 backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-youth-purple mt-0.5" />
                    <div>
                      <p className="text-sm">
                        Connect with HR representatives from leading companies in your field.
                        Get early access to job openings and receive personalized career guidance.
                      </p>
                      <div className="mt-3 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1 text-primary-start" />
                        <span className="text-xs">
                          {achievementProgress < 100 
                            ? 'Complete your profile to unlock this feature' 
                            : 'Your profile is ready for HR connections when launched'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 