import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="menu">
      <section className="menu__container">
        <h1 className="menu__logo">
          Wilson11
          {/* <img src={require(`../img/${props.imagen}.png`)}/> */}
        </h1>

        <ul className="menu__links">
          <li className="menu_item">
            <NavLink className="menu__link" to="/"> Inicio </NavLink>
          </li>
          <li className="menu_item">
            <NavLink className="menu__link" to="/nosotros">Nosotros</NavLink>
          </li>
          <li className="menu__item menu__item--show">
            {/* <a href="#" className="menu__link">About
              {/* <img src="assets/arrow.svg" className="menu__arrow"> 
            </a> */}
            <NavLink className="menu__link" to="/servicios"> Servicios </NavLink>
            <ul className="menu__nesting">
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >About 1</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >About 2</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >About 3</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--show">
            {/* <a href="#" className="menu__link">Projects
              <img src="assets/arrow.svg" className="menu__arrow">

            </a> */}
            <NavLink className="menu__link" to="/productos"> Productos </NavLink>
            <ul className="menu__nesting">
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Projects 1</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Projects 2</a>
              </li>
              <li className="menu__inside">
                <a href="#" className="menu__link menu__link--inside" >Projects 3</a>
              </li>
            </ul>
          </li>
          <li className="menu_item">
            <NavLink className="menu__link" to="/contactos"> Contactos </NavLink>
          </li>
        </ul>

        <div className="menu__hamburguer">
          {/* <img src="assets/menu.svg" className="menu__img"> */}
        </div>
      </section>

    </nav>
  )
}

export default Navbar