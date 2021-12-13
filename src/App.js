import logo from './logo.svg';
import { global, GlobalStyle} from './globalStyles';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home';

import { BrowserRouter,Routes, Route, Link } from "react-router-dom";



import Company from './Pages/Company';
import About from './Pages/About';
import Ict from './Pages/Ict';
import Subhero from './Components/SubHero/Subhero';
import Afiliation from './Components/Afiliation/Afiliation';
import Footer from './Components/Footer/Footer';
import MainPage from './Pages/MainPage';
import Princing from './Components/Pricing/Princing';
import PricingPage from './Pages/PricingPage';


function App() {
  
  
  return (
 <>
 < GlobalStyle/> 
 
    <Routes>
        <Route path="/" element={<MainPage/>}/>
      <Route  path="/Company"  element={<Company/>} />    
      <Route path="/About"  element={<About/>} />
      <Route path="/Ict" element={<Ict/>}/>
      <Route path="/Pricing" element={<PricingPage/>}/>
      <Route path="/Home" element={<Home/>}/>
      
    </Routes> 
  
   
  
      
         
        </>
    
     

  );
}

export default App;
