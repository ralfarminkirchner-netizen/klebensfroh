import { Outlet, NavLink } from 'react-router-dom';
import { Heart, Image as ImageIcon, ShoppingBag, Paintbrush } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <Paintbrush size={32} color="var(--color-primary)" />
            <h1>klebens<span>froh</span></h1>
          </div>
          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <Heart size={20} /> Startseite
            </NavLink>
            <NavLink to="/galerie" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <ImageIcon size={20} /> Galerie
            </NavLink>
            <NavLink to="/auftraege" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <ShoppingBag size={20} /> Aufträge & Shop
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-text">
            <p>Mit ganz viel Liebe handgemacht von Petra 💖</p>
          </div>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
