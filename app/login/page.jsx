'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, Sparkles, Stars } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
        router.push('/profile/dashboard');
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)] overflow-hidden py-16">
      {/* Animated floating elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-[var(--floating-bg-1)] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[var(--floating-bg-2)] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[var(--floating-bg-3)] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Login Card */}
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-lg bg-[var(--form-bg)] rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:shadow-xl border border-[var(--glass-border)]">
          <div className="flex flex-col md:flex-row">
            {/* Left side with form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="mb-10 flex items-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--youth-yellow)] rounded-full flex items-center justify-center">
                    <Stars className="h-3 w-3 text-white" />
                  </div>
                </div>
                <h2 className="ml-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)]">Welcome Back</h2>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 animate-fade-in dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--form-text)] ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-[var(--form-text-muted)] group-hover:text-[var(--input-focus)] transition-colors duration-200" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full px-4 py-3 rounded-xl border border-[var(--input-border)] focus:border-[var(--input-focus)] focus:ring focus:ring-[var(--input-focus-ring)] focus:ring-opacity-50 bg-[var(--input-bg)] backdrop-blur-sm transition-all duration-200 text-[var(--form-text)]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-[var(--form-text)] ml-1">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-[var(--link-color)] hover:text-[var(--link-hover)] transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-[var(--form-text-muted)] group-hover:text-[var(--input-focus)] transition-colors duration-200" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 w-full px-4 py-3 rounded-xl border border-[var(--input-border)] focus:border-[var(--input-focus)] focus:ring focus:ring-[var(--input-focus-ring)] focus:ring-opacity-50 bg-[var(--input-bg)] backdrop-blur-sm transition-all duration-200 text-[var(--form-text)]"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[var(--form-text-muted)] hover:text-[var(--input-focus)] transition-colors focus:outline-none"
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
                    className="h-5 w-5 rounded border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--primary-start)] focus:ring-[var(--input-focus)]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--form-text)]">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] hover:from-[var(--primary-start)] hover:to-[var(--primary-end)] hover:brightness-110 text-white py-3 px-6 rounded-xl font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
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

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[var(--input-border)]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[var(--form-bg)] text-[var(--form-text-muted)]">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2.5 px-4 border border-[var(--input-border)] rounded-xl shadow-sm bg-[var(--input-bg)] hover:bg-opacity-70 text-sm font-medium text-[var(--form-text)] transition-all duration-200 hover:shadow"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2.5 px-4 border border-[var(--input-border)] rounded-xl shadow-sm bg-[var(--input-bg)] hover:bg-opacity-70 text-sm font-medium text-[var(--form-text)] transition-all duration-200 hover:shadow"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                    </svg>
                    Facebook
                  </button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-[var(--form-text)]">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium transition-colors">
                      Register now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            
            {/* Right side with illustration */}
            <div className="hidden md:block w-1/2 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] p-12">
              <div className="h-full flex flex-col justify-center items-center text-white">
                <div className="mb-8 relative">
                  {/* Animated icon */}
                  <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 animate-pulse-glow opacity-20 rounded-full"></div>
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Small floating animation elements */}
                  <div className="absolute -top-6 -right-4 w-12 h-12 bg-teal-300/30 rounded-full animate-float"></div>
                  <div className="absolute bottom-0 -left-8 w-16 h-16 bg-blue-300/30 rounded-full animate-float animation-delay-2000"></div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-center">Glad to see you again!</h3>
                <p className="text-center text-white/80 leading-relaxed drop-shadow-md">
                  Sign in and continue your journey with us. Your future starts with the connections you make today.
                </p>
                
                <div className="flex items-center mt-8 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 30px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}