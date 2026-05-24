import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Layout.css';

const Layout = () => {
  return (
    <div className="site">
      {/* Floating fairy light dots across the whole page */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="fairy-dot"
          style={{
            top: `${8 + Math.random() * 84}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2.5 + Math.random() * 2}s`,
          }}
        />
      ))}

      <motion.header
        className="site-header"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container header-inner">
          <NavLink to="/" className="logo-link">
            {/* Her real logo from the canvas photo */}
            <img
              src="/images/IMG_4378.jpg"
              alt="Klebensfroh Logo auf Leinwand"
              className="logo-canvas"
            />
            <div className="logo-text-stack">
              <span className="logo-brand">Klebens-froh</span>
              <span className="logo-tagline">Glück selbermachen</span>
            </div>
          </NavLink>

          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
              <img src="/images/clover_generated.png" alt="" className="nav-clover" />
              Startseite
            </NavLink>
            <NavLink to="/galerie" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
              <img src="/images/clover_generated.png" alt="" className="nav-clover" />
              Galerie
            </NavLink>
            <NavLink to="/auftraege" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
              <img src="/images/clover_generated.png" alt="" className="nav-clover" />
              Aufträge
            </NavLink>
          </nav>
        </div>
      </motion.header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <img src="/images/divider.png" alt="" className="section-divider" />
        <div className="container footer-inner">
          <p className="footer-love">Handgemacht mit 🍀 von Petra Kirchner</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/klebensfroh/" target="_blank" rel="noreferrer" className="social-pill">
              📸 Instagram
            </a>
            <a href="https://www.tiktok.com/@klebensfroh" target="_blank" rel="noreferrer" className="social-pill">
              🎵 TikTok
            </a>
            <a href="https://www.facebook.com/klebensfroh" target="_blank" rel="noreferrer" className="social-pill">
              💬 Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
