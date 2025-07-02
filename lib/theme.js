/**
 * Theme utility functions for GradLyft
 * Provides consistent color and theme handling across the application
 */

/**
 * Returns the CSS variable with a fallback color
 * @param {string} cssVar - The CSS variable name (without var())
 * @param {string} fallback - The fallback color value
 * @returns {string} - CSS variable with fallback
 */
export const withFallback = (cssVar, fallback) => {
  return `var(${cssVar}, ${fallback})`;
};

/**
 * Common theme-aware background classes with appropriate fallbacks
 */
export const themeClasses = {
  // Backgrounds
  mainBg: "bg-[var(--background,#ffffff)] dark:bg-[var(--dark-background,#0f172a)]",
  cardBg: "bg-[var(--card-bg,#ffffff)] dark:bg-[var(--dark-card-bg,#1e293b)]",
  sectionLight: "bg-[var(--section-light,#ffffff)] dark:bg-[var(--dark-section-light,#1e293b)]",
  sectionDark: "bg-[var(--section-dark,#f9fafb)] dark:bg-[var(--dark-section-dark,#0f172a)]",
  
  // Text
  textPrimary: "text-[var(--text-primary,#171717)] dark:text-[var(--dark-text-primary,#f1f5f9)]",
  textSecondary: "text-[var(--text-secondary,#4b5563)] dark:text-[var(--dark-text-secondary,#cbd5e1)]",
  textMuted: "text-[var(--text-muted,#6b7280)] dark:text-[var(--dark-text-muted,#94a3b8)]",
  
  // Links
  link: "text-[var(--link-color,#3b82f6)] hover:text-[var(--link-hover,#2563eb)] dark:text-[var(--dark-link-color,#60a5fa)] dark:hover:text-[var(--dark-link-hover,#93c5fd)]",
  
  // Borders
  border: "border-[var(--card-border,#e5e7eb)] dark:border-[var(--dark-card-border,#334155)]",
  
  // Form elements
  input: "bg-[var(--input-bg,rgba(255,255,255,0.7))] dark:bg-[var(--dark-input-bg,rgba(15,23,42,0.7))] border-[var(--input-border,#e5e7eb)] dark:border-[var(--dark-input-border,#334155)] text-[var(--form-text,#374151)] dark:text-[var(--dark-form-text,#f1f5f9)] focus:border-[var(--input-focus,#3b82f6)] dark:focus:border-[var(--dark-input-focus,#60a5fa)] focus:ring-[var(--input-focus-ring,rgba(59,130,246,0.2))] dark:focus:ring-[var(--dark-input-focus-ring,rgba(96,165,250,0.2))]",
  
  // Buttons
  primaryButton: "bg-gradient-to-r from-[var(--primary-start,#3b82f6)] to-[var(--primary-end,#2563eb)] hover:from-[var(--primary-start,#2563eb)] hover:to-[var(--primary-end,#1d4ed8)] dark:from-[var(--dark-primary-start,#60a5fa)] dark:to-[var(--dark-primary-end,#3b82f6)] dark:hover:from-[var(--dark-primary-start,#3b82f6)] dark:hover:to-[var(--dark-primary-end,#2563eb)] text-white",
  secondaryButton: "bg-[var(--section-light,#ffffff)] dark:bg-[var(--dark-section-light,#1e293b)] text-[var(--text-primary,#171717)] dark:text-[var(--dark-text-primary,#f1f5f9)] border-[var(--card-border,#e5e7eb)] dark:border-[var(--dark-card-border,#334155)] hover:bg-[var(--section-dark,#f9fafb)] dark:hover:bg-[var(--dark-section-dark,#0f172a)]",
  
  // Shadows
  shadow: "shadow-[0_2px_4px_var(--card-shadow,rgba(0,0,0,0.05))] dark:shadow-[0_2px_4px_var(--dark-card-shadow,rgba(0,0,0,0.2))]",
  shadowHover: "hover:shadow-[0_4px_8px_var(--card-shadow,rgba(0,0,0,0.05))] dark:hover:shadow-[0_4px_8px_var(--dark-card-shadow,rgba(0,0,0,0.2))]",
  
  // Glass effects
  glassBg: "bg-[var(--form-bg,rgba(255,255,255,0.8))] dark:bg-[var(--dark-form-bg,rgba(15,23,42,0.8))] backdrop-blur-lg border-[var(--glass-border,rgba(255,255,255,0.5))] dark:border-[var(--dark-glass-border,rgba(255,255,255,0.1))]",
  
  // Status colors
  success: "text-[var(--success,#059669)] dark:text-[var(--dark-success,#34d399)] bg-[var(--success-bg,#ecfdf5)] dark:bg-[var(--dark-success-bg,rgba(52,211,153,0.1))]",
  warning: "text-[var(--warning,#d97706)] dark:text-[var(--dark-warning,#fbbf24)] bg-[var(--warning-bg,#fffbeb)] dark:bg-[var(--dark-warning-bg,rgba(251,191,36,0.1))]",
  error: "text-[var(--error,#dc2626)] dark:text-[var(--dark-error,#f87171)] bg-[var(--error-bg,#fef2f2)] dark:bg-[var(--dark-error-bg,rgba(248,113,113,0.1))]",
  info: "text-[var(--info,#2563eb)] dark:text-[var(--dark-info,#60a5fa)] bg-[var(--info-bg,#eff6ff)] dark:bg-[var(--dark-info-bg,rgba(96,165,250,0.1))]",
};

/**
 * Detects if the system prefers dark mode
 * Only works client-side
 * @returns {boolean} - true if system prefers dark mode
 */
export const systemPrefersDarkMode = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

/**
 * Creates CSS variables based on hex color and opacity
 * @param {string} hex - The hex color code
 * @param {number} opacity - Opacity value (0-100)
 * @returns {string} - RGBA value as a string
 */
export const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}; 