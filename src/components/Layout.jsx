import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Layout.css';

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
            className="logo-container"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Using her ACTUAL hand-drawn logo from the image */}
            <img src="/images/logo_extracted.png" alt="Klebens-froh Petra Kirchner" className="real-logo" />
          </motion.div>
          
          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <img src="/images/clover_icon.png" alt="Kleeblatt" className="nav-clover" />
              Startseite
            </NavLink>
            <NavLink to="/galerie" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <img src="/images/clover_icon.png" alt="Kleeblatt" className="nav-clover" />
              Galerie
            </NavLink>
            <NavLink to="/auftraege" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <img src="/images/clover_icon.png" alt="Kleeblatt" className="nav-clover" />
              Aufträge
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
            <p>Mit Liebe gezeichnet, geschnitten und geklebt 🌿</p>
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
