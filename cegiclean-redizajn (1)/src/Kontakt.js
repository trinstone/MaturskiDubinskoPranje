import './cssPojedinacni/Kontakt.css';
import instagram from './kontaktIkone/instagram.png';
import viber from './kontaktIkone/viber.png';
import whatsapp from './kontaktIkone/whatsapp.png';

const Kontakt = () => {
  return (
    <footer id="kontakt">
      <h3>Kontakt</h3>

      <div className="kontakt-container">
        <div className="kontakt-left">
          <p>065 85 67 280</p>
          <p>065 85 67 281</p>
          <p>065 85 67 282</p>
        </div>

        <div className="kontakt-icons">
          <a href="viber://chat?number=%2B381658567280" target="_blank" rel="noopener noreferrer">
            <img src={viber} alt="Viber" className="viber-icon" />
          </a>
          <a href="https://wa.me/381658567280" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/dubinsko_pranje_cegiclean" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>

        <div className="kontakt-right">
          <a href="https://www.instagram.com/dubinsko_pranje_cegiclean" target="_blank" rel="noopener noreferrer" className="kontakt-ig-link">
            @dubinsko_pranje_cegiclean
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Kontakt;
