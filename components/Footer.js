'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--section-dark)] border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gradient-primary">
              GradLyft
            </Link>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Connecting students, universities, and employers for a brighter future. Find your path and grow your career with us.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-[var(--text-muted)] hover:text-[var(--link-color)]">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[var(--text-muted)] hover:text-[var(--link-color)]">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-[var(--link-color)]">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[var(--text-muted)] hover:text-[var(--link-color)]">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/student/jobs" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/student/events" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/profile/dashboard" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Track Applications
                </Link>
              </li>
              <li>
                <Link href="/student/resources" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/student/mentorship" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Find a Mentor
                </Link>
              </li>
            </ul>
          </div>

          {/* For Universities and Employers */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">For Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/universities" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/employer" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Employers
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/partner-resources" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Partner Resources
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[var(--text-muted)] mr-2 mt-0.5" />
                <span className="text-[var(--text-secondary)]">info@gradlyft.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[var(--text-muted)] mr-2 mt-0.5" />
                <span className="text-[var(--text-secondary)]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--text-muted)] mr-2 mt-0.5" />
                <span className="text-[var(--text-secondary)]">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--card-border)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[var(--text-muted)]">
              © {currentYear} GradLyft. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-[var(--text-secondary)] hover:text-[var(--link-color)]">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 