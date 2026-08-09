import './cssPojedinacni/Kontakt.css';

const ViberIkonica = () => (
    <svg viewBox="0 0 44 44" className="kontakt-ikonica" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#7360F2" />
        <path d="M22 10c-6.5 0-11.5 4.3-11.5 10.2 0 3.5 2 6.6 5.1 8.5-.2.9-.7 2.7-.8 3.1-.1.4.1.4.3.3.2-.1 2.6-1.7 3.6-2.4 1 .2 2.1.4 3.3.4 6.5 0 11.5-4.3 11.5-10.2S28.5 10 22 10z" fill="#ffffff" />
        <path d="M26.5 24.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.5-.8-2.1-1.4-.6-.6-1-1.2-1.3-1.9-.1-.2 0-.3.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.4 3.8 3.4.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" fill="#7360F2" />
    </svg>
);

const WhatsAppIkonica = () => (
    <svg viewBox="0 0 44 44" className="kontakt-ikonica" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#25D366" />
        <path d="M22 11c-6.1 0-11 4.9-11 11 0 2 .5 3.8 1.5 5.4L11 33l5.8-1.5c1.5.8 3.3 1.3 5.2 1.3 6.1 0 11-4.9 11-11s-4.9-11-11-11zm0 20c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.4.9.9-3.3-.2-.3c-.9-1.4-1.4-3.1-1.4-4.8 0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-3.9 9-8.7 9z" fill="#ffffff" />
        <path d="M27 24.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" fill="#ffffff" />
    </svg>
);

const InstagramIkonica = () => (
    <svg viewBox="0 0 44 44" className="kontakt-ikonica" aria-hidden="true">
        <defs>
            <linearGradient id="igGrad" x1="0" y1="44" x2="44" y2="0">
                <stop offset="0" stopColor="#FEDA75" />
                <stop offset="0.3" stopColor="#D62976" />
                <stop offset="0.65" stopColor="#962FBF" />
                <stop offset="1" stopColor="#4F5BD5" />
            </linearGradient>
        </defs>
        <circle cx="22" cy="22" r="22" fill="url(#igGrad)" />
        <rect x="12" y="12" width="20" height="20" rx="6" fill="none" stroke="#ffffff" strokeWidth="2" />
        <circle cx="22" cy="22" r="5" fill="none" stroke="#ffffff" strokeWidth="2" />
        <circle cx="28.5" cy="15.5" r="1.4" fill="#ffffff" />
    </svg>
);

// Vodeći broj za Viber/WhatsApp linkove (prvi od dva navedena)
//centriraj ikonice u odnosu na naslov kontakti
const VODECI_BROJ = '381628715791';

const Kontakt = () => {
  return (
    <footer id="kontakt">
      <h3>Kontakt</h3>

      <div className="kontakt-container">
        <div className="kontakt-left">
        <p><a href="tel:+381628715791">+381 62 871 5791</a></p>
        <p><a href="tel:+381628402815">+381 62 840 2815</a></p>
        </div>

        <div className="kontakt-icons">
          <a href={`viber://chat?number=%2B${VODECI_BROJ}`} target="_blank" rel="noopener noreferrer" aria-label="Viber">
            <ViberIkonica />
          </a>
          <a href={`https://wa.me/${VODECI_BROJ}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIkonica />
          </a>
          <a href="https://www.instagram.com/dubinsko_pranje_cegiclean" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIkonica />
          </a>
        </div>

        <div className="kontakt-right">
          <a href="https://www.instagram.com/dubinsko_pranje_cegiclean" target="_blank" rel="noopener noreferrer" className="kontakt-ig-link">
            @dubinsko_pranje_cegiclean
          </a>
        </div>
      </div>

      <p className="kontakt-vodeni-zig">made by Petar Rodić</p>
    </footer>
  );
};

export default Kontakt;
