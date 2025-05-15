'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // For demo - navigate to dashboard after "login"
      console.log('Login attempt with:', { email });
      setIsSubmitting(false);
      
      // For demo - show error for specific email
      if (email === 'error@example.com') {
        setError('Invalid email or password');
      } else {
        // In a real app, you would authenticate and redirect here
        window.location.href = '/';
      }
    }, 1500);
  };

  return (
    <main className="pt-16 pb-24">
      {/* Hero Section */}
      {/* <section className="bg-hero-gradient py-10 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-md text-on-gradient">Welcome Back to GradLyft</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90 drop-shadow text-on-gradient">
            Sign in to access your account and explore opportunities.
          </p>
        </div>
      </section> */}

      {/* Login Form Section with Illustration */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Login Form - Left Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Sign In</h2>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-[var(--text-muted)]" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                        Password
                      </label>
                      <div className="text-sm">
                        <Link href="/forgot-password" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-[var(--text-muted)]" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 w-full px-4 py-3 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)]"
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--primary-start)]"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text-secondary)]">
                      Remember me
                    </label>
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
                          Signing In...
                        </span>
                      ) : (
                        'Sign In'
                      )}
                    </button>
                  </div>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[var(--card-border)]"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-[var(--card-bg)] text-[var(--text-muted)]">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-[var(--card-border)] rounded-md shadow-sm bg-[var(--card-bg)] text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-[var(--card-border)] rounded-md shadow-sm bg-[var(--card-bg)] text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                      Don't have an account?{' '}
                      <Link href="/register" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium">
                        Register now
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              
              {/* Illustration - Right Side */}
              <div className="hidden md:block md:w-1/2 bg-hero-gradient dark:bg-cool-gradient p-12">
                <div className="h-full flex flex-col justify-center items-center text-on-gradient">
                  <div className="mb-8">
                    <svg className="w-64 h-64" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M250 400C338.366 400 410 328.366 410 240C410 151.634 338.366 80 250 80C161.634 80 90 151.634 90 240C90 328.366 161.634 400 250 400Z" fill="currentColor" fillOpacity="0.1" />
                      <path d="M150 230C150 215.67 155.273 202.18 164.645 192.32C174.016 182.46 186.848 177 200.5 177C214.152 177 226.984 182.46 236.355 192.32C245.727 202.18 251 215.67 251 230L200.5 230L150 230Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M350 230C350 215.67 344.727 202.18 335.355 192.32C325.984 182.46 313.152 177 299.5 177C285.848 177 273.016 182.46 263.645 192.32C254.273 202.18 249 215.67 249 230L299.5 230L350 230Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M250 330C250 290 270 280 280 270H220C230 280 250 290 250 330Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M110 170C110 142.386 132.386 120 160 120" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M390 170C390 142.386 367.614 120 340 120" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M250 400V460" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M180 390L160 450" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                      <path d="M320 390L340 450" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Welcome Back!</h3>
                  <p className="text-center max-w-xs">
                    Sign in to access your personalized dashboard and continue your journey with GradLyft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
