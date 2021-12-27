import React, {  forwardRef ,useRef } from "react";
import "./Home.css";
import svg1 from "../assets/img/Mobile Testing_Flatline.svg"
import svg2 from "../assets/img/Handshake_Flatline.svg"
import svg3 from "../assets/img/Job Interview _Flatline.svg"
import redline from "../assets/img/redline1png.png"
import curvedline from "../assets/img/curvedlinedown.png"
import redline1 from "../assets/img/redline1.svg"
import Card from "../Components/Card/Card";

import useArrayRef from "../useArrayrefs";
import useTextReveal from "../useTextReveal";



export default function Home () {
  const discover = useRef(null)

  const gotoDiscover =() => window.scrollTo({ top: discover.current.offsetTop, behavior: "smooth" })

  const [elements, ref] = useArrayRef();
  useTextReveal(elements);

  return (
    <div className="steps-explanations-area">
      
      <div className="How-we-work">
        <h1 >How we work?</h1>
      </div>

      <Card ref={ref} className='card' />

<div className="svgdotted">
  <img src={redline1} alt="" />
</div>


      <div className="card2">
        <h1 className="title">
          
          <span className="circle">2</span> Screening
        </h1>
        <p className='p'>We check the veracity of the technical/
sales skills of the candidates. We also
assess their personality/motivation to
be sure that they will be a vector of
growth and they will be happy like fish in
the water in your organisation fitting well
with your culture.</p>
      </div>


      <div className="svg1">
        {" "}
        <img src={svg1} alt="" />{" "}
      </div>
      <div className="card3">
        <h1 className="title">
          {" "}
          <span className="circle">3</span> Tests
        </h1>
        <p className="p">We make sure that the candidates have
the good skills to perform in their roles.
So we test them with tech tests (mcq,
coding tests) or sales test (gaming tests,
simulations).</p>
      </div>
      <div className="svg2">
        {" "}
        <img src={svg2} alt="" />
      </div>
      <div className="card4">
        <h1 className="title">
          {" "}
          <span className="circle">4</span> Contracting
        </h1>
        <p className="p">Once you find your perfect match, we will
send the contract via our platform, all the
signature can be done online. Simple,
easy and fast!</p>
      </div>
      <div className="svg3">
        <img src={svg3} alt="" />
      </div>
      <div className="card5">
        <h1 className="title">
          {" "}
          <span className="circle">5</span> Follow up
        </h1>
        <p className="p">Staffing is not only about placement, we
also follow our candidates and our clients
during their first months to make sure
that everything is going well and
everybody remains happy in their
collaboration. If not we will do our best to
disarm the conflicts and re-establish a
stable situation in complete neutrality.</p>
      </div>
    </div>
  );
}
