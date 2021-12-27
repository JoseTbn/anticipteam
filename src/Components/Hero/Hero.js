import React , {useRef, useEffect} from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { useSpring, animated } from 'react-spring';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import rocket from "../../assets/img/rocket.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate, } from "react-router-dom";
import Home from "../../Pages/Home";
import Subhero from "../SubHero/Subhero"


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

  

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container--left">
            <div className="hero__container--left__content">
              <animated.div >
                <h1   >
                  {" "}
                  Let's <span style={{ color: "#ef233c" }}>grow</span> your
                  business
                </h1>
              </animated.div>
              <h1>
                with the right{" "}
                <span style={{ color: "#ef233c" }}> talents </span>{" "}
              </h1>
              <h5>A 100% online ICT staffing agency</h5>
            </div>
            <button className="hero__container--btn" >
              Discover <MdOutlineKeyboardArrowDown />{" "}
            </button>
          </div>
          <div className="hero__container--right">
            <img src={rocket} alt="" class="hero__container--img" />
          </div>
        </div>
      </div>
      <svg
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        
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
