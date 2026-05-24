import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Shop.css';

const Shop = () => {
  return (
    <motion.div 
      className="shop-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="page-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Aufträge & Shop 🛍️
      </motion.h2>
      
      <div className="shop-layout">
        <motion.div 
          className="shop-info glass-panel"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Etwas Eigenes gefällig?</h3>
          <p>
            Du hast eine genaue Vorstellung, wie dein Lieblingstier aussehen soll? Oder du brauchst individuelle Einladungskarten für den nächsten Kindergeburtstag?
          </p>
          <p>
            Schreib mir einfach! Ich fertige alle meine Kunstwerke und Basteleien auf Wunsch und ganz nach deinen Vorstellungen an.
          </p>
          <ul className="shop-list">
            <motion.li whileHover={{ x: 10, scale: 1.02 }}>🎨 Individuelle Tier-Zeichnungen</motion.li>
            <motion.li whileHover={{ x: 10, scale: 1.02 }}>💌 Handgebastelte Gruß- & Einladungskarten</motion.li>
            <motion.li whileHover={{ x: 10, scale: 1.02 }}>✂️ Kleine Deko-Aufsteller aus Pappe</motion.li>
            <motion.li whileHover={{ x: 10, scale: 1.02 }}>🎁 Personalisierte Geschenkanhänger</motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="shop-form glass-panel"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Schreib mir eine Nachricht 💌</h3>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="form-group">
              <label>Dein Name</label>
              <input type="text" placeholder="Wie darf ich dich nennen?" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Deine E-Mail</label>
              <input type="email" placeholder="Wo kann ich dir antworten?" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Deine Idee</label>
              <textarea rows="5" placeholder="Beschreibe mir, was du dir wünschst..." className="glass-input"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="glass-button" 
              style={{width: '100%', justifyContent: 'center', background: 'var(--color-primary)', color: 'white'}}
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
