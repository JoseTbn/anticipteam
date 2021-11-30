import React, { useState } from "react";
import "./Home.css";
import svg2 from "../assets/ff2.svg";
import redline from "../assets/My path.svg"

export default function Home() {
  const [Class, setClass] = useState(false);

  const handleChange = (e) => {
    setClass(e.target.value);
  };

  return (
    <div className="container">
      
      <div className="How-we-work">
        <h1>How we work?</h1>
      </div>

      <div className="card1">
        <h1 className="title">
          {" "}
          <span className="circle">1</span> Social recruiting
        </h1>
        <p className="p">
        We define your ideal candidate, match
our messaging, ideate a creative
approach and specify relevant channels.
Then we go live, hit the media BOOSTbutton,
optimize and report. No need for
you to find out which media match your
IT, engineering or sales recruitment goals.
We’ll take care of that. Happy to!{" "}
        </p>
      </div>

  

      <div className="card2">
        <h1 className="title">
          
          <span className="circle">22</span> Screening
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
        <img src={svg2} alt="" />{" "}
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
        <img src={svg2} alt="" />
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
