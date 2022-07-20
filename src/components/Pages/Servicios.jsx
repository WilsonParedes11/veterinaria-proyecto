import React from 'react';
import Fondo from '../Fondo/Fondo';
import EnvioInfo from '../Servicios/EnvioInfo';
import MenuServicios from '../Servicios/MenuServicios'
import Servicio from './Servicio'

const Servicios = () => {
  return (
    <>
      <Fondo
        imagen='servicios'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo='para servir con amor'
        descripcion='Nuestros Servicios'
      />
      <MenuServicios />
      {/* <Servicio/> */}
      <EnvioInfo />
    </>
  );
}

export default Servicios;