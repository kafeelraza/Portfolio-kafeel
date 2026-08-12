import gsap from 'gsap';
import { portfolioData } from './data/portfolioData.js';
import { setupSpineAccordion, updateProjectDOM } from './modules/spineAccordion.js';
import { initAudioPlayer, playPaperRustleSound } from './modules/audioPlayer.js';
import { setupDrawer } from './modules/modal.js';
import { setupCursor } from './modules/cursor.js';

document.addEventListener('DOMContentLoaded', () => {
  // Populate Header & Masthead Brand
  const mastheadBrand = document.getElementById('masthead-brand');
  if (mastheadBrand) mastheadBrand.textContent = portfolioData.editionTitle;

  const mastheadLoc = document.getElementById('masthead-location');
  if (mastheadLoc) mastheadLoc.textContent = portfolioData.location;

  const stampDate = document.getElementById('stamp-date');
  if (stampDate) stampDate.textContent = portfolioData.stamp.date;

  const stampSig = document.getElementById('stamp-sig');
  if (stampSig) stampSig.textContent = portfolioData.stamp.signatureText;

  const miniStampSig = document.getElementById('mini-stamp-sig');
  if (miniStampSig) miniStampSig.textContent = portfolioData.stamp.signatureText;

  const miniStampDate = document.getElementById('mini-stamp-date');
  if (miniStampDate) miniStampDate.textContent = portfolioData.stamp.date;

  const dropCap = document.getElementById('hero-dropcap');
  if (dropCap) dropCap.textContent = portfolioData.heroBio.dropCap;

  const bioText = document.getElementById('hero-biotext');
  if (bioText) bioText.textContent = portfolioData.heroBio.text;

  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) {
    footerEmail.textContent = portfolioData.email;
    footerEmail.href = `mailto:${portfolioData.email}`;
  }

  // Setup Spines Accordion
  setupSpineAccordion(portfolioData.projects, (selectedProj) => {
    playPaperRustleSound();
    updateProjectDOM(selectedProj);
  });

  // Set default initial project (First Project)
  if (portfolioData.projects.length > 0) {
    updateProjectDOM(portfolioData.projects[0]);
  }

  // Setup Drawer Menu
  setupDrawer(portfolioData.projects);

  // Setup Audio Player
  initAudioPlayer();

  // Setup Custom Cursor
  setupCursor();

  // GSAP Entry Reveal Timeline
  const tl = gsap.timeline();
  tl.from('.newspaper-header', { y: -30, opacity: 0, duration: 0.7, ease: 'power3.out' })
    .from('.black-tile', { scale: 0.95, opacity: 0, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.postage-stamp', { rotate: 12, scale: 0.8, opacity: 0, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.4')
    .from('.hero-bio-paragraph', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.vertical-spines-sidebar', { x: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');
});
