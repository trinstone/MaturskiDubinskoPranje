import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KorisnikProvajder } from './KorisnikKontekst'; // Import the context provider
import './App.css';
import NavBar from './NavBar';
import pozadina from './pozadina.png';
import Pocetna from './Pocetna';
import slicica1 from './stikeri/slicica1.png'; 
import slicica2 from './stikeri/slicica2.png'; 
import Kontakt from './Kontakt';
import Usluge from './Usluge';
import Prijava from './Prijava';
import Galerija from './Galerija';
import Rezervacije from './Rezervacije';
import UvodRezervacije from './UvodRezervacije';
import PostojeceRezervacije from './PostojeceRezervacije';

function App() {
  return (
    <KorisnikProvajder> {/* Wrap the entire app with the provider */}
      <Router>
        <div
          className="App"
          style={{
            backgroundImage: `url(${pozadina})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            margin: 0,
          }}
        >
          <div className="content">
            <nav>
              <NavBar />
            </nav>
            <aside>
              <img src={slicica1} alt="" className="slicica1" />
            </aside>
            <main>
              <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/Usluge" element={<Usluge />} />
                <Route path="/Prijava" element={<Prijava />} />
                <Route path="/Prijava/register" element={<Prijava />} />
                <Route path="/Galerija" element={<Galerija />} />
                <Route path="/Rezervacije" element={<Rezervacije />} />
                <Route path="/UvodRezervacije/" element={<UvodRezervacije />} />
                <Route path="/PostojeceRezervacije/:id" element={<PostojeceRezervacije />} />
              </Routes>
            </main>
          </div>
          <footer>
            <Kontakt />
          </footer>
        </div>
      </Router>
    </KorisnikProvajder>
  );
}

export default App;