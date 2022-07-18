import React from "react";
import fondo  from '../img/fondo.jpg'
import '../Nosotros/Fondo.css'
const Cover = () => {
    return(
        <div className="fondo-container">
            <img className="imagen" src={fondo}/>
            <h1>Veterinaria Mundo Mascotas</h1>
            <p>para servir con amor</p>
            <p>Conoce mas sobre nosotros</p>

        </div>
    )
}

export default Cover;