import React ,{useRef} from 'react'
import Company from './Company';
import About from './About';
import Ict from './Ict';
import Subhero from '../Components/SubHero/Subhero';
import Afiliation from '../Components/Afiliation/Afiliation';
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Home from './Home';

export default function MainPage() {
   
  const discover = useRef(null)
  
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
