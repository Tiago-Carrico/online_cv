import { useState, useEffect } from 'react';

export function useTheme() {
  // Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode (Obsidian Synth)
  });

  // Toggle function
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Side effect to update the HTML class and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggleTheme };
}
