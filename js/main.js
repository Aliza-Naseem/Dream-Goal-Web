const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  });
  
  document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));