import { Send } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-container container">
      <h2 className="page-title">Aufträge & Shop 🛍️</h2>
      
      <div className="shop-layout">
        <div className="shop-info cute-card">
          <h3>Etwas Eigenes gefällig?</h3>
          <p>
            Du hast eine genaue Vorstellung, wie dein Lieblingstier aussehen soll? Oder du brauchst individuelle Einladungskarten für den nächsten Kindergeburtstag?
          </p>
          <p>
            Schreib mir einfach! Ich (Petra) fertige alle meine Kunstwerke und Basteleien auf Wunsch und ganz nach deinen Vorstellungen an.
          </p>
          <ul className="shop-list">
            <li>🎨 Individuelle Tier-Zeichnungen (A4/A5)</li>
            <li>💌 Handgebastelte Gruß- & Einladungskarten</li>
            <li>✂️ Kleine Deko-Aufsteller aus Pappe</li>
            <li>🎁 Personalisierte Geschenkanhänger</li>
          </ul>
        </div>

        <div className="shop-form cute-card">
          <h3>Schreib mir eine Nachricht 💌</h3>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="form-group">
              <label>Dein Name</label>
              <input type="text" placeholder="Wie darf ich dich nennen?" />
            </div>
            <div className="form-group">
              <label>Deine E-Mail</label>
              <input type="email" placeholder="Wo kann ich dir antworten?" />
            </div>
            <div className="form-group">
              <label>Deine Idee</label>
              <textarea rows="5" placeholder="Beschreibe mir, was du dir wünschst..."></textarea>
            </div>
            <button type="submit" className="cute-button" style={{width: '100%', justifyContent: 'center'}}>
              Nachricht senden <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
