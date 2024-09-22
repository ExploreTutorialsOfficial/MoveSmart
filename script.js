document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.fade-in');

  function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      );
  }

  function handleScrollAnimation() {
      animatedElements.forEach(el => {
          if (isInViewport(el)) {
              el.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation();
});
