import { createContext, useContext, useState } from "react";

// Create a new context for user authentication
const KorisnikKontekst = createContext();

// Provider component to wrap around the application
export const KorisnikProvajder = ({ children }) => {
    const [korisnik, setKorisnik] = useState(null);

    return (
        <KorisnikKontekst.Provider value={{ korisnik, setKorisnik }}>
            {children}
        </KorisnikKontekst.Provider>
    );
};

// Custom hook to access user data
export const useKorisnik = () => useContext(KorisnikKontekst);
