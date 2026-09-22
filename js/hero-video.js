// Play the decorative video unless the visitor prefers reduced motion.
(() => {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyMotionPreference() {
    if (motionPreference.matches) {
      video.pause();
    } else {
      // Browsers may block autoplay; leave the video still if that happens.
      video.play().catch(() => {});
    }
  }

  motionPreference.addEventListener('change', applyMotionPreference);
  applyMotionPreference();
})();
