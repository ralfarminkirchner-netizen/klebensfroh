import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

// Using the newly uploaded high-quality images from Instagram
const works = [
  { id: 1, img: '/images/IMG_4378.jpg', title: 'Schmetterling Box', category: 'Verpackung' },
  { id: 2, img: '/images/IMG_4379.jpg', title: 'Geburtstags Karte', category: 'Karten' },
  { id: 3, img: '/images/IMG_4380.jpg', title: 'Pinguin', category: 'Zeichnung' },
  { id: 4, img: '/images/IMG_4384.jpg', title: 'Kleeblatt Anhänger', category: 'Dekoration' },
  { id: 5, img: '/images/IMG_4386.jpg', title: 'Bären Tüte', category: 'Verpackung' },
  { id: 6, img: '/images/IMG_4391.jpg', title: 'Osterhase', category: 'Dekoration' },
  { id: 7, img: '/images/IMG_4392.jpg', title: 'Herzlichen Glückwunsch', category: 'Karten' },
  { id: 8, img: '/images/animal_grid.jpg', title: 'Tier Wimmelbild', category: 'Zeichnung' },
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div 
      className="gallery-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="page-title">Meine Galerie</h2>
      <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', color: 'var(--color-text-light)'}}>
        Klick auf ein Bild, um es genauer anzusehen.
      </p>

      <div className="masonry-grid">
        {works.map(work => (
          <motion.div 
            key={work.id} 
            layoutId={`card-container-${work.id}`}
            className="gallery-item paper-card"
            whileHover={{ scale: 1.03, rotate: (work.id % 2 === 0 ? 1 : -1) }}
            onClick={() => setSelectedId(work.id)}
          >
            <div className="img-wrapper">
              <motion.img 
                layoutId={`card-image-${work.id}`}
                src={work.img} 
                alt={work.title} 
                loading="lazy"
              />
            </div>
            <div className="gallery-info">
              <motion.h4 layoutId={`card-title-${work.id}`}>{work.title}</motion.h4>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {works.filter(w => w.id === selectedId).map(work => (
              <motion.div 
                key={work.id} 
                className="lightbox-content paper-card"
                layoutId={`card-container-${work.id}`}
                onClick={e => e.stopPropagation()}
              >
                <motion.img 
                  layoutId={`card-image-${work.id}`}
                  src={work.img} 
                  alt={work.title} 
                  className="lightbox-img"
                />
                <motion.h4 layoutId={`card-title-${work.id}`} className="lightbox-title">
                  {work.title}
                </motion.h4>
                <button className="craft-button close-btn" onClick={() => setSelectedId(null)}>
                  Schließen
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
