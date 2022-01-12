import React ,{useRef,useEffect} from 'react'
import  Staffing from './Staffing';
import About from './About';
import Ict from './Ict';
import Subhero from '../Components/SubHero/Subhero';
import Afiliation from '../Components/Afiliation/Afiliation';
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Home from './Home';
import ScrollContainer from '../Components/Scroll/Scroll';
import { useLocation } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';


export default function MainPage() {
   
  const discover = useRef(null)
  const app =useRef()
  const ScrollContainerCont =useRef()

  
  return (
        <>

        <Navbar/> 
        
        
        <Hero/>
         
      
         <Home  />
      
       <Subhero/>
      <Afiliation/>
     <Footer/> 
     </>
    )
}
