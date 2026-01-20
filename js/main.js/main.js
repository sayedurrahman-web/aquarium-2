 // Mobile Menu Toggle
 const menuToggle = document.getElementById('menu-toggle');
 const navMenu = document.getElementById('nav-menu');

 menuToggle.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });

 // Close mobile menu when clicking on a link
 document.querySelectorAll('nav a').forEach(link => {
     link.addEventListener('click', () => {
         navMenu.classList.remove('active');
     });
 });

 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Lightbox functionality
 function openLightbox(imageSrc) {
     const lightbox = document.getElementById('lightbox');
     const lightboxImg = document.getElementById('lightbox-img');
     lightboxImg.src = imageSrc;
     lightbox.style.display = 'flex';
     document.body.style.overflow = 'hidden';
 }

 function closeLightbox() {
     const lightbox = document.getElementById('lightbox');
     lightbox.style.display = 'none';
     document.body.style.overflow = 'auto';
 }

 // Close lightbox when clicking outside the image
 document.getElementById('lightbox').addEventListener('click', function(e) {
     if (e.target === this) {
         closeLightbox();
     }
 });

 // Close lightbox with Escape key
 document.addEventListener('keydown', function(e) {
     if (e.key === 'Escape') {
         closeLightbox();
     }
 });

 // Form submission
 document.querySelector('form').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Thank you for your message! We will get back to you soon.');
     this.reset();
 });

 // Header background on scroll
 window.addEventListener('scroll', () => {
     const header = document.querySelector('header');
     if (window.scrollY > 100) {
         header.style.background = 'rgba(0, 51, 102, 0.98)';
     } else {
         header.style.background = 'rgba(0, 51, 102, 0.95)';
     }
 });

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = '1';
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, observerOptions);

 // Observe elements for animation
 document.querySelectorAll('.info-card, .gallery-item').forEach(el => {
     el.style.opacity = '0';
     el.style.transform = 'translateY(20px)';
     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
     observer.observe(el);
 });




//image slide  show 
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // every 5 seconds

  //top page 
  document.addEventListener('DOMContentLoaded', function () {
    const pageTopButton = document.querySelector('.c-pagetop');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) { // show after 300px of scroll
        pageTopButton.classList.add('c-pagetop--visible');
      } else {
        pageTopButton.classList.remove('c-pagetop--visible');
      }
    });

    pageTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
