import React from 'react';
import Slider from '../layouts/Slider';

import Fondo from '../Fondo/Fondo';
import '../../styles/Home.css'

const Home = () => {
  return (
    // <div className='inicio-container'>
    //   <img clasName="imagen" src={clinica} alt="" /> 
    //    {/* <h1>Veterinaria Mundo Mascotas</h1>
    //     <p>para servir con amor</p>  */}

    // </div>
    <>
      <Fondo
        imagen='clinica'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo=''
        descripcion=''
      />
    </>
  );
}

export default Home;
