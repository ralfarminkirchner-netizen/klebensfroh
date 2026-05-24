import { motion } from 'framer-motion';
import { playPop, playHover, playSqueak } from '../sounds';
import './Shop.css';

const services = [
  { icon: '/images/petra_icons/petra_panda.png', title: 'Tier-Verpackungen', desc: 'Dein Lieblingstier als Geschenktüte oder Box' },
  { icon: '/images/petra_icons/weisse_katze.png', title: 'Handbemalte Karten', desc: 'Für Geburtstage, Taufen und besondere Anlässe' },
  { icon: '/images/petra_icons/petra_giraffe.png', title: 'Deko & Aufsteller', desc: 'Kleine Kunstwerke aus Pappe für Kinderzimmer' },
  { icon: '/images/petra_icons/panda_grid.png', title: 'Windeltiere', desc: 'Süße Pandas, Bären und mehr aus Windeln' },
  { icon: '/images/petra_icons/loewe.png', title: 'Geldgeschenke', desc: 'Spardosen & Geldautomaten aus Karton' },
];

const Shop = () => (
  <motion.div className="shop container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <motion.h2 className="showcase-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      Aufträge & Wünsche
    </motion.h2>

    <div className="shop-grid">
      <div className="shop-left">
        <div className="scrap-photo" style={{ maxWidth: 360 }}>
          <div className="washi washi-green" style={{ top: -10, left: 30, transform: 'rotate(-4deg)' }} />
          <div className="craft-photo"><img src="/images/IMG_4392.jpg" alt="" /></div>
          <span className="scrap-caption">Dein Wunsch wird wahr</span>
        </div>

        <div className="svc-list">
          {services.map((s, i) => (
            <motion.div key={i} className="svc-row"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              whileHover={{ x: 8 }} onMouseEnter={playHover} onClick={playSqueak}>
              <img src={s.icon} alt="" className="sticker svc-sticker" />
              <div>
                <strong>{s.title}</strong>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="form-card">
        <h3>Schreib mir</h3>
        <p className="form-sub">Beschreibe mir deine Idee – ich melde mich!</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="field"><label>Dein Name</label><input type="text" className="input-craft" placeholder="Wie darf ich dich nennen?" /></div>
          <div className="field"><label>Deine E-Mail</label><input type="email" className="input-craft" placeholder="Wo kann ich dir antworten?" /></div>
          <div className="field"><label>Anlass</label>
            <select className="input-craft"><option>Geburtstag</option><option>Hochzeit</option><option>Taufe</option><option>Ostern</option><option>Weihnachten</option><option>Einfach so</option></select>
          </div>
          <div className="field"><label>Deine Idee</label>
            <textarea className="input-craft" rows="4" placeholder="z.B. 'Eine Krokodil-Box für den 5. Geburtstag'"></textarea>
          </div>
          <motion.button type="submit" className="btn-craft btn-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={playPop}>
            <img src="/images/petra_icons/rosa_reh.png" alt="" className="btn-sticker" />
            Nachricht absenden
          </motion.button>
        </form>
      </div>
    </div>
  </motion.div>
);

export default Shop;
