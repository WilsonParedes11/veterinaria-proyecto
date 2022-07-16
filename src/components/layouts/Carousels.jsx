import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import "../style/Carouseld.css"
const Carousels = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="Cotenedor-imagen"
                    src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/Equipo-de-Clinica-Veterinaria-Ejea.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>MUNDO MASCOTAS</h3>
                    <p>PARA SERVIRTE CON AMOR</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Cotenedor-imagen"
                    src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/mascotas-preferidas-espanoles.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Sevicios</h3>
                    <p>Realizamos servicios a domicilios para cualquir atencion contactarse a tel: 0987654321 </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Cotenedor-imagen"
                    src="https://mizooland.com/wp-content/uploads/2015/04/Productos-Completos.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Productos</h3>
                    <p>Contamos con Alimentos, Medicamentos, Accesorios</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;