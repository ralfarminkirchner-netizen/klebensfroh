import { motion } from 'framer-motion';
import './Shop.css';

const Shop = () => {
  return (
    <motion.div
      className="shop-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="section-title">Aufträge & Wünsche ✨</h2>

      <div className="shop-grid">
        <motion.div
          className="shop-showcase"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="polaroid" style={{ transform: 'rotate(-3deg)' }}>
            <img src="/images/IMG_4392.jpg" alt="Krokodil Box" />
            <span className="polaroid-label">Geschenk-Box Krokodil 🐊</span>
          </div>
          
          <div className="shop-services">
            <h3>Was ich für dich basteln kann</h3>
            <div className="service-list">
              <div className="service-item">
                <span className="service-icon">🎨</span>
                <div>
                  <strong>Individuelle Tier-Verpackungen</strong>
                  <p>Dein Lieblingstier als Geschenktüte oder Box</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-icon">💌</span>
                <div>
                  <strong>Handbemalte Karten & Einladungen</strong>
                  <p>Für Geburtstage, Taufen und besondere Anlässe</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-icon">✂️</span>
                <div>
                  <strong>Deko & Aufsteller</strong>
                  <p>Kleine Kunstwerke aus Pappe für Kinderzimmer & mehr</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-icon">🐻</span>
                <div>
                  <strong>Windeltiere</strong>
                  <p>Süße Pandas, Bären und mehr aus Windeln</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-icon">💰</span>
                <div>
                  <strong>Kreative Geldgeschenke</strong>
                  <p>Spardosen & Geldautomaten aus Karton</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="shop-form-wrapper"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="form-card">
            <h3>Schreib mir eine Nachricht 💌</h3>
            <p className="form-subtitle">
              Beschreibe mir deine Idee – ich melde mich so schnell wie möglich!
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <label>Dein Name</label>
                <input type="text" className="input-craft" placeholder="Wie darf ich dich nennen?" />
              </div>
              <div className="form-row">
                <label>Deine E-Mail</label>
                <input type="email" className="input-craft" placeholder="Wo kann ich dir antworten?" />
              </div>
              <div className="form-row">
                <label>Anlass</label>
                <select className="input-craft">
                  <option>Geburtstag 🎂</option>
                  <option>Hochzeit 💒</option>
                  <option>Taufe 👶</option>
                  <option>Ostern 🐰</option>
                  <option>Weihnachten 🎄</option>
                  <option>Einfach so 💕</option>
                </select>
              </div>
              <div className="form-row">
                <label>Deine Idee</label>
                <textarea
                  className="input-craft"
                  rows="5"
                  placeholder="Beschreibe mir, was du dir wünschst... z.B. 'Eine Krokodil-Box für den 5. Geburtstag meines Sohnes'"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-craft"
                style={{ width: '100%', justifyContent: 'center' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ✉️ Nachricht absenden
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;
