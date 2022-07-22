import React from "react";
import "../../../src/styles/Nosotros.css"
import Historia from "../Nosotros/Historia";
import Fondo from '../Fondo/Fondo';
import VandM from '../Nosotros/VandM'
import Ecard from "../EdeTrabajo/Ecard";
import Info from "../Info/Info";
const Nosotros = () => {
  return (
    <>
      <Fondo
        imagen='nosotros'
        titulo='Veterinaria Mundo Mascotas'
        subtitulo='para servir con amor'
        descripcion='Conoce mas sobre nosotros'
      />

      <Historia
        subtitulo="Historia"
        imagen="historia"
        descripcion="Somos una veterinaria fundada en Guaranda en 2015. Ofrecemos atención médica general y
                          de especialidad para perros y gatos. Nuestro compromiso es brindar una atención cálida y
                          personalizada a cada paciente que nos visita. Sabemos que las mascotas son parte de la familia;
                          por esta razón, contamos con los equipos y la experiencia necesaria para garantizar el bienestar
                          de nuestros pacientes.

                          En los últimos años, Dogtor’s Cat se ha consolidado como un centro líder en la prestación de servicios
                          veterinarios. Varios médicos del país nos refieren a sus pacientes, porque confían en la calidad de nuestra
                          atención. Creemos firmemente que tu mascota se merece un trato de calidad y la última tecnología disponible."
      />
      <div className="about-container">
        <div className="about-desc">
          <h3>Misión</h3>
          <p> 
            Brindar un servicio de calidad a través de la actualización constante que demanda la medicina
            veterinaria y fomentar el amor, cuidado y bienestar de las mascotas, garantizando una atención
            integral las 24 horas, los 365 días del año.</p>
          <br />
          <h3>Visión</h3>

          <p>
            Ser capaces de enfrentar y superar los retos de una profesión que cada día demanda más empeño,
            compromiso y sacrificio, creando así un liderazgo en la atención veterinaria de las pequeñas
            especies.</p>
        </div>
        <div className="about-img">
          <img src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about" />
        </div>

      </div >

      <Info
        titulo='Nuestro Equipo'
      />

      <div className="contenedor-equipo">
        <Ecard
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto-dsk-Pablo.png'
          nombre='Cristopher Solano'
          cargo='Doctor en Medicina Veterinaria y Zootecnia'
          informacion='Las mascotas necesitan profesionales que estén al nivel para darles un buen tratamiento.'
        />
        <Ecard
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Carla_Rengel.png'

          nombre='Edith López '
          cargo='Doctora en Medicina Veterinaria y Zootecnia'
          informacion='Me hice veterinaria porque en esta profesión puedo ayudar a seres que no tienen voz y que solo dan amor'
        />
        <Ecard
          imagen='https://www.dogtorscat.com/wp-content/uploads/2019/09/foto_dsk_Esteban_Mier.png'

          nombre='XXXXX '
          cargo='Doctor en Medicina Veterinaria y Zootecnia'
          informacion='Desde muy pequeño tuve contacto con los animales y con la medicina para animales.'
        />
      </div>

    </>



  );
};

export default Nosotros;