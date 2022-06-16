import React from 'react'
import {  Link, useNavigate } from "react-router-dom";


export default function CardFormEnd() {
  let navigate = useNavigate();
  
  return (
    <> 
    <div>Done</div>
    <button
              onClick={() => {
                navigate("/Login");
              }}
              className=" mdx:hidden inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium  hover:scale-110  transition: ;
                      duration-500
                      ease-in-out
                      transform text-white hover:bg-opacity-75 cursor-pointer"
            >
              sign in  
             
            </button>
            </>
  )
}
