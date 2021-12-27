import React from "react";
import styled from "styled-components";
import anticip from "../../assets/img/anticip-logo.svg";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion"
import MainPage from "../../Pages/MainPage";
import PricingPage from "../../Pages/PricingPage";
import Ict from "../../Pages/Ict";
import Company from "../../Pages/Company";
import About from "../../Pages/About";


export default function Headers() {
  let navigate = useNavigate();

  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = React.useState(false);


  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }


  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };

  const navigation = [
    {
      name: 'Company',
      path: '/Company',
      component: Company,
    },
    {
      name: 'Talents', path: '/Ict',
      component: Ict,
    },
    {
      name: 'Pricing', path: '/Pricing',
      component: PricingPage,
    },
    {
      name: 'about', path: '/About',
      component: About,
    },
  ]

  const routes = [{
    path: '/',
    component: MainPage,
  }, {
    path: '/Company',
    component: Company,
  }, {
    path: '/Ict',
    component: Ict,
  }, {
    path: '/Pricing',
    component: PricingPage,
  }, {
    path: '/About',
    component: About,
  }]


  return (

    <motion.div className="flex flex-wrap
   absolute
   z-50
    items-center
    justify-between
    w-full
   h-18
   self-auto
    py-4
    md:py-0
    px-4
    text-lg text-white-700
    bg-skin-darkblue rounded-br-full rounded-bl-full"
      /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.5, 0.25, 0.3, 1], duration: .3 }}



    >
      {/* <Link className="container-logo" to="/">
        <img src={anticip} alt="" className="logo" />
      </Link>

      <nav className="nav">
        <ul>
          <li
            onClick={() => {
              navigate("/Company");
            }}
          >
            Company
          </li>
          <li
            onClick={() => {
              navigate("/Ict");
            }}
          >
            Talents 
            </li>
          <li
            onClick={() => {
              navigate("/Pricing");
            }}
          >
            Pricing
          </li>
         
          <li
            onClick={() => {
              navigate("/About");
            }}
          >
            About
            
          </li>
        </ul>
      </nav>
      <Outlet />
      <button className="button"  onClick={() => {
              navigate("/Login");
            }} >
        Sign <FaArrowRight style={{ color: "red", marginBottom: "-4px" }} />
      </button> */}

      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center mr-28 ">
            <a href="#">
              <span className="sr-only">Anticip</span>
              <img
                className="h-8 w-auto" onClick={() => {
                  navigate("/");
                }}
                src={anticip}
                alt="#"
              />
            </a> 
            </div>
            <div className="hidden ml-10 space-x-8 lg:block">
       
                <a className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer " onClick={() => {
              navigate("/Company");
            }}>
                 Company
                </a>
                <a className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer " onClick={() => {
              navigate("/Ict");
            }}>
                 Talents
                </a>
                <a className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md   cursor-pointer "  onClick={() => {
              navigate("/Pricing");
            }}>
                 Princing
                </a>
                <a className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer "  onClick={() => {
              navigate("/About");
            }}>
                 About
                </a>
           
            </div>
          
          <div className="ml-10 space-x-4">
            <a
              onClick={() => {
                navigate("/Login");
              }}
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 cursor-pointer"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              <span className="md:hidden" >Sign up</span>
              <span className="hidden md:inline lg:hidden">Create account</span>
              <span className="hidden lg:inline">Create an account</span>
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-center  space-x-6 lg:hidden">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-indigo-50">
              {item.name}
            </a>
          ))}
        </div>
      </nav>


    </motion.div>

  );
}
