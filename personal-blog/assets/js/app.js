// Main JavaScript file for the blog

// Helper function for theme switching
function setupThemeToggle() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  // Set initial theme based on saved preference or system preference
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (currentTheme === 'light') {
    document.documentElement.classList.add('light');
  } else if (prefersDarkScheme.matches) {
    document.documentElement.classList.add('dark');
  }
  
  // Add theme toggle to footer if it exists
  const footer = document.querySelector('.site-footer');
  if (footer) {
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = `<span class="theme-toggle-icon">🌓</span>`;
    
    themeToggle.addEventListener('click', () => {
      // If dark mode is enabled, switch to light mode
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        // Otherwise, switch to dark mode
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
    
    footer.appendChild(themeToggle);
  }
}

// Handle mobile navigation
function setupMobileNav() {
  const nav = document.querySelector('.site-nav');
  if (window.innerWidth < 768 && nav) {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.innerHTML = '☰';
    
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
    
    const headerInner = document.querySelector('.site-header__inner');
    if (headerInner) {
      headerInner.insertBefore(menuToggle, nav);
    }
  }
}

// Initialize all functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupMobileNav();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});