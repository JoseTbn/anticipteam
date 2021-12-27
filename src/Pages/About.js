import React from 'react'
// import './About.css'
import Forms from '../Components/Form/Forms'
import Map from '../Components/Map/Map'
import Navbar from '../Components/Navbar/Navbar'
import WavyBackground from '../Components/Wavybackround.js/WavyBackground'
import ContactForm from '../Components/Form/ContactForm'
import FooterC from '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'

export default function About() {
   
    return (
      <>
        {/* < GlobalStyle/> */}
        <Navbar />
        
        
        
      <section className="text-gray-600 max-h-screen w-4/5 mx-auto mb-48 body-font relative -bottom-36 rounded-lg">
  <div className='absolute  left-1/4  -top-12   mt-8'> <p className=' break-words text-center text-lg'>
  {/* <strong> startups </strong> to find them the best talent to maintain their <strong>growth</strong> */}
             {/* We love working with
            <strong> startups </strong> to find them the best talent to maintain their <strong>growth</strong> <br /> */} Our 
            <strong> talents </strong>  can be freelance or permanent with skills in <strong> Tech</strong>, <strong> Digital </strong> 
            or <strong> Sales</strong> <br />  In ICT staffing to have the choose doesn’t matter, the
            <strong> quality</strong>  is better quantity <br /> They are people searching for others,
            anticip find the right <strong> talents</strong> 
          </p></div>
  
  <div className="absolute inset-0 bg-gray-300 mt-20  rounded-lg">
    {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0brussels+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.027146682462!2d4.364538516006717!3d50.84918156643446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c37db91b7c3b%3A0x8290c19cda89389b!2sRue%20de%20la%20Presse%204%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1640557825730!5m2!1sfr!2sbe" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>

  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font"> We love working with
            <strong> startups </strong> to find them the best talent to maintain their <strong>growth</strong></h2>
      <p className="leading-relaxed mb-5 text-gray-600">Send us a message</p>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
        
        {/* <div className="about__text">
          <p>
            <strong style={{color:'red'}}>anticip </strong> is a <strong> 100% online staffing <br /> </strong> company We love working with
            <strong> startups </strong> to find them the best talent to maintain their <strong>growth</strong> <br />  Our
            <strong> talents </strong>  can be freelance or permanent with skills in <strong> Tech</strong>, <strong> Digital </strong> 
            or <strong> Sales</strong> <br />  In ICT staffing to have the choose doesn’t matter, the
            <strong> quality</strong>  is better quantity <br /> They are people searching for others,
            anticip find the right <strong> talents</strong> 
          </p>
        </div>
        <div className="map_and_form">
          <Map />
          <ContactForm/>
        </div>
         */}
         <Footer/>
      </> 
    );
}
