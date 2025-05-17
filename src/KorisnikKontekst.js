import { createContext, useContext, useState, useEffect } from "react";

const KorisnikKontekst = createContext();

export const KorisnikProvajder = ({ children }) => {
    const [korisnik, setKorisnik] = useState(() => {
        const savedUser = localStorage.getItem("korisnik");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const isRadnik = () => {
        return korisnik?.mejl?.includes('@dubinskop');
    };

    useEffect(() => {
        if (korisnik) {
            localStorage.setItem("korisnik", JSON.stringify(korisnik));
        } else {
            localStorage.removeItem("korisnik");
        }
    }, [korisnik]);

    return (
        <KorisnikKontekst.Provider value={{ korisnik, setKorisnik, isRadnik }}>
            {children}
        </KorisnikKontekst.Provider>
    );
};

export const useKorisnik = () => useContext(KorisnikKontekst);