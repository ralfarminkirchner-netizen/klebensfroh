import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { playPop, playSqueak, playChime, playHover } from '../sounds';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: d * 0.18, duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  }),
};

/* Clickable character with sound + bounce */
const Character = ({ src, alt, className, delay = 0 }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`floating-character ${className}`}
    initial={{ y: 40, opacity: 0, scale: 0.7, rotate: -10 }}
    animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay, duration: 0.6, type: 'spring', stiffness: 200 }}
    whileHover={{ y: -20, scale: 1.2, rotate: 8 }}
    whileTap={{ scale: 0.85 }}
    onClick={playSqueak}
    onMouseEnter={playHover}
  />
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const p1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const p2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div className="hero-text" variants={fadeUp} initial="hidden" animate="visible">
            <motion.h1 custom={0} variants={fadeUp}>
              Glück selbermachen
              <img src="/images/clover_generated.png" alt="" className="inline-clover" />
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="hero-desc">
              Willkommen bei Klebensfroh! Ich bin Petra und verwandle Pappe,
              Papier und ganz viel Herz in kleine Kunstwerke, die Freude schenken.
              Jedes Stück ist ein Unikat – genau wie du.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="hero-btns">
              <Link to="/galerie" className="btn-primary" onClick={playChime}>
                <img src="/images/icon_bear.png" alt="" className="btn-icon" /> Zur Galerie
              </Link>
              <Link to="/auftraege" className="btn-outline" onClick={playPop}>
                <img src="/images/icon_bunny.png" alt="" className="btn-icon" /> Auftrag anfragen
              </Link>
            </motion.div>
          </motion.div>

          <div className="hero-photos">
            <motion.div className="photo-card hero-card-main" style={{ y: p1 }}
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 2, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              onClick={playPop}
            >
              <img src="/images/IMG_4386.jpg" alt="Bärentüte" />
              <div className="card-label">Vesper-Tüte mit Polizisten-Bär</div>
            </motion.div>

            <motion.div className="photo-card hero-card-small" style={{ y: p2 }}
              initial={{ opacity: 0, rotate: -6, scale: 0.85 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              onClick={playPop}
            >
              <img src="/images/IMG_4387.jpg" alt="Giraffen-Tüte" />
              <div className="card-label">Kleine Giraffe</div>
            </motion.div>

            {/* Her characters peeking & squeaking */}
            <Character src="/images/icon_panda.png" alt="Panda" className="peek-panda" delay={1.0} />
            <Character src="/images/icon_cat.png" alt="Katze" className="peek-cat" delay={1.2} />
          </div>
        </div>
      </section>

      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ===== ABOUT ===== */}
      <section className="about container">
        <motion.div className="about-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div className="about-photos" variants={fadeUp} custom={0}>
            <div className="photo-card about-photo-1">
              <img src="/images/IMG_4383.jpg" alt="Petra" />
              <div className="card-label">Meine Bastelwelt</div>
            </div>
            <div className="photo-card about-photo-2">
              <img src="/images/IMG_4393.jpg" alt="Geldautomat" />
              <div className="card-label">Geldautomat aus Karton</div>
            </div>
          </motion.div>
          <motion.div className="about-text" variants={fadeUp} custom={1}>
            <h2>Liebe Grüße aus meiner kleinen Bastelwelt</h2>
            <p>Ich bin Petra – und hinter Klebensfroh steckt meine ganze Leidenschaft.
            Ob süße Tier-Verpackungen, Oster-Häschen aus Socken, handbemalte Spardosen
            oder ein Geldautomat aus Karton – bei mir wird nichts weggeworfen, sondern verwandelt.</p>
            <p>Jedes Stück entsteht mit Liebe zum Detail und dem Glauben, dass kleine Dinge
            große Freude machen können.</p>
            <div className="about-characters">
              <img src="/images/icon_panda.png" alt="" className="char-icon" onClick={playSqueak} onMouseEnter={playHover} />
              <img src="/images/icon_cat.png" alt="" className="char-icon" onClick={playSqueak} onMouseEnter={playHover} />
              <img src="/images/icon_bear.png" alt="" className="char-icon" onClick={playSqueak} onMouseEnter={playHover} />
              <img src="/images/icon_giraffe.png" alt="" className="char-icon" onClick={playSqueak} onMouseEnter={playHover} />
              <img src="/images/icon_bunny.png" alt="" className="char-icon" onClick={playSqueak} onMouseEnter={playHover} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ===== SHOWCASE ===== */}
      <section className="showcase container">
        <motion.h2 className="sec-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Frisch aus der Werkstatt
          <img src="/images/clover_generated.png" alt="" className="title-clover" />
        </motion.h2>

        <div className="showcase-grid">
          {[
            { img: '/images/IMG_4392.jpg', label: 'Krokodil-Box', icon: '/images/icon_giraffe.png' },
            { img: '/images/IMG_4391.jpg', label: 'Schlangen-Bild', icon: '/images/icon_cat.png' },
            { img: '/images/IMG_4388.jpg', label: 'Gutschein-Katze', icon: '/images/icon_cat.png' },
            { img: '/images/IMG_4390.jpg', label: 'Alles Liebe!', icon: '/images/icon_bunny.png' },
            { img: '/images/IMG_4384.jpg', label: 'DIY Geschenkidee', icon: '/images/icon_bear.png' },
            { img: '/images/IMG_4394.jpg', label: 'Windel-Panda', icon: '/images/icon_panda.png' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="photo-card showcase-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
              whileHover={{ y: -12 }}
              onClick={playPop}
              onMouseEnter={playHover}
            >
              <div className="showcase-img-wrap">
                <img src={item.img} alt={item.label} />
                <img src={item.icon} alt="" className="showcase-badge" />
              </div>
              <div className="card-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <img src="/images/divider.png" alt="" className="section-divider" />

      {/* ===== INSTAGRAM CTA ===== */}
      <section className="insta container">
        <motion.div className="insta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div className="insta-grid">
            <img src="/images/IMG_4381.jpg" alt="" className="insta-thumb" onClick={playPop} />
            <img src="/images/IMG_4382.jpg" alt="" className="insta-thumb" onClick={playPop} />
          </div>
          <div className="insta-text">
            <h2>Mehr auf Instagram</h2>
            <p>Folge mir für neue DIY-Ideen, Bastel-Reels und süße Überraschungen!
            Ich zeige dir, wie du mit einfachen Materialien schöne Dinge erschaffst.</p>
            <a href="https://www.instagram.com/klebensfroh/" target="_blank" rel="noreferrer"
               className="btn-primary" onClick={playChime}>
              <img src="/images/icon_cat.png" alt="" className="btn-icon" /> @klebensfroh folgen
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
