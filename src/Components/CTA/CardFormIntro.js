import React, {useState} from 'react'
import Indicator from '../indicator/Indicator'
import IntroForm from './introForm'

export default function CardFormIntro(props) {
   
    const [selected, setSelected] = useState(null)
    const [profilType, setprofilType] = useState(["Company ", "Talent", "Recruiter"])
 
 
    const profil = profilType.map(profil => profil)
 
 
    const handleProfilTypeChange = (e) => { 
     console.clear(); 
     console.log((profilType[e.target.value])); 
     setRole(profilType[e.target.value]) 
       }
 
       const [role, setRole] = useState('Company')
 
    const changeSelectOptionHandler = (event) => {
     setSelected(event.target.value);
   };
 
 
 
    return (
    <div class="md:w-8/12"> 
    <div class="w-full max-w-xl px-5 mx-auto mb-12 lg:px-0 md:mb-32"> 
    <div> 
    
    <div> 
    
    {/* <Indicator/> */}
   

    {/* <h1 class="font-semibold text-skin-base text-5xl m-0 text-center  tracking-tight md:text-4xl md:text-left lg:text-5xl">Ready to see what Anticip can do?</h1> 
   
  <div class="flex flex-col lg:flex-row flex-wrap justify-center mt-40 mb-8 lg:space-x-8 md:mb-12 md:justify-start"> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Vetted Servers</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Nationwide Service</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Verified Live Updates</li> 
    </div>  */}

    <div class="items-center justify-center mt-8 text-center md:mt-60 md:flex space-y-4 md:space-y-0"> 
    <button type="button" onClick={() => props.modifyIndex(2)}
 class="form-button appearance-none  bg-skin-darkblue bg-none border-black rounded-md border-solid border-0 cursor-pointer block items-center justify-center font-semibold h-16 text-base m-0 py-0 px-5 text-center normal-case w-full text-white ease-in-out hover:opacity-75 ">Get started</button> 
    {/* <a href="#" class="inline-block flex-0 md:mt-0 text-link md:ml-8">Add a coupon</a>  */}
    </div> 
   
    </div> 
    </div> 
    </div> 
   </div> 


   

  )
}
