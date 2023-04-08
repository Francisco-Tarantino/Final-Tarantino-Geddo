import React from 'react'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import {ContextGlobal} from './utils/global.context'
import  { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  const {state, dispatch} = useContext(ContextGlobal)

  const handleClick = () => {
    navigate(-1)
  }
  const changeTheme = () => {
    const valor = state.theme
    dispatch({type: "dark", payload: !valor});
  }

  return (
    <nav className='divNavBar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="/home">Inicio</Link>
        <Link to="/contacto">Contactos</Link>
        <Link to="/favs">Favoritos</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <button onClick={changeTheme}>Cambiar tema</button>
        <button onClick={handleClick}>Volver</button>
      </div>
    </nav>
  )
}

export default Navbar