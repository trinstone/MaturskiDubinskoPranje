import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KorisnikProvajder } from './KorisnikKontekst'; 
import './App.css';
import NavBar from './NavBar';
import pozadina from './pozadina.png';
import pozadinaMargina from './pozadinaMargine.jpg';
import Pocetna from './Pocetna';
import slicica1 from './stikeri/slicica1.png'; 
import slicica2 from './stikeri/slicica2.png'; 
import slicica3 from './stikeri/slicica3.png';
import slicica4 from './stikeri/slicica4.png';
import Kontakt from './Kontakt';
import Usluge from './Usluge';
import Prijava from './Prijava';
import Galerija from './Galerija';
import Rezervacije from './Rezervacije';
import UvodRezervacije from './UvodRezervacije';
import PostojeceRezervacije from './PostojeceRezervacije';
import Radnik from './Radnik';

function App() {
  return (
    <KorisnikProvajder> 
      <Router>
        <div
          className="App"
          style={{
            backgroundImage: `url(${pozadina})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            margin: 0
          }}
        >
          <div className="content">
              <NavBar />
              <img src={pozadinaMargina} alt="" id="pozadinaMargina" />
              <img src={slicica1} alt="" className="slicica1" />
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
                <Route path="/Radnik/" element={<Radnik />} />
              </Routes>
            </main>
              <img src={slicica2} alt="" className="slicica2" />
              <img src={slicica4} alt="" className="slicica4" />
              <img src={slicica3} alt="" className="slicica3" />
            <Kontakt />
          </div>
        </div>
      </Router>
    </KorisnikProvajder>
  );
}

export default App;