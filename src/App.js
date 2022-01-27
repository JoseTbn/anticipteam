import React , {useRef, useEffect,useContext} from 'react'
import { global, GlobalStyle} from './globalStyles';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home';
import { useTransition, animated } from 'react-spring';



// import useRouter from './useRouter';

import { BrowserRouter,Routes, Route, Link , useLocation , } from "react-router-dom";



import  Staffing from './Pages/Staffing';
import About from './Pages/About';
import Ict from './Pages/Ict';
import MainPage from './Pages/MainPage';
import PricingPage from './Pages/PricingPage';
import PricingPageM from './Pages/PricingPageM';
import PricingPageSe from './Pages/PricingPageSe';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {
  const app =useRef()
  const ScrollCont =useRef()


  
  return (
 
 
 <div className="App" ref={app}>
   <>
   < GlobalStyle/>

  
        <Routes>
 
          <Route path="/" element={<MainPage/>}/>
          <Route  path="/Staffing"  element={<Staffing/>} />
          <Route path="/About"  element={<About/>} />
          <Route path="/Ict" element={<Ict/>}/>
          <Route path="/Pricing" element={<PricingPage/>}/>
          <Route path="/Pricing/Medior" element={<PricingPageM/>}/>
          <Route path="/Pricing/Senior" element={<PricingPageSe/> }/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          
        </Routes>
   
 
      
          </>
   
 </div>
     

  );
}

export default App;
