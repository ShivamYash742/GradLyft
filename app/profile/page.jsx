'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircle, Award, Sparkles, GraduationCap, Flame, Star, Briefcase, ChevronRight, 
         ArrowRight, Bookmark, CalendarDays, BookMarked, MapPin, Clock, Building, Filter,
         Search, DollarSign, Users, Calendar, Tag, Trash2, Bell, User, Save, X, Phone, Mail, Book, Lightbulb,
         Plus, Pencil, CheckCircle, Loader2 } from 'lucide-react';

// Loading component for Suspense
function ProfileLoading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
    </div>
  );
}

// Main profile component that uses searchParams
function ProfileContent() {
  const { user, loading, setUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('profile');
  const [eventsFilter, setEventsFilter] = useState('all');
  const [jobsFilter, setJobsFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState({
    personal: false,
    education: false,
    career: false
  });
  const [profileData, setProfileData] = useState({
    name: '',
    college: '',
    degree: '',
    branch: '',
    year: '',
    dob: '',
    phoneNo: '',
    state: '',
    aspiration: '',
    workingStatus: 'FRESHER',
    interests: ''
  });
  
  // Skills states
  const [skills, setSkills] = useState([]);
  const [isLoadingSkills, setIsLoadingSkills] = useState(false);
  const [skillFormOpen, setSkillFormOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [newSkill, setNewSkill] = useState({ name: '', proficiency: 50 });
  const [skillError, setSkillError] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    }
  ];

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
    }
  ];

  // Initialize form data from user profile
  useEffect(() => {
    if (user?.student) {
      setProfileData({
        name: user.student.name || '',
        college: user.student.college || '',
        degree: user.student.degree || '',
        branch: user.student.branch || '',
        year: user.student.year ? user.student.year.toString() : '',
        dob: user.student.dob ? new Date(user.student.dob).toISOString().split('T')[0] : '',
        phoneNo: user.student.phoneNo || '',
        state: user.student.state || '',
        aspiration: user.student.aspiration || '',
        workingStatus: user.student.workingStatus || 'FRESHER',
        interests: user.student.interests || ''
      });
      
      // Load skills when user is available
      fetchSkills();
    }
  }, [user]);

  // Fetch skills from API
  const fetchSkills = async () => {
    if (!user?.student) return;
    
    setIsLoadingSkills(true);
    try {
      const response = await fetch('/api/skills');
      if (!response.ok) {
        throw new Error('Failed to fetch skills');
      }
      const data = await response.json();
      if (data.success) {
        setSkills(data.skills || []);
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setIsLoadingSkills(false);
    }
  };

  // Handle skill form input change
  const handleSkillInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'proficiency') {
      // Ensure proficiency is between 0-100
      const proficiency = Math.max(0, Math.min(100, parseInt(value, 10) || 0));
      setNewSkill(prev => ({ ...prev, proficiency }));
    } else {
      setNewSkill(prev => ({ ...prev, [name]: value }));
    }
    
    setSkillError('');
  };

  // Open skill form for adding new skill
  const openAddSkillForm = () => {
    setNewSkill({ name: '', proficiency: 50 });
    setEditingSkill(null);
    setSkillFormOpen(true);
    setSkillError('');
  };
  
  // Open skill form for editing existing skill
  const openEditSkillForm = (skill) => {
    setNewSkill({ name: skill.name, proficiency: skill.proficiency });
    setEditingSkill(skill);
    setSkillFormOpen(true);
    setSkillError('');
  };
  
  // Close skill form
  const closeSkillForm = () => {
    setSkillFormOpen(false);
    setEditingSkill(null);
    setSkillError('');
  };

  // Add or update skill
  const saveSkill = async () => {
    if (!newSkill.name.trim()) {
      setSkillError('Skill name is required');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      let response;
      let successMsg = '';
      
      if (editingSkill) {
        // Update existing skill
        response = await fetch(`/api/skills/${editingSkill.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSkill)
        });
        successMsg = 'Skill updated successfully';
      } else {
        // Add new skill
        response = await fetch('/api/skills', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSkill)
        });
        successMsg = 'Skill added successfully';
      }
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to save skill');
      }
      
      // Refresh skills list
      await fetchSkills();
      
      // Show success message
      setSuccessMessage(successMsg);
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Close the form
      closeSkillForm();
    } catch (error) {
      console.error('Error saving skill:', error);
      setSkillError(error.message || 'Failed to save skill');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Delete a skill
  const deleteSkill = async (skill) => {
    if (!window.confirm(`Are you sure you want to delete "${skill.name}" skill?`)) {
      return;
    }
    
    try {
      const response = await fetch(`/api/skills/${skill.id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete skill');
      }
      
      // Refresh skills list
      await fetchSkills();
      
      // Show success message
      setSuccessMessage('Skill deleted successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error deleting skill:', error);
      setErrorMessage(error.message || 'Failed to delete skill');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Toggle edit mode for a section
  const toggleEditMode = (section) => {
    setEditMode(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
    
    // Reset error/success messages when toggling edit mode
    setErrorMessage('');
    setSuccessMessage('');
  };

  // Handle form submission
  const handleSubmit = async (section) => {
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
    
    try {
      // Prepare data based on which section is being updated
      let updateData = { profileType: 'student' };
      
      if (section === 'personal') {
        updateData = {
          ...updateData,
          name: profileData.name || '',
          phoneNo: profileData.phoneNo || '',
          dob: profileData.dob || null,
          state: profileData.state || ''
        };
      } else if (section === 'education') {
        updateData = {
          ...updateData,
          college: profileData.college || '',
          degree: profileData.degree || '',
          branch: profileData.branch || '',
          year: profileData.year || ''
        };
      } else if (section === 'career') {
        updateData = {
          ...updateData,
          workingStatus: profileData.workingStatus || 'FRESHER',
          aspiration: profileData.aspiration || '',
          interests: profileData.interests || ''
        };
      }

      console.log('Sending profile update data:', updateData);

      const response = await fetch('/api/profile/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();
      console.log('Profile update response:', data);
      
      if (response.ok && data.success) {
        // Make sure we don't override existing profile data
        const updatedStudentProfile = {
          ...user.student
        };
        
        // Only update the fields that were part of this section
        Object.keys(updateData).forEach(key => {
          // Skip the profileType key
          if (key !== 'profileType') {
            updatedStudentProfile[key] = updateData[key];
          }
        });
        
        // Update user context with new profile data
        setUser({
          ...user,
          student: updatedStudentProfile
        });
        
        setSuccessMessage('Profile updated successfully');
        
        // Close edit mode after successful update
        toggleEditMode(section);
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setErrorMessage(error.message || 'An error occurred while updating profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    
    // Set active tab from URL query parameter if it exists
    const tabParam = searchParams.get('tab');
    if (tabParam && ['profile', 'events', 'bookmarks'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [loading, user, router, searchParams]);

  // Handle tab changes with URL update
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Update URL without full page reload
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url);
  };

  // Filter events based on criteria
  const filteredEvents = events.filter(event => {
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !event.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (eventsFilter === 'registered' && !event.registered) {
      return false;
    }
    if (eventsFilter === 'upcoming' && event.registered) {
      return false;
    }
    
    return true;
  });

  // Filter jobs based on criteria
  const filteredJobs = bookmarkedJobs.filter(job => {
    if (searchQuery && !job.role.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    if (jobsFilter === 'full-time' && job.type !== 'Full-time') {
      return false;
    }
    if (jobsFilter === 'internship' && job.type !== 'Internship') {
      return false;
    }
    if (jobsFilter === 'remote' && !job.location.toLowerCase().includes('remote')) {
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

  // Skills section - replace the static skills section with this dynamic one
  const renderSkillsSection = () => (
    <div className="bg-white rounded-xl p-6 shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Flame className="h-5 w-5 text-orange-500 mr-2" />
          <h3 className="font-bold text-gray-800">Skills & Expertise</h3>
        </div>
        <button 
          onClick={openAddSkillForm} 
          className="text-blue-600 text-sm hover:underline flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Skills
        </button>
      </div>
      
      {isLoadingSkills ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        </div>
      ) : skills.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No skills added yet.</p>
          <button 
            onClick={openAddSkillForm}
            className="mt-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            Add your first skill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.id} className="group">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">{skill.proficiency}%</span>
                  <div className="hidden group-hover:flex space-x-1">
                    <button 
                      onClick={() => openEditSkillForm(skill)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit skill"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button 
                      onClick={() => deleteSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete skill"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${
                    skill.proficiency > 80 ? 'bg-green-500' : skill.proficiency > 60 ? 'bg-blue-500' : 'bg-orange-400'
                  }`} 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Skill Form Modal */}
      {skillFormOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {editingSkill ? 'Edit Skill' : 'Add New Skill'}
                </h3>
                <button onClick={closeSkillForm} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {skillError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg mb-4 text-sm">
                  {skillError}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Skill Name</label>
                  <input
                    id="skillName"
                    name="name"
                    type="text"
                    value={newSkill.name}
                    onChange={handleSkillInputChange}
                    className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                    placeholder="e.g., JavaScript, Python, Photoshop"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Proficiency: {newSkill.proficiency}%</label>
                  <input
                    id="skillProficiency"
                    name="proficiency"
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.proficiency}
                    onChange={handleSkillInputChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-3">
                  <button
                    type="button"
                    onClick={closeSkillForm}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveSkill}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-1 animate-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1" /> 
                        {editingSkill ? 'Update Skill' : 'Add Skill'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Render Student Profile content (called when activeTab === 'profile')
  const renderStudentProfileContent = () => (
    <div className="animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 shadow-lg text-white mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 relative">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center text-blue-600 text-3xl font-bold border-4 border-white">
              {user?.student?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full border-2 border-white">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="ml-5">
            <h2 className="text-2xl font-bold">{user?.student?.name || 'Student User'}</h2>
            <p className="text-blue-200">{user?.student?.college || 'University'}</p>
            <div className="flex items-center mt-2 text-sm">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>{user?.student?.degree || 'Degree'} • {user?.student?.branch || 'Branch'} • </span>
              <span className="ml-1">{user?.student?.year || '2024'}</span>
            </div>
            <div className="flex items-center mt-1 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{user?.student?.state || 'State'}</span>
              {user?.student?.workingStatus && (
                <span className="ml-2 bg-blue-700 px-2 py-0.5 rounded-full text-xs">
                  {user?.student?.workingStatus === 'FRESHER' ? 'Fresher' : 'Working Professional'}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex gap-2">
          <button 
            className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-all duration-200"
            onClick={() => toggleEditMode('personal')}
          >
            Edit Profile
          </button>
          <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-all duration-200 flex items-center">
            <Star className="h-3.5 w-3.5 mr-1 text-yellow-300" /> Level 2 Student
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {successMessage && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl animate-fade-in">
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl animate-fade-in">
          {errorMessage}
        </div>
      )}

      {/* Personal Details */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <User className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-bold text-gray-800">Personal Details</h3>
          </div>
          {!editMode.personal ? (
            <button 
              onClick={() => toggleEditMode('personal')} 
              className="text-blue-600 text-sm hover:underline"
            >
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleEditMode('personal')}
                className="text-gray-500 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </button>
              <button 
                onClick={() => handleSubmit('personal')}
                className="text-green-600 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Save
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        {!editMode.personal ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{user?.student?.name || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">{user?.email || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{user?.student?.phoneNo || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">
                {user?.student?.dob ? new Date(user.student.dob).toLocaleDateString() : 'Not specified'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">State</p>
              <p className="font-medium">{user?.student?.state || 'Not specified'}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                disabled={!editMode.personal}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="Your full name"
                />
            </div>
            
            <div className="space-y-2">
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={profileData.phoneNo}
                  onChange={handleInputChange}
                disabled={!editMode.personal}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="Your phone number"
                />
            </div>
            
            <div className="space-y-2">
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleInputChange}
                disabled={!editMode.personal}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                />
            </div>
            
            <div className="space-y-2">
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">State/Region</label>
                <input
                  type="text"
                  name="state"
                  value={profileData.state}
                  onChange={handleInputChange}
                disabled={!editMode.personal}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="Your state or region"
                />
            </div>
          </div>
        )}
      </div>

      {/* Education Details */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-bold text-gray-800">Education</h3>
          </div>
          {!editMode.education ? (
            <button 
              onClick={() => toggleEditMode('education')} 
              className="text-blue-600 text-sm hover:underline"
            >
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleEditMode('education')}
                className="text-gray-500 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </button>
              <button 
                onClick={() => handleSubmit('education')}
                className="text-green-600 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Save
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        {!editMode.education ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">College/University</p>
              <p className="font-medium">{user?.student?.college || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Degree</p>
              <p className="font-medium">{user?.student?.degree || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Branch/Major</p>
              <p className="font-medium">{user?.student?.branch || 'Not specified'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Year</p>
              <p className="font-medium">{user?.student?.year || 'Not specified'}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">College / University</label>
                <input
                  type="text"
                  name="college"
                  value={profileData.college}
                  onChange={handleInputChange}
                disabled={!editMode.education}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="Your college or university"
                />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Degree</label>
              <input
                type="text"
                name="degree"
                value={profileData.degree}
                onChange={handleInputChange}
                disabled={!editMode.education}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="e.g. B.Tech, BSc, MS"
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Field of Study / Branch</label>
              <input
                type="text"
                name="branch"
                value={profileData.branch}
                onChange={handleInputChange}
                disabled={!editMode.education}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="e.g. Computer Science, Economics"
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Graduation Year</label>
              <input
                type="text"
                name="year"
                value={profileData.year}
                onChange={handleInputChange}
                disabled={!editMode.education}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                placeholder="e.g. 2025"
              />
            </div>
          </div>
        )}
      </div>

      {/* Career Section */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-bold text-gray-800">Career Information</h3>
          </div>
          {!editMode.career ? (
            <button 
              onClick={() => toggleEditMode('career')} 
              className="text-blue-600 text-sm hover:underline"
            >
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleEditMode('career')}
                className="text-gray-500 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </button>
              <button 
                onClick={() => handleSubmit('career')}
                className="text-green-600 text-sm hover:underline flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Save
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        {!editMode.career ? (
          <div>
            <p className="text-sm text-gray-500">Professional Status</p>
            <p className="font-medium">
              {user?.student?.workingStatus === 'PROFESSIONAL' 
                ? 'Working Professional' 
                : 'Fresher'}
            </p>
            
            <p className="text-sm text-gray-500 mt-4">Career Aspiration</p>
            <p className="font-medium">{user?.student?.aspiration || 'Not specified'}</p>
            
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Interests</p>
              <div className="flex flex-wrap gap-2">
                {(user?.student?.interests || '').split(',').filter(Boolean).map((interest, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm">
                    {interest.trim()}
                  </span>
                ))}
                {!user?.student?.interests && <p className="font-medium">Not specified</p>}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Working Status</label>
              <select
                    name="workingStatus"
                value={profileData.workingStatus}
                    onChange={handleInputChange}
                disabled={!editMode.career}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
              >
                <option value="FRESHER">Fresher (No work experience)</option>
                <option value="INTERN">Currently an Intern</option>
                <option value="EMPLOYED">Currently Employed</option>
                <option value="BETWEEN_JOBS">Between Jobs</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Career Aspirations</label>
              <textarea
                  name="aspiration"
                  value={profileData.aspiration}
                  onChange={handleInputChange}
                disabled={!editMode.career}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                rows="3"
                placeholder="Describe your career goals and aspirations"
              ></textarea>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-[var(--text-secondary)]">Areas of Interest</label>
              <textarea
                  name="interests"
                  value={profileData.interests}
                  onChange={handleInputChange}
                disabled={!editMode.career}
                className="w-full p-2 border rounded-md bg-[var(--input-bg)] border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]"
                rows="3"
                placeholder="List your professional interests (e.g., Web Development, Data Science, UX Design)"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Skills */}
      {renderSkillsSection()}

      {/* Profile Completion */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-bold text-gray-800">Profile Completion</h3>
          </div>
          <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">75%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
            <span className="ml-2 text-sm text-gray-600">Basic Info</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
            <span className="ml-2 text-sm text-gray-600">Education</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs">!</div>
            <span className="ml-2 text-sm text-gray-600">Resume Upload</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs">!</div>
            <span className="ml-2 text-sm text-gray-600">Skills Assessment</span>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="font-bold text-gray-800 mb-4">Career Interests</h3>
        <div className="flex flex-wrap gap-2">
          {(user?.student?.interests || 'Software Development,Data Science,UI/UX Design').split(',').map((interest, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm">
              {interest.trim()}
            </span>
          ))}
          <button className="bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors">
            + Add more
          </button>
        </div>
      </div>
    </div>
  );

  // Render Events Tab (called when activeTab === 'events')
  const renderEventsContent = () => (
    <div className="animate-fade-in">
      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Filter className="text-gray-500 h-5 w-5" />
            <div className="flex space-x-2">
              <button 
                onClick={() => setEventsFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  eventsFilter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Events
              </button>
              <button 
                onClick={() => setEventsFilter('registered')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  eventsFilter === 'registered' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Registered
              </button>
              <button 
                onClick={() => setEventsFilter('upcoming')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  eventsFilter === 'upcoming' 
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
                setEventsFilter('all');
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

  // Render Bookmarks Tab (called when activeTab === 'bookmarks')
  const renderBookmarksContent = () => (
    <div className="animate-fade-in">
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
                onClick={() => setJobsFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  jobsFilter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Jobs
              </button>
              <button 
                onClick={() => setJobsFilter('full-time')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  jobsFilter === 'full-time' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Full-time
              </button>
              <button 
                onClick={() => setJobsFilter('internship')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  jobsFilter === 'internship' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Internship
              </button>
              <button 
                onClick={() => setJobsFilter('remote')}
                className={`px-4 py-2 rounded-lg text-sm ${
                  jobsFilter === 'remote' 
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
                          View Details
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
                setJobsFilter('all');
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

  // Render Student Profile with tabs
  const renderStudentProfile = () => (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <Link href="/profile/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Dashboard
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto mb-6 bg-white rounded-xl shadow-md p-1">
        <button 
          onClick={() => handleTabChange('profile')}
          className={`flex-1 px-4 py-3 text-center rounded-lg transition-all ${
            activeTab === 'profile' 
              ? 'bg-blue-600 text-white font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center justify-center">
            <UserCircle className="h-5 w-5 mr-2" />
            <span>Profile</span>
          </div>
        </button>
        <button 
          onClick={() => handleTabChange('events')}
          className={`flex-1 px-4 py-3 text-center rounded-lg transition-all ${
            activeTab === 'events' 
              ? 'bg-blue-600 text-white font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center justify-center">
            <CalendarDays className="h-5 w-5 mr-2" />
            <span>Events</span>
          </div>
        </button>
        <button 
          onClick={() => handleTabChange('bookmarks')}
          className={`flex-1 px-4 py-3 text-center rounded-lg transition-all ${
            activeTab === 'bookmarks' 
              ? 'bg-blue-600 text-white font-medium' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center justify-center">
            <Bookmark className="h-5 w-5 mr-2" />
            <span>Bookmarks</span>
          </div>
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'profile' && renderStudentProfileContent()}
        {activeTab === 'events' && renderEventsContent()}
        {activeTab === 'bookmarks' && renderBookmarksContent()}
      </div>
    </div>
  );

  // Render Employer Profile (using existing UI but slightly improved)
  const renderEmployerProfile = () => (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
        
        <div className="mb-8 flex items-center">
          <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-2xl font-bold mr-4">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="text-xl font-semibold">
              {user.employer?.name || 'Employer User'}
            </div>
            <div className="text-gray-600">{user.email}</div>
            <div className="text-sm text-blue-600 font-medium mt-1">
              Employer
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Full Name</div>
              <div>{user.employer?.name}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Company</div>
              <div>{user.employer?.company}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Designation</div>
              <div>{user.employer?.designation}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Employer Dashboard</h2>
          <div className="flex space-x-4">
            <Link 
              href="/employer/dashboard" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              Manage Jobs
            </Link>
            <Link 
              href="/employer/applications" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <UserCircle className="h-4 w-4 mr-2" />
              View Applications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Render Admin Profile
  const renderAdminProfile = () => (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Profile</h1>
        
        <div className="mb-8 flex items-center">
          <div className="bg-purple-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-2xl font-bold mr-4">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="text-xl font-semibold">
              Admin User
            </div>
            <div className="text-gray-600">{user.email}</div>
            <div className="text-sm text-purple-600 font-medium mt-1">
              Administrator
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-700 mb-4">
            You are an administrator of the GradLyft platform.
          </p>
          <div className="mt-4">
            <Link 
              href="/admin/dashboard" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <UserCircle className="h-5 w-5 mr-2" />
              Go to Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // Render profile based on user role
  if (user.role === 'STUDENT') {
    return renderStudentProfile();
  } else if (user.role === 'EMPLOYER') {
    return renderEmployerProfile();
  } else {
    return renderAdminProfile();
  }
}

// Export the wrapped component with Suspense
export default function ProfilePage() {
  return (
    <Suspense fallback={<ProfileLoading />}>
      <ProfileContent />
    </Suspense>
  );
} 