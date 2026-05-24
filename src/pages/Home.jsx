import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Home.css';

const FloatingIcon = ({ src, delay, top, left, right, bottom }) => {
  return (
    <motion.img 
      src={src}
      className="floating-craft-icon"
      style={{ top, left, right, bottom }}
      initial={{ y: 0, rotate: -5 }}
      animate={{ 
        y: [0, -15, 0],
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      whileHover={{ scale: 1.2, rotate: 10 }}
    />
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div 
      className="home-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero-section">
        
        {/* Floating hand-drawn animals acting as decoration */}
        <FloatingIcon src="/images/Bild 06.04.26 um 15.49.png" delay={0} top="10%" right="5%" />
        <FloatingIcon src="/images/Bild 06.04.26 um 15.50.png" delay={1.5} bottom="20%" left="5%" />
        
        <div className="hero-text">
          <motion.h2 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Glück zum Anfassen
          </motion.h2>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Willkommen in meiner kleinen Bastelwelt. Mit viel Papier, Stift und Herzblut erwecke ich Tiere, kleine Botschaften und wunderschöne Dekorationen zum Leben. Jedes Stück ist ein Unikat – genau wie du.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/galerie" className="craft-button">
              Zur Galerie
            </Link>
          </motion.div>
        </div>
        
        <motion.div className="hero-image-wrapper" style={{ y: yPos }}>
          <div className="polaroid-wrapper">
            <img src="/images/IMG_4386.jpg" alt="Papiertütchen mit Bär und Lichterkette" className="hero-img" />
            <div className="polaroid-caption">Für dich gebastelt.</div>
          </div>
        </motion.div>

      </section>

      <section className="story-section paper-card">
        <div className="story-content">
          <h3>Meine Leidenschaft</h3>
          <p>Es begann mit einer kleinen Schere und etwas Pappe. Heute verziere ich Geschenke, kreiere individuelle Einladungen und male Tiere, die ein Lächeln ins Gesicht zaubern.</p>
          <p>Alles, was du hier siehst, wurde von meinen Händen gezeichnet, geschnitten und geklebt. Ich freue mich riesig, dass du da bist!</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
