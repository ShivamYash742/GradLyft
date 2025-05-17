'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [lastUpdated] = useState('May 15, 2024');

  const policies = [
    {
      title: 'Information We Collect',
      content: 'We collect personal information such as your name, email address, education background, work experience, and other details you provide when creating an account or updating your profile. We also collect usage data to improve our services and user experience.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use your information to provide and improve our services, match students with potential employers, enable universities to manage their students, and send relevant communications about opportunities and events. We may also use anonymized data for research and analytics purposes.'
    },
    {
      title: 'Information Sharing',
      content: 'We share your information with employers when you apply for jobs, with universities if you are affiliated with them, and with service providers who help us operate our platform. We do not sell your personal information to third parties.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. We regularly review and update our security practices to maintain the integrity of your data.'
    },
    {
      title: 'Your Rights and Choices',
      content: 'You have the right to access, correct, or delete your personal information. You can update your profile information at any time through your account settings. You may also opt out of certain communications by following the unsubscribe instructions in our emails.'
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: 'We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.'
    },
    {
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy policies before providing any personal information.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.'
    }
  ];

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">Privacy Policy</h1>
          <p className="mt-4 text-center text-[var(--text-secondary)]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[var(--text-secondary)] mb-4">
              At GradLyft, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and disclose information when you use our platform.
            </p>
            <p className="text-[var(--text-secondary)]">
              By using GradLyft, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-4">
            {policies.map((policy, index) => (
              <Disclosure key={index} as="div" className="card p-4 rounded-xl">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-[var(--text-primary)] font-medium focus:outline-none">
                      <span className="text-xl">{policy.title}</span>
                      <ChevronUp
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-[var(--text-primary)]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-[var(--text-secondary)]">
                      {policy.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <div className="mt-12 p-6 card rounded-xl">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Contact Us</h2>
            <p className="text-[var(--text-secondary)]">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:privacy@gradlyft.com" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                privacy@gradlyft.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 