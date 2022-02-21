import React from 'react'
import a from '../../assets/img/anticip-picto.svg';


export default function Indicator() {
  return (
   
    <div class="px-5 py-12 text-center z-50"> 
    <div class="relative inline-block mx-auto mt-16 md:mt-0"> 
    <div class="absolute inset-0 flex items-center justify-center px-10"> 
    <div class="block w-full mb-6  border-t-4 border-dashed border  opacity-100"> 
    </div> 
    </div> 
    <ul class="flex space-x-32 list-none"> 
    <li class="relative z-10 text-center  cursor-pointer"> 
    <div class="inline-block w-10 h-10 "> 
    <img src={a} alt=""  />
  

    </div> 
    <span class="block text-sm font-medium">General</span> 
    </li> 
    <li class="relative z-10 text-center  cursor-pointer"> 
    <div class="inline-block w-10 h-10 opacity-50 "> 

    <img src={a} alt=""  />

    </div> 
    <span class="block text-sm font-medium opacity-50">Address</span> 
    </li> 
    <li class="relative z-10 text-center  cursor-pointer"> 
    <div class="inline-block w-10 h-10 opacity-50 "> 
    <img src={a} alt=""  />
   
    </div> 
    <span class="block text-sm font-medium opacity-50">Terms</span> 
    </li> 
    <li class="relative z-10 text-center  "> 
    <div class="inline-block w-10 h-10  opacity-50 "> 
    <img src={a} alt=""  />
   
    </div> 
    <span class="block text-sm font-medium  opacity-50">Confirmation</span> 
    </li> 
    </ul> 
    </div> 
    </div> 
    
  )
}
