/**
 * Web Audio Procedural Paper Rustle & Crunch Sound Generator
 */
let audioCtx = null;
let isPlaying = false;
let isMuted = false;

export function initAudioPlayer() {
  const playBtn = document.getElementById('audio-play-btn');
  const muteBtn = document.getElementById('audio-mute-btn');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      togglePlay(playBtn);
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      toggleMute(muteBtn);
    });
  }
}

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

/**
 * Procedural Paper Crunch / Crumple sound generator for paper crumpling effect
 */
export function playPaperCrunchSound() {
  try {
    initAudioContext();
    if (!audioCtx || isMuted) return;

    const bufferSize = audioCtx.sampleRate * 0.45; // 450ms crunch
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    // Crackle noise profile
    for (let i = 0; i < bufferSize; i++) {
      const crackle = Math.random() > 0.85 ? (Math.random() * 2 - 1) : 0;
      data[i] = (Math.random() * 0.4 - 0.2) + crackle;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 800;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
  } catch (e) {
    console.warn('Audio playback not supported:', e);
  }
}

export function playPaperRustleSound() {
  playPaperCrunchSound();
}

function togglePlay(btn) {
  initAudioContext();
  isPlaying = !isPlaying;

  const playIcon = btn.querySelector('.play-icon');
  const pauseIcon = btn.querySelector('.pause-icon');

  if (isPlaying) {
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');
    playPaperCrunchSound();
  } else {
    playIcon?.classList.remove('hidden');
    pauseIcon?.classList.add('hidden');
  }
}

function toggleMute(btn) {
  isMuted = !isMuted;
  const speakerOn = btn.querySelector('.speaker-icon');
  const speakerOff = btn.querySelector('.speaker-off-icon');

  if (isMuted) {
    speakerOn?.classList.add('hidden');
    speakerOff?.classList.remove('hidden');
  } else {
    speakerOn?.classList.remove('hidden');
    speakerOff?.classList.add('hidden');
    playPaperCrunchSound();
  }
}
