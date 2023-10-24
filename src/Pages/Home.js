import { useEffect } from "react";
// import "./Home.css";
import svg1 from "../assets/img/Mobile Testing_Flatline.svg"
import svg2 from "../assets/img/Profile analysis _Flatline.svg"
import svg5 from "../assets/img/Code Development _Flatline.svg"
import svg3 from "../assets/img/Job Interview _Flatline.svg"
import svg4 from "../assets/img/Manager _Flatline.svg"

import Card from "../Components/Card/Card";


import AOS from "aos";
import "aos/dist/aos.css";





const cardContent = [
  {
    id: 1,
    title: 'Social recruiting',
    svg: svg2,
    num: '1',
    p: "We define your ideal candidate, match our approach of the profile/skills, ideate a creative approach and specify relevant channels.Then we go live, hit the media BOOSTbutton,optimize and report. No need for you to find out which media match your IT engineering or sales recruitment goals. We’ll take care of that. Happy to!"
  },
  {
    id: 2,
    title: 'Screening',
    svg: svg1,
    num: '2',
    p: "We check the veracity of the technical/sales skills of the candidates. We alsoassess their personality/motivation to be sure that they will be a vector of growth and they will be happy like fish in the water in your organisation fitting well with your culture."
  },

  {
    id: 3,
    title: 'Test',
    svg: svg5,
    num: '3',
    p: "We make sure that the candidates have the good skills to perform in their roles. So we test them with tech tests (mcq, coding tests) or sales test (gaming tests, simulations)."
  },

  {
    id: 4,
    title: 'Contracting',
    svg: svg4,
    num: '4',
    p: "Once you find your perfect match, we will send the contract via our platform, all the signature can be done online. Simple, easy and fast!"
  },


  {
    id: 5,
    title: 'Follow up',
    svg: svg3,
    num: '5',
    p: "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. If not we will do our best to disarm the conflicts and re-establish a stable situation in complete neutrality."
  },


]






export default function Home() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" w-full h-full bg-white pb-12">

      <div className=" flex    justify-center w-full  py-20 font-semibold text-4xl tracking-tight md:text-4xl xl:text-5xl  text-skin-base">
        <h1 className=" 
        text-center" >How we work?</h1>
      </div>
      {
        cardContent.map(cardContent =>
          <Card data-aos="zoom-in-up" data-aos-duration="1500" {...cardContent} />
        )
      }
    </div>
  );
}
