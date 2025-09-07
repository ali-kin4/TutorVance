'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 rounded-full p-1 bg-gray-200 dark:bg-gray-800">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'light'
            ? 'bg-white text-gray-800'
            : 'text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to light mode"
      >
        <i className="fas fa-sun"></i>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'dark'
            ? 'bg-gray-900 text-white'
            : 'text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to dark mode"
      >
        <i className="fas fa-moon"></i>
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${
          theme === 'system'
            ? 'bg-white dark:bg-gray-900 text-gray-800 dark:text-white'
            : 'text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to system theme"
      >
        <i className="fas fa-desktop"></i>
      </button>
    </div>
  );
}
