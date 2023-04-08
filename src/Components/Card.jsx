import '../index.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from '../Components/utils/FavContext';
import { ButtomContext } from '../Components/utils/EliminarContext'



const Card = ({ name, username, id}) => {
  const {dispatch} = useContext(FavContext)
  const {state} = useContext(ButtomContext)

  const addFav = (id) => {
    dispatch({type: "addFav", payload: {id: id, name: name, username: username}} );
  }

  const deleteFav = (id) => {
    dispatch({type: "deleteFav", payload: {id: id}} );
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img className="docImagen" src="../images/doctor.jpg" alt="" />
      <h3><Link to={`/dentist/${id}`}>{id}-{name}</Link></h3>
      <h4>{username}</h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {state ? <button onClick={() => deleteFav(id)} className="favButton">Quitar</button> : <button onClick={() => addFav(id)} className="favButton">❤️</button>}
    </div>
  );
};

export default Card;
