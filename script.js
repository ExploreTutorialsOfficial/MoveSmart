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
window.onscroll = function() {
    let button = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
