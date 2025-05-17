'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

export default function TermsOfServicePage() {
  const [lastUpdated] = useState('May 15, 2024');

  const terms = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing or using GradLyft, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.'
    },
    {
      title: 'User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.'
    },
    {
      title: 'Student Responsibilities',
      content: 'As a student user, you are responsible for the accuracy and completeness of your profile information. You agree not to misrepresent your qualifications, education, or experience. You are also responsible for monitoring and responding to job opportunities and communications from employers.'
    },
    {
      title: 'University Responsibilities',
      content: 'Universities using our platform agree to manage student information in accordance with applicable education and privacy laws. Universities are responsible for ensuring they have proper authorization to share student information with prospective employers through our platform.'
    },
    {
      title: 'Employer Responsibilities',
      content: 'Employers must provide accurate job descriptions and company information. You agree not to discriminate against applicants based on race, color, religion, gender, sexual orientation, national origin, disability, age, or any other status protected by law. You are responsible for complying with all applicable employment laws.'
    },
    {
      title: 'Content Ownership',
      content: 'You retain all rights to the content you post on GradLyft. By posting content, you grant us a non-exclusive, worldwide license to use, store, display, reproduce, and distribute your content in connection with our services.'
    },
    {
      title: 'Prohibited Activities',
      content: 'Users may not engage in activities that violate laws, infringe on intellectual property rights, harass other users, distribute spam, transmit malware, or attempt to gain unauthorized access to our systems. We reserve the right to suspend or terminate accounts engaging in prohibited activities.'
    },
    {
      title: 'Limitation of Liability',
      content: 'GradLyft is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, availability, or accuracy of our services. In no event shall GradLyft be liable for any indirect, incidental, special, consequential, or punitive damages.'
    },
    {
      title: 'Modification of Terms',
      content: 'We reserve the right to modify these Terms of Service at any time. We will notify users of material changes through the platform or by email. Your continued use of GradLyft after such modifications constitutes your acceptance of the revised terms.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which GradLyft operates, without regard to its conflict of law principles.'
    }
  ];

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">Terms of Service</h1>
          <p className="mt-4 text-center text-[var(--text-secondary)]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[var(--text-secondary)] mb-4">
              Welcome to GradLyft. These Terms of Service govern your use of our platform and services. 
              Please read these terms carefully before using GradLyft.
            </p>
          </div>

          <div className="space-y-4">
            {terms.map((term, index) => (
              <Disclosure key={index} as="div" className="card p-4 rounded-xl">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-[var(--text-primary)] font-medium focus:outline-none">
                      <span className="text-xl">{term.title}</span>
                      <ChevronUp
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-[var(--text-primary)]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-[var(--text-secondary)]">
                      {term.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <div className="mt-12 p-6 card rounded-xl">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Contact Us</h2>
            <p className="text-[var(--text-secondary)]">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:legal@gradlyft.com" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                legal@gradlyft.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 