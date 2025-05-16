import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md text-on-gradient">About GradLyft</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 drop-shadow text-on-gradient">
            Connecting students with opportunities and empowering the next generation of professionals.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary-start)]">Our Story</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                GradLyft was founded in 2020 with a simple mission: to bridge the gap between education and employment. 
                We recognized that many talented students struggled to find the right opportunities after graduation, 
                while companies were eager to discover fresh talent.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                What began as a small platform for connecting students with employers has grown into a comprehensive 
                ecosystem that serves students, universities, and organizations alike. Today, GradLyft facilitates 
                connections between millions of students and thousands of employers worldwide.
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                Our platform has evolved to include competitions, hackathons, workshops, and networking events—all 
                designed to help students showcase their skills and connect with potential employers.
              </p>
            </div>
            <div className="card rounded-xl p-8 h-full shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--primary-start)] mb-3">Our Mission</h3>
                <p className="text-[var(--text-secondary)]">
                  To empower students and recent graduates by providing them with the resources, connections, 
                  and opportunities they need to launch successful careers.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[var(--primary-start)] mb-3">Our Vision</h3>
                <p className="text-[var(--text-secondary)]">
                  A world where every student has equal access to career opportunities, regardless of their 
                  background or location, and where potential is recognized and fostered.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--primary-start)] mb-3">Our Values</h3>
                <ul className="text-[var(--text-secondary)] space-y-2">
                  <li className="flex items-center"><span className="h-2 w-2 rounded-full gradient-primary mr-2"></span> Accessibility: Making opportunities available to all</li>
                  <li className="flex items-center"><span className="h-2 w-2 rounded-full gradient-primary mr-2"></span> Innovation: Constantly improving our platform</li>
                  <li className="flex items-center"><span className="h-2 w-2 rounded-full gradient-primary mr-2"></span> Diversity: Celebrating different backgrounds and perspectives</li>
                  <li className="flex items-center"><span className="h-2 w-2 rounded-full gradient-primary mr-2"></span> Integrity: Building trust through transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Meet Our Team</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              The passionate individuals behind GradLyft who are dedicated to creating opportunities for students worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 gradient-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Rahul Sharma</h3>
                <p className="text-[var(--primary-start)] mb-4">Founder & CEO</p>
                <p className="text-[var(--text-secondary)] mb-4">
                  Former education technology executive with a passion for connecting students with opportunities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="card rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 gradient-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Priya Patel</h3>
                <p className="text-[var(--primary-start)] mb-4">CTO</p>
                <p className="text-[var(--text-secondary)] mb-4">
                  Tech leader with expertise in building platforms that connect people and opportunities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="card rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 gradient-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Alex Johnson</h3>
                <p className="text-[var(--primary-start)] mb-4">Head of Partnerships</p>
                <p className="text-[var(--text-secondary)] mb-4">
                  Former university career advisor with strong connections to employers and educational institutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-muted)] hover:text-[var(--link-color)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-6 drop-shadow-md text-on-gradient">Join Our Growing Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-on-gradient">
              We're always looking for talented individuals who are passionate about empowering students 
              and creating opportunities for the next generation.
            </p>
            <Link href="/contact" className="bg-white text-[var(--primary-start)] px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Our Partners</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              We work with leading universities and companies to create opportunities for students.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="h-24 card rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold text-[var(--primary-start)]">University 1</div>
            </div>
            <div className="h-24 card rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold text-[var(--primary-start)]">Company 1</div>
            </div>
            <div className="h-24 card rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold text-[var(--primary-start)]">Organization</div>
            </div>
            <div className="h-24 card rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold text-[var(--primary-start)]">Foundation</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 