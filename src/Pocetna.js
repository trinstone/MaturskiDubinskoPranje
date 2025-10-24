import masine1 from './masine/kercherDP2.png';
import masine2 from './masine/opremaStaklo2.png';
import masine3 from './masine/masinaPod.png';
import './cssPojedinacni/Pocetna.css';

const Pocetna = () => {

    return(
        <main>
            <div id="Pocetna">
                <h1>Dubinsko pranje i čišćenje raznih površina</h1>
                <section>
                    Dajte površinu, mi ćemo je očistiti. Preko tvrdih podnih površina
                    i prozora, do automobila (potpuno pranje, iznutra i spolja), nameštaja, tepiha, jastuka, stolica.... 
                    Profesionalno dubinsko pranje i na veliko(restorani, hoteli) i malo.
                    <br></br>
                    <br></br>
                    <b>
                        <div className='sekcija'>
                            <ol>
                                <li>Dolazak na lice mesta</li>
                                <li>Popusti na redovno održavanje</li>
                                <li>Radimo u najkraćem roku</li>
                            </ol>
                        </div>
                    </b>
                </section>
                <section>
                    <h3>Naša oprema</h3>
                    <p>Koristimo moćne profesionalne mašine za trajne rezultate i čistoću na nivou.</p>
                    <div className='sekcija'>
                    <ul class = "liMasine">
                        <li>- Karcher mašina za dubinsko pranje <img src={masine1} alt="mašina za dubinsko pranje" className='hover-scale'/></li>
                        <li>- Mašina za pranje staklenih površina <img src={masine2} alt="mašina za pranje staklenih površina" className='hover-scale'/></li>
                        <li>- Mašina za pranje podova <img src={masine3} alt="mašina za pranje poda" className='hover-scale'/></li>
                    </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Pocetna;