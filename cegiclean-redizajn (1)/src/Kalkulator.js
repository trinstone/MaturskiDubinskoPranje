import { useState, useMemo } from 'react';
import './cssPojedinacni/Kalkulator.css';

const CENE = {
    stolica: 130,
    trosed: 1000,
    tepih: 250,
    podovi: 180,
    staklo: 200,
    auto: 5000,
};

const formatDin = (broj) =>
    new Intl.NumberFormat('sr-RS').format(Math.round(broj)) + ' din';

const Kalkulator = () => {
    const [stolica, setStolica] = useState(0);
    const [trosed, setTrosed] = useState(0);
    const [tepih, setTepih] = useState(0);
    const [podovi, setPodovi] = useState(0);
    const [staklo, setStaklo] = useState(0);
    const [auto, setAuto] = useState(false);
    const [ljubimci, setLjubimci] = useState(false);

    const stavke = useMemo(() => {
        const lista = [];
        if (stolica > 0) lista.push({ naziv: `Stolice (${stolica} kom)`, iznos: stolica * CENE.stolica });
        if (trosed > 0) lista.push({ naziv: `Trosedi (${trosed} kom)`, iznos: trosed * CENE.trosed });
        if (tepih > 0) lista.push({ naziv: `Tepih (${tepih} m²)`, iznos: tepih * CENE.tepih });
        if (podovi > 0) lista.push({ naziv: `Podovi (${podovi} m²)`, iznos: podovi * CENE.podovi });
        if (staklo > 0) lista.push({ naziv: `Staklene površine (${staklo} m²)`, iznos: staklo * CENE.staklo });
        if (auto) lista.push({ naziv: 'Automobil', iznos: CENE.auto });
        return lista;
    }, [stolica, trosed, tepih, podovi, staklo, auto]);

    const ukupno = stavke.reduce((zbir, s) => zbir + s.iznos, 0);

    const porukaZaUpit = useMemo(() => {
        if (stavke.length === 0) return 'Zdravo, zanima me cena dubinskog pranja za: ';
        const opis = stavke.map((s) => s.naziv).join(', ');
        let poruka = `Zdravo, zanima me okvirna cena dubinskog pranja za: ${opis}. Orijentaciona cena sa sajta: ${formatDin(ukupno)}.`;
        if (ljubimci) poruka += ' Imamo kućne ljubimce.';
        return poruka;
    }, [stavke, ukupno, ljubimci]);

    const linkZaUpit = `https://wa.me/381658567280?text=${encodeURIComponent(porukaZaUpit)}`;

    const resetuj = () => {
        setStolica(0); setTrosed(0); setTepih(0); setPodovi(0); setStaklo(0);
        setAuto(false); setLjubimci(false);
    };

    return (
        <div className="kalkulator">
            <h3>Izračunajte okvirnu cenu</h3>
            <p className="kalkulator-uvod">Unesite količine za usluge koje vas zanimaju — cena se računa automatski.</p>

            <div className="kalkulator-grid">
                <label className="kalkulator-red">
                    <span>Stolice (kom)</span>
                    <input type="number" min="0" inputMode="numeric" value={stolica === 0 ? '' : stolica}
                        placeholder="0"
                        onChange={(e) => setStolica(e.target.value === '' ? 0 : Math.max(0, Number(e.target.value)))} />
                </label>

                <label className="kalkulator-red">
                    <span>Trosedi / fotelje (kom)</span>
                    <input type="number" min="0" inputMode="numeric" value={trosed === 0 ? '' : trosed}
                        placeholder="0"
                        onChange={(e) => setTrosed(e.target.value === '' ? 0 : Math.max(0, Number(e.target.value)))} />
                </label>

                <label className="kalkulator-red">
                    <span>Tepih (m²)</span>
                    <input type="number" min="0" inputMode="numeric" value={tepih === 0 ? '' : tepih}
                        placeholder="0"
                        onChange={(e) => setTepih(e.target.value === '' ? 0 : Math.max(0, Number(e.target.value)))} />
                </label>

                <label className="kalkulator-red">
                    <span>Podovi — tvrde površine (m²)</span>
                    <input type="number" min="0" inputMode="numeric" value={podovi === 0 ? '' : podovi}
                        placeholder="0"
                        onChange={(e) => setPodovi(e.target.value === '' ? 0 : Math.max(0, Number(e.target.value)))} />
                </label>

                <label className="kalkulator-red">
                    <span>Staklene površine (m²)</span>
                    <input type="number" min="0" inputMode="numeric" value={staklo === 0 ? '' : staklo}
                        placeholder="0"
                        onChange={(e) => setStaklo(e.target.value === '' ? 0 : Math.max(0, Number(e.target.value)))} />
                </label>

                <label className="kalkulator-red kalkulator-checkbox">
                    <input type="checkbox" checked={auto}
                        onChange={(e) => setAuto(e.target.checked)} />
                    <span>Automobil (paušalno {formatDin(CENE.auto)})</span>
                </label>

                <label className="kalkulator-red kalkulator-checkbox">
                    <input type="checkbox" checked={ljubimci}
                        onChange={(e) => setLjubimci(e.target.checked)} />
                    <span>Imam kućne ljubimce</span>
                </label>
            </div>

            <div className="kalkulator-rezultat">
                {stavke.length === 0 ? (
                    <p className="kalkulator-prazno">Unesite bar jednu stavku da vidite okvirnu cenu.</p>
                ) : (
                    <>
                        <ul className="kalkulator-stavke">
                            {stavke.map((s) => (
                                <li key={s.naziv}>
                                    <span>{s.naziv}</span>
                                    <span>{formatDin(s.iznos)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="kalkulator-ukupno">
                            <span>Ukupno (okvirno)</span>
                            <span>{formatDin(ukupno)}</span>
                        </div>
                        {ljubimci && (
                            <p className="kalkulator-napomena">*Cena je uvećana zbog kućnih ljubimaca — konačan iznos po dogovoru.</p>
                        )}
                    </>
                )}

                <div className="kalkulator-dugmici">
                    <a
                        className="dugme-cta"
                        href={linkZaUpit}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Pošalji upit na WhatsApp
                    </a>
                    <button type="button" className="dugme-resetuj" onClick={resetuj}>
                        Resetuj
                    </button>
                </div>

                <p className="kalkulator-disklejmer">
                    Prikazana cena je okvirna procena na osnovu cenovnika i ne predstavlja konačnu ponudu.
                    Za veće količine i posebne slučajeve cena je po dogovoru.
                </p>
            </div>
        </div>
    );
};

export default Kalkulator;
