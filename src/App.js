import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AnalyticsTracker from './AnalyticsTracker';
import NavBar from './NavBar';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';
import Usluge from './Usluge';
import Galerija from './Galerija';

function App() {
  return (
      <Router>
        <div id="App">
          <AnalyticsTracker />
          <NavBar />
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/usluge" element={<Usluge />} />
            <Route path="/galerija" element={<Galerija />} />
          </Routes>
          <Kontakt />
        </div>
      </Router>
  );
}

export default App;
