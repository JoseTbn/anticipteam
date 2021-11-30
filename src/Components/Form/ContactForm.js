import React from 'react'
import './ContactForms.css'

export default function ContactForm() {
    return (
        <>
        <form style={{maxWidth:'410px', margin:'50px auto'}}>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
        </>
    )}
