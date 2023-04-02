import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Acceuil from './pages/acceuil'
import Apropos from './pages/Apropos'
import Shop from './pages/Shop'
import DevenirPartenaire from './pages/devenirPartenaire'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Récupérer from './pages/Récupérer';
import Seconnecter from './pages/Seconnecter';

function App() {
  return ( 
  
    
    
    <BrowserRouter>
    <Navbar/>
 
   
    
      <Routes>
       <Route path ="/Acceuil" element={<Acceuil />} />
       <Route exact path="/Shop" component={<Shop/>} />
        <Route path="/Apropos" component={<Apropos />} />
        
        <Route path="/devenirpartenaire" component={<DevenirPartenaire />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path='/Forgot'element={<Forgot/>}/>
        <Route path='/Récupérer'element={<Récupérer/>}/>
        <Route path='Seconnecter'element={<Seconnecter/>}/>
      </Routes>
      
      <Footer/>
     
      </BrowserRouter>
      
 
  )
}
export default App
