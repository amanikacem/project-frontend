import React from 'react'
import { Link } from 'react-router-dom'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './footer.css'
import logo from '../assets/logo.png'










const Footer = () => {
  return (
   <div className="piedpage">
    <div className="footer">
        <div className="container">

            
                <div className="section">
                   <div className='LO'> <Link className='hr'  to="/acceuil">  <img src={logo} className="logoT" alt="logo" /></Link></div>
                    <p>Maktaba.tn est une plateforme de commerce <br/> 
                    électronique innovante reliant les réseaux de <br/>
                    librairies, fournisseurs, écoles et espaces<br/>
                    étudiants en Tunisie, offrant une solution <br/>
                    tout-en-un pour tous leurs besoins.</p>
                    <div className='scocial'>
               <ul className="soci">
              
                  <li>
                       <Link className='soci1' to="#"> <FacebookSharpIcon/> </Link>  
                   </li>
                   <li>
                       <Link className='soci2' to="#">   <TwitterIcon/>     </Link>  
                   </li>
                    <li>
                       <Link className='soci3' to="#">  <InstagramIcon/>      </Link>  
                    </li>
                       <li>
                         <Link className='soci4' to="#"> <LinkedInIcon/>       </Link>  
                        </li>
                    
                </ul>
                </div>
                
            </div>
            <div className="lien">
                <h2>Liens Rapides</h2>
                <ul className='apropos'>
                    <li> 
                        <Link className="aprop"to="#" >À propos <br/></Link>
                    </li>
                    <li> 
                        <Link className="shop" to="#">Shop</Link>
                    </li>
                    <li> 
                        <Link className="dev" to="#">Devenir partenaire</Link>
                    </li>
                
                </ul>

            </div>
            <div className="sec">
                <h2>Nos Catégories</h2>
                <ul className='categorie'>
                    <li> 
                        <Link className="sco"to="./Scolaire">Scolaire</Link>
                    </li>
                    <li> 
                        <Link className="para" to="#">Para-scolaires</Link>
                    </li>
                    <li> 
                        <Link className="outils" to="#">Outils informatiques</Link>
                    </li>
                    <li> 
                        <Link className="divers" to="#">Divers</Link>
                    </li>
                    <li> 
                        <Link className="jeux" to="#">Jeux educatifs</Link>
                    </li>
                
                </ul>

            </div>
            <div className="contact">
                <h2>Contact</h2>
                <ul className='info'>
                    <li> 
                    <Link className='address' to="#"> <span className='loca'> <LocationOnIcon/> </span>122 Rue de Makthar  <br/>  </Link>

                       
                    </li>
                    <li> 
                    <Link className='phone' to="#"> < span className='cal'> <CallIcon/>  </span>(+216) 20 222 222 <br/>  </Link>

                    </li>
                    <li> 
                        <Link className='mail' to="#">  <span className='eml'><MailOutlineIcon/> </span> contact@maktba.com <br/> </Link>
                    </li>

                
                </ul>


            </div>
            </div>
            
    
    
    
    
    
    
    
    
    
            
    
    
            <div className="copy">
     <p>Copyright © 2022 Maktaba.tn</p>
      </div>
    
            </div>
     
           
        
            </div>
   
    
  
  )
}

export default Footer