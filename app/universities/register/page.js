'use client';

import { useState } from 'react';
import { CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

export default function UniversityRegisterPage() {
  const [formData, setFormData] = useState({
    universityName: '',
    website: '',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    department: '',
    studentCount: '',
    interests: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Student Management',
    'Career Services',
    'Analytics',
    'Employer Partnerships',
    'Career Events',
    'Curriculum Development'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (option) => {
    const updatedInterests = formData.interests.includes(option)
      ? formData.interests.filter(item => item !== option)
      : [...formData.interests, option];
    
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const benefits = [
    'Access to employer network',
    'Comprehensive analytics dashboard',
    'Student management tools',
    'Career event organization',
    'Outcome tracking and reporting',
    'Dedicated support team'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--section-light)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto bg-[var(--primary-light)] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-[var(--primary-start)]" />
            </div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Registration Received!</h1>
            <p className="text-[var(--text-secondary)] mb-6">
              Thank you for your interest in partnering with GradLyft. A member of our university partnerships team will contact you within 1-2 business days to discuss next steps.
            </p>
            <Link 
              href="/universities" 
              className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-block"
            >
              Return to Universities Page
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
            Partner with <span className="text-gradient-primary">GradLyft</span>
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Complete the form below to register your university and join our network of educational institutions 
            dedicated to student success.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-10">
            <div className="lg:w-2/3">
              <div className="card p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">University Registration</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="universityName" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">University Name*</label>
                      <input
                        type="text"
                        id="universityName"
                        name="universityName"
                        required
                        value={formData.universityName}
                        onChange={handleChange}
                        className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">University Website*</label>
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
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Primary Contact Information</h3>
                    
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
                        <label htmlFor="title" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Job Title*</label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          required
                          value={formData.title}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Department*</label>
                        <input
                          type="text"
                          id="department"
                          name="department"
                          required
                          value={formData.department}
                          onChange={handleChange}
                          placeholder="e.g., Career Services, Student Affairs"
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label htmlFor="studentCount" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Approximate Student Count</label>
                        <select
                          id="studentCount"
                          name="studentCount"
                          value={formData.studentCount}
                          onChange={handleChange}
                          className="w-full p-3 border border-[var(--card-border)] rounded-md bg-[var(--card-bg)] text-[var(--text-primary)]"
                        >
                          <option value="">Select a range</option>
                          <option value="Under 1,000">Under 1,000</option>
                          <option value="1,000 - 5,000">1,000 - 5,000</option>
                          <option value="5,000 - 15,000">5,000 - 15,000</option>
                          <option value="15,000 - 30,000">15,000 - 30,000</option>
                          <option value="Over 30,000">Over 30,000</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-3">Areas of Interest (select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interestOptions.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`interest-${option}`}
                            checked={formData.interests.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="w-4 h-4 text-[var(--primary-start)]"
                          />
                          <label htmlFor={`interest-${option}`} className="ml-2 text-[var(--text-secondary)]">
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
                      placeholder="Tell us about your current career services setup and what you're looking to achieve with GradLyft."
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
                    Submit Registration
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/3">
              <div className="card p-6 rounded-xl sticky top-8">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Benefits of Partnership</h3>
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
                    After submitting your registration, a member of our university partnerships team will contact you to discuss your specific needs and next steps.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-[var(--text-secondary)] mb-2">Have questions?</p>
                  <Link 
                    href="/contact" 
                    className="text-[var(--primary-start)] hover:text-[var(--primary-end)] font-medium"
                  >
                    Contact our support team
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