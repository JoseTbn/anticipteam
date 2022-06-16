import React , {useRef,useLayoutEffect,useEffect} from 'react'
import ReactGA from 'react-ga';
import {  GlobalStyle} from './globalStyles';
import Home from './Pages/Home';


// import useRouter from './useRouter';

import { Routes, Route, useLocation , } from "react-router-dom";


import  Staffing from './Pages/Staffing';
import About from './Pages/About';
import Ict from './Pages/Ict';
import MainPage from './Pages/MainPage';
import PricingPage from './Pages/PricingPage';
import PricingPageM from './Pages/PricingPageM';
import PricingPageSe from './Pages/PricingPageSe';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import { AuthProvider } from "./context/AuthContext";



const TRACKING_ID = "G-1YLE0NB4L7"; 
ReactGA.initialize(TRACKING_ID);

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  const app =useRef()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
 
 
 <div className="App" ref={app}>
   <>
   < GlobalStyle/>
   {/* <AuthProvider> */}
        <Wrapper>
        
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
          </Wrapper>
          {/* </AuthProvider> */}
 
      
          </>
   
 </div>
     

  );
}

export default App;
