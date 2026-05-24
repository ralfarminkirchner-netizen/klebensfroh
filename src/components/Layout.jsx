import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingCharacters from './FloatingCharacters';
import { playPop, playHover, playSqueak } from '../sounds';
import './Layout.css';

const Layout = () => {
  return (
    <div className="site">
      <FloatingCharacters />

      <motion.header
        className="site-header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container header-row">
          <NavLink to="/" className="logo-group" onClick={playPop}>
            <img src="/images/stickers/logo.png" alt="Klebensfroh Logo" className="logo-img" />
          </NavLink>

          <nav className="nav-bar">
            {[
              { to: '/', label: 'Startseite', icon: '/images/stickers/petra_panda.png', end: true },
              { to: '/galerie', label: 'Galerie', icon: '/images/stickers/loewe.png' },
              { to: '/auftraege', label: 'Aufträge', icon: '/images/stickers/weisse_katze.png' },
            ].map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}
                onMouseEnter={playHover}
                onClick={playPop}
              >
                <img src={n.icon} alt="" className="nav-sticker" />
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="divider-row">
          <span className="divider-line" />
          <img src="/images/clover_generated.png" alt="" className="divider-icon" />
          <span className="divider-line" />
        </div>

        {/* Petra's character parade */}
        <div className="container">
          <div className="parade">
            {['graue_katze','elefant','reh','rosa_reh','rosa_fuchs','zebra','kamel','panda_sitzend','loewe','wal','wolke','weisse_katze','waschbaer','rosa_fox','pinguin','pink_baer','elefant_klein','kuh','giraffe_anhaenger'].map((a) => (
              <motion.img
                key={a}
                src={`/images/stickers/${a}.png`}
                alt=""
                className="sticker parade-item"
                whileHover={{ scale: 1.6, rotate: 12, y: -18, zIndex: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={playSqueak}
                onMouseEnter={playHover}
              />
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-love">Handgemacht mit Liebe von Petra Kirchner</p>
            <div className="footer-socials">
              {[
                { url: 'https://www.instagram.com/klebensfroh/', label: 'Instagram', icon: '/images/stickers/petra_cat.png' },
                { url: 'https://www.tiktok.com/@klebensfroh', label: 'TikTok', icon: '/images/stickers/petra_panda.png' },
                { url: 'https://www.facebook.com/klebensfroh', label: 'Facebook', icon: '/images/stickers/petra_giraffe.png' },
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-link" onMouseEnter={playHover}>
                  <img src={s.icon} alt="" className="social-sticker" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
