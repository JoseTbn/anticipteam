import React, {  forwardRef ,useRef } from "react";
// import "./Home.css";
import svg1 from "../assets/img/Mobile Testing_Flatline.svg"
import svg2 from "../assets/img/Profile analysis _Flatline.svg"
import svg5 from "../assets/img/Code Development _Flatline.svg"
import svg3 from "../assets/img/Job Interview _Flatline.svg"
import svg4 from "../assets/img/Manager _Flatline.svg"

import Card from "../Components/Card/Card";

import useArrayRef from "../useArrayrefs";
import useTextReveal from "../useTextReveal";



export default function Home () {
  const discover = useRef(null)

  const gotoDiscover =() => window.scrollTo({ top: discover.current.offsetTop, behavior: "smooth" })

  const [elements, ref] = useArrayRef();
  useTextReveal(elements);

  return (
    <div className=" w-full bg-white pb-12">
      
      <div className=" flex  w-full  ml-60 mt-10 font-semibold text-4xl tracking-tight md:text-4xl xl:text-5xl  text-skin-base" style={{left:"4rem", }}>
        <h1 className=" 
        text-center" >How we work?</h1>
      </div>




      {/* <section class="text-gray-600 body-font">
  <div class="container px-2 py-24 mx-auto">
    <div class="flex items-center lg:w-5/5 lg:h-40 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-46 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
      <img src={svg1} alt="" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">1 Social recruiting</h2>
        <p class="leading-relaxed text-base">We define your ideal candidate, match our messaging, ideate a creative approach and specify relevant channels. Then we go live, hit the media BOOSTbutton, optimize and report. No need for you to find out which media match your IT, engineering or sales recruitment goals. We’ll take care of that. Happy to!</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"> 
            </path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-5/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Social recruiting</h2>
        <p class="leading-relaxed text-base">We define your ideal candidate, match our messaging, ideate a creative approach and specify relevant channels. Then we go live, hit the media BOOST-button, optimize and report. No need for you to find out which media match your IT, engineering or sales recruitment goals. We’ll take care of that. Happy to! Moreover we can count on our our huge network of around 11.200 profiles.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"> 
            </path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-46 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
      <img src={svg1} alt="" />
      </div>
    </div>
    <div class="flex items-center lg:w-5/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-46 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white-100 text-indigo-500 flex-shrink-0">
      <img src={svg3} alt="" />
        
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">3 Screening</h2>
        <p class="leading-relaxed text-base">We check the veracity of the technical/sales skills of the candidates. We also assess their personality/motivation to be sure that they will be a vector of growth and they will be happy like fish in the water in your organisation fitting well with your culture.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"> 
            </path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section> */}



<section class="my-10  mx-auto tcc md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between md:flex space-y-12 md:space-y-0 "> 
<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg2} decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 
<div class="flex justify-center bg-skin-darkblue py-3 text-white rounded-xl w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "><span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}}>1</span> Social recruiting</h2> 
<div class="text-xl font-medium md:text-2xl lg:text-3xl"> 
<p>We define your ideal candidate, match our messaging, ideate a creative approach and specify relevant channels. Then we go live, hit the media BOOSTbutton, optimize and report. No need for you to find out which media match your IT, engineering or sales recruitment goals. We’ll take care of that. Happy to!”</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div> 
</div> 
</div> 
</section>


<section class="my-10  mx-auto  md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between smx:flex smx:flex-col-reverse   md:flex space-y-12 md:space-y-0 "> 

<div class="flex  bg-skin-darkblue text-white rounded-xl py-3  justify-center w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "> <span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}}>2</span> Screening</h2> 
<div class="text-xl  font-medium md:text-2xl lg:text-3xl"> 
<p>We check the veracity of the technical/
sales skills of the candidates. We also
assess their personality/motivation to
be sure that they will be a vector of
growth and they will be happy like fish in
the water in your organisation fitting well
with your culture.”</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div>

<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg3} decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 

</div> 
</div> 
</section>


<section class="my-10  mx-auto tcc md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between  md:flex space-y-12 md:space-y-0 "> 
<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg5} decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 
<div class="flex justify-center bg-skin-darkblue py-3 text-white rounded-xl w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "> <span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}} >3</span> Tests</h2> 
<div class="text-xl font-medium md:text-2xl lg:text-3xl"> 
<p>We make sure that the candidates have
the good skills to perform in their roles.
So we test them with tech tests (mcq,
coding tests) or sales test (gaming tests,
simulations).</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div> 
</div> 
</div> 
</section>


<section class="my-10  mx-auto  md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between  smx:flex smx:flex-col-reverse  md:flex space-y-12 md:space-y-0 "> 

<div class="flex  bg-skin-darkblue text-white rounded-xl py-3  justify-center w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "><span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}} >4</span> Contracting</h2> 
<div class="text-xl  font-medium md:text-2xl lg:text-3xl"> 
<p>Once you find your perfect match, we will
send the contract via our platform, all the
signature can be done online. Simple,
easy and fast!</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div>

<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg4} alt="" decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 

</div> 
</div> 
</section>


<section class="my-10  mx-auto tcc md:my-32   "> 
<div class="container relative mx-auto"> 
<div class="absolute md:-bottom-8 lg:-bottom-12 xl:bottom-0 right-0  mr-8 lg:flex items-center justify-center w-40 h-40 hidden"> 
<div style={{display:"block",overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}> 

</div> 
</div> 
<div class="items-center justify-between md:flex space-y-12 md:space-y-0 "> 
<div class="flex justify-center w-full md:justify-start md:w-1/2"> 
<div style={{display:'inline-block',maxWidth:'100%',overflow:'hidden',position:'relative',boxSizing:'border-box',margin:'0'}}> 
<div style={{boxSizing:'border-box',display:"block",maxWidth:'100%',}}> 
<img style={{maxWidth:'100%',display:"block",margin:'0',border:'none',padding:'0'}} alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2NCIgaGVpZ2h0PSIxNjQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/> 
</div> 
<img draggable="false" src={svg3} decoding="async" style={{position:'absolute',top:"0",left:"0",bottom:"0",right:"0",boxSizing:"border-box",padding:"0",border:"none",margin:"auto",display:"block",width:"0",height:"0",minWidth:'100%',maxWidth:'100%',minHeight:"100%",maxHeight:'100%',objectFit:'contain'}} /> 
</div> 
</div> 
<div class="flex justify-center bg-skin-darkblue py-3 text-white rounded-xl w-full md:justify-start md:w-1/2"> 
<div class="md:pl-12 md:pr-12"> 
<div class="space-y-6 text-center md:text-left"> 
<div class="space-y-4   max-w-24"> 
<h6 class="font-medium text-lg m-0 ">Reach</h6> 
<h2 class="font-semibold text-4xl m-0 tracking-tight md:text-4xl xl:text-5xl  "> <span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}} >5</span> Tests</h2> 
<div class="text-xl font-medium md:text-2xl lg:text-3xl"> 
<p>Staffing is not only about placement, we
also follow our candidates and our clients
during their first months to make sure
that everything is going well and
everybody remains happy in their
collaboration. If not we will do our best to
disarm the conflicts and re-establish a
stable situation in complete neutrality.</p> 
</div> 
</div> 
<a class="border-solid border-b-4 inline-block font-medium pb-1 ease-in-out" href="/">How it works</a> 
</div> 
</div> 
</div> 
</div> 
</div> 
</section>









    </div>
  );
}
