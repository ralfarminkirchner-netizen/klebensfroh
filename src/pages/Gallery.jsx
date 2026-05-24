import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playPop, playHover, playChime, playSqueak } from '../sounds';
import './Gallery.css';

const works = [
  { id: 1, img: '/images/IMG_4386.jpg', title: 'Bärentüte', desc: 'Vesper-Tüte mit Polizisten-Bär', sticker: '/images/stickers/petra_panda.png', rot: -2 },
  { id: 2, img: '/images/IMG_4387.jpg', title: 'Giraffen-Tüte', desc: 'Papiertüte als Giraffe', sticker: '/images/stickers/petra_giraffe.png', rot: 3 },
  { id: 3, img: '/images/IMG_4388.jpg', title: 'Gutschein-Katze', desc: 'Leoparden-Verpackung', sticker: '/images/stickers/graue_katze.png', rot: -1 },
  { id: 4, img: '/images/IMG_4391.jpg', title: 'Schlangen-Bild', desc: 'Handgemalte Schlange im Rahmen', sticker: '/images/stickers/loewe.png', rot: 2 },
  { id: 5, img: '/images/IMG_4392.jpg', title: 'Krokodil-Box', desc: 'Geburtstags-Box mit Krokodil', sticker: '/images/stickers/waschbaer.png', rot: -3 },
  { id: 6, img: '/images/IMG_4393.jpg', title: 'Geldautomat', desc: 'Geldgeschenk aus Karton', sticker: '/images/stickers/elefant.png', rot: 1 },
  { id: 7, img: '/images/IMG_4384.jpg', title: 'DIY Geschenkidee', desc: '2-in-1 Geldgeschenk', sticker: '/images/stickers/rosa_reh.png', rot: -2 },
  { id: 8, img: '/images/IMG_4390.jpg', title: 'Alles Liebe', desc: 'Herz-Box mit Schleife', sticker: '/images/stickers/rosa_fuchs.png', rot: 3 },
  { id: 9, img: '/images/IMG_4378.jpg', title: 'Logo auf Leinwand', desc: 'Das Original-Logo', sticker: '/images/stickers/panda_sitzend.png', rot: 0 },
  { id: 10, img: '/images/IMG_4394.jpg', title: 'Windel-Panda', desc: 'Panda aus Windeln', sticker: '/images/stickers/pink_baer.png', rot: -1 },
  { id: 11, img: '/images/IMG_4383.jpg', title: 'Petras Bastelwelt', desc: 'Die Werkstatt', sticker: '/images/stickers/weisse_katze.png', rot: 2 },
  { id: 12, img: '/images/IMG_4381.jpg', title: 'Instagram-Feed', desc: 'Alle Ideen auf einen Blick', sticker: '/images/stickers/pinguin.png', rot: -3 },
];

const Gallery = () => {
  const [sel, setSel] = useState(null);

  return (
    <motion.div className="gallery container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.h2 className="showcase-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Galerie
      </motion.h2>
      <p className="gallery-sub">Klick auf ein Bild, um es genauer anzuschauen</p>

      <div className="gallery-scrapbook">
        {works.map((w, i) => (
          <motion.div
            key={w.id}
            className="scrap-photo gal-card"
            style={{ '--rot': `${w.rot}deg` }}
            initial={{ opacity: 0, y: 50, rotate: w.rot * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: w.rot }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.05, y: -12, zIndex: 10 }}
            onClick={() => { setSel(w); playChime(); }}
            onMouseEnter={playHover}
          >
            <div className={`washi ${['washi-green','washi-gold','washi-pink'][i % 3]}`}
              style={{ top: -10, left: 20 + (i % 4) * 10, transform: `rotate(${(i % 2 ? 5 : -5)}deg)` }} />
            <div className="craft-photo"><img src={w.img} alt={w.title} loading="lazy" /></div>
            <span className="scrap-caption">{w.title}</span>
            <motion.img src={w.sticker} alt="" className="sticker gal-sticker"
              whileHover={{ scale: 1.6, rotate: 12 }}
              onClick={(e) => { e.stopPropagation(); playSqueak(); }} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {sel && (
          <motion.div className="lb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setSel(null); playPop(); }}>
            <motion.div className="lb-card" initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} onClick={(e) => e.stopPropagation()}>
              <div className="craft-photo lb-photo"><img src={sel.img} alt={sel.title} /></div>
              <div className="lb-body">
                <img src={sel.sticker} alt="" className="lb-sticker" />
                <div><h3>{sel.title}</h3><p>{sel.desc}</p></div>
              </div>
              <button className="lb-close" onClick={() => { setSel(null); playPop(); }}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
