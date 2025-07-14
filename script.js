document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Sticky header + back to top toggle
  const header = document.getElementById('header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // Back to top click
  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Portfolio filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    });
  }

  // Appear animation
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      '.service-card, .portfolio-item, .about-image, .about-text'
    );
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  document.querySelectorAll(
    '.service-card, .portfolio-item, .about-image, .about-text'
  ).forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});
