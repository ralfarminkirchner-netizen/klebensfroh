import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { playPop, playSqueak, playChime, playHover } from '../sounds';
import './Home.css';

const fadeIn = (d = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay: d, duration: 0.7, ease: [0.23, 1, 0.32, 1] },
});

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroP = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

      {/* ======= HERO: Scrapbook Opening ======= */}
      <section className="hero">
        <div className="container hero-layout">
          <motion.div className="hero-left" {...fadeIn(0)}>
            <h1 className="hero-title">
              Glück<br />selbermachen
              <img src="/images/clover_generated.png" alt="" className="hero-clover" />
            </h1>
            <p className="hero-text">
              Willkommen bei <strong>Klebensfroh</strong>! Ich bin Petra und
              verwandle Pappe, Papier und ganz viel Herz in kleine Kunstwerke,
              die Freude schenken.
            </p>
            <div className="hero-actions">
              <Link to="/galerie" className="btn-craft" onClick={playChime}>
                <img src="/images/petra_icons/loewe.png" alt="" className="btn-sticker" />
                Galerie ansehen
              </Link>
              <Link to="/auftraege" className="btn-craft btn-light" onClick={playPop}>
                <img src="/images/petra_icons/weisse_katze.png" alt="" className="btn-sticker" />
                Auftrag anfragen
              </Link>
            </div>
          </motion.div>

          {/* Scrapbook photo collage */}
          <div className="hero-collage">
            <motion.div className="scrap-photo sp-1" style={{ y: heroP }} {...fadeIn(0.2)}>
              <div className="washi washi-green" style={{ top: -8, left: 30, transform: 'rotate(-5deg)' }} />
              <div className="craft-photo">
                <img src="/images/IMG_4386.jpg" alt="Bärentüte" />
              </div>
              <span className="scrap-caption">Polizisten-Bär</span>
            </motion.div>

            <motion.div className="scrap-photo sp-2" {...fadeIn(0.4)}>
              <div className="washi washi-gold" style={{ top: -8, right: 20, transform: 'rotate(8deg)' }} />
              <div className="craft-photo">
                <img src="/images/IMG_4387.jpg" alt="Giraffen-Tüte" />
              </div>
              <span className="scrap-caption">Kleine Giraffe</span>
            </motion.div>

            {/* Petra's REAL characters as peeking stickers */}
            <motion.img src="/images/petra_icons/petra_panda.png" alt="Panda" className="sticker hero-sticker-1"
              {...fadeIn(0.7)} whileHover={{ scale: 1.3, rotate: 10, y: -15 }} whileTap={{ scale: 0.8 }}
              onClick={playSqueak} onMouseEnter={playHover} />
            <motion.img src="/images/petra_icons/petra_cat.png" alt="Katze" className="sticker hero-sticker-2"
              {...fadeIn(0.9)} whileHover={{ scale: 1.3, rotate: -10, y: -15 }} whileTap={{ scale: 0.8 }}
              onClick={playSqueak} onMouseEnter={playHover} />
            <motion.img src="/images/petra_icons/pinguin.png" alt="Pinguin" className="sticker hero-sticker-3"
              {...fadeIn(1.0)} whileHover={{ scale: 1.3, rotate: 8, y: -12 }} whileTap={{ scale: 0.8 }}
              onClick={playSqueak} onMouseEnter={playHover} />
          </div>
        </div>
      </section>

      {/* ======= DIVIDER ======= */}
      <div className="divider-row">
        <span className="divider-line" />
        <motion.img src="/images/petra_icons/panda_grid.png" alt="" className="divider-icon" {...fadeIn()} />
        <span className="divider-line" />
      </div>

      {/* ======= ABOUT: Scrapbook spread ======= */}
      <section className="about container">
        <div className="about-spread">
          <motion.div className="about-photos" {...fadeIn(0)}>
            <div className="scrap-photo sp-about-1">
              <div className="washi washi-pink" style={{ top: -8, left: 40, transform: 'rotate(3deg)' }} />
              <div className="craft-photo"><img src="/images/IMG_4383.jpg" alt="Petra" /></div>
              <span className="scrap-caption">Meine Bastelwelt</span>
            </div>
            <div className="scrap-photo sp-about-2">
              <div className="washi washi-green" style={{ top: -8, right: 15, transform: 'rotate(-6deg)' }} />
              <div className="craft-photo"><img src="/images/IMG_4393.jpg" alt="Geldautomat" /></div>
              <span className="scrap-caption">Geldautomat</span>
            </div>
            <motion.img src="/images/petra_icons/petra_giraffe.png" alt="" className="sticker about-sticker"
              whileHover={{ scale: 1.3, rotate: 8 }} onClick={playSqueak} onMouseEnter={playHover} />
          </motion.div>

          <motion.div className="about-words" {...fadeIn(0.2)}>
            <h2>Liebe Grüße aus meiner kleinen Bastelwelt</h2>
            <p>Ich bin Petra – und hinter Klebensfroh steckt meine ganze Leidenschaft.
            Ob süße Tier-Verpackungen, Oster-Häschen aus Socken, handbemalte Spardosen
            oder ein Geldautomat aus Karton – bei mir wird nichts weggeworfen, sondern verwandelt.</p>
            <p>Jedes Stück entsteht mit Liebe zum Detail und dem Glauben, dass kleine Dinge
            große Freude machen können.</p>
          </motion.div>
        </div>
      </section>

      {/* ======= DIVIDER ======= */}
      <div className="divider-row">
        <span className="divider-line" />
        <motion.img src="/images/petra_icons/loewe.png" alt="" className="divider-icon" {...fadeIn()} />
        <span className="divider-line" />
      </div>

      {/* ======= SHOWCASE: Scrapbook page ======= */}
      <section className="showcase container">
        <motion.h2 className="showcase-title" {...fadeIn()}>Frisch aus der Werkstatt</motion.h2>

        <div className="scrapbook-page">
          {[
            { img: '/images/IMG_4392.jpg', cap: 'Krokodil-Box', rot: -3, sticker: '/images/petra_icons/waschbaer.png', washi: 'washi-green', wr: -4 },
            { img: '/images/IMG_4391.jpg', cap: 'Schlangen-Bild', rot: 2, sticker: '/images/petra_icons/graue_katze.png', washi: 'washi-gold', wr: 6 },
            { img: '/images/IMG_4388.jpg', cap: 'Gutschein-Katze', rot: -1, sticker: '/images/petra_icons/rosa_fox.png', washi: 'washi-pink', wr: -3 },
            { img: '/images/IMG_4390.jpg', cap: 'Alles Liebe!', rot: 3, sticker: '/images/petra_icons/rosa_reh.png', washi: 'washi-green', wr: 5 },
            { img: '/images/IMG_4384.jpg', cap: 'DIY Geschenkidee', rot: -2, sticker: '/images/petra_icons/elefant.png', washi: 'washi-gold', wr: -7 },
            { img: '/images/IMG_4394.jpg', cap: 'Windel-Panda', rot: 1, sticker: '/images/petra_icons/pink_baer.png', washi: 'washi-pink', wr: 4 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="scrap-photo sc-card"
              style={{ '--rot': `${item.rot}deg` }}
              {...fadeIn(i * 0.1)}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 10, y: -14 }}
              onClick={playPop}
              onMouseEnter={playHover}
            >
              <div className={`washi ${item.washi}`} style={{ top: -10, left: 25 + i * 8, transform: `rotate(${item.wr}deg)` }} />
              <div className="craft-photo"><img src={item.img} alt={item.cap} /></div>
              <span className="scrap-caption">{item.cap}</span>
              <motion.img src={item.sticker} alt="" className="sticker card-sticker"
                whileHover={{ scale: 1.4, rotate: 12 }} onClick={(e) => { e.stopPropagation(); playSqueak(); }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======= DIVIDER ======= */}
      <div className="divider-row">
        <span className="divider-line" />
        <motion.img src="/images/petra_icons/weisse_katze.png" alt="" className="divider-icon" {...fadeIn()} />
        <span className="divider-line" />
      </div>

      {/* ======= INSTAGRAM CTA ======= */}
      <section className="insta container">
        <motion.div className="insta-spread" {...fadeIn()}>
          <div className="insta-photos">
            <div className="scrap-photo sp-insta-1">
              <div className="washi washi-green" style={{ top: -8, left: 20, transform: 'rotate(-4deg)' }} />
              <div className="craft-photo"><img src="/images/IMG_4381.jpg" alt="" /></div>
            </div>
            <div className="scrap-photo sp-insta-2">
              <div className="washi washi-gold" style={{ top: -8, right: 20, transform: 'rotate(5deg)' }} />
              <div className="craft-photo"><img src="/images/IMG_4382.jpg" alt="" /></div>
            </div>
          </div>
          <div className="insta-words">
            <h2>Mehr auf Instagram</h2>
            <p>Folge mir für neue DIY-Ideen, Bastel-Reels und süße Überraschungen!</p>
            <a href="https://www.instagram.com/klebensfroh/" target="_blank" rel="noreferrer" className="btn-craft" onClick={playChime}>
              <img src="/images/petra_icons/petra_cat.png" alt="" className="btn-sticker" />
              @klebensfroh folgen
            </a>
          </div>
        </motion.div>
      </section>

      <div style={{ height: '60px' }} />
    </motion.div>
  );
};

export default Home;
