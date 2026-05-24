import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimalExtracted from '../components/AnimalExtracted';
import './Home.css';

const Home = () => {
  return (
    <motion.div 
      className="home-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      
      <section className="hero-section glass-panel">
        <div className="hero-text">
          <motion.h2 
            className="page-title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            Glück selbermachen ✨
          </motion.h2>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Schön, dass du hier bist! Ich bin Petra und ich liebe es, süße Tierchen, lustige Gesichter und kreative Basteleien zu erschaffen. Willkommen in der Welt von Klebensfroh!
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/galerie" className="glass-button">
              Zur Galerie <ArrowRight size={20} />
            </Link>
            <Link to="/auftraege" className="glass-button" style={{ background: 'var(--color-secondary)' }}>
              Eigener Auftrag <Star size={20} />
            </Link>
          </motion.div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="floating-animals">
            <AnimalExtracted index={0} size={180} delay={0.2} style={{ position: 'absolute', top: '-20px', left: '10%' }} />
            <AnimalExtracted index={3} size={140} delay={0.4} style={{ position: 'absolute', top: '40%', right: '-10%' }} />
            <AnimalExtracted index={7} size={200} delay={0.6} style={{ position: 'absolute', bottom: '-20px', left: '30%' }} />
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <motion.h3 
          style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', fontFamily: 'var(--font-hand)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Die ganze Tierbande 🐾
        </motion.h3>
        
        <div className="animal-wimmelbild">
          {[0, 1, 2, 4, 5, 6, 8, 9, 10].map((idx, i) => (
             <AnimalExtracted 
                key={idx} 
                index={idx} 
                size={Math.random() * 80 + 120} 
                delay={i * 0.1} 
                style={{ margin: '10px' }} 
             />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
