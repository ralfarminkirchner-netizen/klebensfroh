import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Layout.css';

// SVG Icon representing a hand-drawn leaf/clover element
const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="fairy-lights-bg"></div>
      
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">Klebens-froh</span>
            <span className="logo-sub">PETRA KIRCHNER</span>
          </motion.div>
          
          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <LeafIcon /> Startseite
            </NavLink>
            <NavLink to="/galerie" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <LeafIcon /> Galerie
            </NavLink>
            <NavLink to="/auftraege" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <LeafIcon /> Aufträge
            </NavLink>
          </nav>
        </div>
      </motion.header>

      <main className="main-content">
        <Outlet />
      </main>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container footer-content">
          <div className="footer-text">
            <p>Mit Liebe und Papier gestaltet von Petra Kirchner 🌿</p>
          </div>
          <div className="social-links">
            <motion.a href="https://instagram.com" target="_blank" rel="noreferrer" whileHover={{ y: -5, rotate: 10 }}>
              Instagram
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
