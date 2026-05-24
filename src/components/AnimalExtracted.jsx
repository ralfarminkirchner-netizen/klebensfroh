import React from 'react';
import { motion } from 'framer-motion';

const animals = [
  { id: 1, name: 'Elefant', x: '5%', y: '10%' },
  { id: 2, name: 'Pinguin', x: '45%', y: '10%' },
  { id: 3, name: 'Katze', x: '85%', y: '10%' },
  { id: 4, name: 'Hund', x: '10%', y: '35%' },
  { id: 5, name: 'Känguru', x: '48%', y: '35%' },
  { id: 6, name: 'Bär', x: '88%', y: '35%' },
  { id: 7, name: 'Hase', x: '10%', y: '65%' },
  { id: 8, name: 'Fuchs', x: '50%', y: '65%' },
  { id: 9, name: 'Waschbär', x: '90%', y: '65%' },
  { id: 10, name: 'Reh', x: '15%', y: '90%' },
  { id: 11, name: 'Fledermaus', x: '55%', y: '90%' },
];

const AnimalExtracted = ({ index, size = 150, delay = 0, style }) => {
  const animal = animals[index % animals.length];
  
  return (
    <motion.div
      className="animal-blob glass-panel"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', damping: 15, delay: delay }}
      whileHover={{ scale: 1.15, rotate: Math.random() * 10 - 5, zIndex: 10 }}
      style={{
        width: size,
        height: size,
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // organic blob shape
        overflow: 'hidden',
        position: 'relative',
        display: 'inline-block',
        ...style
      }}
    >
      <img 
        src="/images/media__1779624826879.jpg" 
        alt={animal.name}
        style={{
          position: 'absolute',
          width: '350%', // Zoom in
          height: '400%',
          objectFit: 'cover',
          objectPosition: `${animal.x} ${animal.y}`,
          pointerEvents: 'none',
          top: 0, left: 0
        }}
      />
    </motion.div>
  );
};

export default AnimalExtracted;
