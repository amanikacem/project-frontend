import React from 'react'
import im from '../assets/im.png'
import done from '../assets/done.jpg'
import'./seconnect.css'
const Seconnecter = () => {
  return (
    <container className="body-container">
    <div className='img-container'>
      <img className='image-forgot' src={im} alt='im'/>
      </div>
      <div className='don'>
        <img className='donne'src={done} alt='done'/>
       
      </div>
      <div className='reussi'>
      <h6 className='success'>La réinitialisation du mot de passe a réussi</h6>
      </div>
      </container>
  )
}

export default Seconnecter
