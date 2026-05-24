import { useState } from 'react';
import { Heart } from 'lucide-react';
import './Gallery.css';

const works = [
  { id: 1, img: '/images/steph_bild_1.jpg', title: 'Hunde-Einladung', category: 'Basteleien' },
  { id: 2, img: '/images/steph_bild_2.jpg', title: 'Lila Einhorn', category: 'Basteleien' },
  { id: 3, img: '/images/media__1779624826879.jpg', title: 'Glückstierchen', category: 'Zeichnungen' },
  { id: 4, img: '/images/steph_bild_3.jpg', title: 'Elefanten-Gesicht', category: 'Zeichnungen' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('Alle');

  const filteredWorks = filter === 'Alle' ? works : works.filter(w => w.category === filter);

  return (
    <div className="gallery-container container">
      <h2 className="page-title">Meine Galerie</h2>
      <p style={{textAlign: 'center', fontSize: '1.2rem', margin: '0 auto 2rem', maxWidth: '600px'}}>
        Hier findest du eine Auswahl meiner liebsten Kreationen. Alles von mir (Petra) mit viel Liebe und Kleber handgemacht!
      </p>

      <div className="filter-buttons">
        {['Alle', 'Zeichnungen', 'Basteleien'].map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredWorks.map(work => (
          <div key={work.id} className="gallery-item cute-card">
            <div className="img-wrapper">
              <img src={work.img} alt={work.title} />
              <div className="like-overlay">
                <Heart size={32} color="white" fill="var(--color-primary)" />
              </div>
            </div>
            <div className="gallery-info">
              <h4>{work.title}</h4>
              <span className="category-tag">{work.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
