import React , {useRef, useEffect} from 'react'
import { global, GlobalStyle} from './globalStyles';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home';
import { useTransition, animated } from 'react-spring';



// import useRouter from './useRouter';

import { BrowserRouter,Routes, Route, Link , useLocation} from "react-router-dom";



import Company from './Pages/Company';
import About from './Pages/About';
import Ict from './Pages/Ict';
import Subhero from './Components/SubHero/Subhero';
import Afiliation from './Components/Afiliation/Afiliation';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage';
import Princing from './Components/Pricing/Princing';
import PricingPage from './Pages/PricingPage';
import Login from './Pages/Login';
import Signin from './Pages/Signin';


function App() {
  const app =useRef()
  const ScrollCont =useRef()


  
  return (
 
 
 <div className="App" ref={app}>
   <>
   < GlobalStyle/>
  
      <Routes>
        
        <Route path="/" element={<MainPage/>}/>
        <Route  path="/Company"  element={<Company/>} />
        <Route path="/About"  element={<About/>} />
        <Route path="/Ict" element={<Ict/>}/>
        <Route path="/Pricing" element={<PricingPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
   
      </Routes>
      
          </>
   
 </div>
     

  );
}

export default App;
