import React from 'react'
import './login.css'
import './signup.css'
import im from"../assets/im.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import google from '../assets/google.png'

import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className='body-section'>

    <div className='section-items'>
      <img className='im' src={im} alt="im" />
      </div>
      <div className='section2'>
        <h1 className='title'> S'inscrire</h1>
        <h6 className='title-sec'> Continue avec </h6>
        <div className='icons'>
     <buttonGroup  className='grp-btn'>
       <button className='btn-gmail'>
       <div className="gg">  <img className='mail' src={google} alt="google" /> Gmail </div>
        </button>
        <button className='btn-facebook'> 
        <div className="iconfcb"> <  FacebookIcon/> Facebook </div>
        </button>
      </buttonGroup>
      </div>
      <div className='EML'>
        <h6 className="avc">Ou avec votre adresse e-mail</h6>
        <input className='nom'placeholder='Nom et Prénom'/>
        <input className='ML'placeholder='Email'/>

      

          </div> 
           

     
          
      
     <div>
        <input className='pass' type="password"  name="password" placeholder='Mot de passe'/>
        <input className='pass' type="password"  name="password" placeholder='Confimer mot de passe'/>
       <div className='check-box'>
        <input type="checkbox" value="checked" className='checked'/>
    
    <label  className='politique' >J'ai lu et j'accepte les <Link className='confidentialite'> Politique de confidentialité.</Link></label>
    </div>  
    <button className="connexin" type="button"><Link className='sins'  to="/#" >S’inscrire</Link></button>
                       
  <p className='sign'>Vous n'avez pas de compte!<Link  className='cox' to="/Login" > Connexion </Link></p>
  

  
  </div>
  </div>


</section>
  )
}

export default Signup
