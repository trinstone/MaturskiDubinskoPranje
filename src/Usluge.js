const Usluge = () => {
    return (
        <main>
        <div className="Usluge">
            <h1>Cenovnik usluga</h1>
            <table>
                <thead>
                    <tr>
                        <th>NAZIV</th>
                        <th>CENA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>stolica</td>
                        <td>130 din komad</td>
                    </tr>
                    <tr>
                        <td>trosed</td>
                        <td>1000 din komad</td>
                    </tr>
                    <tr>
                        <td>tepih</td>
                        <td>250 din po m²</td>
                    </tr>
                    <tr>
                        <td>auto</td>
                        <td>5000 din</td>
                    </tr>
                    <tr>
                        <td>tvrde površine-podovi</td>
                        <td>180 din po m²</td>
                    </tr>
                    <tr>
                        <td>staklene površine</td>
                        <td>200 din po m²</td>
                    </tr>
                </tbody>
            </table>
            <p>Isplata na licu mesta nakon obavljenog pranja.</p>
            <p>*Upozorenje: Ukoliko imate kućne ljubimce povećana cena po dogovoru!</p>
        </div>
        </main>
    );
  }
   
  export default Usluge;