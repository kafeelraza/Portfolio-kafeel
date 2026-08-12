import { playPaperCrunchSound } from './audioPlayer.js';
import { triggerPaperCrumpleToIntro, triggerPaperCrumpleToProject } from './spineAccordion.js';

export function setupDrawer(projects) {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('nav-drawer');
  const menuList = document.getElementById('drawer-menu-list');

  if (menuList && projects) {
    menuList.innerHTML = '';

    // 00. Intro / Bio menu item
    const introItem = document.createElement('div');
    introItem.className = 'drawer-menu-item';
    introItem.textContent = '00. BIOGRAPHY & TECHNICAL RESUME';
    introItem.addEventListener('click', () => {
      if (drawer) drawer.classList.remove('open');
      playPaperCrunchSound();

      document.querySelectorAll('.spine-column').forEach(el => el.classList.remove('active'));
      const introSpine = document.querySelector('.spine-column[data-project-id="intro-bio"]');
      if (introSpine) introSpine.classList.add('active');

      triggerPaperCrumpleToIntro();
    });
    menuList.appendChild(introItem);

    // Project items
    projects.forEach((proj, idx) => {
      const item = document.createElement('div');
      item.className = 'drawer-menu-item';
      item.textContent = `0${idx + 1}. ${proj.title}`;
      item.addEventListener('click', () => {
        if (drawer) drawer.classList.remove('open');
        playPaperCrunchSound();

        const spineEl = document.querySelector(`.spine-column[data-project-id="${proj.id}"]`);
        if (spineEl) {
          document.querySelectorAll('.spine-column').forEach(el => el.classList.remove('active'));
          spineEl.classList.add('active');
        }

        triggerPaperCrumpleToProject(proj);
      });
      menuList.appendChild(item);
    });
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      playPaperCrunchSound();
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      playPaperCrunchSound();
    });
  }
}
