import React from 'react'
// import WavyBackground from '../Components/Wavybackround.js/WavyBackground'
import { NavLink } from "react-router-dom";
// import { global, GlobalStyle} from '../globalStyles';
import Navbar from '../Components/Navbar/Navbar'
// import './Company/Company.css'
import Forms from '../Components/Form/Forms';
import Skill1 from '../assets/img/Skills 1.svg'
import btnform from '../Components/buttons/btnform';
import Button from '@mui/material/Button';
import Footer from '../Components/Footer/Footer';
   


export default function Company() {
    return ( 
        <>
         {/* < GlobalStyle/> */}
    
          {/* <div classNameName="left">
          <h1>So why work together 👌 ?</h1>
          <p classNameName=' bg-black   '>
            ⚡🚀 Our clients We work exclusively with start-ups, scale-ups and
            middle sized company. Our clients are fast-growing and agile
            organizations that develop innovative projects (market places, IoT
            …) and provide an exciting work environment.
          </p>
<p>😀 Our retention rate is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match. 
</p>
<p>💪 Our talents are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.
</p>
<p>📈 Our screenings include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.
</p>
<p>👍 Our services are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers. 
</p>

<p>👍 Our services are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers. </p>

<p>🙏 Our working mode is collaborative (simplified sharing of profiles via a private online access, online contracting, advice on HR issues/Job description, ad hoc follow-up of profiles during their jobs).</p>

<p>🚑 Our guarantee We offer a 6 months guarantee on any hired profile.</p>


</div>
      <img classNameName='right__img' src={}       <WavyBackground/>   
         */}

  
 


{/* <div className="max-w-screen-2xl max-h-screen  pb-48  mb-10  bg-white dark:bg-gray-800 mx-auto px-4 rounded-lg sm:px-6 lg:px-8 relative py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                    Companies & Recruiters
                </p>
                <h4 className="mt-2 text-2xl leading-8 font-extrabold text-skin-base dark:text-white sm:text-3xl sm:leading-9">
                So why work together 👌 ?
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Our clients We work exclusively with start-ups, scale-ups and middle sized company. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.
                </p>
                <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                               lorems
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                -lorem
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                               lorem
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                lorem
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                lorem
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                lorem
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                    <div className="flex items-end justify-center lg:justify-start space-x-4">
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={Skill1} alt="1"/>
                        <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src={Skill1} alt="2"/>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src={Skill1} alt="3"/>
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={Skill1} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/> */}
     </> 
    ) 
}
