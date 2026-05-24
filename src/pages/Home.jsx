import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container container">
      
      <section className="hero-section">
        <div className="hero-text">
          <h2 className="page-title">Glück selbermachen ✨</h2>
          <p className="hero-subtitle">
            Schön, dass du hier bist! Ich bin Petra und ich liebe es, süße Tierchen, lustige Gesichter und kreative Basteleien aus allen möglichen Materialien zu erschaffen. Willkommen bei Klebensfroh!
          </p>
          <div className="hero-actions">
            <Link to="/galerie" className="cute-button">
              Zur Galerie <ArrowRight size={20} />
            </Link>
            <Link to="/auftraege" className="cute-button" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-text-main)' }}>
              Eigener Auftrag <Star size={20} />
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          {/* Collage of her crafts/drawings */}
          <div className="collage-box">
             <img src="/images/steph_bild_1.jpg" alt="Hund Bastelei" className="polaroid p-1" />
             <img src="/images/steph_bild_2.jpg" alt="Einhorn" className="polaroid p-2" />
             <img src="/images/media__1779624826879.jpg" alt="Kleeblatt Tiere" className="polaroid p-3" />
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Meine kleinen Lieblinge 🐾</h3>
        <div className="highlights-grid">
          <div className="cute-card">
            <h4>Handgezeichnet</h4>
            <p>Jedes meiner Tiere wird von Hand skizziert und liebevoll mit Farbe zum Leben erweckt.</p>
          </div>
          <div className="cute-card">
            <h4>Kreative Basteleien</h4>
            <p>Ob Geburtstagseinladungen, Deko oder kleine Geschenke – Pappe und Schere sind meine besten Freunde.</p>
          </div>
          <div className="cute-card">
            <h4>Dein Motiv</h4>
            <p>Du hast eine ganz eigene Idee? Ich zeichne oder bastle dir dein Wunschmotiv mit ganz viel Herz!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
