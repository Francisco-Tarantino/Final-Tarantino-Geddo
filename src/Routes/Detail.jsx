
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState()
  const params = useParams()


  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json();
    setDentist(data)
  }

  useEffect(() => {
    getDentist();
    //state = true;
  }, [params])

  return (
    <>
      <h1>Datos del dentista </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className='cardDetail'>
        <div>
          <h3>Datos personales</h3>
          <p><b>Nombre:</b>  {dentist?.name}</p>
          <p><b>Email:</b> {dentist?.email}</p>
          <p><b>Telefono:</b> {dentist?.phone}</p>
          <p><b>Website:</b> {dentist?.website}</p>
        </div>
        <div>
            <h3>Direccion</h3>
          <p><b>Nombre de usuario: </b>{dentist?.username}</p>
          <p><b>Calle:</b> {dentist?.address.street}</p>
          <p><b>Suite:</b> {dentist?.address.suite}</p>
          <p><b>Ciudad:</b> {dentist?.address.city}</p>
          <p><b>Codigo postal:</b> {dentist?.address.zipcode}</p>
        </div>
      </div>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail