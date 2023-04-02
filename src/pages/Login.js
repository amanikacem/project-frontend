import React from 'react'
import im from "../assets/im.png"
import "./login.css"

import FacebookIcon from '@mui/icons-material/Facebook';
import google from '../assets/google.png'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <section className='body-section'>

      <div className='section-items'>
        <img className='im' src={im} alt="im" />
        </div>


        <div className='section2'>

          <h1 className='title'> Connexion</h1>

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







        <div>
          <h6 className="avc">Ou avec votre adresse e-mail</h6>
        
          <TextField className='input'  placeholder="E-mail"/>
          <input className='pass' type="password"  name="password" placeholder='Mot de passe'/>
          <p className='obli'> <Link to="/Forgot" className='forgotpass'>Mot de passe oublié? </Link> </p>
          
          <input type="checkbox" value="checked" className='check'/>
    
    <label  className='souvenir' >Souviens-toi de moi</label>



    <button className="connexin" type="button"><Link className='welcom'  to="/welcomto maktba" >Connexion</Link></button>
                         
    <p className='sign'>Vous n'avez pas de compte!<Link  className='signup' to="/Signup" > S'inscrire </Link></p>
         
        </div>
        
     







        
        
        
        
        
        
        
        
        </div>
        </div>

      </section>








 
  )
}

export default Login
          
         
       
           




 



  

  
   
   
     
    

