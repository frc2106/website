// Rotating hero words. Keep entries unique so adjacent words cannot repeat.
(() => {
  const element = document.getElementById('dynamicText');
  if (!element) return;

  const words = [
    'designing', 'programming', 'innovating', 'collaborating', 'engineering',
    'inspiring', 'competing', 'mentoring', 'building', 'learning', 'exploring',
    'inventing', 'CAD', 'machining', 'leading', 'connecting', 'transforming',
    'challenges', 'games', 'discovering', 'teaching', 'fun', 'growing',
    'education', 'innovation', 'competition', 'teamwork', 'problem-solving',
    'strategy', 'achievement', 'leadership', 'communication', 'outreach',
    'creativity', 'STEM', 'imagination', 'sustainability', 'discovery',
    'collaboration', 'inspiration'
  ];
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let interval;
  let fadeTimeout;

  function changeWord() {
    const choices = words.filter(word => word !== element.textContent);
    element.style.opacity = '0';
    fadeTimeout = window.setTimeout(() => {
      element.textContent = choices[Math.floor(Math.random() * choices.length)];
      element.style.opacity = '1';
    }, 500);
  }

  function updateAnimation() {
    window.clearInterval(interval);
    window.clearTimeout(fadeTimeout);
    element.style.opacity = '1';
    if (!motionPreference.matches && !document.hidden) {
      interval = window.setInterval(changeWord, 2500);
    }
  }

  motionPreference.addEventListener('change', updateAnimation);
  document.addEventListener('visibilitychange', updateAnimation);
  updateAnimation();
})();
