import React from 'react';
import Slider from '../layouts/Slider';
import clinica from '../../components/img/clinica.png'

import '../../styles/Home.css'
const Home = () => {
  return (
    <div className='inicio-container'>
      <img clasName="imagen" src={clinica} alt="" />
      {/* <h1>Veterinaria Mundo Mascotas</h1>
        <p>para servir con amor</p> */}

    </div>
  );
}

export default Home;
