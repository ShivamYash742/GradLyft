'use client';

import React from 'react';
import { useTheme } from '../../components/ThemeProvider';
import Link from 'next/link';
import { Check, ChevronRight, User, Calendar, Bookmark } from 'lucide-react';

export default function ThemeTestPage() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Theme Test Page</h1>
      <div className="mb-6">
        <p className="text-[var(--text-secondary)] mb-2">Current Theme: <span className="font-bold">{theme}</span></p>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-[var(--primary-start)] text-white rounded-md hover:bg-[var(--primary-end)] transition-colors"
        >
          Toggle Theme
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Test Card 1 - Basic Card */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Basic Card</h2>
          <p className="text-[var(--text-secondary)] mb-4">
            This is a basic card with text elements. Check if the text is readable in both light and dark modes.
          </p>
          <div className="flex items-center text-[var(--text-muted)]">
            <Calendar className="w-4 h-4 mr-1" />
            <span>January 15, 2023</span>
          </div>
        </div>
        
        {/* Test Card 2 - Form Elements */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Form Elements</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Text Input</label>
              <input 
                type="text" 
                placeholder="Enter text here"
                className="w-full rounded-md border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Select</label>
              <select className="w-full rounded-md border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-2 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--input-focus)]">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Test Card 3 - Buttons */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Buttons</h2>
          <div className="space-y-4">
            <button className="gradient-button text-white px-4 py-2 rounded-md w-full">
              Primary Button
            </button>
            <button className="border border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--section-light)] px-4 py-2 rounded-md w-full">
              Secondary Button
            </button>
            <button className="bg-[var(--section-light)] text-[var(--text-primary)] px-4 py-2 rounded-md w-full">
              Tertiary Button
            </button>
            <Link href="#" className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-medium inline-flex items-center">
              Link Example <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Test Card 4 - Badges and Status */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)]">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Badges and Status</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Completed
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                In Progress
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Pending
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Failed
              </span>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-start)] flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
              </div>
              <div className="ml-3">
                <div className="text-[var(--text-primary)] font-medium">Online User</div>
                <div className="text-[var(--text-muted)] text-sm">Last seen just now</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Test Card 5 - Tables */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)] col-span-full">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--card-border)]">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--card-border)]">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary)]">John Doe</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">2023-01-15</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--primary-start)]">
                    <button className="hover:text-[var(--primary-end)]">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-[var(--text-primary)]">Jane Smith</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]">2023-01-10</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[var(--primary-start)]">
                    <button className="hover:text-[var(--primary-end)]">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Test Card 6 - Background Colors */}
        <div className="card rounded-lg shadow-md p-6 bg-[var(--card-bg)] col-span-full">
          <h2 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Background Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-md bg-[var(--background)] border border-[var(--card-border)]">
              <span className="text-[var(--text-primary)] text-sm">Background</span>
            </div>
            <div className="p-4 rounded-md bg-[var(--section-light)]">
              <span className="text-[var(--text-primary)] text-sm">Section Light</span>
            </div>
            <div className="p-4 rounded-md bg-[var(--section-dark)]">
              <span className="text-[var(--text-primary)] text-sm">Section Dark</span>
            </div>
            <div className="p-4 rounded-md bg-[var(--card-bg)] border border-[var(--card-border)]">
              <span className="text-[var(--text-primary)] text-sm">Card Background</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 