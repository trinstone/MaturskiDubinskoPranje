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
          <img src={viber} alt="Viber" />
          <img src={whatsapp} alt="WhatsApp" />
          <img src={instagram} alt="Instagram" />
        </div>

        <div className="kontakt-right">
          <p>@instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Kontakt;
