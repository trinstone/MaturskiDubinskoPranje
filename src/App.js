import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavBar from './NavBar';
import pozadina from './pozadina.png';
import pozadinaMargina from './margineSvetla.jpeg';
import Pocetna from './Pocetna';
import slicica1 from './stikeri/slicica1.png'; 
import slicica2 from './stikeri/slicica2.png'; 
import slicica3 from './stikeri/slicica3.png';
import slicica4 from './stikeri/slicica4.png';
import Kontakt from './Kontakt';
import Usluge from './Usluge';
import Galerija from './Galerija';

function App() {
  return (
      <Router>
        <div
          id="App"
          style={{
            backgroundColor: '#1663BC',//#42A5F5
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            margin: 0
          }}
        >
          <div className="content">
              <NavBar />
              <img src={pozadinaMargina} alt="" id="pozadinaMargina1" />
              <img src={pozadinaMargina} alt="" id="pozadinaMargina2" />
              <img src={slicica1} alt="" className="slicica1" />
              <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/Usluge" element={<Usluge />} />
                <Route path="/Galerija" element={<Galerija />} />
              </Routes>
              <div className="slicice">
                <img src={slicica2} alt="" className="slicica2" />
                <img src={slicica4} alt="" className="slicica4" />
                <img src={slicica3} alt="" className="slicica3" />
              </div>
            <Kontakt />
          </div>
        </div>
      </Router>
  );
}

export default App;