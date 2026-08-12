import gsap from 'gsap';

export function setupCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorText = cursor?.querySelector('.cursor-text');
  if (!cursor) return;

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15,
      ease: 'power2.out'
    });
  });

  // Interactive element hover triggers
  const hoverables = [
    { selector: '.spine-column', text: 'VIEW' },
    { selector: '.project-media-wrapper', text: 'EXPLORE' },
    { selector: '.postage-stamp', text: 'ORIGIN' },
    { selector: '.oval-btn', text: 'OPEN' },
    { selector: '.menu-toggle-btn', text: 'MENU' }
  ];

  hoverables.forEach(({ selector, text }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        if (cursorText) cursorText.textContent = text;
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
      });
    });
  });
}
