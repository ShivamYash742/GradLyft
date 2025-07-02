'use client';

import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import {
  User, GraduationCap, Briefcase, CheckCircle, Pencil, Save,
  LayoutDashboard, Bookmark, Calendar, Settings, FileText
} from 'lucide-react';
import { themeClasses } from '../../lib/theme';
import Link from 'next/link';

// Sidebar navigation items
const profileSections = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/profile/dashboard' },
  { key: 'personal', label: 'Personal', icon: User },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'career', label: 'Career', icon: Briefcase },
  { 
    key: 'applications', 
    label: 'My Applications', 
    icon: FileText,
    comingSoon: true 
  },
  { 
    key: 'bookmarks', 
    label: 'Bookmarked Jobs', 
    icon: Bookmark,
    comingSoon: true 
  },
  { 
    key: 'events', 
    label: 'Registered Events', 
    icon: Calendar,
    comingSoon: true 
  },
  { 
    key: 'settings', 
    label: 'Account Settings', 
    icon: Settings,
    comingSoon: true 
  }
];

// Helper for year suffix
const getYearSuffix = (year) => {
  const num = parseInt(year);
  if (num === 1) return 'st';
  if (num === 2) return 'nd';
  if (num === 3) return 'rd';
  return 'th';
};

function ProfileContent() {
  const { user, setUser } = useAuth();
  const [activeSection, setActiveSection] = useState('personal');
  const [editMode, setEditMode] = useState({ personal: false, education: false, career: false });
  const [profileData, setProfileData] = useState({
    name: '', college: '', degree: '', branch: '', year: '',
    dob: '', phoneNo: '', state: '', aspiration: '',
    workingStatus: 'FRESHER', interests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const toggleEditMode = (section) => {
    setEditMode(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSubmit = async (section) => {
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      let updateData = {};
      if (section === 'personal') {
        updateData = {
          name: profileData.name,
          phoneNo: profileData.phoneNo,
          dob: profileData.dob,
          state: profileData.state
        };
      } else if (section === 'education') {
        updateData = {
          college: profileData.college,
          degree: profileData.degree,
          branch: profileData.branch,
          year: profileData.year
        };
      } else if (section === 'career') {
        updateData = {
          workingStatus: profileData.workingStatus,
          aspiration: profileData.aspiration,
          interests: profileData.interests
        };
      }

      const response = await fetch('/api/profile/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profileType: 'student', ...updateData })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update profile');

      if (data.success) {
        setUser(prev => ({
          ...prev,
          student: { ...prev.student, ...updateData }
        }));
        setSuccessMessage('Profile updated successfully!');
        toggleEditMode(section);
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred while updating profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section renderers
  const renderSection = (section) => {
    switch (section) {
      case 'personal': return renderPersonalInfo();
      case 'education': return renderEducationInfo();
      case 'career': return renderCareerInfo();
      default: return null;
    }
  };

  // --- Section Components ---
  function renderPersonalInfo() {
    return (
      <SectionCard
        title="Personal Information"
        subtitle="Basic profile info used across the platform"
        icon={User}
        editMode={editMode.personal}
        onEdit={() => toggleEditMode('personal')}
        onCancel={() => toggleEditMode('personal')}
        onSave={() => handleSubmit('personal')}
        isSubmitting={isSubmitting}
        successMessage={successMessage}
        errorMessage={errorMessage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
                  value={profileData.name}
            name="name"
                  onChange={handleInputChange}
            editMode={editMode.personal}
            placeholder="Enter your full name"
          />
          <FormField
            label="Phone Number"
                  value={profileData.phoneNo}
            name="phoneNo"
                  onChange={handleInputChange}
            editMode={editMode.personal}
            placeholder="Enter your phone number"
            type="tel"
          />
          <FormField
            label="Date of Birth"
                  value={profileData.dob}
            name="dob"
                  onChange={handleInputChange}
            editMode={editMode.personal}
            placeholder="Enter your date of birth"
            type="date"
          />
          <FormField
            label="State"
                  value={profileData.state}
            name="state"
                  onChange={handleInputChange}
            editMode={editMode.personal}
            placeholder="Enter your state"
                />
              </div>
      </SectionCard>
    );
  }

  function renderEducationInfo() {
    return (
      <SectionCard
        title="Education Details"
        subtitle="Academic background and qualifications"
        icon={GraduationCap}
        editMode={editMode.education}
        onEdit={() => toggleEditMode('education')}
        onCancel={() => toggleEditMode('education')}
        onSave={() => handleSubmit('education')}
        isSubmitting={isSubmitting}
        successMessage={successMessage}
        errorMessage={errorMessage}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="College/University"
                  value={profileData.college}
            name="college"
                  onChange={handleInputChange}
            editMode={editMode.education}
            placeholder="Enter your college"
          />
          <FormField
            label="Degree"
                value={profileData.degree}
            name="degree"
                onChange={handleInputChange}
            editMode={editMode.education}
            placeholder="Enter your degree"
          />
          <FormField
            label="Branch/Major"
                value={profileData.branch}
            name="branch"
                onChange={handleInputChange}
            editMode={editMode.education}
            placeholder="Enter your branch/major"
          />
          <div>
            <label className="block text-sm font-medium mb-1">Year of Study</label>
            {editMode.education ? (
              <select
                name="year"
                value={profileData.year}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2.5"
              >
                <option value="">Select year</option>
                {[1, 2, 3, 4, 5].map(y => (
                  <option key={y} value={y}>{`${y}${getYearSuffix(y)} Year`}</option>
                ))}
              </select>
            ) : (
              <p className="font-medium">{profileData.year ? `${profileData.year}${getYearSuffix(profileData.year)} Year` : 'Not specified'}</p>
        )}
      </div>
          </div>
      </SectionCard>
    );
  }

  function renderCareerInfo() {
    return (
      <SectionCard
        title="Career Information"
        subtitle="Your career preferences and aspirations"
        icon={Briefcase}
        editMode={editMode.career}
        onEdit={() => toggleEditMode('career')}
        onCancel={() => toggleEditMode('career')}
        onSave={() => handleSubmit('career')}
        isSubmitting={isSubmitting}
        successMessage={successMessage}
        errorMessage={errorMessage}
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Working Status</label>
            {editMode.career ? (
              <select
                name="workingStatus"
                value={profileData.workingStatus}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2.5"
              >
                {["FRESHER", "INTERN", "FULL_TIME", "PART_TIME", "CONTRACT", "TEMPORARY", "FREELANCE", "VOLUNTEER", "OTHER"]
                  .map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            ) : (
              <p className="font-medium">{profileData.workingStatus || 'Not specified'}</p>
            )}
            </div>
          <FormField
            label="Aspiration"
                  value={profileData.aspiration}
            name="aspiration"
                  onChange={handleInputChange}
            editMode={editMode.career}
            placeholder="Enter your aspiration"
          />
          <FormField
            label="Interests"
                  value={profileData.interests}
            name="interests"
                  onChange={handleInputChange}
            editMode={editMode.career}
            placeholder="Enter your interests"
            type="textarea"
                />
              </div>
      </SectionCard>
    );
  }

  // --- Main Layout ---
  return (
    <div className={`flex flex-col md:flex-row gap-8 py-8 px-4 max-w-5xl mx-auto ${themeClasses.textPrimary}`}>
      {/* Sidebar */}
      <nav className="md:w-1/4 mb-8 md:mb-0">
        <ul className="space-y-2">
          {profileSections.map(({ key, label, icon: Icon, href, comingSoon }) => (
            <li key={key}>
              {href ? (
                <Link href={href}>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition-all
                    ${activeSection === key 
                      ? `${themeClasses.primaryButton} text-white shadow-lg scale-105` 
                      : `${themeClasses.cardBg} ${themeClasses.textPrimary} hover:bg-blue-50 dark:hover:bg-blue-900/50`}
                  `}>
                    <Icon className={`h-5 w-5 ${activeSection === key ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                    <span className="font-semibold">{label}</span>
                  </div>
                </Link>
              ) : (
                <button
                  className={`flex items-center justify-between px-4 py-2 rounded-lg w-full transition-all
                    ${activeSection === key 
                      ? `${themeClasses.primaryButton} text-white shadow-lg scale-105` 
                      : `${themeClasses.cardBg} ${themeClasses.textPrimary} hover:bg-blue-50 dark:hover:bg-blue-900/50`}
                  `}
                  onClick={() => !comingSoon && setActiveSection(key)}
                  disabled={comingSoon}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${activeSection === key ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                    <span className="font-semibold">{label}</span>
                  </div>
                  {comingSoon && (
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      Coming Soon
                    </span>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderSection(activeSection)}
      </main>
    </div>
  );
}

// --- Helper Components ---

function SectionCard({
  title, subtitle, icon: Icon, editMode, onEdit, onCancel, onSave, isSubmitting, children, successMessage, errorMessage
}) {
  return (
    <div className={`${themeClasses.cardBg} ${themeClasses.textPrimary} rounded-2xl ${themeClasses.shadow} p-8 animate-fade-in`}>
      <div className="flex justify-between items-start mb-6">
                      <div>
          <h2 className={`text-2xl font-bold flex items-center gap-2`}>
            <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            {title}
          </h2>
          <p className={`mt-1 ${themeClasses.textSecondary}`}>{subtitle}</p>
                        </div>
            <button 
          onClick={editMode ? onSave : onEdit}
          disabled={isSubmitting}
          className={`p-2 rounded-lg transition-transform ${themeClasses.secondaryButton}`}
        >
          {editMode ? <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" /> : <Pencil className="h-5 w-5" />}
            </button>
          </div>
      {children}
      {editMode && (
        <div className="flex justify-end gap-3 mt-8">
        <button 
            onClick={onCancel}
            className={`px-4 py-2 rounded-lg ${themeClasses.secondaryButton}`}
            disabled={isSubmitting}
          >
            Cancel
        </button>
        <button 
            onClick={onSave}
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-lg ${themeClasses.primaryButton} text-white flex items-center gap-2`}
          >
            <Save className="h-4 w-4" />
            {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
          </div>
      )}
      {successMessage && <p className="mt-4 text-green-600 dark:text-green-400">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-600 dark:text-red-400">{errorMessage}</p>}
    </div>
  );
}

function FormField({ label, value, name, onChange, editMode, placeholder, type = "text" }) {
  return (
          <div>
      <label className={`block text-sm font-medium ${themeClasses.textSecondary} mb-1`}>{label}</label>
      {editMode ? (
        type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full rounded-lg ${themeClasses.input} p-2.5`}
            placeholder={placeholder}
            rows={3}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full rounded-lg ${themeClasses.input} p-2.5`}
            placeholder={placeholder}
          />
        )
      ) : (
        <p className={`${themeClasses.textPrimary} font-medium`}>{value || 'Not specified'}</p>
      )}
    </div>
  );
}

export default ProfileContent;
