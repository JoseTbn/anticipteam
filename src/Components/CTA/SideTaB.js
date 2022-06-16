import React from 'react'
import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import a from '../../assets/img/anticip-picto.svg';
import start from '../../assets/img/started-bg.png';
import { useNavigate } from 'react-router-dom';



export default function SideTaB() {
    let navigate = useNavigate();


    return (
        <div class="md:w-4/12">
            <div class="h-full relative px-5 pt-12 text-white  bg-skin-darkblue pb-80 md:pt-32 md:max-w-md xl:max-w-lg md:px-10 xl:px-16 md:pb-56">
                <section>
                    
                    <div className="flex pb-10">   
                    <ArrowSmLeftIcon onClick={() => {
                        navigate(-1);
                    }} className=' text-white w-6 flex'>Get back</ArrowSmLeftIcon>
                    <span> get back</span>
                    </div>
                   
                    <div class="w-12 h-12 mb-6 img-object-contain">
                        <img src={a} alt="" />

                    </div>


                    <div class="mb-8 space-y-4  bg-skin-darkblue ">
                        <h3 class="u-h3">Are you a talent ?</h3>
                        <div class="u-p3">
                            <p>Anticp simplifies everything for you, notifying when nearby jobs appears etc.</p>
                        </div>
                    </div>
                    <a class="text-link text-link--white" href="/">Sign up to work with us</a>
                </section>
                <div class="pt-12 mt-12 border-t border-dashed" style={{ borderColor: " rgba(255, 255, 255, 0.2)%" }}>
                    <h4 class="text-base font-medium">Trusted by over 2,000 law firms and government agencies</h4>
                    <div class="flex mt-6 space-x-6">
                        <div class=" img-object-contain flex flex-col items-start justify-center">
                            <img src={a} alt="" />
                        </div>
                        <div class=" img-object-contain flex flex-col items-start justify-center">
                            <img src={a} alt="" />
                        </div>
                        <div class=" img-object-contain flex flex-col items-start justify-center">
                            <img src={a} alt="" />
                        </div>
                    </div>
                </div>
                <div class="hidden md:block" style={{ height: "200px" }}>

                </div>
                <div class="absolute bottom-0 left-0 w-full img-object-cover">
                    <img src={start} alt="" class="inline-block w-full h-full" />
                </div>
            </div>
        </div>
    )
}
