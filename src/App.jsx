import React from 'react';
import './index.css';

// Import images
const carImg = 'https://images.unsplash.com/photo-1584844308364-5e5812c7d91e?auto=format&fit=crop&q=80&w=800'; // placeholder for car
const atmImg = 'https://images.unsplash.com/photo-1629904853716-f0bc54eaa981?auto=format&fit=crop&q=80&w=800'; // placeholder for ATM box
const bunnyImg = 'https://images.unsplash.com/photo-1582216503923-b67fb90ed7ec?auto=format&fit=crop&q=80&w=800'; // placeholder for shelf

function App() {
  const crafts = [
    {
      id: 1,
      title: "Geschenk-Geldautomat",
      description: "Ein detaillierter, liebevoll gestalteter Geldautomat aus Pappe. Perfekt als kreative Verpackung für Geldgeschenke.",
      image: atmImg,
    },
    {
      id: 2,
      title: "Das Dankeschön-Auto",
      description: "Ein kleines Papp-Auto mit rustikalen Details, grüner Schleife und einem süßen 'Danke'-Schild.",
      image: carImg,
    },
    {
      id: 3,
      title: "Häschen-Regal",
      description: "Ein dekoratives Wandregal in Hasenform, verziert mit floralem Muster und flauschigem Rand.",
      image: bunnyImg,
    }
  ];

  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          {/* Text-based logo that mimics the upload logo's style */}
          <h1 className="logo-main">klebens<span>froh</span></h1>
          <div className="logo-sub">GLÜCK SELBERMACHEN</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Ein Stückchen Glück.</h2>
          <p>
            Entdecke liebevoll handgemachte Unikate aus recycelter Pappe und Naturmaterialien. 
            Jedes Stück wird mit viel Liebe zum Detail gefertigt, um dir oder deinen Liebsten 
            ein Lächeln ins Gesicht zu zaubern.
          </p>
        </section>

        <section className="gallery-section">
          <h2 className="gallery-title">Meine neuesten Werke</h2>
          <div className="gallery-grid">
            {crafts.map((craft) => (
              <div key={craft.id} className="gallery-card">
                <div className="card-img-wrapper">
                  <img src={craft.image} alt={craft.title} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>{craft.title}</h3>
                  <p>{craft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <h2 className="handwritten" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
          klebensfroh
        </h2>
        <p>© {new Date().getFullYear()} klebensfroh. Alle Rechte vorbehalten. Glück selbstgemacht.</p>
      </footer>
    </div>
  );
}

export default App;
