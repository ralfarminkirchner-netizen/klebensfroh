// Web Audio API sound system - no external files needed
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let ctx = null;

function getCtx() {
  if (!ctx) ctx = new AudioCtx();
  return ctx;
}

// Cute "pop" sound for clicks
export function playPop() {
  try {
    const c = getCtx();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(600, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.08);
    o.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.15);
    g.gain.setValueAtTime(0.15, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
    o.connect(g);
    g.connect(c.destination);
    o.start(c.currentTime);
    o.stop(c.currentTime + 0.2);
  } catch (e) { /* silent fail */ }
}

// Soft "whoosh" for hover
export function playHover() {
  try {
    const c = getCtx();
    const bufferSize = c.sampleRate * 0.08;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) * 0.03;
    }
    const source = c.createBufferSource();
    source.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2000, c.currentTime);
    filter.frequency.exponentialRampToValueAtTime(4000, c.currentTime + 0.08);
    filter.Q.value = 2;
    source.connect(filter);
    filter.connect(c.destination);
    source.start();
  } catch (e) { /* silent fail */ }
}

// Sweet chime for special interactions
export function playChime() {
  try {
    const c = getCtx();
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      g.gain.setValueAtTime(0, c.currentTime + i * 0.08);
      g.gain.linearRampToValueAtTime(0.08, c.currentTime + i * 0.08 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.4);
      o.connect(g);
      g.connect(c.destination);
      o.start(c.currentTime + i * 0.08);
      o.stop(c.currentTime + i * 0.08 + 0.4);
    });
  } catch (e) { /* silent fail */ }
}

// Cute squeak for characters
export function playSqueak() {
  try {
    const c = getCtx();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(800, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1600, c.currentTime + 0.05);
    o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.1);
    o.frequency.exponentialRampToValueAtTime(1800, c.currentTime + 0.15);
    g.gain.setValueAtTime(0.12, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
    o.connect(g);
    g.connect(c.destination);
    o.start(c.currentTime);
    o.stop(c.currentTime + 0.25);
  } catch (e) { /* silent fail */ }
}
