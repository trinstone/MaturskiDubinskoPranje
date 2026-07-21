import pozadina from './pozadina.png';
import masine1 from './masine/kercherDP2.png';
import masine2 from './masine/opremaStaklo2.png';
import masine3 from './masine/masinaPod.png';
import './cssPojedinacni/Pocetna.css';

const Kvacica = () => (
    <svg viewBox="0 0 24 24" className="kvacica-ikona" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#1663BC" />
        <path d="M7 12.5l3 3 7-7" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const prednosti = [
    'Dolazak na lice mesta, po dogovorenom terminu',
    'Popusti na redovno i periodično održavanje',
    'Radimo u najkraćem mogućem roku',
    'Profesionalna oprema i sredstva bezbedna za decu i kućne ljubimce',
    'Rad na malo (domaćinstva) i na veliko (restorani, hoteli, kancelarije)',
];

const zastoMi = [
    { broj: '5+', opis: 'godina iskustva u dubinskom pranju' },
    { broj: '100%', opis: 'zadovoljnih klijenata i preporuka' },
    { broj: '0', opis: 'skrivenih troškova, cena se zna unapred' },
    { broj: '24h', opis: 'odgovor na upit i zakazivanje termina' },
];

const Pocetna = () => {

    return(
        <main>
            <div id="Pocetna">
                <section className="hero">
                    <div className="hero-grid">
                        <div className="hero-tekstualni-deo">
                            <h1>Dubinsko pranje i čišćenje raznih površina</h1>
                            <p className="hero-tekst">
                                Dajte površinu, mi ćemo je očistiti. Preko tvrdih podnih površina
                                i prozora, do automobila (potpuno pranje, iznutra i spolja), nameštaja, tepiha, jastuka, stolica...
                                Profesionalno dubinsko pranje i na veliko (restorani, hoteli) i malo.
                            </p>
                            <a href="#kontakt" className="dugme-cta">Zakažite termin</a>
                        </div>
                        <div className="hero-slika-deo">
                            <img src={pozadina} alt="Dubinsko pranje nameštaja" className="hero-slika" />
                        </div>
                    </div>

                    <div className="prednosti-grid">
                        {prednosti.map((stavka) => (
                            <div className="prednost-kartica" key={stavka}>
                                <Kvacica />
                                <p>{stavka}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="zasto-mi">
                    <h3>Zašto baš mi?</h3>
                    <div className="zasto-mi-grid">
                        {zastoMi.map((stavka) => (
                            <div className="zasto-mi-kartica" key={stavka.opis}>
                                <span className="zasto-mi-broj">{stavka.broj}</span>
                                <p>{stavka.opis}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="oprema-sekcija">
                    <h3>Naša oprema</h3>
                    <p className="oprema-uvod">Koristimo moćne profesionalne mašine za trajne rezultate i čistoću na nivou.</p>
                    <div className='oprema-kartice'>
                        <div className="oprema-kartica">
                            <img src={masine1} alt="mašina za dubinsko pranje" className='hover-scale'/>
                            <p>Karcher mašina za dubinsko pranje</p>
                        </div>
                        <div className="oprema-kartica">
                            <img src={masine2} alt="mašina za pranje staklenih površina" className='hover-scale'/>
                            <p>Mašina za pranje staklenih površina</p>
                        </div>
                        <div className="oprema-kartica">
                            <img src={masine3} alt="mašina za pranje poda" className='hover-scale'/>
                            <p>Mašina za pranje podova</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Pocetna;
