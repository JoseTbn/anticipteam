import React , {useRef,useLayoutEffect} from 'react'
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


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  const app =useRef()


  
  return (
 
 
 <div className="App" ref={app}>
   <>
   < GlobalStyle/>

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
  
 
      
          </>
   
 </div>
     

  );
}

export default App;
