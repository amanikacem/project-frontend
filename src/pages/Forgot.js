import React from "react"
import im from '../assets/im.png'
import "./forgotpass.css"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
const Forgot = () => {
  return (
    <container className="body-container">
    <div className='img-container'>
      <img className='image-forgot' src={im} alt='im'/>
      </div>
      <div className="container-title">

       <h1 className="récupérer"> Récupérer le mot de passe </h1>
      <h6 className=" adress"> Votre adresse e-mail</h6>

      <TextField className='input2'  placeholder="E-mail"/>
      <div>
      <button className="continuer" type="button"><Link className='link-continuer'  to="/Récupérer" >Continuer</Link></button>
      </div>               



      </div>
      </container>
   
  )
}
  export default Forgot















   


