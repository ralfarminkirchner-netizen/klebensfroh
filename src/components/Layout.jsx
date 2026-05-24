import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { playPop, playHover } from '../sounds';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Startseite', icon: '/images/clover_generated.png', end: true },
  { to: '/galerie', label: 'Galerie', icon: '/images/icon_bear.png' },
  { to: '/auftraege', label: 'Aufträge', icon: '/images/icon_bunny.png' },
];

const Layout = () => {
  return (
    <div className="site">
      {/* Fairy light dots */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="fairy-dot"
          style={{
            top: `${5 + Math.random() * 90}%`,
            left: `${3 + Math.random() * 94}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${2 + Math.random() * 2.5}s`,
          }}
        />
      ))}

      <motion.header
        className="site-header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container header-row">
          <NavLink to="/" className="logo-group" onClick={playPop}>
            <img src="/images/IMG_4378.jpg" alt="Klebensfroh" className="logo-photo" />
            <div className="logo-words">
              <span className="logo-name">Klebensfroh</span>
              <span className="logo-sub">Glück selbermachen</span>
            </div>
          </NavLink>

          <nav className="nav-bar">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
                onMouseEnter={playHover}
                onClick={playPop}
              >
                <img src={n.icon} alt="" className="nav-icon" />
                <span>{n.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="main-area">
        <Outlet />
      </main>

      <footer className="site-footer">
        <img src="/images/divider.png" alt="" className="section-divider" />
        <div className="container footer-row">
          <p className="footer-text">Handgemacht mit Liebe von Petra Kirchner</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/klebensfroh/" target="_blank" rel="noreferrer" className="footer-social" onMouseEnter={playHover}>
              <img src="/images/icon_cat.png" alt="" className="social-icon" />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@klebensfroh" target="_blank" rel="noreferrer" className="footer-social" onMouseEnter={playHover}>
              <img src="/images/icon_panda.png" alt="" className="social-icon" />
              TikTok
            </a>
            <a href="https://www.facebook.com/klebensfroh" target="_blank" rel="noreferrer" className="footer-social" onMouseEnter={playHover}>
              <img src="/images/icon_giraffe.png" alt="" className="social-icon" />
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
