import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import pozadina from './pozadina.png';
import Pocetna from './Pocetna';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${pozadina})`, backgroundSize: '100% auto', // Ensures the whole image fits inside the div
      backgroundPosition: 'top center', // Centers the image within the div
      backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      height: '100vh', // The height of the div is 30% of the viewport height
      margin: 0
    }}>
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Pocetna />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
