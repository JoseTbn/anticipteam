import React from 'react'
import './WavyBack.css'
import Navbar from '../Navbar/Navbar'
import WavyB from '../../assets/img/wavyback.svg'

export default function WavyBackground() {
    
    
    
    return ( 
     <>
  
      <div class="container_wavyBack">
       <div class="container_wavyBack_left">

       </div>
        <div class="container_wavyBack_right">
          <img src={WavyB} alt="" />
        
        </div>
       
      </div> 
      </>
    )

}