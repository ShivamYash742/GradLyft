import React from 'react';

export const metadata = {
  title: 'Accessibility | GradLyft',
  description: 'Learn about GradLyft\'s commitment to digital accessibility and inclusivity.',
};

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Accessibility Statement</h1>
      <div className="text-[var(--text-secondary)] space-y-6">
        <p>
          Last Updated: June 1, 2024
        </p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Our Commitment</h2>
          <p>
            GradLyft is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
          </p>
          <p>
            We believe that all users should have equal access to our career development platform, regardless of abilities or impairments. Our ongoing accessibility efforts are guided by the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Measures Taken</h2>
          <p>
            To ensure accessibility, we have taken the following measures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Including accessibility as part of our design and development process</li>
            <li>Regular training for our staff on accessibility best practices</li>
            <li>Conducting accessibility audits and testing with assistive technologies</li>
            <li>Engaging with users with disabilities to gather feedback</li>
            <li>Establishing clear accessibility goals and responsibilities</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Accessibility Features</h2>
          <p>
            Our platform includes the following accessibility features:
          </p>
          
          <h3 className="text-lg font-medium text-[var(--text-primary)]">Navigation and Structure</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Semantic HTML to provide a logical structure</li>
            <li>Skip navigation links for screen reader users</li>
            <li>Keyboard navigation for all interactive elements</li>
            <li>Consistent and predictable navigation patterns</li>
            <li>Visible focus indicators for keyboard users</li>
          </ul>
          
          <h3 className="text-lg font-medium text-[var(--text-primary)]">Content and Images</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Alternative text for all meaningful images</li>
            <li>Descriptive link text that makes sense out of context</li>
            <li>Text resizing without loss of content or functionality</li>
            <li>Sufficient color contrast between text and backgrounds</li>
            <li>Content that functions without relying solely on color</li>
          </ul>
          
          <h3 className="text-lg font-medium text-[var(--text-primary)]">Forms and Interactive Elements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Properly labeled form fields with clear instructions</li>
            <li>Error identification and suggestions for correction</li>
            <li>ARIA attributes to enhance screen reader compatibility</li>
            <li>No time limits or the ability to extend them</li>
            <li>Accessible custom components (e.g., modals, dropdowns)</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Compatibility with Assistive Technologies</h2>
          <p>
            GradLyft aims to be compatible with various assistive technologies, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Screen readers (e.g., JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Voice recognition software</li>
            <li>Alternative input devices</li>
          </ul>
          <p>
            We regularly test our platform with these technologies to ensure compatibility and usability.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Known Issues</h2>
          <p>
            While we strive for complete accessibility, we acknowledge that there may be areas of our platform that require improvement. We are actively working to address the following known issues:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Some interactive data visualizations on the analytics dashboard may have limited accessibility. Alternative formats for this data are available upon request.</li>
            <li>PDF documents uploaded by third-party users (such as resumes or job descriptions) may not meet accessibility standards.</li>
            <li>Some third-party integrations may not fully support all accessibility features.</li>
          </ul>
          <p>
            We are committed to addressing these issues and continuously improving our platform's accessibility.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Standards and Compliance</h2>
          <p>
            GradLyft aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities.
          </p>
          <p>
            We also adhere to relevant accessibility laws and regulations, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Americans with Disabilities Act (ADA)</li>
            <li>Section 508 of the Rehabilitation Act</li>
            <li>EN 301 549 (European standard for digital accessibility)</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Continuous Improvement</h2>
          <p>
            Our accessibility efforts are ongoing, and we regularly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct accessibility audits of existing features</li>
            <li>Test new features for accessibility before release</li>
            <li>Train our development and design teams on accessibility principles</li>
            <li>Incorporate user feedback to identify and address issues</li>
          </ul>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Feedback and Assistance</h2>
          <p>
            We welcome your feedback on the accessibility of GradLyft. If you experience any accessibility barriers while using our platform or have suggestions for improvement, please contact us at:
          </p>
          <div className="pl-6">
            <p>Email: accessibility@gradlyft.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <p className="mt-4">
            If you need assistance accessing any part of our platform, please contact our support team, and we will be happy to help. We can provide information in alternative formats upon request.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Accessibility Resources</h2>
          <p>
            To learn more about digital accessibility, you may find the following resources helpful:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-[var(--link-color)] hover:underline" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG)
              </a>
            </li>
            <li>
              <a href="https://www.ada.gov/" className="text-[var(--link-color)] hover:underline" target="_blank" rel="noopener noreferrer">
                Americans with Disabilities Act (ADA)
              </a>
            </li>
            <li>
              <a href="https://www.section508.gov/" className="text-[var(--link-color)] hover:underline" target="_blank" rel="noopener noreferrer">
                Section 508
              </a>
            </li>
            <li>
              <a href="https://www.w3.org/WAI/" className="text-[var(--link-color)] hover:underline" target="_blank" rel="noopener noreferrer">
                Web Accessibility Initiative (WAI)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
} 