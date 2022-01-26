import {  forwardRef ,useRef, useEffect  } from "react";
// import "./Home.css";
import svg1 from "../assets/img/Mobile Testing_Flatline.svg"
import svg2 from "../assets/img/Profile analysis _Flatline.svg"
import svg5 from "../assets/img/Code Development _Flatline.svg"
import svg3 from "../assets/img/Job Interview _Flatline.svg"
import svg4 from "../assets/img/Manager _Flatline.svg"

import Card from "../Components/Card/Card";

import useArrayRef from "../useArrayrefs";
import useTextReveal from "../useTextReveal";
import AOS from "aos";
import "aos/dist/aos.css";





const cardContent = [
  {
id:1,
title:'Social recruiting',
svg: svg2,
num: '1',
p:   "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. if not we will do our best todisarm the conflicts and re-establish a stable situation in complete neutrality"
},
{ 
id:2,
title:'Screening',
svg: svg1,
num: '2',
p:   "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. if not we will do our best todisarm the conflicts and re-establish a stable situation in complete neutrality"
},

  {
id:3,
title:'Test',
svg: svg5,
num: '3',
p:   "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. if not we will do our best todisarm the conflicts and re-establish a stable situation in complete neutrality"
},

{
  id:4,
  title:'Contracting',
  svg: svg4,
  num: '4',
  p:   "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. if not we will do our best todisarm the conflicts and re-establish a stable situation in complete neutrality"
  },
  

  {
id:5,
title:'Follow up',
svg: svg3,
num: '5',
p:   "Staffing is not only about placement, we also follow our candidates and our clients during their first months to make sure that everything is going well and everybody remains happy in their collaboration. if not we will do our best todisarm the conflicts and re-establish a stable situation in complete neutrality"
},


]






export default function Home () {
  const discover = useRef(null)

  const gotoDiscover =() => window.scrollTo({ top: discover.current.offsetTop, behavior: "smooth" })

  const [elements, ref] = useArrayRef();
  useTextReveal(elements);

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
