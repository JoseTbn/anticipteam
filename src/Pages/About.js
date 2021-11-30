import React from 'react'
import './About.css'
import Forms from '../Components/Form/Forms'
import Map from '../Components/Map/Map'
import Navbar from '../Components/Navbar/Navbar'
import WavyBackground from '../Components/Wavybackround.js/WavyBackground'
import ContactForm from '../Components/Form/ContactForm'
import FooterContent from '../Components/Footer-Content/FooterContent'

export default function About() {
   
    return (
      <>
        {/* < GlobalStyle/> */}
        <Navbar />
        <div className="about__text">
          <p>
            <strong style={{color:'red'}}>anticip </strong> is a <strong> 100% online staffing <br /> </strong> company We love working with
            <strong> startups </strong> to find them the best talent to maintain their <strong>growth</strong> <br />  Our
            <strong> talents </strong>  can be freelance or permanent with skills in <strong> Tech</strong>, <strong> Digital </strong> 
            or <strong> Sales</strong> <br />  In ICT staffing to have the choose doesn’t matter, the
            <strong> quality</strong>  is better quantity <br /> They are people searching for others,
            anticip find the right <strong> talents</strong> 
          </p>
        </div>
        <div className="map_and_form">
          <Map />
          <ContactForm/>
        </div>
        
      </> 
    );
}
