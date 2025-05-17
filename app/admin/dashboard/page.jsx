'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { Shield, User, LogOut, Clock, Calendar, Search, Filter, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import Image from 'next/image';

export default function AdminDashboard() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, pages: 0 });
  
  // Filters
  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Analytics summary
  const [analytics, setAnalytics] = useState({
    totalSessions: 0,
    averageDuration: 0,
    activeUsers: 0,
    topPages: []
  });
  
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await fetch('/api/admin/verify');
        const data = await res.json();
        
        if (!data.success) {
          router.push('/admin/login');
        } else {
          setIsAdmin(true);
          fetchSessions();
          fetchAnalytics();
        }
      } catch (err) {
        console.error('Admin verification error:', err);
        router.push('/admin/login');
      }
    };

    verifyAdmin();
  }, [router]);

  const fetchAnalytics = async () => {
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      
      const res = await fetch(`/api/admin/analytics?${params.toString()}`);
      const data = await res.json();
      
      if (data.success) {
        setAnalytics(data.data);
      }
    } catch (err) {
      console.error('Error fetching analytics:', err);
    }
  };

  const fetchSessions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Build query params
      const params = new URLSearchParams();
      params.append('page', pagination.page);
      params.append('limit', pagination.limit);
      
      if (userId) params.append('userId', userId);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      
      const res = await fetch(`/api/admin/sessions?${params.toString()}`);
      const data = await res.json();
      
      if (data.success) {
        setSessions(data.data.sessions);
        setPagination(data.data.pagination);
      } else {
        setError(data.message || 'Failed to fetch sessions');
      }
    } catch (err) {
      console.error('Error fetching sessions:', err);
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setPagination(prev => ({ ...prev, page: 1 })); // Reset to first page
    fetchSessions();
    fetchAnalytics();
  };

  const handleClearFilters = () => {
    setUserId('');
    setStartDate('');
    setEndDate('');
    setPagination(prev => ({ ...prev, page: 1 }));
    // Fetch with cleared filters
    setTimeout(() => {
      fetchSessions();
      fetchAnalytics();
    }, 0);
  };

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  useEffect(() => {
    if (isAdmin) {
      fetchSessions();
    }
  }, [pagination.page, pagination.limit, isAdmin]);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Calculate duration in human readable format
  const formatDuration = (seconds) => {
    if (!seconds) return 'N/A';
    
    if (seconds < 60) return `${seconds} sec`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hr ${minutes} min`;
  };

  // Get user display name
  const getUserName = (session) => {
    if (!session.user) return 'Anonymous';
    
    if (session.user.student?.name) {
      return `${session.user.student.name} (Student)`;
    }
    
    if (session.user.employer?.name) {
      return `${session.user.employer.name} (Employer)`;
    }
    
    if (session.user.role === 'ADMIN') {
      return `${session.user.email} (Admin)`;
    }
    
    return session.user.email;
  };

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin h-8 w-8 border-4 border-[var(--primary-start)] border-t-transparent rounded-full"></div>
        <span className="ml-3">Verifying access...</span>
      </div>
    );
  }

  return (
    <main className="pt-16 pb-24 min-h-screen bg-[var(--section-light)] relative emoji-bg">
      {/* Animated sparkles */}
      <div className="absolute top-12 right-32 animate-pulse">
        <Shield className="w-6 h-6 text-[var(--primary-start)]" />
      </div>
      <div className="absolute bottom-20 left-24 animate-pulse delay-1000">
        <Shield className="w-4 h-4 text-[var(--primary-mid)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Admin Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient-primary">Admin Dashboard</h1>
              <p className="text-[var(--text-secondary)]">Manage users and monitor activity</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[var(--primary-start)]/10 px-3 py-2 rounded-full">
              <User className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
              <span className="text-[var(--text-secondary)] font-medium">{user?.email || 'Admin'}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-white text-[var(--primary-end)] border border-[var(--primary-end)]/20 shadow-sm px-4 py-2 rounded-full hover:bg-[var(--primary-end)]/5 transition-colors flex items-center"
            >
              <LogOut className="w-5 h-5 mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        
        {/* Analytics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-[var(--card-border)] rounded-xl p-5 shadow-md relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5510.avif"
                alt="Analytics"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm text-[var(--text-secondary)] font-medium mb-1">Total Sessions</h3>
            <p className="text-2xl font-bold text-[var(--text-primary)]">{analytics.totalSessions.toLocaleString()}</p>
          </div>
          
          <div className="bg-white border border-[var(--card-border)] rounded-xl p-5 shadow-md relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/3d-cartoon-boy-studying-wearing-glasses_988987-175.avif"
                alt="Average Time"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm text-[var(--text-secondary)] font-medium mb-1">Average Time on Site</h3>
            <p className="text-2xl font-bold text-[var(--text-primary)]">{formatDuration(analytics.averageDuration)}</p>
          </div>
          
          <div className="bg-white border border-[var(--card-border)] rounded-xl p-5 shadow-md relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/small-boy-colorful-background-funny-cartoon-character-school-kid-3d-generative-ai_58409-28549.avif"
                alt="Active Users"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm text-[var(--text-secondary)] font-medium mb-1">Active Users</h3>
            <p className="text-2xl font-bold text-[var(--text-primary)]">{analytics.activeUsers.toLocaleString()}</p>
          </div>
          
          <div className="bg-white border border-[var(--card-border)] rounded-xl p-5 shadow-md relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/emoji-1584282_1280.webp"
                alt="Most Visited"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm text-[var(--text-secondary)] font-medium mb-1">Most Visited Page</h3>
            <p className="text-lg font-bold text-[var(--text-primary)] truncate">
              {analytics.topPages?.[0]?.page || 'N/A'}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {analytics.topPages?.[0]?.count ? `${analytics.topPages[0].count} visits` : ''}
            </p>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-white border border-[var(--card-border)] rounded-xl p-6 mb-6 shadow-md">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center">
            <Filter className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
            Filter Sessions
          </h2>
          
          <form onSubmit={handleApplyFilters} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                User ID
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-4 py-2 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-white border border-[var(--card-border)] text-[var(--text-primary)]"
                placeholder="Filter by user ID"
              />
            </div>
            
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-white border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>
            
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 rounded-md focus:ring-[var(--primary-start)] focus:border-[var(--primary-start)] shadow-sm bg-white border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>
            
            <div className="md:col-span-3 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-4 py-2 border border-[var(--card-border)] text-[var(--text-secondary)] rounded-full hover:bg-[var(--section-dark)] transition-colors"
              >
                Clear Filters
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[var(--primary-start)] to-[var(--primary-end)] text-white rounded-full hover:opacity-90 transition-colors shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </div>
        
        {/* Sessions Table */}
        <div className="bg-white border border-[var(--card-border)] rounded-xl overflow-hidden shadow-md">
          <div className="flex justify-between items-center p-4 border-b border-[var(--card-border)] bg-[var(--primary-start)]/5">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center">
              <Clock className="w-5 h-5 mr-2 text-[var(--primary-start)]" />
              User Sessions
            </h3>
            
            <button 
              onClick={fetchSessions}
              className="text-[var(--primary-start)] hover:text-[var(--primary-end)] p-2 rounded-full hover:bg-[var(--primary-start)]/10 transition-colors"
              disabled={loading}
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              {error}
            </div>
          )}
          
          {loading && sessions.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-[var(--primary-start)] border-t-transparent rounded-full"></div>
              <span className="ml-3 text-[var(--text-secondary)]">Loading sessions...</span>
            </div>
          ) : sessions.length === 0 ? (
            <div className="text-center py-12 text-[var(--text-muted)]">
              No sessions found with the current filters.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[var(--card-border)]">
                <thead className="bg-[var(--bg-secondary)]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Page</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Start Time
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">IP Address</th>
                  </tr>
                </thead>
                <tbody className="bg-[var(--card-bg)] divide-y divide-[var(--card-border)]">
                  {sessions.map((session) => (
                    <tr key={session.id} className="hover:bg-[var(--bg-hover)]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary)]">
                        {getUserName(session)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary)]">
                        {session.page}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-primary)]">
                        {session.action}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                        {formatDate(session.startedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">
                        {formatDuration(session.duration)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-muted)]">
                        {session.ipAddress}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Pagination */}
          {sessions.length > 0 && (
            <div className="px-6 py-4 flex items-center justify-between border-t border-[var(--card-border)]">
              <div className="text-sm text-[var(--text-muted)]">
                Showing <span className="font-medium">{((pagination.page - 1) * pagination.limit) + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(pagination.page * pagination.limit, pagination.total)}
                </span> of{' '}
                <span className="font-medium">{pagination.total}</span> results
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                  className={`p-2 rounded-md ${
                    pagination.page === 1
                      ? 'text-[var(--text-muted)] cursor-not-allowed'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <span className="text-sm text-[var(--text-secondary)]">
                  Page {pagination.page} of {pagination.pages || 1}
                </span>
                
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.pages}
                  className={`p-2 rounded-md ${
                    pagination.page >= pagination.pages
                      ? 'text-[var(--text-muted)] cursor-not-allowed'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 