import React from "react";
import { BrowserRouter, Routes, Route, Router, } from "react-router-dom"
//import { BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import Home from "./Pages/Home"
import Nosotros from "./Pages/Nosotros";
import Servicios from "./Pages/Servicios"
import Productos from "./Pages/Productos"
import Contactos from "./Pages/Contactos"
import Page404 from "./Pages/Page404"
import Protected from "./Routes/Protected";
import Header from "./Organisms/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={< Productos />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route component={Page404 } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
