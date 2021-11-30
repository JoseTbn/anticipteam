import React from 'react'
import './Subhero.css'
import hometext from  '../../assets/hometext.png'
import VerticalLineWrapper from '../VerticalLine/VerticalLineWrapper'
import VerticalLineContent from '../VerticalLine/VerticallineContent'



export default function Subhero() {
    return (
        <>
        <div className="subhero_conatainer">
            <div className='subhero_conatainer_content'> 
           <div className="subhero_title"> 
           <h1>
                So,why to choose anticip?
            </h1> 
            </div>
           <div className="block">  
          <blockquote >
           <p> The first reason is probably because we’re external to your organisation and that we can </p>
           <p> detect a good or a bad profile and understand your needs and culture to optimize your </p>
           <p> chance to do a profitable match in the long term.</p>
            </blockquote> 
            <h3>Also beacause:</h3>
            </div>
            </div>
            <div className="subimg">
                <div className="imgarea"> 
                <VerticalLineWrapper>
      <VerticalLineContent position="right">
			<h3 style={{display:'inline' , whiteSpace:'nowrap'}}> We work exclusively with startups/scale-ups (with more than 20 happy customers in Belgium, only for the this year).</h3> 
      </VerticalLineContent>
      <VerticalLineContent position="right">
			<h3 style={{display:'inline' , whiteSpace:'nowrap'}} >We help them to find the perfect match with growth vector profiles in Tech, Digital or Sales, themes that we master <br />
(capacity to screen/test these profiles with gaming tests/situations).</h3> 
      </VerticalLineContent>
      <VerticalLineContent position="right">
			<h3 style={{display:'inline' , whiteSpace:'nowrap'}} >We work in a collaborative mode (simplified sharing of profiles, contracts, advice on HR issues, ad follow-up of profiles in
function).</h3> 
      </VerticalLineContent>
      <VerticalLineContent position="right">
        <h3 style={{display:'inline' , whiteSpace:'nowrap'}} >Our remuneration is a flat fee (no percentage that increases your commission depending on the seniority of the profile) so
no bad surprises.</h3>  
      </VerticalLineContent>
      <VerticalLineContent>
      <h3 style={{display:'inline' , whiteSpace:'nowrap'}} >We offer a 3 month guarantee on any hired profile but no worries, our retention rate is excellent (96%).</h3> 
			</VerticalLineContent>
    </VerticalLineWrapper>
                </div>
                <div className="subsvg">

                </div>
            </div>

          </div>
          </>
    )
}
