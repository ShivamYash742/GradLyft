'use client';

import { useState } from 'react';
import { BarChart2, PieChart, LineChart, Users, Clock, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function EmployerAnalyticsPage() {
  const [activeTab, setActiveTab] = useState('applicants');
  
  const featureCards = [
    {
      title: 'Applicant Insights',
      description: 'Track applicant sources, qualifications, and engagement levels across all your job postings.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Time-to-Hire Metrics',
      description: 'Monitor the efficiency of your recruitment process from application to offer acceptance.',
      icon: <Clock className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Conversion Tracking',
      description: 'Analyze which job postings and outreach efforts generate the highest quality candidates.',
      icon: <Target className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Performance Optimization',
      description: 'Get AI-powered recommendations to improve your job listings and candidate engagement.',
      icon: <Zap className="w-6 h-6 text-[var(--primary-start)]" />
    }
  ];

  // Sample chart components (these would be real charts in a production app)
  const ChartPlaceholder = ({ type, title }) => {
    const ChartIcon = type === 'bar' ? BarChart2 : type === 'pie' ? PieChart : LineChart;
    
    return (
      <div className="p-4 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-[var(--text-primary)]">{title}</h3>
          <ChartIcon className="w-5 h-5 text-[var(--text-muted)]" />
        </div>
        <div className="h-64 flex items-center justify-center bg-[var(--section-dark)] rounded-lg">
          <p className="text-[var(--text-muted)]">{type.charAt(0).toUpperCase() + type.slice(1)} Chart Visualization</p>
        </div>
        <div className="mt-3 text-sm text-[var(--text-muted)]">
          <p>Last updated: Today</p>
        </div>
      </div>
    );
  };

  // Tab content mapping
  const tabContent = {
    applicants: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder type="bar" title="Applicants by Job Posting" />
        <ChartPlaceholder type="pie" title="Applicant Sources" />
        <ChartPlaceholder type="line" title="Application Trends (30 Days)" />
        <ChartPlaceholder type="bar" title="Applicant Qualifications Distribution" />
      </div>
    ),
    engagement: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder type="line" title="Message Response Rate" />
        <ChartPlaceholder type="bar" title="Interview Acceptance Rate" />
        <ChartPlaceholder type="pie" title="Candidate Stage Distribution" />
        <ChartPlaceholder type="line" title="Engagement Over Time" />
      </div>
    ),
    performance: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder type="bar" title="Time-to-Hire by Position" />
        <ChartPlaceholder type="line" title="Job Posting Views" />
        <ChartPlaceholder type="pie" title="Offer Acceptance Rate" />
        <ChartPlaceholder type="bar" title="Cost per Hire" />
      </div>
    )
  };

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[var(--text-primary)]">
            Recruitment <span className="text-gradient-primary">Analytics</span>
          </h1>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Gain valuable insights into your recruitment process with our comprehensive analytics dashboard.
            Make data-driven decisions to optimize your hiring strategy.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featureCards.map((feature, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{feature.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 rounded-xl">
            <div className="flex flex-wrap border-b border-[var(--card-border)] mb-6">
              {['applicants', 'engagement', 'performance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-medium text-[var(--text-secondary)] capitalize ${
                    activeTab === tab 
                      ? 'border-b-2 border-[var(--primary-start)] text-[var(--primary-start)]' 
                      : 'hover:text-[var(--text-primary)]'
                  } transition-colors duration-200`}
                >
                  {tab} Analytics
                </button>
              ))}
            </div>

            <div className="px-2">
              {tabContent[activeTab]}
            </div>

            <div className="mt-8 p-4 bg-[var(--primary-subtle)] rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">Unlock Advanced Analytics</h3>
                  <p className="text-[var(--text-secondary)] mt-1">
                    Upgrade to our premium plan for custom reports, competitor benchmarks, and predictive hiring insights.
                  </p>
                </div>
                <Link 
                  href="/employer/register" 
                  className="mt-4 md:mt-0 gradient-button text-white px-6 py-2 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
            Ready to Optimize Your Recruitment Process?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Join leading companies that are using GradLyft analytics to make smarter hiring decisions 
            and build stronger relationships with top talent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/employer/register" 
              className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
            >
              Start Using Analytics
            </Link>
            <Link 
              href="/contact" 
              className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-md hover:bg-[var(--primary-subtle)] transition"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 