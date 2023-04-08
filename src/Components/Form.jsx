import React from "react";
import { useState } from "react";
import '../index.css';
import CardCongrat from "./CardCongrat";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorEmail, setErrorEmail] = useState("");
  const [show, setShow] = useState(false)

  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);

  const validateName = () => {
    if(!name.startsWith(" ") && name.length > 5){
      return true;
    }
  }

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    return (false)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const isValidateName = validateName();
    const isValidateEmail = validateEmail();
    

    if (!isValidateName) {
      setErrorName("Por favor verifique su Nombre nuevamente")
    } else {
      setErrorName("")
      setShow(false)
    }

    if (!isValidateEmail) {
      setErrorEmail("Por favor verifique su Email nuevamente")
    } else {
      setErrorEmail("")
      setShow(false)
    }

    if (isValidateName && isValidateEmail){
      setShow(true)
    }

  }
  return (
    <div className="superContainer">
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Ingrese su nombre completo" value={name} onChange={onChangeName}/>
        {errorName ? <div className="error">{errorName}</div> : null}
        <input type="text" placeholder="pepito@gmail.com"  value={email} onChange={onChangeEmail}/>
        {errorEmail ? <div className="error">{errorEmail}</div> : null}
        <button type="submit" >Enviar</button>
      </form>
       {show ? <CardCongrat userName={name} /> : null}
    </div>
  );
};

export default Form;
