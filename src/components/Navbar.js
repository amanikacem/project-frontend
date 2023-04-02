import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/logo.png'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
const Navbar = () => {
  return (
    
            <header className="header">

             <div className='icon'><MenuSharpIcon/></div>
                <div className="logo">
                    <Link className='hr'  to="/acceuil">  <img src={logo} className="logoM" alt="logo" />     </Link>
                </div>

                    <ul className="navbar">
                    <li > 
                        <Link className='ll1' to="/#" >Acceuil</Link> 
                    </li>

                    <li>
                     <Link className='ll2'  to="/Shop" >Shop</Link>
                    </li>
                    
                    <li>
                        <Link className='ll3' to="/Apropos" > À propos</Link>
                    </li>
                    <li>
                        <Link className='ll4' to="/devenirpartenaire">Devenir Partenair </Link>
                    </li>
                    <li>
                         <Link className='ll5'  to="/contact" >Contact</Link>
                    </li>
                  </ul>
                    <div className='header-btn'>
                       
                   <Link className="pani" to='/pannier'> <ShoppingCartTwoToneIcon/></Link> 


                         <button className="con" type="button"><Link className='login'  to="/Login" >Connexion</Link></button>
                         

                       
                         </div>
                
                        

                   
              

            </header>  
       
        
                
    )
                
}
export default Navbar
    

