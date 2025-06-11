import { createContext, useContext, useState, useEffect } from "react";

const KorisnikKontekst = createContext();

export const KorisnikProvajder = ({ children }) => {
    const [korisnik, setKorisnik] = useState(() => {
        // Proverava localStorage pri inicijalizaciji da bi vratio sacuvanog korisnika ako postoji
        const savedUser = localStorage.getItem("korisnik");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const isRadnik = () => {
        return korisnik?.mejl?.includes('@dubinskop');
    };

    /**
     Prati promene korisnika i sinhronizuje sa localStorage
     Cuva i brise podatke trenutnog korisnika po potrebi
     */
    useEffect(() => {
        if (korisnik) {
            localStorage.setItem("korisnik", JSON.stringify(korisnik));
        } else {
            localStorage.removeItem("korisnik");
        }
    }, [korisnik]);

    return (
        // Provider komponenta koja omogućava pristup korisničkim podacima
        <KorisnikKontekst.Provider value={{ korisnik, setKorisnik, isRadnik }}>
            {children}
        </KorisnikKontekst.Provider>
    );
};

export const useKorisnik = () => useContext(KorisnikKontekst);