// Theme Switcher with localStorage persistence
(function() {
  'use strict';

  const THEME_KEY = 'ks-portfolio-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Get initial theme (default to dark)
  function getInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === THEME_DARK || saved === THEME_LIGHT) {
      return saved;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    return THEME_DARK;
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeIcon(theme);
  }

  // Update theme icon
  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    const iconMobile = document.getElementById('theme-icon-mobile');
    const button = document.getElementById('theme-toggle');
    const buttonMobile = document.getElementById('theme-toggle-mobile');
    
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    if (theme === THEME_DARK) {
      // Show sun icon for light mode (opposite of current)
      if (icon) {
        icon.innerHTML = sunIcon;
      }
      if (iconMobile) {
        iconMobile.innerHTML = sunIcon;
      }
      if (button) {
        button.setAttribute('aria-label', 'Switch to light theme');
      }
      if (buttonMobile) {
        buttonMobile.setAttribute('aria-label', 'Switch to light theme');
      }
    } else {
      // Show moon icon for dark mode (opposite of current)
      if (icon) {
        icon.innerHTML = moonIcon;
      }
      if (iconMobile) {
        iconMobile.innerHTML = moonIcon;
      }
      if (button) {
        button.setAttribute('aria-label', 'Switch to dark theme');
      }
      if (buttonMobile) {
        buttonMobile.setAttribute('aria-label', 'Switch to dark theme');
      }
    }
  }

  // Toggle theme
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);
  }

  // Initialize on load
  function init() {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    // Set up toggle buttons - use event delegation for reliability
    document.addEventListener('click', function(e) {
      if (e.target.closest('#theme-toggle') || e.target.closest('#theme-toggle-mobile')) {
        e.preventDefault();
        toggleTheme();
      }
    });
    
    // Also set up direct listeners as backup
    const toggleBtn = document.getElementById('theme-toggle');
    const toggleBtnMobile = document.getElementById('theme-toggle-mobile');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    }
    
    if (toggleBtnMobile) {
      toggleBtnMobile.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_LIGHT : THEME_DARK);
        }
      });
    }
  }

  // Initialize immediately (before DOM is ready to avoid flash)
  // Set initial theme attribute first
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // Then initialize fully when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

