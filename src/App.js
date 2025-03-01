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


function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${pozadina})`, backgroundSize: '100% auto', // Ensures the whole image fits inside the div
      backgroundPosition: 'top center', // Centers the image within the div
      backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      height: '100vh', // The height of the div is 30% of the viewport height
      margin: 0
    }}>
          <div className="content">
            <nav><NavBar /></nav>
            <aside><img src={slicica1} alt="" className="slicica1" /></aside>
            <main>
              <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/Usluge" element={<Usluge />} />
                <Route path="/Prijava" element={<Prijava />} />
                <Route path="/Prijava/register" element={<Prijava />} />
              </Routes>
            </main>
          </div>
          <footer><Kontakt /></footer>
      </div>
    </Router>
  );
}

export default App;
