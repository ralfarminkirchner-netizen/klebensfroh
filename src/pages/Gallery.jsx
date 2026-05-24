import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const works = [
  { id: 1, img: '/images/IMG_4386.jpg', title: 'Bärentüte', desc: 'Vesper-Tüte mit handgemaltem Polizisten-Bär' },
  { id: 2, img: '/images/IMG_4387.jpg', title: 'Giraffen-Tüte', desc: 'Tüte verwandelt sich in kleine Giraffe' },
  { id: 3, img: '/images/IMG_4388.jpg', title: 'Gutschein-Katze', desc: 'Leoparden-Verpackung mit Katzengesicht' },
  { id: 4, img: '/images/IMG_4391.jpg', title: 'Schlangen-Bild', desc: 'Handgemalte Schlange im Karton-Rahmen' },
  { id: 5, img: '/images/IMG_4392.jpg', title: 'Krokodil-Box', desc: 'Geburtstags-Box mit Krokodil-Motiv' },
  { id: 6, img: '/images/IMG_4393.jpg', title: 'Geldautomat', desc: 'Geldgeschenk aus Karton gebastelt' },
  { id: 7, img: '/images/IMG_4384.jpg', title: 'DIY Geschenkidee', desc: '2-in-1 Geldgeschenk mit Eukalyptus' },
  { id: 8, img: '/images/IMG_4390.jpg', title: 'Alles Liebe', desc: 'Herz-Box mit Juteschnur und Schleife' },
  { id: 9, img: '/images/IMG_4378.jpg', title: 'Logo auf Leinwand', desc: 'Das Original-Logo auf Staffelei' },
  { id: 10, img: '/images/IMG_4394.jpg', title: 'Windel-Panda', desc: 'Süßer Panda aus Windeln gebastelt' },
  { id: 11, img: '/images/IMG_4383.jpg', title: 'Petras Bastelwelt', desc: 'Liebe Grüße aus der Werkstatt' },
  { id: 12, img: '/images/Bild 06.04.26 um 15.49.png', title: 'Panda-Gesicht', desc: 'Handgezeichneter Panda-Aufkleber' },
  { id: 13, img: '/images/Bild 06.04.26 um 15.50.png', title: 'Katzen-Gesicht', desc: 'Handgezeichneter Katzen-Aufkleber' },
  { id: 14, img: '/images/Bild 06.04.26 um 15.49 (2).png', title: 'Hund', desc: 'Süßer handgezeichneter Hund' },
  { id: 15, img: '/images/animal_grid.jpg', title: 'Tier-Wimmelbild', desc: 'Alle Tiere auf einen Blick' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      className="gallery-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">Galerie 🖼️</h2>
      <p className="gallery-intro">
        Klick auf ein Bild, um es größer zu sehen. Jedes Stück ist ein handgemachtes Unikat!
      </p>

      <div className="gallery-masonry">
        {works.map((w, i) => (
          <motion.div
            key={w.id}
            className="gallery-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(58, 90, 58, 0.18)' }}
            onClick={() => setSelected(w)}
          >
            <div className="gallery-card-img">
              <img src={w.img} alt={w.title} loading="lazy" />
            </div>
            <div className="gallery-card-info">
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox-card"
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.img} alt={selected.title} />
              <div className="lightbox-info">
                <h3>{selected.title}</h3>
                <p>{selected.desc}</p>
              </div>
              <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
