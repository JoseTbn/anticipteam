


import Subhero from '../Components/SubHero/Subhero';
import Afiliation from '../Components/Afiliation/Afiliation';
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Home from './Home';
import CookieConsent, { resetCookieConsentValue } from 'react-cookie-consent';
import { Link } from 'react-router-dom';



export default function MainPage() {



  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Subhero />
      <Afiliation />
      <Footer />
      <CookieConsent debug={true}
        acceptOnScroll={true}
        style={{ background: 'var(--darkblue)'}}
        expires={7}
        > 
        This website uses cookies to enhance the user experience. 
        See our <Link className=' underline text-indigo-500 ' to={'/privacy'}>privacy policy</Link> for more.
        </CookieConsent>
    </>
  )
}
