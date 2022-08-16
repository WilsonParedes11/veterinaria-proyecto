import React from 'react'
import './Testimonio.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Testimonio = () => {
  return (
    <section className="testimony">
      <div className="testimony__container container">
        {/* <img src="../../components/img/leftarrow.svg" className="testimony__arrow" id="before"
        /> */}
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
        <section className="testimony__body testimony__body--show" data-id="1">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Jordan Alexander, <span className="testimony__course">estudiante
              de CSS.</span></h2>
            <p className="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
              esse, asperiores eaque totam nulla repudiandae quasi, deserunt culpa exercitationem
              blanditiis laborum veniam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
          </div>

          <figure className="testimony__picture">
            <img src="https://f.rpp-noticias.io/2019/02/15/753300descarga-11jpg.jpg" className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="2">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Alejandra Perez, <span className="testimony__course">estudiante de
              CSS.</span></h2>
            <p className="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
              esse, asperiores eaque laborum veniam laboriosam saepe reiciendis dolorem. Cum, ratione
              voluptatum!</p>
          </div>

          <figure className="testimony__picture">
            <img src="./images/face2.jpg" className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="3">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Karen Arteaga, <span className="testimony__course">estudiante de
              CSS.</span></h2>
            <p className="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
              esse, niam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
          </div>

          <figure className="testimony__picture">
            <img src="./images/face3.jpg" className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="4">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Kevin Ramirez, <span className="testimony__course">estudiante de
              CSS.</span></h2>
            <p className="testimony__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est
              esse, niam laboriosam saepe reiciendis dolorem. Cum, ratione voluptatum!</p>
          </div>

          <figure className="testimony__picture">
            <img src="./images/face4.jpg" className="testimony__img" />
          </figure>
        </section>


        <i class="fa fa-arrow-right" aria-hidden="true"></i>

      </div>
    </section>
  )
}
export default Testimonio