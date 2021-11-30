import React from 'react'
import './FooterContent.css'

export default function FooterContent() {
    return (
        <div className='footer_content'> 
        <div className="footer_content_container">
        <div className="footer_content_container_home"> 
        <h1>Home</h1>
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>mail</li>
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
            <p>“We are experts in ICT staffing. Find the right talents for the right job is our daily mission.”</p></div>
     
      </div>
     </div>
    )
}
