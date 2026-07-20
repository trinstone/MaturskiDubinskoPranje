import masine1 from './masine/kercherDP2.png';
import masine2 from './masine/opremaStaklo2.png';
import masine3 from './masine/masinaPod.png';
import './cssPojedinacni/Pocetna.css';

const Pocetna = () => {

    return(
        <main>
            <div id="Pocetna">
                <section className="hero">
                    <h1>Dubinsko pranje i čišćenje raznih površina</h1>
                    <p className="hero-tekst">
                        Dajte površinu, mi ćemo je očistiti. Preko tvrdih podnih površina
                        i prozora, do automobila (potpuno pranje, iznutra i spolja), nameštaja, tepiha, jastuka, stolica...
                        Profesionalno dubinsko pranje i na veliko (restorani, hoteli) i malo.
                    </p>
                    <a href="#kontakt" className="dugme-cta">Zakažite termin</a>

                    <div className='sekcija'>
                        <ol>
                            <li>Dolazak na lice mesta</li>
                            <li>Popusti na redovno održavanje</li>
                            <li>Radimo u najkraćem roku</li>
                        </ol>
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
