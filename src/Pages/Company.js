import React from 'react'
import WavyBackground from '../Components/Wavybackround.js/WavyBackground'
import { NavLink } from "react-router-dom";
import { global, GlobalStyle} from '../globalStyles';
import Navbar from '../Components/Navbar/Navbar'
import './Company/Company.css'
import Forms from '../Components/Form/Forms';
import Skill1 from '../assets/img/Skills 1.svg'
import btnform from '../Components/buttons/btnform';
import Button from '@mui/material/Button';
   


export default function Company() {
    return ( 
        <>
         {/* < GlobalStyle/> */}
          <Navbar/>
      <Forms/> 
      
           <div className="btn">
         <Button   variant="contained"> 
Next
         </Button>
         <Button   variant="contained"> 
Previous
         </Button>
          </div>
      <img className='right__img' src={Skill1} alt="" />
          <WavyBackground/>   
        

  
      </> 
    ) 
}
