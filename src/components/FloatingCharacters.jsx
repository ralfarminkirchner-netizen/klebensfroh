import { useEffect, useRef, useCallback } from 'react';

/**
 * Canvas background with Petra's REAL characters floating across the screen.
 * They drift slowly, rotate gently, and respond to mouse proximity.
 */
const FloatingCharacters = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const charsRef = useRef([]);
  const imagesRef = useRef([]);

  const CHARACTER_PATHS = [
    '/images/stickers/graue_katze.png',
    '/images/stickers/elefant.png',
    '/images/stickers/reh.png',
    '/images/stickers/rosa_reh.png',
    '/images/stickers/rosa_fuchs.png',
    '/images/stickers/zebra.png',
    '/images/stickers/kamel.png',
    '/images/stickers/panda_sitzend.png',
    '/images/stickers/loewe.png',
    '/images/stickers/wal.png',
  ];

  const initChars = useCallback((w, h, images) => {
    return images.map((img, i) => ({
      img,
      x: Math.random() * w,
      y: Math.random() * h,
      size: 40 + Math.random() * 30,
      speed: 0.15 + Math.random() * 0.25,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.005,
      rot: (Math.random() - 0.5) * 0.4,
      opacity: 0.08 + Math.random() * 0.07,
      wobble: Math.random() * Math.PI * 2,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let loaded = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Load all character images
    const images = CHARACTER_PATHS.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === CHARACTER_PATHS.length) {
          imagesRef.current = images;
          charsRef.current = initChars(canvas.width, canvas.height, images);
        }
      };
      return img;
    });

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    window.addEventListener('mousemove', onMouse);

    const draw = () => {
      if (!charsRef.current.length) { raf = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      charsRef.current.forEach((c) => {
        // Drift
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.wobble += 0.01;
        c.rot += c.rotSpeed;

        // Wrap around
        if (c.x < -c.size) c.x = canvas.width + c.size;
        if (c.x > canvas.width + c.size) c.x = -c.size;
        if (c.y < -c.size) c.y = canvas.height + c.size;
        if (c.y > canvas.height + c.size) c.y = -c.size;

        // Mouse repel
        const dx = c.x - mx;
        const dy = c.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          c.x += (dx / dist) * force * 3;
          c.y += (dy / dist) * force * 3;
        }

        const wobbleY = Math.sin(c.wobble) * 3;

        ctx.save();
        ctx.globalAlpha = c.opacity;
        ctx.translate(c.x, c.y + wobbleY);
        ctx.rotate(c.rot);
        ctx.drawImage(c.img, -c.size / 2, -c.size / 2, c.size, c.size);
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [initChars]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default FloatingCharacters;
