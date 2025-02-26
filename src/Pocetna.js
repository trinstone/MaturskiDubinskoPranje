import masine1 from './masine/kercherDP.png';
import masine2 from './masine/opremaStaklo.png';
import masine3 from './masine/masinaPod.png';

const Pocetna = () => {

    return(
        <div className="Pocetna">
            <h1>Dubinsko pranje i čišćenje raznih površina</h1>
            <section>
                Dajte povrsinu, mi cemo je ocistiti. Preko tvrdih podnih površina
                i prozora, do automobila, namestaja, tepiha, jastuka, stolica.... 
                Profesionalno dubinsko pranje i na veliko(restorani, hoteli) i malo.
                <ol>
                    <li>Dolazak na lice mesta</li>
                    <li>Popusti na održavanje</li>
                    <li>Radimo u najkraćem roku</li>
                </ol>
            </section>
            <section>
                <h3>Naša oprema</h3>
                <p>Koristimo moćne profesionalne mašine za trajne rezultate i čistoću na nivou.</p>
                <ul class = "liMasine">
                    <li>- Karcher mašina za dubinsko pranje <img src={masine1} alt="mašina za dubinsko pranje"/></li>
                    <li>- Mašina za pranje staklenih površina <img src={masine2} alt="mašina za pranje staklenih površina"/></li>
                    <li>- Mašina za pranje podova <img src={masine3} alt="mašina za pranje poda"/></li>
                </ul>
            </section>
        </div>
    );
}
export default Pocetna;