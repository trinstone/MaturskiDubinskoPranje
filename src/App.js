import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import UvodRezervacije from './UvodRezervacije'; // Import the UvodRezervacije component
import PostojeceRezervacije from './PostojeceRezervacije'; // Import the PostojeceRezervacije component

function App() {
  return (
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
              {/* Add UvodRezervacije route */}
              <Route path="/UvodRezervacije" element={<UvodRezervacije />} />
              {/* Add dynamic route for user-specific PostojeceRezervacije page */}
              <Route path="/PostojeceRezervacije/:userId" element={<PostojeceRezervacije />} />
            </Routes>
          </main>
        </div>
        <footer>
          <Kontakt />
        </footer>
      </div>
    </Router>
  );
}

export default App;
