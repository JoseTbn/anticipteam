import React ,{useState} from "react";
// import './Ict.css'
import Navbar from "../Components/Navbar/Navbar";
import WavyBackground from "../Components/Wavybackround.js/WavyBackground";
import supm from "../assets/img/Super Man_Monochromatic.svg"
import supw from "../assets/img/Super Woman_Monochromatic.svg"
import Footer from "../Components/Footer/Footer";


export default function Ict() {
  
  const [selectedId, setSelectedId] = useState(null)
  
  return (

    <>
      {/* < GlobalStyle/> */}
      <Navbar />
      {/* <div classNameName="left"> */}
      {/* <h1>So why work together 👌 ?</h1>
          <p>
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
</p> */}
      <div classNameName="relative">

        <div className="absolute max-w-xl mx-auto px-4 pt inset-0  mt-28  sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Working with us .</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-black-500">Our team is always reactive. We grow with you. We achieve goals togheter.</p>
          </div>
          <div className="mt-8 ">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="groupml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full"> Our clients →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm ">We work exclusively with start-ups, scale-ups and middle sized company. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.</p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="groupml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Our retention rate →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm "> is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="grou ml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full"> Our talents →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm "> are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                      {/* <span className="ml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Coming Soon</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="groupml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">📈 Our screenings →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm "> include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                      {/* <span className="ml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Coming Soon</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="groupml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">👍 Our services →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm ">are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-span-1 group cursor-pointer bg-white rounded-lg shadow hover:shadow-md flex flex-col justify-between">
                <div className="group w-full flex items-center py-4 px-6 space-x-6" href="/register">
                  <div className="group">
                    <div className="flex-1 group mb-1">
                      {/* <span className="flex-shrink-0 inline-block px-2 mb-1.5 text-indigo-800 text-xs font-medium bg-indigo-100 rounded-full">Free</span> */}
                      {/* <span className="ml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Coming Soon</span> */}
                    </div>
                    <div className="group flex items-center space-x-3">
                      <h3 className="groupml-2 flex-shrink-0 inline-block px-2 mb-1.5 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Fundraising →</h3>
                    </div>
                    <p className="mt-1 text-black-500 text-sm ">Raise capital seamlessly by generating documents, managing equity, and passing dilligence.</p>
                  </div>
                </div>
              </li>
            </ul>
           
<div class="bg-white dark:bg-gray-800 my-12 -top-4  rounded-lg   relative lg:flex lg:items-center">
    <div class="w-full py-6 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-skin-base dark:text-white sm:text-4xl">
            <span class="">
                Are you ready?
            </span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
        We find you the job matching with your professional development !
Push your skills at the highest level
.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-2 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                     Recruiters
                </button>
            </div>
        </div>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-2 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Talents       
                </button>
            </div>
        </div>
    </div>
    <div class="flex items-center gap-8 p-8 lg:p-24">
        <img src={supm} class="rounded-lg w-1/2" alt="Tree"/>
        <div>
            <img src={supm} class="rounded-lg mb-8" alt="Tree"/>
            <img src={supm} class="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>


          </div>
        </div>
        
      </div>


      {/* </div> */}

      {/* 
        <div classNameName="right">
<img src={supm} alt="" />
<img src={supw} alt="" />

        </div> */}
{/* <Footer/> */}
    </>

  );
}
