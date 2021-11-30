import React from 'react'
import './Footer.css'
import optimy from '../../assets/optimy.svg'
import POM from '../../assets/Logo_POM_Pos.svg'
import traxeo from '../../assets/traxxeo-logo.svg'
import MediSpring from '../../assets/logo-medispring-horiz.png'
import admeet  from '../../assets/optimy.svg'
import upbots from '../../assets/img/upbots.png'
import fichier8 from '../../assets/img/Fichier-8.png'
import lizy from '../../assets/img/lizy.svg'
import skipr from '../../assets/img/skipr.svg'
import cont from '../../assets/img/contaynor.png'
import compliment from '../../assets/img/compliment.svg'

import worksvg from '../../assets/worksvg.svg'


export default function Footer() {
    return (
        <>
        <div className='footer'>
       
  <div className="trust">
    <div className="Trustby">
    <h1 className="truststyle">Trust by</h1>
    </div>
  </div>
  <div className="trustlist">
    <div className="trustlist_area">
    <ul>
                    <li><img src={optimy} alt="optimy" /></li>
                    <li><img src={POM} alt="POM" /></li>
                    <li><img src={traxeo} alt="Treaxeo" /></li>
                    <li> <img  src={MediSpring} alt="" /> </li>
                    <li><img src={fichier8} alt="" /></li>
                    <li><img src={lizy} alt="" /></li>
                    <li><img src={skipr} alt="" /></li>
                    <li><img src={cont} alt="" /></li>
                    <li><img src={compliment} alt="" /></li>
                </ul> 
    </div>
  </div>
 
  <div className="background-img">
     <div className="background-img-area">
      <img src={worksvg} alt="" /> 
      </div>
    <div className="Title-text">
      <div className="title-text-area">
          <h1>Let's start working togheter</h1>
      </div>
    </div>
    <div className="button1">
      <div className="button_area">
          <button> <h2>You are Talent</h2>
            </button>
          <button className='reversed'> <strong> Go to your next mission </strong> </button>
      </div>
    </div>
    <div className="button2">
      <div className="button_area2">
      <button>  <h2> You are Company</h2></button>
      <button className="reversed">
        <strong> Discover your next talent</strong>
      </button>
      </div>
    </div>
  </div>

  </div> 

{/* 
               
             
                <ul className="trustlist">
                    <li>optimy </li>
                    <li>POM </li>
                    <li>Traxeo </li>
                    <li>MediSpring </li>
                    <li>admeet </li>
                    <li>zencar </li>
                    <li> upbots </li>
                    <li> smals</li>
                </ul> 
                </div>
         */}
    
    </>
    )
}
