import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const works = [
  { id: 1, img: '/images/steph_bild_1.jpg', title: 'Hunde-Einladung', category: 'Basteleien' },
  { id: 2, img: '/images/steph_bild_2.jpg', title: 'Lila Einhorn', category: 'Basteleien' },
  { id: 3, img: '/images/media__1779624826879.jpg', title: 'Glückstierchen Wimmelbild', category: 'Zeichnungen' },
  { id: 4, img: '/images/steph_bild_3.jpg', title: 'Elefanten-Gesicht', category: 'Zeichnungen' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('Alle');
  const [selectedId, setSelectedId] = useState(null);

  const filteredWorks = filter === 'Alle' ? works : works.filter(w => w.category === filter);

  return (
    <motion.div 
      className="gallery-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="page-title"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        Meine Galerie
      </motion.h2>
      
      <div className="filter-buttons">
        {['Alle', 'Zeichnungen', 'Basteleien'].map(cat => (
          <motion.button 
            key={cat} 
            className={`glass-button ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="masonry-grid">
        <AnimatePresence>
          {filteredWorks.map(work => (
            <motion.div 
              key={work.id} 
              layoutId={`card-container-${work.id}`}
              className="gallery-item glass-panel"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onClick={() => setSelectedId(work.id)}
            >
              <div className="img-wrapper">
                <motion.img 
                  layoutId={`card-image-${work.id}`}
                  src={work.img} 
                  alt={work.title} 
                />
                <div className="like-overlay">
                  <Heart size={40} color="white" fill="var(--color-primary-dark)" />
                </div>
              </div>
              <div className="gallery-info">
                <motion.h4 layoutId={`card-title-${work.id}`}>{work.title}</motion.h4>
                <span className="category-tag">{work.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
                className="lightbox-content glass-panel"
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
                <button className="glass-button close-btn" onClick={() => setSelectedId(null)}>
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
