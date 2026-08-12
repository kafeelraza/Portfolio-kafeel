import gsap from 'gsap';
import { playPaperCrunchSound } from './audioPlayer.js';

let isFlipping = false;

export function setupSpineAccordion(projects, onSelect) {
  const sidebar = document.getElementById('spines-sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = '';

  // 1. Top Spine: INTRO / BIO
  const introSpine = document.createElement('div');
  introSpine.className = 'spine-column active';
  introSpine.dataset.projectId = 'intro-bio';
  introSpine.innerHTML = `
    <div class="spine-badge">
      <span>START</span>
      <span class="badge-tag-red">HOME</span>
    </div>
    <div class="spine-title-wrap">
      <h3 class="spine-title">00. INTRO / BIO</h3>
    </div>
  `;

  introSpine.addEventListener('click', () => {
    if (isFlipping) return;
    document.querySelectorAll('.spine-column').forEach(el => el.classList.remove('active'));
    introSpine.classList.add('active');
    triggerPaperCrumpleToIntro();
  });

  sidebar.appendChild(introSpine);

  // 2. Project Spines
  projects.forEach((proj, index) => {
    const spineEl = document.createElement('div');
    spineEl.className = 'spine-column';
    spineEl.dataset.projectId = proj.id;

    spineEl.innerHTML = `
      <div class="spine-badge">
        <span>${proj.year}</span>
        ${proj.isNew ? '<span class="badge-tag-red">NEW</span>' : ''}
      </div>
      
      <div class="spine-title-wrap">
        <h3 class="spine-title">0${index + 1}. ${proj.spineTitle}</h3>
      </div>
    `;

    spineEl.addEventListener('click', () => {
      if (isFlipping) return;
      document.querySelectorAll('.spine-column').forEach(el => el.classList.remove('active'));
      spineEl.classList.add('active');
      triggerPaperCrumpleToProject(proj);
    });

    sidebar.appendChild(spineEl);
  });

  // 3. Back to Intro button
  const backBtn = document.getElementById('back-to-intro-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      document.querySelectorAll('.spine-column').forEach(el => el.classList.remove('active'));
      introSpine.classList.add('active');
      triggerPaperCrumpleToIntro();
    });
  }
}

/**
 * Paper Crumple & Crush animation back to Intro Section
 */
export function triggerPaperCrumpleToIntro() {
  isFlipping = true;
  playPaperCrunchSound();

  const mainPanel = document.getElementById('main-panel');
  const creaseShadow = document.getElementById('paper-crease-overlay');
  const introSec = document.getElementById('intro-section');
  const showcaseSec = document.getElementById('project-showcase');
  const displacementMap = document.getElementById('crumple-displacement');

  if (!mainPanel) {
    if (introSec) introSec.classList.remove('hidden');
    if (showcaseSec) showcaseSec.classList.add('hidden');
    isFlipping = false;
    return;
  }

  mainPanel.classList.add('crumpling');

  const obj = { disp: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      mainPanel.classList.remove('crumpling');
      if (displacementMap) displacementMap.setAttribute('scale', '0');
      isFlipping = false;
    }
  });

  // Phase 1: Crumple & Crush active page into paper wad
  tl.to(obj, {
    disp: 85,
    duration: 0.45,
    ease: 'power3.in',
    onUpdate: () => {
      if (displacementMap) displacementMap.setAttribute('scale', obj.disp);
    }
  }, 0)
  .to(creaseShadow, { opacity: 0.8, duration: 0.4, ease: 'power2.in' }, 0)
  .to(mainPanel, {
    scale: 0.2,
    rotate: 24,
    rotateX: 20,
    opacity: 0.1,
    duration: 0.45,
    ease: 'power3.in',
    onComplete: () => {
      // Swap content to Intro
      if (introSec) introSec.classList.remove('hidden');
      if (showcaseSec) showcaseSec.classList.add('hidden');
      mainPanel.scrollTop = 0;

      // Set initial un-crumple pose
      gsap.set(mainPanel, { scale: 0.25, rotate: -20, rotateX: -15, opacity: 0.1 });
    }
  }, 0)

  // Phase 2: Un-crumple & Unfold Intro Page onto screen
  .to(obj, {
    disp: 0,
    duration: 0.55,
    ease: 'power2.out',
    onUpdate: () => {
      if (displacementMap) displacementMap.setAttribute('scale', obj.disp);
    }
  })
  .to(mainPanel, {
    scale: 1,
    rotate: 0,
    rotateX: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'back.out(1.4)'
  }, '-=0.55')
  .to(creaseShadow, { opacity: 0, duration: 0.5 }, '-=0.5');
}

/**
 * Paper Crumple & Crush animation to Project Case Study
 */
export function triggerPaperCrumpleToProject(proj) {
  isFlipping = true;
  playPaperCrunchSound();

  const mainPanel = document.getElementById('main-panel');
  const creaseShadow = document.getElementById('paper-crease-overlay');
  const introSec = document.getElementById('intro-section');
  const showcaseSec = document.getElementById('project-showcase');
  const displacementMap = document.getElementById('crumple-displacement');

  if (!mainPanel) {
    if (introSec) introSec.classList.add('hidden');
    if (showcaseSec) showcaseSec.classList.remove('hidden');
    updateProjectDOM(proj);
    isFlipping = false;
    return;
  }

  mainPanel.classList.add('crumpling');

  const obj = { disp: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      mainPanel.classList.remove('crumpling');
      if (displacementMap) displacementMap.setAttribute('scale', '0');
      isFlipping = false;
    }
  });

  // Phase 1: Crumple & Crush active page into paper wad
  tl.to(obj, {
    disp: 85,
    duration: 0.45,
    ease: 'power3.in',
    onUpdate: () => {
      if (displacementMap) displacementMap.setAttribute('scale', obj.disp);
    }
  }, 0)
  .to(creaseShadow, { opacity: 0.8, duration: 0.4, ease: 'power2.in' }, 0)
  .to(mainPanel, {
    scale: 0.2,
    rotate: -24,
    rotateX: 20,
    opacity: 0.1,
    duration: 0.45,
    ease: 'power3.in',
    onComplete: () => {
      // Swap content to Project Case Study
      if (introSec) introSec.classList.add('hidden');
      if (showcaseSec) showcaseSec.classList.remove('hidden');
      updateProjectDOM(proj);
      mainPanel.scrollTop = 0;

      // Set initial un-crumple pose
      gsap.set(mainPanel, { scale: 0.25, rotate: 20, rotateX: -15, opacity: 0.1 });
    }
  }, 0)

  // Phase 2: Un-crumple & Unfold Project Page onto screen
  .to(obj, {
    disp: 0,
    duration: 0.55,
    ease: 'power2.out',
    onUpdate: () => {
      if (displacementMap) displacementMap.setAttribute('scale', obj.disp);
    }
  })
  .to(mainPanel, {
    scale: 1,
    rotate: 0,
    rotateX: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'back.out(1.4)'
  }, '-=0.55')
  .to(creaseShadow, { opacity: 0, duration: 0.5 }, '-=0.5');
}

/**
 * Update DOM elements inside Project Showcase
 */
export function updateProjectDOM(proj) {
  const titleEl = document.getElementById('active-proj-title');
  const cat1 = document.getElementById('proj-cat-1');
  const cat2 = document.getElementById('proj-cat-2');
  const summaryEl = document.getElementById('active-proj-summary');
  const imgEl = document.getElementById('active-proj-img');
  const storyTextEl = document.getElementById('active-story-text');
  const liveBtn = document.getElementById('live-site-btn');
  const githubBtn = document.getElementById('github-btn');

  if (titleEl) titleEl.textContent = proj.title;
  if (summaryEl) summaryEl.textContent = proj.shortDescription;
  if (storyTextEl) storyTextEl.textContent = proj.storyText;
  if (imgEl) imgEl.src = proj.coverImage;

  const cats = proj.category.split('/');
  if (cat1) cat1.textContent = cats[0] ? cats[0].trim() : 'BACKEND';
  if (cat2) cat2.textContent = cats[1] ? cats[1].trim() : 'WEB3';

  if (liveBtn) liveBtn.href = proj.liveSiteUrl || '#';
  if (githubBtn) githubBtn.href = proj.githubUrl || '#';
}
