import React from 'react'
import './Footer.css'

import { AiFillLinkedin ,AiOutlineTwitter,AiFillFacebook,AiFillMail } from "react-icons/ai";
import { red } from '@mui/material/colors';


export default function Footer() {
    return (
        <div className='footer_content'> 
        <div className="footer_content_container">
        <div className="footer_content_container_home"> 
        <h1>Home</h1>
        <ul>
          <li> <AiFillFacebook style={{color:'var(--red)'}} /> Facebook</li>
          <li> <AiFillLinkedin style={{color:'var(--red)'}} /> Linkedin</li>
          <li><AiOutlineTwitter style={{color:'var(--red)'}} /> Twitter</li>
          <li> <AiFillMail style={{color:'var(--red)'}} /> Mail</li>
        </ul>
        </div>
        <div className="footer_content_container_contact">
           
           <h1>Contact</h1>
           <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use(Client)</li>
            <li>Terms of use(Customer)</li>
          </ul>
        </div>
        <div className="footer_content_container_about">
            <h1>About</h1>
            <p>We are experts in ICT staffing.Find the right talents for the right job is our daily mission.</p></div>
     
      </div>
     </div>
    )
}
