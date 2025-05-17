'use client';

import { PieChart, BarChart, LineChart, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function UniversityAnalyticsPage() {
  const features = [
    {
      title: 'Placement Metrics',
      description: 'Track graduate placement rates, time-to-employment, and retention statistics across different programs and departments.',
      icon: <TrendingUp className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Employer Insights',
      description: 'Understand which employers are hiring your graduates, their satisfaction rates, and hiring trends over time.',
      icon: <Users className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Salary Analytics',
      description: 'Monitor starting salaries, compensation trends, and compare with industry benchmarks for different degree programs.',
      icon: <DollarSign className="w-6 h-6 text-[var(--primary-start)]" />
    },
    {
      title: 'Custom Reports',
      description: 'Generate custom reports for accreditation, administrative reviews, or marketing purposes with our flexible reporting tools.',
      icon: <PieChart className="w-6 h-6 text-[var(--primary-start)]" />
    }
  ];

  const visualizations = [
    {
      title: 'Placement Rate Trends',
      type: 'line',
      icon: <LineChart className="w-8 h-8 text-[var(--primary-start)]" />
    },
    {
      title: 'Employer Distribution',
      type: 'pie',
      icon: <PieChart className="w-8 h-8 text-[var(--primary-start)]" />
    },
    {
      title: 'Salary Comparisons',
      type: 'bar',
      icon: <BarChart className="w-8 h-8 text-[var(--primary-start)]" />
    }
  ];

  return (
    <main className="bg-[var(--section-light)]">
      <section className="py-16 bg-gradient-to-b from-[var(--primary-subtle)] to-[var(--section-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-[var(--text-primary)]">
                Data-Driven <span className="text-gradient-primary">Career Services</span>
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
                Comprehensive analytics to track student outcomes, measure program effectiveness, 
                and demonstrate the value of your career services department.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="/universities/register" 
                  className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-[var(--primary-start)] text-[var(--primary-start)] px-6 py-3 rounded-md hover:bg-[var(--primary-subtle)] transition"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="card p-6 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden bg-[var(--section-dark)]">
                  {/* This would be a chart/graph image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-[var(--text-muted)]">Analytics Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient-primary">
            Powerful Analytics Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[var(--primary-subtle)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gradient-primary">
            Visualization Examples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            Turn complex data into actionable insights with our intuitive visualization tools.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visualizations.map((viz, index) => (
              <div key={index} className="card p-6 rounded-xl text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[var(--primary-subtle)] flex items-center justify-center mb-4">
                  {viz.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">{viz.title}</h3>
                <p className="text-[var(--text-secondary)] mt-2 capitalize">{viz.type} Chart</p>
                
                <div className="mt-4 aspect-video rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]">
                  {/* This would be a sample chart */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-[var(--text-muted)] text-sm">{viz.type} chart preview</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 rounded-xl bg-gradient-to-r from-[var(--primary-subtle)] to-[var(--section-light)]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Ready to Transform Your Data Strategy?
              </h2>
              <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
                Join leading universities that are using GradLyft analytics to make data-driven decisions and improve student outcomes.
              </p>
              <Link 
                href="/universities/register" 
                className="gradient-button text-white px-6 py-3 rounded-md hover:gradient-button-hover transition shadow-md hover:shadow-lg inline-flex items-center"
              >
                Start Using Analytics <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 