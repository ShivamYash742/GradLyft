'use client';

import Link from 'next/link';

const Footer = () => {
  const sections = [
    {
      title: "For Students",
      links: [
        { name: "Find Jobs", href: "/student/jobs" },
        { name: "Build Profile", href: "/student/profile" },
        { name: "Track Applications", href: "/profile/dashboard" },
        { name: "Career Resources", href: "/student/resources" }
      ]
    },
    {
      title: "For Universities",
      links: [
        { name: "Student Management", href: "/universities/students" },
        { name: "Career Services", href: "/universities/career-services" },
        { name: "Analytics", href: "/universities/analytics" },
        { name: "Partner With Us", href: "/universities/register" }
      ]
    },
    {
      title: "For Employers",
      links: [
        { name: "Post Jobs", href: "/employer/post-job" },
        { name: "Manage Candidates", href: "/employer/dashboard" },
        { name: "Analytics", href: "/employer/analytics" },
        { name: "Partner With Us", href: "/employer/register" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-[var(--section-dark)] border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-base text-[var(--text-secondary)] hover:text-[var(--link-hover)] transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--card-border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gradient-primary">
                GradLyft
              </Link>
              <p className="ml-4 text-[var(--text-secondary)]">
                Empowering the next generation of professionals
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--link-hover)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--link-hover)]">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--link-hover)]">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} GradLyft. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 