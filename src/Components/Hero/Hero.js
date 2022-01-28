import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import { useSpring, animated } from 'react-spring';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import rocket from "../../assets/img/rocket.svg";
import upwave from "../../assets/img/upwave.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate, } from "react-router-dom";
import Home from "../../Pages/Home";
import Subhero from "../SubHero/Subhero"


import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>


      <div className="mx-auto w-5/6 relative z-0 px-4 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row ">
          <div data-aos="fade-up" data-aos-duration="1500" className="md:w-3/5  md:pt-24 pb-10 lg:py-32 xl:py-48">
            <h1 className="text-3xl lg:text-6xl 2xl:text-8xl font-black text-gray-900 text-center md:text-left  md:w-7/12 leading-tight  text-skin-base uppercase">
              Let's <span className=" text-red-500">grow</span> your businness with the <span className=" text-red-500"> rights talents </span>
             
               
             
            </h1>
            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Anticip is an <span className=" text-red-500"> online staffing </span> company  </h2>
            <div className=" w-1/6 mdx:w-full pt-10 flex justify-center md:block">
            <Link
                      to={"/Login"}
                      className="flex items-center justify-center px-4 py-3   border border-transparent text-base whitespace-nowrap font-medium rounded-md shadow-sm text-white bg-skin-darkblue hover:bg-blue-900 hover:scale-110  transition: ;
                      duration-500
                      ease-in-out transform sm:px-16"
                    >
                      Get started
                    </Link>
            </div>
          </div>
          <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">

            <img data-aos="fade-up" data-aos-duration="1500" className="md:absolute md:w-1/2 md:-ml-28" src={rocket} alt='launching rocket' />
          </div>
        </div>

      </div>



      <svg className=" "
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 150"

      >
        <path
          fill="white"
          fill-opacity="1"
          filter='drop-shadow(3px 3px 2px  rgba(0, 0, 0, 0.8))'
          webkit-filter='drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))'
          d="M0,64L40,58.7C80,53,160,43,240,58.7C320,75,400,117,480,122.7C560,128,640,96,720,90.7C800,85,880,107,960,101.3C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
