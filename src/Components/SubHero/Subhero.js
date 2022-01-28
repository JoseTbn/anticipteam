import React from "react";
// import "./Subhero.css";
// import hometext from "../../assets/hometext.png";
// import wave2 from "../../assets/img/wave2.svg";
// import VerticalLineWrapper from "../VerticalLine/VerticalLineWrapper";
// import VerticalLineContent from "../VerticalLine/VerticallineContent";

import cs from '../../assets/img/Consulting_Flatline.svg'
import growth from '../../assets/img/Growth_Flatline.svg'
import pf from '../../assets/img/Profiling_Flatline.svg'
import rs from '../../assets/img/Online research_Flatline.svg'



export const incentives = [
  {
    name: 'Guarantee',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "We offer a 3 month guarantee on any hired profile but no worries, our retention rate is excellent (96%).",
  },
  {
    name: 'Collaborative',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "We work in a collaborative mode (simplified sharing of profiles, contracts, advice on HR issues, ad follow-up of profiles in function).",
  },
  {
    name: 'Flat free',
    imageSrc:"https://img.icons8.com/wired/64/000000/refund.png",
    description:
      "Our remuneration is a flat fee (no percentage that increases your commission depending on the seniority of the profile) so no bad surprises.",
  },
  {
    name: 'Exclusive',
    imageSrc: 'https://img.icons8.com/wired/64/000000/social-network.png',
    description:
      "We work exclusively with startups/scale-ups (with more than 20 happy customers in Belgium, only the this year).",
  },
  {
    name: 'Tracking',
    imageSrc: 'https://img.icons8.com/wired/64/000000/find-matching-job.png',
    description:
      "We help our clients to find the perfect talents with growth vector profiles in Tech, Digital or Sales, themes that we master .",
  },
]

export default function Subhero() {
  return (
    <>



<div className="   max-w-screen-3xl  h-full  mt-36    bg-skin-fill dark:bg-gray-800 mx-auto px-4 rounded-lg sm:px-6 lg:px-8 relative py-26 lg:mt-20">
    <div className="relative">


    <div className="">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
            <p className="text-base leading-6 text-red-500 font-semibold uppercase">
                    Companies & Recruiters
                </p>
              <h2 className="text-5xl font-extrabold tracking-tight text-skin-base ">
              So,why to choose anticip?
              </h2>
              <p className="mt-4 text-gray-500">
              The first reason is probably because we’re external to your organisation and that we can detect a good or a bad profile and understand your needs and culture to optimize your chance to do a profitable match in the long terms.
              </p>
            </div>
            <div className="aspect-w-3 aspect-h-2  rounded-lg overflow-hidden">
              <img
                src={pf}
                alt=""
                className="object-center object-cover"
              />
            </div>
          </div>
          <div className=" mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


        
      </div>


   

</div>


          <div className=" relative " >
            <svg
              
              className="absolute inset-x-0 -bottom-2 "
              style={{display:"block"}}
              viewBox="0 0 1440 130"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <path
                fill="white"
          fill-opacity="1"
          filter='drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.8))'
          webkit-filter= 'drop-shadow( 3px 3px 3px rgba(0, 0, 0, .7))'
                d="M0,78L60,73.7C120,69,240,61,360,67.2C480,74,600,95,720,95.3C840,95,960,74,1080,67.2C1200,61,1320,69,1440,67.2C1560,65,1680,52,1800,41.2C1920,30,2040,22,2160,34.7C2280,48,2400,82,2520,80.2C2640,78,2760,39,2880,30.3C3000,22,3120,43,3240,47.7C3360,52,3480,39,3600,28.2C3720,17,3840,9,3960,6.5C4080,4,4200,9,4320,17.3C4440,26,4560,39,4680,56.3C4800,74,4920,95,5040,95.3C5160,95,5280,74,5400,73.7C5520,74,5640,95,5760,99.7C5880,104,6000,91,6120,91C6240,91,6360,104,6480,95.3C6600,87,6720,56,6840,47.7C6960,39,7080,52,7200,65C7320,78,7440,91,7560,84.5C7680,78,7800,52,7920,52C8040,52,8160,78,8280,75.8C8400,74,8520,43,8580,28.2L8640,13L8640,130L8580,130C8520,130,8400,130,8280,130C8160,130,8040,130,7920,130C7800,130,7680,130,7560,130C7440,130,7320,130,7200,130C7080,130,6960,130,6840,130C6720,130,6600,130,6480,130C6360,130,6240,130,6120,130C6000,130,5880,130,5760,130C5640,130,5520,130,5400,130C5280,130,5160,130,5040,130C4920,130,4800,130,4680,130C4560,130,4440,130,4320,130C4200,130,4080,130,3960,130C3840,130,3720,130,3600,130C3480,130,3360,130,3240,130C3120,130,3000,130,2880,130C2760,130,2640,130,2520,130C2400,130,2280,130,2160,130C2040,130,1920,130,1800,130C1680,130,1560,130,1440,130C1320,130,1200,130,1080,130C960,130,840,130,720,130C600,130,480,130,360,130C240,130,120,130,60,130L0,130Z"
              />
            </svg>
          </div>
         
      
    </>
  );
}


