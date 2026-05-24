import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playPop, playHover, playChime } from '../sounds';
import './Gallery.css';

const works = [
  { id: 1, img: '/images/IMG_4386.jpg', title: 'Bärentüte', desc: 'Vesper-Tüte mit handgemaltem Polizisten-Bär', icon: '/images/icon_bear.png' },
  { id: 2, img: '/images/IMG_4387.jpg', title: 'Giraffen-Tüte', desc: 'Tüte verwandelt sich in kleine Giraffe', icon: '/images/icon_giraffe.png' },
  { id: 3, img: '/images/IMG_4388.jpg', title: 'Gutschein-Katze', desc: 'Leoparden-Verpackung mit Katzengesicht', icon: '/images/icon_cat.png' },
  { id: 4, img: '/images/IMG_4391.jpg', title: 'Schlangen-Bild', desc: 'Handgemalte Schlange im Karton-Rahmen', icon: '/images/icon_panda.png' },
  { id: 5, img: '/images/IMG_4392.jpg', title: 'Krokodil-Box', desc: 'Geburtstags-Box mit Krokodil-Motiv', icon: '/images/icon_giraffe.png' },
  { id: 6, img: '/images/IMG_4393.jpg', title: 'Geldautomat', desc: 'Geldgeschenk-Automat aus Karton', icon: '/images/icon_bear.png' },
  { id: 7, img: '/images/IMG_4384.jpg', title: 'DIY Geschenkidee', desc: '2-in-1 Geldgeschenk mit Eukalyptus', icon: '/images/icon_bunny.png' },
  { id: 8, img: '/images/IMG_4390.jpg', title: 'Alles Liebe', desc: 'Herz-Box mit Juteschnur und Schleife', icon: '/images/icon_bunny.png' },
  { id: 9, img: '/images/IMG_4378.jpg', title: 'Logo auf Leinwand', desc: 'Das Original Klebensfroh-Logo', icon: '/images/clover_generated.png' },
  { id: 10, img: '/images/IMG_4394.jpg', title: 'Windel-Panda', desc: 'Süßer Panda aus Windeln', icon: '/images/icon_panda.png' },
  { id: 11, img: '/images/IMG_4383.jpg', title: 'Petras Bastelwelt', desc: 'Liebe Grüße aus der Werkstatt', icon: '/images/icon_cat.png' },
  { id: 12, img: '/images/IMG_4381.jpg', title: 'Instagram Übersicht', desc: 'Alle DIY-Ideen auf einen Blick', icon: '/images/icon_bear.png' },
  { id: 13, img: '/images/IMG_4382.jpg', title: 'Mehr Inspirationen', desc: 'Pandas, Bärchen und Häschen', icon: '/images/icon_panda.png' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const openLightbox = (w) => { setSelected(w); playChime(); };
  const closeLightbox = () => { setSelected(null); playPop(); };

  return (
    <motion.div className="gallery container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="sec-title">
        Galerie
        <img src="/images/clover_generated.png" alt="" className="title-clover" />
      </h2>
      <p className="gallery-intro">
        Klick auf ein Bild, um es größer zu sehen. Jedes Stück ist ein handgemachtes Unikat!
      </p>

      <div className="gallery-masonry">
        {works.map((w, i) => (
          <motion.div
            key={w.id}
            className="photo-card gallery-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
            whileHover={{ y: -10 }}
            onClick={() => openLightbox(w)}
            onMouseEnter={playHover}
          >
            <div className="gallery-img-wrap">
              <img src={w.img} alt={w.title} loading="lazy" />
              <img src={w.icon} alt="" className="gallery-badge" />
            </div>
            <div className="card-label">{w.title}</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
            <motion.div className="lightbox-inner" initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 30 }} onClick={(e) => e.stopPropagation()}>
              <img src={selected.img} alt={selected.title} className="lightbox-img" />
              <div className="lightbox-info">
                <img src={selected.icon} alt="" className="lightbox-badge" />
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.desc}</p>
                </div>
              </div>
              <button className="lightbox-x" onClick={closeLightbox}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
