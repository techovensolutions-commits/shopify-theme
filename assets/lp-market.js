document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('[data-lp-reveal]');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
});
