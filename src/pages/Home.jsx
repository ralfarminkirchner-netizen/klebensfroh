import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  }),
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div className="hero-text" variants={fadeUp} initial="hidden" animate="visible">
            <motion.h1 custom={0} variants={fadeUp}>
              Glück selbermachen 🍀
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="hero-desc">
              Willkommen bei Klebensfroh! Ich bin Petra und ich verwandle Pappe,
              Papier und ein großes Herz in kleine Kunstwerke, die Freude schenken.
              Jedes Stück ist ein Unikat – genau wie du.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="hero-buttons">
              <Link to="/galerie" className="btn-craft">🖼️ Zur Galerie</Link>
              <Link to="/auftraege" className="btn-craft-outline">✉️ Auftrag anfragen</Link>
            </motion.div>
          </motion.div>

          <div className="hero-photos">
            {/* Main hero photo - the iconic bear bag */}
            <motion.div
              className="polaroid hero-polaroid-main"
              style={{ y: parallax1 }}
              initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 3, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
            >
              <img src="/images/IMG_4386.jpg" alt="Bärentüte mit Eukalyptus und Lichterketten" />
              <span className="polaroid-label">Für dich gebastelt 💕</span>
            </motion.div>

            {/* Secondary photo - the giraffe bag */}
            <motion.div
              className="polaroid hero-polaroid-secondary"
              style={{ y: parallax2 }}
              initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
              animate={{ opacity: 1, rotate: -5, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ rotate: -1, scale: 1.03 }}
            >
              <img src="/images/IMG_4387.jpg" alt="Giraffen-Geschenktüte" />
              <span className="polaroid-label">Kleine Giraffe 🦒</span>
            </motion.div>

            {/* Her drawn panda peeking */}
            <motion.img
              src="/images/Bild 06.04.26 um 15.49.png"
              alt="Petras handgezeichneter Panda"
              className="peek-character peek-panda"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -15, rotate: 8, scale: 1.1 }}
            />

            {/* Her drawn cat peeking */}
            <motion.img
              src="/images/Bild 06.04.26 um 15.50.png"
              alt="Petras handgezeichnete Katze"
              className="peek-character peek-cat"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ y: -15, rotate: -8, scale: 1.1 }}
            />
          </div>
        </div>
      </section>

      {/* ====== DIVIDER ====== */}
      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ====== ABOUT PETRA ====== */}
      <section className="about container">
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="about-photo-stack" variants={fadeUp} custom={0}>
            <div className="polaroid about-polaroid-1">
              <img src="/images/IMG_4383.jpg" alt="Petra in ihrer Bastelwelt" />
              <span className="polaroid-label">Meine Bastelwelt 🌿</span>
            </div>
            <div className="polaroid about-polaroid-2">
              <img src="/images/IMG_4393.jpg" alt="Geldautomat aus Pappe" />
              <span className="polaroid-label">Geldautomat 💰</span>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={fadeUp} custom={1}>
            <h2>Liebe Grüße aus meiner kleinen Bastelwelt 🌿🐯</h2>
            <p>
              Ich bin Petra – und hinter Klebensfroh steckt meine ganze Leidenschaft
              für alles, was man mit den Händen erschaffen kann. Ob süße Tier-Verpackungen,
              handbemalte Spardosen, Oster-Häschen aus Socken oder ein Geldautomat aus
              Karton – bei mir wird nichts weggeworfen, sondern verwandelt.
            </p>
            <p>
              Jedes meiner Stücke entsteht mit Liebe zum Detail, einem Augenzwinkern
              und dem Glauben, dass kleine Dinge große Freude machen können.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== DIVIDER ====== */}
      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ====== SHOWCASE GRID ====== */}
      <section className="showcase container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frisch aus der Werkstatt ✂️
        </motion.h2>

        <div className="showcase-grid">
          {[
            { img: '/images/IMG_4392.jpg', label: 'Krokodil-Box 🐊', rotate: 2 },
            { img: '/images/IMG_4391.jpg', label: 'Schlangen-Bild 🐍', rotate: -3 },
            { img: '/images/IMG_4388.jpg', label: 'Gutschein-Katze 🐱', rotate: 1 },
            { img: '/images/IMG_4390.jpg', label: 'Alles Liebe! 💛', rotate: -2 },
            { img: '/images/IMG_4384.jpg', label: 'DIY Geschenkidee 🎁', rotate: 3 },
            { img: '/images/IMG_4394.jpg', label: 'Windel-Panda 🐼', rotate: -1 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="polaroid showcase-card"
              style={{ '--card-rotate': `${item.rotate}deg` }}
              initial={{ opacity: 0, y: 50, rotate: item.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            >
              <img src={item.img} alt={item.label} />
              <span className="polaroid-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== DIVIDER ====== */}
      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ====== INSTAGRAM CTA ====== */}
      <section className="insta-cta container">
        <motion.div
          className="insta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="insta-collage">
            <img src="/images/IMG_4381.jpg" alt="Instagram Grid" className="insta-thumb" />
            <img src="/images/IMG_4382.jpg" alt="Instagram Grid" className="insta-thumb" />
          </div>
          <div className="insta-text">
            <h2>Noch mehr auf Instagram 📸</h2>
            <p>
              Folge mir auf Instagram für neue DIY-Ideen, Bastel-Reels und kleine
              Überraschungen! Ich zeige dir Schritt für Schritt, wie du mit einfachen
              Materialien wunderschöne Dinge erschaffst.
            </p>
            <a
              href="https://www.instagram.com/klebensfroh/"
              target="_blank"
              rel="noreferrer"
              className="btn-craft"
            >
              📸 @klebensfroh folgen
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
