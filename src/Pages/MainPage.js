import React from 'react'
import Company from './Company';
import About from './About';
import Ict from './Ict';
import Subhero from '../Components/SubHero/Subhero';
import Footer from '../Components/Footer/Footer';
import FooterContent from '../Components/Footer-Content/FooterContent'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Home from './Home';

export default function MainPage() {
    return (
       <>
        <Navbar/> 
        <Hero/>
         
       <Home/>
       <Subhero/>
       <Footer/>
     <FooterContent/> 
     </>
    )
}
