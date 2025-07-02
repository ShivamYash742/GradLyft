'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Eye, EyeOff, Briefcase, GraduationCap, CheckCircle, Sparkles, Stars, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    phoneNo: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserTypeSelect = (userType) => {
    setFormData(prev => ({
      ...prev,
      userType,
    }));
    setStep(2);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.phoneNo.trim()) {
      setError('Phone number is required');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Prepare data based on user type
      const userData = {
        email: formData.email,
        password: formData.password,
        role: formData.userType === 'student' ? 'STUDENT' : 
              formData.userType === 'professional' ? 'PROFESSIONAL' : 'EMPLOYER'
      };

      // Add profile data
      if (formData.userType === 'student') {
        userData.student = {
          name: formData.name,
          phoneNo: formData.phoneNo,
          // Set remaining fields with default values
          college: "Not specified",
          degree: "Not specified",
          branch: "Not specified",
          year: new Date().getFullYear(),
          dob: null,
          state: null,
          aspiration: null,
          workingStatus: "FRESHER",
          interests: "Not specified"
        };
      } else if (formData.userType === 'professional') {
        userData.professional = {
          name: formData.name,
          phoneNo: formData.phoneNo,
          company: "Not specified",
          designation: "Not specified",
          experience: 0,
          skills: [],
          industry: "Not specified"
        };
      } else { // employer
        userData.employer = {
          name: formData.name,
          company: "Not specified",
          designation: "Not specified"
        };
      }

      console.log('Submitting registration data:', userData);

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log('Registration response:', data);
      
      if (!response.ok) {
        const errorMessage = data.details 
          ? `${data.message}: ${data.details}`
          : data.message || 'Registration failed';
        throw new Error(errorMessage);
      }

      if (data.success) {
        // Redirect to login page on success
        router.push('/login?registered=true');
      } else {
        const errorMessage = data.details 
          ? `${data.message}: ${data.details}`
          : data.message || 'Registration failed. Please try again.';
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)] overflow-hidden py-16">
      {/* Animated floating elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-[var(--floating-bg-1)] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[var(--floating-bg-2)] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[var(--floating-bg-3)] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Registration Card */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-lg bg-[var(--form-bg)] rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:shadow-xl border border-[var(--glass-border)]">
          <div className="flex flex-col md:flex-row">
            {/* Illustration - Left Side */}
            <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] p-12">
              <div className="h-full flex flex-col justify-center items-center text-white">
                <div className="mb-8 relative">
                  {/* Animated icon */}
                  <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 animate-pulse-glow opacity-20 rounded-full"></div>
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                      {step === 1 ? (
                        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 15C15.866 15 19 12.3137 19 9C19 5.68629 15.866 3 12 3C8.13401 3 5 5.68629 5 9C5 12.3137 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 15V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 18H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  {/* Small floating animation elements */}
                  <div className="absolute -top-6 -right-4 w-12 h-12 bg-teal-300/30 rounded-full animate-float"></div>
                  <div className="absolute bottom-0 -left-8 w-16 h-16 bg-blue-300/30 rounded-full animate-float animation-delay-2000"></div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-center">
                  {step === 1 ? "Join Our Community" : "Create Your Account"}
                </h3>
                <p className="text-center text-white/80 leading-relaxed drop-shadow-md">
                  {step === 1 
                    ? "Whether you're a student, professional, or employer seeking opportunities, we've got you covered."
                    : "You're just one step away from connecting with your future path!"
                  }
                </p>
                
                <div className="flex items-center mt-8 space-x-2">
                  <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-white' : 'bg-white/30'}`}></div>
                  <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-white' : 'bg-white/30'}`}></div>
                </div>
              </div>
            </div>
            
            {/* Registration Form - Right Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="mb-10 flex items-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--youth-yellow)] rounded-full flex items-center justify-center">
                    <Stars className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h2 className="ml-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)]">
                  {step === 1 ? "Get Started" : "Create Account"}
                </h2>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 animate-fade-in dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                  {error}
                </div>
              )}
              
              {step === 1 ? (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-semibold text-[var(--form-text)] mb-8 text-center">I am a...</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <button 
                      type="button"
                      onClick={() => handleUserTypeSelect('student')}
                      className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-md ${
                        formData.userType === 'student' 
                          ? 'bg-gradient-to-br from-[var(--primary-start)] to-[var(--primary-end)] text-white shadow-lg transform -translate-y-1' 
                          : 'bg-[var(--input-bg)] border border-[var(--input-border)] hover:bg-opacity-100 hover:shadow-lg'
                      }`}
                    >
                      <div className={`mb-3 p-2 rounded-full ${formData.userType === 'student' ? 'bg-white/20' : 'bg-[var(--badge-bg)]'}`}>
                        <GraduationCap className={`h-8 w-8 ${formData.userType === 'student' ? 'text-white' : 'text-[var(--primary-start)]'}`} />
                      </div>
                      <span className={`font-bold text-lg ${formData.userType === 'student' ? 'text-white' : 'text-[var(--form-text)]'}`}>Student</span>
                      <p className={`mt-1 text-center text-xs ${formData.userType === 'student' ? 'text-white/80' : 'text-[var(--form-text-muted)]'}`}>
                        Looking to start your career
                      </p>
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => handleUserTypeSelect('professional')}
                      className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-md ${
                        formData.userType === 'professional' 
                          ? 'bg-gradient-to-br from-[var(--primary-start)] to-[var(--primary-end)] text-white shadow-lg transform -translate-y-1' 
                          : 'bg-[var(--input-bg)] border border-[var(--input-border)] hover:bg-opacity-100 hover:shadow-lg'
                      }`}
                    >
                      <div className={`mb-3 p-2 rounded-full ${formData.userType === 'professional' ? 'bg-white/20' : 'bg-[var(--badge-bg)]'}`}>
                        <User className={`h-8 w-8 ${formData.userType === 'professional' ? 'text-white' : 'text-[var(--primary-start)]'}`} />
                      </div>
                      <span className={`font-bold text-lg ${formData.userType === 'professional' ? 'text-white' : 'text-[var(--form-text)]'}`}>Professional</span>
                      <p className={`mt-1 text-center text-xs ${formData.userType === 'professional' ? 'text-white/80' : 'text-[var(--form-text-muted)]'}`}>
                        Experienced worker seeking opportunities
                      </p>
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => handleUserTypeSelect('employer')}
                      className={`p-6 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-md ${
                        formData.userType === 'employer' 
                          ? 'bg-gradient-to-br from-[var(--primary-start)] to-[var(--primary-end)] text-white shadow-lg transform -translate-y-1' 
                          : 'bg-[var(--input-bg)] border border-[var(--input-border)] hover:bg-opacity-100 hover:shadow-lg'
                      }`}
                    >
                      <div className={`mb-3 p-2 rounded-full ${formData.userType === 'employer' ? 'bg-white/20' : 'bg-[var(--badge-bg)]'}`}>
                        <Briefcase className={`h-8 w-8 ${formData.userType === 'employer' ? 'text-white' : 'text-[var(--primary-start)]'}`} />
                      </div>
                      <span className={`font-bold text-lg ${formData.userType === 'employer' ? 'text-white' : 'text-[var(--form-text)]'}`}>Employer</span>
                      <p className={`mt-1 text-center text-xs ${formData.userType === 'employer' ? 'text-white/80' : 'text-[var(--form-text-muted)]'}`}>
                        Looking to hire talent
                      </p>
                    </button>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-[var(--form-text)]">
                      Already have an account?{' '}
                      <Link href="/login" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="animate-fade-in space-y-6">
                  <div>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-[var(--form-text-muted)]" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-12 w-full p-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-[var(--form-text-muted)]" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-12 w-full p-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition-all duration-200"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phoneNo" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-[var(--form-text-muted)]" />
                        </div>
                        <input
                          type="tel"
                          id="phoneNo"
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          className="pl-12 w-full p-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition-all duration-200"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-[var(--form-text-muted)]" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="pl-12 w-full p-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition-all duration-200"
                            placeholder="At least 8 characters"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <button 
                              type="button" 
                              onClick={() => setShowPassword(!showPassword)}
                              className="focus:outline-none"
                            >
                              {showPassword ? 
                                <EyeOff className="h-5 w-5 text-[var(--form-text-muted)] hover:text-[var(--link-color)]" /> : 
                                <Eye className="h-5 w-5 text-[var(--form-text-muted)] hover:text-[var(--link-color)]" />
                              }
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Confirm Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-[var(--form-text-muted)]" />
                          </div>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="pl-12 w-full p-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--form-text)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus-ring)] focus:border-[var(--input-focus)] transition-all duration-200"
                            placeholder="Confirm your password"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <button 
                              type="button" 
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="focus:outline-none"
                            >
                              {showConfirmPassword ? 
                                <EyeOff className="h-5 w-5 text-[var(--form-text-muted)] hover:text-[var(--link-color)]" /> : 
                                <Eye className="h-5 w-5 text-[var(--form-text-muted)] hover:text-[var(--link-color)]" />
                              }
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] hover:from-[var(--primary-start)] hover:to-[var(--primary-end)] hover:brightness-110 text-white py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
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
                        <span className="flex items-center">
                          Create Account <CheckCircle className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-[var(--form-text)]">
                      Already have an account?{' '}
                      <Link href="/login" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 30px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}