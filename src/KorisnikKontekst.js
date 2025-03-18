import { createContext, useContext, useState, useEffect } from "react";

// Create a new context for user authentication
const KorisnikKontekst = createContext();

// Provider component to wrap around the application
export const KorisnikProvajder = ({ children }) => {
    // Initialize the korisnik state from localStorage if available, or null if not
    const [korisnik, setKorisnik] = useState(() => {
        const savedUser = localStorage.getItem("korisnik");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Whenever korisnik changes, save it to localStorage
    useEffect(() => {
        if (korisnik) {
            localStorage.setItem("korisnik", JSON.stringify(korisnik));
        } else {
            localStorage.removeItem("korisnik"); // Remove from localStorage on logout
        }
    }, [korisnik]);

    return (
        <KorisnikKontekst.Provider value={{ korisnik, setKorisnik }}>
            {children}
        </KorisnikKontekst.Provider>
    );
};

// Custom hook to access user data
export const useKorisnik = () => useContext(KorisnikKontekst);