'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'student'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        userType: 'student'
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  const FAQs = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Register' button in the top right corner of our website. Follow the prompts to complete your profile."
    },
    {
      question: "How can universities partner with GradLyft?",
      answer: "Universities can partner with us by filling out the contact form on this page and selecting 'University' as your organization type. Our partnerships team will reach out to discuss options."
    },
    {
      question: "Do you offer internship opportunities at GradLyft?",
      answer: "Yes, we offer internships across various departments. Check our careers page for current openings or reach out through this contact form."
    },
    {
      question: "How can I post a job or event on the platform?",
      answer: "Employers can post jobs and events after creating an employer account. Once registered, you'll have access to our employer dashboard."
    }
  ];

  return (
    <main className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="bg-hero-gradient dark:bg-cool-gradient py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md text-on-gradient">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 drop-shadow text-on-gradient">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-section-light dark:bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 rounded-xl flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mb-4 shadow-md">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Email Us</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                For general inquiries and support
              </p>
              <a href="mailto:info@gradlyft.com" className="text-[var(--link-color)] font-medium hover:text-[var(--link-hover)] transition-colors">
                info@gradlyft.com
              </a>
            </div>
            
            <div className="card p-8 rounded-xl flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mb-4 shadow-md">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Call Us</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Monday to Friday, 9am to 5pm
              </p>
              <a href="tel:+918001234567" className="text-[var(--link-color)] font-medium hover:text-[var(--link-hover)] transition-colors">
                +91 800 123 4567
              </a>
            </div>
            
            <div className="card p-8 rounded-xl flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mb-4 shadow-md">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Visit Us</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Our headquarters location
              </p>
              <address className="text-[var(--link-color)] font-medium not-italic hover:text-[var(--link-hover)] transition-colors">
                123 Tech Park, Bengaluru<br />
                Karnataka, India 560001
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-section-dark dark:bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-pink dark:text-gradient-primary">Send Us a Message</h2>
              
              {submitMessage && (
                <div className={`p-4 mb-6 rounded-md ${submitMessage.type === 'success' ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200' : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200'}`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    I am a
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="student">Student</option>
                    <option value="university">University</option>
                    <option value="employer">Employer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
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
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <div className="card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Our Office Locations</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-brand-pink dark:text-[var(--primary-start)] mb-3">Headquarters</h4>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Bengaluru, India</p>
                      <p className="text-[var(--text-secondary)]">123 Tech Park, Whitefield</p>
                      <p className="text-[var(--text-secondary)]">Karnataka, India 560001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-brand-pink dark:text-[var(--primary-start)] mb-3">Regional Office</h4>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Mumbai, India</p>
                      <p className="text-[var(--text-secondary)]">456 Startup Hub, Bandra</p>
                      <p className="text-[var(--text-secondary)]">Maharashtra, India 400050</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-brand-pink dark:text-[var(--primary-start)] mb-3">Office Hours</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Monday - Friday</p>
                      <p className="text-[var(--text-secondary)]">9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Saturday</p>
                      <p className="text-[var(--text-secondary)]">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-hero-gradient dark:bg-cool-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Sunday</p>
                      <p className="text-[var(--text-secondary)]">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-section-light dark:bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-pink dark:text-gradient-primary">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {FAQs.map((faq, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-brand-pink dark:text-[var(--primary-start)] mb-3">{faq.question}</h3>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-block card p-8 rounded-xl">
              <p className="text-lg text-[var(--text-secondary)] mb-4">
                Can't find the answer you're looking for?
              </p>
              <a href="mailto:support@gradlyft.com" className="gradient-button text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:gradient-button-hover shadow-md hover:shadow-lg transition-all duration-300">
                Email our support team <Mail size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 