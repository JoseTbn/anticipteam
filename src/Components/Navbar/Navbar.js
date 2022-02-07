import {useState, useEffect} from "react";
import anticip from "../../assets/img/anticip-logo.svg";
import {  Link, useNavigate } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion"
import {GiHamburgerMenu, AiOutlineClose} from "react-icons/all"


export default function Headers() {
  let navigate = useNavigate();

  const { scrollY } = useViewportScroll();

  const [hidden, setHidden] = useState(false);


  const [sidebar, setSidebar] = useState(true)
const showSidebar = () => setSidebar(!sidebar) ;

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }



useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };



  return ( 
  <> 
   { sidebar ?


 <section className="w-screen relative h-20  mdx:bg-skin-darkblue   "> 
    <motion.div className="flex flex-wrap
   fixed
   z-50
    items-center
    justify-between
w-full   
    2xl:w-11/12
    mdx:h-14
  h-20
    2xl:mx-20
    py-4
    
    md:py-0 
    px-4
    text-lg text-white-700
 bg-skin-darkblue
    md:rounded-br-full md:rounded-bl-full    "
      /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add Link  custom easing curve and duration for the animation **/
      transition={{ ease: [0.5, 0.25, 0.3, 1], duration: .3 }}

    >
     

      <nav className="  w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="  w-full   flex items-center   justify-between  content-center  lg:border-none">
          <div className="flex items-center mr-28 ">
            <Link to={'/'}>
              <span className="sr-only">Anticip</span>
              <img
                className="h-8 mdx:h-6 mdx: w-auto" 
                src={anticip}
                alt="#"
              />
            </Link> 
            </div>
            <div className=" mdx:hidden space-x-8 lg:block">
       
                <Link to={'/Satffing'} className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer ">
                  Staffing
                </Link >
            
                <Link to={'/Pricing'} className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md   cursor-pointer " >
                 Pricing
                </Link >
                <Link to={'/About'} className="text-base font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer "  >
                 About
                </Link >
           
            </div>
          
          <div className="ml-10 space-x-4">
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className="mdx:hidden inline-block bg-indigo-500 py-2 px-4 border border-transparent whitespace-nowrap rounded-md text-base font-medium  hover:scale-110  transition: ;
                      duration-500
                      ease-in-out
                      transform text-white hover:bg-opacity-75 cursor-pointer"
            >
              Get Started 
             
            </button>
          
            <a  className="md:hidden inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 cursor-pointer  " onClick={showSidebar}
          >
            <GiHamburgerMenu/>
          </a >

          </div>
        
        </div>
 
      </nav>
      
     



    </motion.div>
   
    </section> 
    
    
    :

<section className="w-screen h-20   "> 
    <motion.div className="flex flex-wrap
   fixed
   z-50
    items-start
    justify-between
w-full   
    2xl:w-11/12
    mdx:h-full
  h-20
    2xl:mx-20
    py-4
    
    md:py-0 
    px-4
    text-lg text-white-700

    bg-skin-darkblue lg:rounded-br-full lg:rounded-bl-full    "
      // /** the variants object needs to be passed into the motion component **/
      // variants={variants}
      // /** it's right here that we match our boolean state with these variant keys **/
      // animate={hidden ? "hidden" : "visible"}
      // /** I'm also going to add Link  custom easing curve and duration for the animation **/
      // transition={{ ease: [0.5, 0.25, 0.3, 1], duration: .3 }}

    >
     

      <nav className="  w-full  mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="  w-full   flex items-center   justify-between  content-center  lg:border-none">
          <div className="flex items-center mr-28 ">
            <Link  to={'/'}>
              <span className="sr-only">Anticip</span>
              <img
                className="h-8 mdx:h-6 mdx: w-auto" 
                src={anticip}
                alt="#"
              />
            </Link > 
            </div>
           
          
          <div className="ml-10 space-x-4">
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className=" mdx:hidden inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium  hover:scale-110  transition: ;
                      duration-500
                      ease-in-out
                      transform text-white hover:bg-opacity-75 cursor-pointer"
            >
              Let's Started 
             
            </button>
          
            <button className="md:hidden inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 cursor-pointer" onClick={showSidebar}
          >
            <AiOutlineClose/>
          </button>

          </div>
        
        </div>
 
      </nav>
      
      <div className=" flex flex-col w-full  space-y-24  justify-center items-center lg:block">
       
                <Link to={'Staffing'}  className="text-6xl font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer ">
                  Staffing
                </Link >
            
                <Link to={'Pricing'}  className="text-6xl font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md   cursor-pointer " >
                 Pricing
                </Link >
                <Link to={'About'} className="text-6xl font-medium text-white hover:bg-indigo-500 hover: py-2 px-4 border border-transparent rounded-md  cursor-pointer "  >
                 About
                </Link >
           
            </div>



    </motion.div>
    </section> 
}
    </>

  );
}
