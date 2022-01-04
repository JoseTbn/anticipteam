import React , {useRef, useEffect, useState} from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { useSpring, animated } from 'react-spring';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import rocket from "../../assets/img/rocket.svg";
import upwave from "../../assets/img/upwave.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate, } from "react-router-dom";
import Home from "../../Pages/Home";
import Subhero from "../SubHero/Subhero"

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Hero() {
  
  //React sPring
    // const props = useSpring({
    //     opacity: 1,
    //     from: { opacity: 0 },
    //     delay: '5000'
    // })


  // const discover = useRef(null)

  // const gotoDiscover =() => window.scrollTo({ top: <Subhero/> ,
  //    behavior: "smooth" })

  const [swipe, setswipe] = useState(false)

  const toggle = () => setswipe(!swipe);


  return (
    <>


<div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color uppercase">Let's grow your businness with the rights talents</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Let's grow your businness  </h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-1/2 md:-ml-28" src={rocket} alt />
                        </div>
                    </div>
  
                </div>


{/* 
<main>
        <div className="relative   bg-skin-fill sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-visible " style={{height:'100vh'}}>
          <div className=" absolute top-36 max-w-full lg:px-36">
            <div className="lg:grid relative  lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm"  onClick={()=> setswipe(true)}>Visit our careers page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a> 
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-skin-base sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    Let's<span className="block">grow</span> your business with the right
                    <span className="block text-red-500">talents</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A 100% online Ict staffing agency
                  </p>
                  <div className="mt-10 sm:mt-12">
                    {/* <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form> 
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:-mb-48 h-full lg:m-0 lg:relative">
                <div className=" mx-auto -3 h-full max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img 
                    className=" lg:absolute lg:bottom-10  lg:inset-y-0 lg:right-0 lg:h-4/5 lg:w-auto lg:max-w-none  md:h-96  sm:h-1/5 "
                    src={rocket}
                    alt=""
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... 
      </main>*/}


      {/* <div className="hero">
        <div className="hero__container">
          <div className="hero__container--left">
            <div className="hero__container--left__content">
              <animated.div >
              <h1 className="mt-4 text-4xl tracking-tight leading-loose font-extrabold text-skin-base sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    Let's grow your business
                    <span className="block text-red-500 mt-4"> with the right talents</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A 100% online Ict staffing agency
                  </p>
              </animated.div>
              
            </div>
            <button className="hero__container--btn" >
              Discover <MdOutlineKeyboardArrowDown />{" "}
            </button>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  {/* <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={rocket}
                    alt=""
                  />
                </div>
              </div>
        </div>
      </div> */} 
       <svg className=" -mb-10" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 150"
        
      >
        <path
          fill="white"
          fill-opacity="1"
        filter='drop-shadow(3px 3px 2px  rgba(0, 0, 0, 0.8))'
        webkit-filter= 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))'
          d="M0,64L40,58.7C80,53,160,43,240,58.7C320,75,400,117,480,122.7C560,128,640,96,720,90.7C800,85,880,107,960,101.3C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg> 
    </>
  );
}
