import React, { useState } from 'react'
import "./Ecard.css"
import InformacioPefil from '../PerfilVeterinario/InformacioPefil'
import { ContenedorBotones, Boton, Contenido, } from '../PerfilVeterinario/Perfil.elements'
function Ecard(props) {
  const [estadoInicial, mostrarInformacion] = useState(false);
  return (
    <>
      <div className='Card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={props.imagen} alt="" height="100px" width="100px" />
          </div>
        </div>
        <div className='lower-container'>
          <h3>{props.nombre}</h3>
          <h4>{props.cargo}</h4>
          <p>{props.informacion}</p>
          <button onClick={() => mostrarInformacion(!estadoInicial)}>Ver Perfil</button>
        </div>
      </div>
      {/* <InformacioPefil
        estado={estadoInicial}
        cambiarEstado={mostrarInformacion}
        titulo='Hola!'
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={'center'}
        padding='20px'
      >
        <Contenido>
          <h1>Hola Mundo</h1>
          <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          <Boton onClick={() => mostrarInformacion(!estadoInicial)}>Aceptar</Boton>
        </Contenido>
      </InformacioPefil> */}
    </>


  )
}

export default Ecard