import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Home.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const pandaY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const catRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div 
      className="home-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero-section">
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
            Willkommen in meiner kleinen Bastelwelt. Mit Papier, Stift und Herzblut erwecke ich Tiere und kleine Botschaften zum Leben. Jedes Stück ist ein Unikat.
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
          
          {/* Her character (Cat) peeking out from behind the polaroid */}
          <motion.img 
            src="/images/Bild 06.04.26 um 15.50.png" 
            alt="Katze" 
            className="peek-cat"
            style={{ rotate: catRotate }}
            whileHover={{ y: -20, scale: 1.1 }}
          />
        </motion.div>
      </section>

      <section className="interactive-scene">
        <motion.div className="story-card paper-card" style={{ y: pandaY }}>
          {/* Her character (Panda) resting on top of the text box */}
          <motion.img 
            src="/images/Bild 06.04.26 um 15.49.png" 
            alt="Panda" 
            className="rest-panda"
            whileHover={{ y: -15, rotate: 5, scale: 1.05 }}
          />
          <div className="story-content">
            <h3>Meine Leidenschaft</h3>
            <p>Es begann mit einer kleinen Schere und etwas Pappe. Heute verziere ich Geschenke, kreiere individuelle Einladungen und male Tiere, die ein Lächeln ins Gesicht zaubern.</p>
            <p>Alles, was du hier siehst, wurde von meinen Händen gezeichnet, geschnitten und geklebt.</p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
