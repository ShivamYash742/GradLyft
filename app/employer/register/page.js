'use client';

import { useState } from 'react';
import { CheckCircle, Building, Users, Briefcase, Info } from 'lucide-react';
import Link from 'next/link';

export default function EmployerRegisterPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    recruitingGoals: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const industryOptions = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Consulting',
    'Marketing',
    'Legal',
    'Non-profit',
    'Other'
  ];

  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const recruitingGoalOptions = [
    'Entry-level hiring',
    'Internship program',
    'Campus recruiting',
    'Diversity hiring',
    'Technical talent',
    'Leadership development'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (option) => {
    const updatedGoals = formData.recruitingGoals.includes(option)
      ? formData.recruitingGoals.filter(item => item !== option)
      : [...formData.recruitingGoals, option];
    
    setFormData({ ...formData, recruitingGoals: updatedGoals });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const benefits = [
    'Access to top student talent',
    'Branded company profile',
    'Smart candidate matching',
    'Streamlined hiring process',
    'Analytics and reporting',
    'University partnerships'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--section-light)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto bg-[var(--primary-light)] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-[var(--primary-start)]" />
            </div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Registration Successful!</h1>
            <p className="text-[var(--text-secondary)] mb-6">
              Thank you for registering with GradLyft. Your account is being set up, and a member of our team will reach out shortly to help you get started with recruiting top talent.
            </p>
            <Link 
              href="/employer" 
              className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-block"
            >
              Go to Employer Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
            Join the <span className="text-gradient-primary">GradLyft</span> Employer Network
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Register your company to access a pipeline of qualified student talent and transform your campus recruiting strategy.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-10">
            <div className="lg:w-2/3">
              <div className="card p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Employer Registration</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
                      Company Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Company Name*</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Company Website*</label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Industry*</label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        >
                          <option value="">Select an industry</option>
                          {industryOptions.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Company Size*</label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        >
                          <option value="">Select company size</option>
                          {companySizeOptions.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
                      Contact Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Full Name*</label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Job Title*</label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
                      Recruiting Goals
                    </h3>
                    
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-3">What are your primary recruiting goals? (select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {recruitingGoalOptions.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`goal-${option}`}
                            checked={formData.recruitingGoals.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="w-4 h-4 text-[var(--primary-start)]"
                          />
                          <label htmlFor={`goal-${option}`} className="ml-2 text-[var(--text-secondary)]">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your specific recruiting needs or any questions you have."
                      className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                    ></textarea>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="w-4 h-4"
                      />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm text-[var(--text-secondary)]">
                      I agree to the <Link href="/terms" className="text-[var(--primary-start)] hover:text-[var(--primary-end)]">Terms of Service</Link> and <Link href="/privacy" className="text-[var(--primary-start)] hover:text-[var(--primary-end)]">Privacy Policy</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
                  >
                    Register as Employer
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/3">
              <div className="card p-6 rounded-xl sticky top-8">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Employer Benefits</h3>
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[var(--primary-start)] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 bg-[var(--primary-subtle)] rounded-lg flex items-start">
                  <Info className="w-5 h-5 text-[var(--primary-start)] mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Standard registration is free. Premium recruiting features are available with paid plans starting at $299/month.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-[var(--text-secondary)] mb-2">Already registered?</p>
                  <Link 
                    href="/login" 
                    className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
                  >
                    Log in to your account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 