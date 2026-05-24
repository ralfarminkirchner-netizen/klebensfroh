import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Shop.css';

const Shop = () => {
  return (
    <motion.div 
      className="shop-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="page-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Aufträge & Wünsche
      </motion.h2>
      
      <div className="shop-layout">
        <motion.div 
          className="shop-info paper-card"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="/images/IMG_4380.jpg" alt="Beispiel" className="shop-example-img" />
          <h3>Etwas Eigenes gefällig?</h3>
          <p>
            Du hast eine genaue Vorstellung, wie dein Lieblingstier aussehen soll? Oder du brauchst individuelle Einladungskarten für den nächsten Kindergeburtstag?
          </p>
          <p>
            Schreib mir einfach! Ich fertige alle meine Kunstwerke und Basteleien auf Wunsch und ganz nach deinen Vorstellungen an.
          </p>
          <ul className="shop-list">
            <li>🎨 Individuelle Tier-Zeichnungen</li>
            <li>💌 Handgebastelte Gruß- & Einladungskarten</li>
            <li>✂️ Kleine Deko-Aufsteller aus Pappe</li>
          </ul>
        </motion.div>

        <motion.div 
          className="shop-form paper-card"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Schreib mir eine Nachricht</h3>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="form-group">
              <label>Dein Name</label>
              <input type="text" placeholder="Wie darf ich dich nennen?" className="craft-input" />
            </div>
            <div className="form-group">
              <label>Deine E-Mail</label>
              <input type="email" placeholder="Wo kann ich dir antworten?" className="craft-input" />
            </div>
            <div className="form-group">
              <label>Deine Idee</label>
              <textarea rows="5" placeholder="Beschreibe mir, was du dir wünschst..." className="craft-input"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="craft-button" 
              style={{width: '100%', justifyContent: 'center'}}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nachricht senden <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;
