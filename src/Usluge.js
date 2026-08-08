import './cssPojedinacni/Usluge.css';
import Kalkulator from './Kalkulator';

const Usluge = () => {
    return (
        <main>
        <div className="Usluge">
            <h1>Cenovnik usluga</h1>
            <table>
                <caption>NAMEŠTAJ</caption>
                <thead>
                    <tr>
                        <th>NAZIV</th>
                        <th>POČETNA CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>STOLICE</td>
                        <td>od 200 din</td>
                    </tr>
                    <tr>
                        <td>FOTELJA</td>
                        <td>od 800 din</td>
                    </tr>
                    <tr>
                        <td>TROSED</td>
                        <td>od 2 000 din</td>
                    </tr>
                    <tr>
                        <td>DVOSED</td>
                        <td>od 1 500 din</td>
                    </tr>
                    <tr>
                        <td>UGAONA GARNITURA</td>
                        <td>od 3 000 din</td>
                    </tr>
                    <tr>
                        <td>DUŠEK</td>
                        <td>od 1 500 din</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <caption>POVRŠINE</caption>
                <thead>
                    <tr>
                        <th>NAZIV</th>
                        <th>POČETNA CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TEPIH / ITISON</td>
                        <td>od 250 din po m²</td>
                    </tr>
                    <tr>
                        <td>STAKLENE POVRŠINE</td>
                        <td>od 120 din po m²</td>
                    </tr>
                    <tr>
                        <td>TVRDE POVRŠINE - PODOVI</td>
                        <td>od 150 din po m²</td>
                    </tr>
                </tbody>
            </table>

                    <table>
                <caption>AUTOMOBILI</caption>
                <thead>
                    <tr>
                        <th>NAZIV</th>
                        <th>POČETNA CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>KOMPLETAN <br></br> ENTERIJER</td>
                        <td>od 6 000 din</td>
                    </tr>
                    <tr>
                        <td>AUTO KOMPLET <br></br> (ENTERIJER + SPOLJAŠNJE PRANJE)</td>
                        <td>od 7 000 din</td>
                    </tr>
                    <tr>
                        <td>AUTO KOMPLET <br></br> KOŽNI ENTERIJER</td>
                        <td>od 8 000 din</td>
                    </tr>
                    <tr>
                        <td>KABINE KAMIONA</td>
                        <td>od 10 000 din</td>
                    </tr>
                    <tr>
                        <td>AUTOBUSI <br></br> (PO SEDIŠTU)</td>
                        <td>od 300 din</td>
                    </tr>
                </tbody>
            </table>
            <div className='sekcija'>
                <p>Isplata moguća na licu mesta ili putem računa.</p>
                <p>Za veće količine cena po dogovoru.</p>
                <p>Prikazana cena je okvirna procena na osnovu cenovnika i ne predstavlja konačnu ponudu.
                    Za veće količine i posebne slučajeve cena je po dogovoru.</p>
            </div>

            <Kalkulator />
        </div>
        </main>
    );
  }
   
  export default Usluge;