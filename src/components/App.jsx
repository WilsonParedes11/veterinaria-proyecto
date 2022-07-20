import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
//import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import Home from "./Pages/Home"
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios"
import Productos from "./Pages/Productos"
import Contactos from "./Pages/Contactos"
import Page404 from "./Pages/Page404"
import Protected from "./Routes/Protected";
import Header from "./Organisms/Header";
import Login from "./Pages/Login";
import Servicio from "./Pages/Servicio";
const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={< Productos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route component={Page404} />
            {/* Rutas de acceso  */}
            <Route path="/login" element ={<Login/ >} />
            {/* <Route path="/estetica-canina" element={<Servicio/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  )
}

export default App;
