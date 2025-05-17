import React from 'react';

export const metadata = {
  title: 'Pricing Plans | GradLyft',
  description: 'Explore our flexible pricing plans designed to meet the needs of students, universities, and employers.',
};

export default function PricingPage() {
  const faqItems = [
    {
      question: 'How are university plans billed?',
      answer: 'University plans are billed annually based on student enrollment numbers. We offer flexible payment options to accommodate academic fiscal years.'
    },
    {
      question: 'Can we upgrade our plan mid-year?',
      answer: 'Yes, you can upgrade your plan at any time. The difference in price will be prorated for the remainder of your billing cycle.'
    },
    {
      question: 'Is there a discount for multi-year commitments?',
      answer: 'Yes, we offer discounts of up to 20% for multi-year agreements. Contact our sales team for more information.'
    },
    {
      question: 'Do you offer implementation assistance?',
      answer: 'All paid plans include implementation support. Premium and Enterprise plans include dedicated implementation managers.'
    },
    {
      question: 'How many admin users can we have?',
      answer: 'Standard plans include 5 admin users, Premium includes 15, and Enterprise plans have unlimited admin users.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, with phone and priority support for Premium and Enterprise plans. Enterprise customers also receive a dedicated customer success manager.'
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Header */}
      <div className="bg-[var(--section-dark)] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            Flexible Plans for Every Need
          </h1>
          <p className="mt-6 text-xl text-[var(--text-secondary)]">
            Choose the plan that works best for your institution or organization.
            All plans include our core platform features.
          </p>
        </div>
      </div>

      {/* Pricing Tabs */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg">
            <button className="px-6 py-2 rounded-md bg-[var(--btn-primary)] text-white">
              Universities
            </button>
            <button className="px-6 py-2 rounded-md text-[var(--text-secondary)]">
              Employers
            </button>
          </div>
        </div>

        {/* University Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Standard Plan */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[var(--card-border)]">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Standard</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold text-[var(--text-primary)]">$4,999</span>
                <span className="text-[var(--text-muted)]">/year</span>
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                For small institutions with up to 2,000 students
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Basic career portal</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Job listings & applications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Resume uploads</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Up to 5 admin users</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Email support</span>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-[var(--card-bg)] border-2 border-[var(--btn-primary)] rounded-xl overflow-hidden shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[var(--btn-primary)] text-white text-xs font-bold px-3 py-1 rounded-bl">
              POPULAR
            </div>
            <div className="p-6 border-b border-[var(--card-border)]">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Premium</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold text-[var(--text-primary)]">$9,999</span>
                <span className="text-[var(--text-muted)]">/year</span>
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                For mid-size institutions with up to 10,000 students
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Customized career portal</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Advanced employer matching</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Career event management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Up to 15 admin users</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Priority support</span>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[var(--card-border)]">
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">Enterprise</h3>
              <div className="mt-4">
                <span className="text-2xl font-bold text-[var(--text-primary)]">Custom Pricing</span>
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                For large institutions with 10,000+ students
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Fully customized platform</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">API access & custom integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Alumni networking features</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Unlimited admin users</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Advanced reporting & insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-[var(--text-secondary)]">Dedicated account manager</span>
                </li>
              </ul>
              <button className="mt-8 w-full py-3 border border-[var(--btn-primary)] text-[var(--btn-primary)] rounded-lg hover:bg-[var(--btn-primary)] hover:text-white transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 mb-20">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Compare All Features</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="px-6 py-4 text-left text-[var(--text-primary)]">Feature</th>
                  <th className="px-6 py-4 text-center text-[var(--text-primary)]">Standard</th>
                  <th className="px-6 py-4 text-center text-[var(--text-primary)]">Premium</th>
                  <th className="px-6 py-4 text-center text-[var(--text-primary)]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Branded Portal</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Custom</td>
                  <td className="px-6 py-4 text-center">Fully Custom</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Job Postings</td>
                  <td className="px-6 py-4 text-center">100/month</td>
                  <td className="px-6 py-4 text-center">500/month</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Virtual Career Fairs</td>
                  <td className="px-6 py-4 text-center">2/year</td>
                  <td className="px-6 py-4 text-center">6/year</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Employer Connections</td>
                  <td className="px-6 py-4 text-center">Regional</td>
                  <td className="px-6 py-4 text-center">National</td>
                  <td className="px-6 py-4 text-center">Global</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Student Accounts</td>
                  <td className="px-6 py-4 text-center">Up to 2,000</td>
                  <td className="px-6 py-4 text-center">Up to 10,000</td>
                  <td className="px-6 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-6 py-4 text-[var(--text-secondary)]">Analytics</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                  <td className="px-6 py-4 text-center">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.question}</h3>
                <p className="text-[var(--text-secondary)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[var(--section-dark)] rounded-2xl p-12 text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Contact our team for a personalized demo and to discuss the best plan for your institution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[var(--btn-primary)] text-white rounded-lg hover:bg-[var(--btn-primary-hover)] transition">
              Schedule a Demo
            </button>
            <button className="px-8 py-3 border border-[var(--card-border)] rounded-lg hover:bg-[var(--section-bg)] transition">
              View Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 