import { motion } from 'framer-motion';
import { playPop, playHover, playSqueak } from '../sounds';
import './Shop.css';

const services = [
  { icon: '/images/icon_bear.png', title: 'Individuelle Tier-Verpackungen', desc: 'Dein Lieblingstier als Geschenktüte oder Box' },
  { icon: '/images/icon_bunny.png', title: 'Handbemalte Karten & Einladungen', desc: 'Für Geburtstage, Taufen und besondere Anlässe' },
  { icon: '/images/icon_giraffe.png', title: 'Deko & Aufsteller', desc: 'Kleine Kunstwerke aus Pappe für Kinderzimmer & mehr' },
  { icon: '/images/icon_panda.png', title: 'Windeltiere', desc: 'Süße Pandas, Bären und mehr aus Windeln' },
  { icon: '/images/icon_cat.png', title: 'Kreative Geldgeschenke', desc: 'Spardosen & Geldautomaten aus Karton' },
];

const Shop = () => {
  return (
    <motion.div className="shop container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className="sec-title">
        Aufträge & Wünsche
        <img src="/images/clover_generated.png" alt="" className="title-clover" />
      </h2>

      <div className="shop-layout">
        <motion.div className="shop-left" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="photo-card shop-hero-photo">
            <img src="/images/IMG_4392.jpg" alt="Krokodil Box" />
            <div className="card-label">Dein Wunsch-Tier als Geschenk-Box</div>
          </div>

          <h3 className="services-title">Was ich für dich basteln kann</h3>
          <div className="service-list">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                onMouseEnter={playHover}
                onClick={playSqueak}
              >
                <img src={s.icon} alt="" className="service-icon" />
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="shop-right" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <div className="form-box">
            <h3>Schreib mir eine Nachricht</h3>
            <p className="form-sub">Beschreibe mir deine Idee – ich melde mich so schnell wie möglich!</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field">
                <label>Dein Name</label>
                <input type="text" className="input-field" placeholder="Wie darf ich dich nennen?" />
              </div>
              <div className="field">
                <label>Deine E-Mail</label>
                <input type="email" className="input-field" placeholder="Wo kann ich dir antworten?" />
              </div>
              <div className="field">
                <label>Anlass</label>
                <select className="input-field">
                  <option>Geburtstag</option>
                  <option>Hochzeit</option>
                  <option>Taufe</option>
                  <option>Ostern</option>
                  <option>Weihnachten</option>
                  <option>Einfach so</option>
                </select>
              </div>
              <div className="field">
                <label>Deine Idee</label>
                <textarea className="input-field" rows="5" placeholder="z.B. 'Eine Krokodil-Box für den 5. Geburtstag meines Sohnes'"></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={playPop}
              >
                <img src="/images/icon_bunny.png" alt="" className="btn-icon" /> Nachricht absenden
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;
