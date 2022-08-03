import { React, useState } from 'react'
import './Tarjeta.css'
function Tarjeta(props) {
  const [estadoInicial, mostrarInformacion] = useState(false);

  return (
    <>
      <div className='contenedor-tarjeta'>
        <div className='codenedor-imagen'>
          <img src={props.imagen} />
        </div>
        <div className='contenedor-informacion'>
          <div className='contenedor-nombre'>
            <h3>{props.nombre}</h3>
          </div>
          <div className='contenedor-cargo'>
            <p>{props.cargo}</p>
          </div>
        </div>
        <button onClick={
          () => mostrarInformacion(!estadoInicial)}
        >Ver Perfil</button>
      </div>
    </>




  )
}

export default Tarjeta