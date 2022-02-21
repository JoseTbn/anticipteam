import React from 'react'
import { useState } from 'react'
import Error from '../Components/Error/Error'



export default function Signin() {
  
   const [selected, setSelected] = useState(null)
   const [profilType, setprofilType] = useState(["Company ", "Talent"])


   const profil = profilType.map(profil => profil)


   const handleProfilTypeChange = (e) => { 
    console.clear(); 
    console.log((profilType[e.target.value])); 
    setRole(profilType[e.target.value]) 
      }

      const [role, setRole] = useState('Company')

   const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

 
  




  
  return (
    <section class="md:flex md:flex-row-reverse md:min-h-screen"> 
    
    <div class="md:w-8/12"> 
    <div class="w-full max-w-xl px-5 mx-auto mb-12 lg:px-0 md:mb-32"> 
    <div> 
    
    <div> 
    
    <h1 class="font-semibold text-skin-base text-4xl m-0 text-center tracking-tight md:text-4xl md:text-left lg:text-5xl">Ready to see what Anticip can do?</h1> 
    <div class="flex flex-col lg:flex-row flex-wrap justify-center mt-6 mb-8 lg:space-x-8 md:mb-12 md:justify-start"> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Vetted Servers</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Nationwide Service</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#F3B545" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Verified Live Updates</li> 
    </div> 
   
    <form action="#" class="default-form-style false" id="get-started-form" data-hs-cf-bound="true"> 
    
    
    <label>Are you a recruiter or a talent? <select onChange={changeSelectOptionHandler}  class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" name="user.type"> 
    {
                profil.map((profil, key) => <option key={key} value={key}>{profil} 
                   </option>)
            }
    <option selected value="true" >I'm a recruiter / Company</option> 
    <option value="INDIVIDUAL">I'm a talent </option> 
    </select> 
    </label> 
 
{ selected ?
    <label class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Company Name</div> 
    <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" name="law_firm.name" type="text" placeholder="Firm / organization name" value="" pwa2-uuid="EDITOR/input-62F-990-0D7E2-BD9" pwa-fake-editor="" style={{backgroundImage: "url(&quo,data:image/pn,base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T2NkoBAwIukXALL9gViBgJkPgPIbgfgDSB2yAQVAfj+RDioEqpuAbkADUKAeiB0JGLIfKN8IxCD1KC6AGYDsqgtANf+B2BDJUBCfaAM2QDUGkGMAcpjA/Qx1EVEugHkJZDlcA7EGgKJSHi0wHwL5D4g1wAGoEISRwQEgB4SJCkSQZns0Aw6SYgDICyCMDEDOJ8oL6E5HMwfsDayxQHFSBmUmUIJBdzq6C0DeWAATRE626AqJ4gMAKh82EQu8MAEAAAAASUVORK5CYII=&quo,)", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize:" 16px 18px", backgroundPosition: "98% 50%", cursor: "auto"}}/>
    </label> 
    
    :

    <div className="hidden">
      
        <label class=" hidden  font-medium text-base mb-4 w-full md:mb-8" >
      <div>Company Name</div>
      <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border hidden font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" name="law_firm.name" type="text" placeholder="Firm / organization name" value="" pwa2-uuid="EDITOR/input-62F-990-0D7E2-BD9" pwa-fake-editor="" style={{backgroundImage: "url(&quo,data:image/pn,base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T2NkoBAwIukXALL9gViBgJkPgPIbgfgDSB2yAQVAfj+RDioEqpuAbkADUKAeiB0JGLIfKN8IxCD1KC6AGYDsqgtANf+B2BDJUBCfaAM2QDUGkGMAcpjA/Qx1EVEugHkJZDlcA7EGgKJSHi0wHwL5D4g1wAGoEISRwQEgB4SJCkSQZns0Aw6SYgDICyCMDEDOJ8oL6E5HMwfsDayxQHFSBmUmUIJBdzq6C0DeWAATRE626AqJ4gMAKh82EQu8MAEAAAAASUVORK5CYII=&quo,)", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize:" 16px 18px", backgroundPosition: "98% 50%", cursor: "auto"}}/>
      </label>
    </div>
   }
    <label class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>First Name</div> 
    <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" name="user.first_name" type="text" placeholder="Your first name" value="" pwa2-uuid="EDITOR/input-17B-36C-C6077-E13" pwa-fake-editor=""/>
    </label> 
    <label class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Last Name</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" name="user.last_name" type="text" placeholder="Your last name" value="" pwa2-uuid="EDITOR/input-A7F-CF4-62039-48F" pwa-fake-editor=""/>
    </label> 
    <label class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Email Address</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" name="user.email" type="email" placeholder="Your email address" value=""/>
    </label> 
    <label class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Phone Number</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" name="user.phone_number" type="text" placeholder="Your phone number" value="" pwa2-uuid="EDITOR/input-71A-5EF-8C293-1B4" pwa-fake-editor=""/>
    </label> 
    <div class="items-center justify-center mt-8 text-center md:mt-10 md:flex space-y-4 md:space-y-0"> 
    <button type="button" class="form-button appearance-none  bg-skin-darkblue bg-none border-black rounded-md border-solid border-0 cursor-pointer block items-center justify-center font-semibold h-16 text-base m-0 py-0 px-5 text-center normal-case w-full text-white ease-in-out hover:opacity-75 ">Continue</button> 
    {/* <a href="#" class="inline-block flex-0 md:mt-0 text-link md:ml-8">Add a coupon</a>  */}
    </div> 
    </form> 
    </div> 
    </div> 
    </div> 
    </div> 
    
 

     {/** Side tab **/}

    <div class="md:w-4/12"> 
    <div class="h-full relative px-5 pt-12 text-white  bg-skin-darkblue pb-80 md:pt-32 md:max-w-md xl:max-w-lg md:px-10 xl:px-16 md:pb-56"> 
    <section> 
    <div class="w-12 h-12 mb-6 img-object-contain"> 
    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}> 
    <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%",}}> 
    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2753%27%20height=%2753%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px",}}/> 
    </span> 
    <img alt="process-server" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F5XBPAGJxmFEtlIj0SpzIF2%2F5cf62e9ceb584cbbd27202682667c643%2Fbag.png&am,w=128&am,q=75" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none",margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight:" 100%",}} srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F5XBPAGJxmFEtlIj0SpzIF2%2F5cf62e9ceb584cbbd27202682667c643%2Fbag.png&am,w=64&am,q=75 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F5XBPAGJxmFEtlIj0SpzIF2%2F5cf62e9ceb584cbbd27202682667c643%2Fbag.png&am,w=128&am,q=75 2x"/>
    <noscript> 
    </noscript> 
    </span> 
    </div> 
    <div class="mb-8 space-y-4  bg-skin-darkblue "> 
    <h3 class="u-h3">Are you a Process Server?</h3> 
    <div class="u-p3"> 
    <p>The Proof app simplifies everything for you, notifying when nearby jobs appear and keeping tasks and earnings organized automatically.</p> 
    </div> 
    </div> 
    <a class="text-link text-link--white" href="/become-a-process-server">Sign up to serve with Proof</a> 
    </section> 
    <div class="pt-12 mt-12 border-t border-dashed" style={{borderColor:" rgba(255, 255, 255, 0.2)%"}}> 
    <h4 class="text-base font-medium">Trusted by over 2,000 law firms and government agencies</h4> 
    <div class="flex mt-6 space-x-6"> 
    <div class=" img-object-contain flex flex-col items-start justify-center"> 
    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%",}}> 
    <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%",}}> 
    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%2750%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px",}}/> 
    </span> 
    <img __typename="Asset" title="Fisher Phillips" url="https://images.ctfassets.net/lg0s2zdhlsw6/6hEnHh1ywzB76IuevM3yta/bf051f643a921440347290aaa60fcc3a/fisher.png" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F6hEnHh1ywzB76IuevM3yta%2Fbf051f643a921440347290aaa60fcc3a%2Ffisher.png&am,w=256&am,q=100" decoding="async" data-nimg="intrinsic" class="h-full" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none",margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight:"100%", maxHeight:"100%", objectposition: "left center"}} srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F6hEnHh1ywzB76IuevM3yta%2Fbf051f643a921440347290aaa60fcc3a%2Ffisher.png&am,w=128&am,q=100 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F6hEnHh1ywzB76IuevM3yta%2Fbf051f643a921440347290aaa60fcc3a%2Ffisher.png&am,w=256&am,q=100 2x"/>
    <noscript> 
    </noscript> 
    </span> 
    </div> 
    <div class=" img-object-contain flex flex-col items-start justify-center"> 
    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}> 
    <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}> 
    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%2750%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px",}}/>
    </span> 
    <img __typename="Asset" title="Cordell &am, Cordell" url="https://images.ctfassets.net/lg0s2zdhlsw6/7JOcimkT19NfSxID3xjIyY/4e58a935f1d67b85a5b3cf9a02566277/cordell.png" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F7JOcimkT19NfSxID3xjIyY%2F4e58a935f1d67b85a5b3cf9a02566277%2Fcordell.png&am,w=256&am,q=100" decoding="async" data-nimg="intrinsic" class="h-full" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none",margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight:"100%", maxHeight:"100%", objectposition: "left center"}} srcset="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F7JOcimkT19NfSxID3xjIyY%2F4e58a935f1d67b85a5b3cf9a02566277%2Fcordell.png&am,w=128&am,q=100 1x, /_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flg0s2zdhlsw6%2F7JOcimkT19NfSxID3xjIyY%2F4e58a935f1d67b85a5b3cf9a02566277%2Fcordell.png&am,w=256&am,q=100 2x"/>
    <noscript> 
    </noscript> 
    </span> 
    </div> 
    <div class=" img-object-contain flex flex-col items-start justify-center"> 
    <span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none",opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%",}}> 
    <span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%",}}> 
    <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%2750%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px",}}/> 
    </span> 
    
    </span> 
    </div> 
    </div> 
    </div> 
    <div class="hidden md:block" style={{height: "200px"}}> 
    
    </div> 
    <div class="absolute bottom-0 left-0 w-full img-object-cover"> 
    <img src="/images/started/started-bg.png" alt="" class="inline-block w-full h-full"/>
    </div> 
    </div> 
    </div> 
    </section>
  )
}
