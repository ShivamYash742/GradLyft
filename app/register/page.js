'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Eye, EyeOff, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

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
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registration with:', formData);
      setIsSubmitting(false);
      
      // For demo - email already in use
      if (formData.email === 'existing@example.com') {
        setError('Email is already registered');
      } else {
        // In a real app, you would create the account and redirect here
        window.location.href = '/login';
      }
    }, 1500);
  };

  return (
    <main className="pt-16 pb-24">
      {/* Hero Section */}
      {/* <section className="bg-hero-gradient py-10 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-md text-on-gradient">Join GradLyft Today</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90 drop-shadow text-on-gradient">
            Create your account and unlock opportunities for your future.
          </p>
        </div>
      </section> */}

      {/* Registration Form Section with Illustration */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Illustration - Left Side */}
              <div className="hidden md:block md:w-1/2 bg-hero-gradient dark:bg-cool-gradient p-12">
                <div className="h-full flex flex-col justify-center items-center text-on-gradient">
                  <div className="mb-8">
                    <svg className="w-64 h-64" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M250 80C161.634 80 90 151.634 90 240C90 328.366 161.634 400 250 400C338.366 400 410 328.366 410 240C410 151.634 338.366 80 250 80Z" fill="currentColor" fillOpacity="0.1" />
                      <path d="M250 110L250 150" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M250 330L250 370" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M370 240L330 240" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M170 240L130 240" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M329.5 160.5L301.5 188.5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M198.5 291.5L170.5 319.5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M329.5 319.5L301.5 291.5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M198.5 188.5L170.5 160.5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M200 240C200 261.025 183.525 278 163 278C142.475 278 126 261.025 126 240C126 218.975 142.475 202 163 202C183.525 202 200 218.975 200 240Z" fill="currentColor" fillOpacity="0.3" />
                      <path d="M374 240C374 261.025 357.525 278 337 278C316.475 278 300 261.025 300 240C300 218.975 316.475 202 337 202C357.525 202 374 218.975 374 240Z" fill="currentColor" fillOpacity="0.3" />
                      <path d="M250 150C250 171.025 233.525 188 213 188C192.475 188 176 171.025 176 150C176 128.975 192.475 112 213 112C233.525 112 250 128.975 250 150Z" fill="currentColor" fillOpacity="0.3" />
                      <path d="M250 330C250 351.025 233.525 368 213 368C192.475 368 176 351.025 176 330C176 308.975 192.475 292 213 292C233.525 292 250 308.975 250 330Z" fill="currentColor" fillOpacity="0.3" />
                      <path d="M290 150C290 171.025 273.525 188 253 188C232.475 188 216 171.025 216 150C216 128.975 232.475 112 253 112C273.525 112 290 128.975 290 150Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M290 330C290 351.025 273.525 368 253 368C232.475 368 216 351.025 216 330C216 308.975 232.475 292 253 292C273.525 292 290 308.975 290 330Z" fill="currentColor" fillOpacity="0.2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Start Your Journey</h3>
                  <p className="text-center max-w-xs">
                    Join our community of students and employers connecting for a brighter future.
                  </p>
                </div>
              </div>
              
              {/* Registration Form - Right Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Create Account</h2>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                {step === 1 ? (
                  <div>
                    <h3 className="text-xl font-medium text-[var(--text-secondary)] mb-6 text-center">I am a...</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <button 
                        type="button"
                        onClick={() => handleUserTypeSelect('student')}
                        className={`p-6 rounded-lg flex flex-col items-center border-2 transition-all ${
                          formData.userType === 'student' 
                            ? 'border-[var(--primary-start)] bg-[var(--primary-start)]/5' 
                            : 'border-[var(--card-border)] hover:border-[var(--primary-start)]/50'
                        }`}
                      >
                        <GraduationCap className={`h-10 w-10 mb-3 ${formData.userType === 'student' ? 'text-[var(--primary-start)]' : 'text-[var(--text-secondary)]'}`} />
                        <span className={`font-medium ${formData.userType === 'student' ? 'text-[var(--primary-start)]' : 'text-[var(--text-primary)]'}`}>Student</span>
                      </button>
                      
                      <button 
                        type="button"
                        onClick={() => handleUserTypeSelect('employer')}
                        className={`p-6 rounded-lg flex flex-col items-center border-2 transition-all ${
                          formData.userType === 'employer' 
                            ? 'border-[var(--primary-start)] bg-[var(--primary-start)]/5' 
                            : 'border-[var(--card-border)] hover:border-[var(--primary-start)]/50'
                        }`}
                      >
                        <Briefcase className={`h-10 w-10 mb-3 ${formData.userType === 'employer' ? 'text-[var(--primary-start)]' : 'text-[var(--text-secondary)]'}`} />
                        <span className={`font-medium ${formData.userType === 'employer' ? 'text-[var(--primary-start)]' : 'text-[var(--text-primary)]'}`}>Employer</span>
                      </button>
                    </div>
                    
                    <div className="text-center mt-6">
                      <p className="text-sm text-[var(--text-secondary)]">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-4 flex items-center">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="text-[var(--text-secondary)] hover:text-[var(--link-color)]"
                      >
                        ← Back
                      </button>
                      <div className="ml-4 flex-1 text-center">
                        <span className="inline-flex items-center bg-[var(--primary-start)]/10 px-3 py-1 rounded-full text-sm font-medium text-[var(--primary-start)]">
                          {formData.userType === 'student' ? (
                            <><GraduationCap className="h-4 w-4 mr-1" /> Student</>
                          ) : (
                            <><Briefcase className="h-4 w-4 mr-1" /> Employer</>
                          )}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-[var(--text-muted)]" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-[var(--text-muted)]" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-[var(--text-muted)]" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                          placeholder="••••••••"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Must be at least 8 characters
                      </p>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CheckCircle className="h-5 w-5 text-[var(--text-muted)]" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                          placeholder="••••••••"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--primary-start)]"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-[var(--text-secondary)]">
                          I agree to the <a href="#" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">Terms of Service</a> and <a href="#" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">Privacy Policy</a>
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full gradient-button text-white py-3 px-6 rounded-md font-medium shadow-md hover:gradient-button-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-start)] transition-all duration-300 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Creating Account...
                          </span>
                        ) : (
                          'Create Account'
                        )}
                      </button>
                    </div>
                    
                    <div className="text-center pt-4">
                      <p className="text-sm text-[var(--text-secondary)]">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium">
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
      </section>
    </main>
  );
}
