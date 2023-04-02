import React from 'react'
import im from '../assets/im.png'
import { TextField } from "@mui/material"
import"./recup.css"
import { Link } from 'react-router-dom'

const Récupérer = () => {
  return (
    <container className="body-container">
    <div className='img-container'>
      <img className='image-forgot' src={im} alt='im'/>
      </div>
      <div className="container-title">

       <h1 className="récupérer"> Récupérer le mot de passe </h1>
      <h6 className=" adress"> Votre adresse e-mail</h6>

      <TextField className='input2'  placeholder="E-mail"/>
     <input className='input3' type={'password'} placeholder='Confirmer mot de passe'/>
     <button className='renitialiser'>
     <Link className='Seconnecter' to='/Seconnecter' >Réinitialiser</Link>
     </button>
      </div>

      
      
      </container>
  )
}

export default Récupérer
