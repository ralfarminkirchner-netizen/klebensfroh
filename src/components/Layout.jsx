import { Outlet, NavLink } from 'react-router-dom';
import { Heart, Image as ImageIcon, ShoppingBag, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <motion.header 
        className="header glass-panel"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Paintbrush size={32} color="var(--color-primary-dark)" />
            <h1>klebens<span>froh</span></h1>
          </motion.div>
          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item glass-button active' : 'nav-item glass-button'}>
              <Heart size={18} /> Startseite
            </NavLink>
            <NavLink to="/galerie" className={({isActive}) => isActive ? 'nav-item glass-button active' : 'nav-item glass-button'}>
              <ImageIcon size={18} /> Galerie
            </NavLink>
            <NavLink to="/auftraege" className={({isActive}) => isActive ? 'nav-item glass-button active' : 'nav-item glass-button'}>
              <ShoppingBag size={18} /> Aufträge
            </NavLink>
          </nav>
        </div>
      </motion.header>

      <main className="main-content">
        <Outlet />
      </main>

      <motion.footer 
        className="footer glass-panel"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
      >
        <div className="container footer-content">
          <div className="footer-text">
            <p>Mit ganz viel Liebe handgemacht von Petra 💖</p>
          </div>
          <div className="social-links">
            {['instagram', 'tiktok', 'facebook'].map((social, i) => (
              <motion.a 
                key={social}
                href={`https://${social}.com`} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 10, backgroundColor: 'var(--color-primary)' }}
                whileTap={{ scale: 0.9 }}
                className="glass-social"
              >
                <div className={`icon-${social}`} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
