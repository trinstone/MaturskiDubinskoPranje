import React, { useState } from 'react';
import stolice1 from './galerija/stolice1.png';
import stolice2 from './galerija/stolice2.png';
import stolice3 from './galerija/stolice3.png';
import stolice4 from './galerija/stolice4.png';
import './cssPojedinacni/Galerija.css';

const slike = [stolice1, stolice2, stolice3, stolice4];

const PrikazGalerije = () => {
  const [trenutniIndeks, postaviTrenutniIndeks] = useState(0);

  const sledecaSlika = () => {
    postaviTrenutniIndeks((prethodni) => (prethodni + 1) % slike.length);
  };

  const prethodnaSlika = () => {
    postaviTrenutniIndeks((prethodni) => (prethodni - 1 + slike.length) % slike.length);
  };

  return (
    <main>
      <div className="galerijaKontejner">
        <h1 className="galerijaNaslov">Galerija</h1>
        <div className="galerijaSlikaKontejner">
          <img src={slike[trenutniIndeks]} alt="Galerija" className="galerijaSlika" />
        </div>
        <div className="galerijaDugmeKontejner">
          <button className="galerijaDugmePrethodno" onClick={prethodnaSlika}>&lt;</button>
          <button className="galerijaDugmeSledece" onClick={sledecaSlika}>&gt;</button>
        </div>
      </div>
    </main>
  );
};

export default PrikazGalerije;


