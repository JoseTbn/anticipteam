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
import Footer from './Components/Footer/Footer';
import FooterContent from './Components/Footer-Content/FooterContent';
import MainPage from './Pages/MainPage';


function App() {
  
  
  return (
 <>
 < GlobalStyle/> 
 
    <Routes>
        <Route path="/" element={<MainPage/>}/>
      <Route  path="/Company"  element={<Company/>} />    
      <Route path="/About"  element={<About/>} />
      <Route path="/Ict" element={<Ict/>}/>
      
    </Routes> 
  
   
  
      
         
        </>
    
     

  );
}

export default App;
