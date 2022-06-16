import React, {useState} from 'react'
import Indicator from '../indicator/Indicator'
import IntroForm from './introForm'

export default function CardFormDebut(props) {
   const [enteredValue, setEnteredValue] = useState('')
    const [selected, setSelected] = useState(false)
//     const [profilType, setprofilType] = useState(["Company ", "Talent"])

const [name, setname] = useState('')
const [lastname, setlastname] = useState('')
const [email, setEmail] = useState('')
const [number, setnumber] = useState('')


 const handleInput = (e) =>{
     setEnteredValue(e.target.value)
 }

                                            

//     const profil = profilType.map(profil => profil)
 
 
//     const handleProfilTypeChange = (e) => { 
//      console.clear(); 
//      console.log((profilType[e.target.value])); 
//      setRole(profilType[e.target.value]) 
//        }
 
//        const [role, setRole] = useState('Choose your status')
 
//     const changeSelectOptionHandler = (event) => {
//      setSelected(event.target.value);
//    };

const [formData, setFormData] = useState({
   status: 'Company',
name: '',
  lastName : '',
  number: '',
  email: ''

})

 
   const preventFunc = e => e.preventDefault();
   
   const handleStatus = e => {
    setFormData({
        status: e.target.value,
    })
   }
   const handleName = e => {
    setFormData({
        name: e.target.value,
    })
   }
   const handleLastName = e => {
    setFormData({
        lastName: e.target.value,
    })
   }
   const handleNumber = e => {
    setFormData({
        number: e.target.value,
    })
   }
   const handleEmail = e => {
    setFormData({
        email: e.target.value,
    })
   }


   console.log(formData);
 
    return (
    <div class="md:w-8/12"> 
    <div class="w-full max-w-xl px-5 mx-auto mb-12 lg:px-0 md:mb-32"> 
    <div> 
    
    <div> 
    
    {/* <Indicator/> */}

      
    {/* <h1 class="font-semibold text-skin-base text-4xl m-0 text-center tracking-tight md:text-4xl md:text-left lg:text-5xl">Ready to see what Anticip can do?</h1> 
    <div class="flex flex-col lg:flex-row flex-wrap justify-center mt-6 mb-8 lg:space-x-8 md:mb-12 md:justify-start"> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#2B2D42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Vetted Servers</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#2B2D42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Nationwide Service</li> 
    <li class="flex items-center text-sm font-medium list-none"> 
    <div class="mr-3"> 
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M1.51032 6.57833L5.50553 9.91675C5.50553 9.91675 6.94203 4.89378 13.8291 1.24353" stroke="#2B2D42" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"> 
    </path> 
    </svg> 
    </div>Verified Live Updates</li> 
    </div>  */}
    
{/* form debut */}

    <form action="#" method="POST" onSubmit={preventFunc} class="default-form-style false" id="get-started-form" data-hs-cf-bound="true"> 
    
    
    <label htmlFor='status' >Are you a recruiter or a talent? 
    <select onChange={handleStatus}
     class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" 
     name="status"
     required
     > 
    
    <option  value="Company" >I'm a recruiter / Company</option> 
    <option value="talent">I'm a talent </option> 
    </select> 
    </label> 
 
{ selected ?
    <label  htmlFor='companyName' class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Company Name</div> 
    <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" 
    name="law_firm.name" 
    type="text"
    id='companyName' 
    placeholder="Firm / organization name" 
     
    />
    </label> 
    
    :

    <div className="hidden">
      
        <label htmlFor='companyName' class=" hidden  font-medium text-base mb-4 w-full md:mb-8" >
      <div>Company Name</div>
      <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border hidden font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false" 
      name="law_firm.name" 
      type="text"
      id='companyName' 
      placeholder="Firm / organization name" 
    //   value={enteredValue}  
    //   onChange={setEnteredValue}
      
      />
      </label>
    </div>
   }
   
   
   
    <label htmlFor='name' class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>First Name</div> 
    <input class=" appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full false"
     name="Name" 
     type="text"
     id='name' 
     placeholder="Your first name" 
    //  onChange={(e)=> setname(e.target.value)}  
    onChange={handleName}
     required
     />
   
   
   
    </label> 
    <label htmlFor='lastname' 
    class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Last Name</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" 
    name="lastname" 
    type="text"
    id='lastname' 
    placeholder="Your last name" 
    required
    // onChange={(e)=> setlastname(e.target.value)}  
    onChange={handleLastName}


    />
    </label> 
    <label htmlFor='email' class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Email Address</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" 
    name="Email" 
    type="email" 
    id='email'
    placeholder="Your email address"  
  
    required
    // onChange={(e)=> setEmail(e.target.value)}  
    onChange={handleEmail}

    />
    </label> 
    <label htmlFor='phone' class="block font-medium text-base mb-4 w-full md:mb-8" > 
    <div>Phone Number</div> 
    <input class="appearance-none bg-transparent bg-no-repeat border-black rounded-md border-solid border block font-bold h-16 mx-0 mb-0 mt-4 py-0 px-4 text-left normal-case w-full" 
    name="Number" 
    type="text"
    id='number' 
    placeholder="Your phone number" 
    required
   
    // onChange={(e)=> setnumber(e.target.value)}  
    onChange={handleNumber}


    />
    </label> 
    
    <div class="items-center justify-center mt-8 text-center md:mt-10 md:flex space-y-4 md:space-y-0"> 
    <button type="button" onClick={() => props.modifyIndex(3, formData)}
 class="form-button appearance-none  bg-skin-darkblue bg-none border-black rounded-md border-solid border-0 cursor-pointer block items-center justify-center font-semibold h-16 text-base m-0 py-0 px-5 text-center normal-case w-full text-white ease-in-out hover:opacity-75 ">Continue</button> 
  
    </div> 
    </form> 
    </div> 
    </div> 
    </div> 
   </div> 


  )
}
