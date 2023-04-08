import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ButtomContext } from "../Components/utils/EliminarContext"

const Favs = () => {

  const [favorites, setFavorites] = useState([])
  const {dispatch} = useContext(ButtomContext);

  const getFavorites = () => {
    const data = JSON.parse(localStorage.getItem("dentista"))
    setFavorites(data);
  } 

  useEffect(()=> {
      getFavorites();
      dispatch({type: "eliminar"})
  }, [])

  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {favorites && favorites.map(states => (
          <div key={states.id}>
            <Card id={states.id} name={states.name} username={states.username} />
           </div> ))} 
      </div>
    </>
  );
};
export default Favs;
