import React from 'react';
import Hitung_bmi from './Components/Hitung_bmi';
import Cicilan_bank from './Components/Cicilan_bank';
import Harga_akhir from './Components/Harga_akhir';
import Konversi_biner from './Components/Konversi_biner';
import Konversi_desimal from './Components/Konversi_desimal';
import Konversi_oktal from './Components/Konversi_oktal';
import Konversi_hexa from './Components/Konversi_hexa';


function App() {
  return (
    <div>
      <Hitung_bmi />
      <Cicilan_bank />
      <Harga_akhir  />
      <Konversi_biner />
      <Konversi_desimal />
      <Konversi_oktal />
      <Konversi_hexa />
    </div>
  );
}

export default App;
