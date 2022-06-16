import { useState } from "react"
import CardFormDebut from "../CTA/CardFormDebut"
import CardFormEnd from "../CTA/CardFormEnd"
import CardFormIntro from "../CTA/CardFormIntro"
import IntroForm from "../CTA/introForm"
import SideTaB from "../CTA/SideTaB"
import Skill from "../CTA/Skill"
import Indicator from "../indicator/Indicator"




export default function MultistepForm() {
 
const [formeIndex, setformeIndex] = useState(1)
const [allFormData, setAllFormData] = useState({
    status:'',
  name:'',
  lastname:'',
  email:'',
  number: '',
    skills: [],
    Exp:'',
    prefs:{ }
})
 
const modifyIndex =( index, data)  => {
 setformeIndex(index)

 if (data) { 


  const newData = {...allFormData};
const firstPropNewData = Object.keys(data)[0];
const secondPropNewData = Object.keys(data)[1];
const thirdPropNewData = Object.keys(data)[2];
const forthPropNewData = Object.keys(data)[3];

newData[firstPropNewData ] = data[firstPropNewData]
newData[secondPropNewData ] = data[secondPropNewData]
newData[thirdPropNewData ] = data[thirdPropNewData]
newData[forthPropNewData ] = data[forthPropNewData]
setAllFormData(newData)
}
}


console.log(allFormData);

const elements = [
  <CardFormIntro modifyIndex={modifyIndex} />,
  <CardFormDebut modifyIndex={modifyIndex} />,
  <Skill modifyIndex={modifyIndex} />,
  <CardFormEnd modifyIndex={modifyIndex} />,
 
]    
 
    return (
<> 
<section class="md:flex md:flex-row-reverse md:min-h-screen"> 
<div class="md:w-8/12"> 
    <div class="w-full max-w-xl px-5 mx-auto mb-12 lg:px-0 md:mb-32"> 
    <div> 
    
    <div> 
<Indicator formeIndex={formeIndex}/>
<IntroForm/>

{elements.map((item, index) => {
                if((index + 1) === formeIndex){
                    return elements[index]
                }
            })}
            

{/* {
  formeIndex === 1 ? <CardFormIntro modifyIndex={modifyIndex}/> : 
  formeIndex === 2 ? <CardFormDebut modifyIndex={modifyIndex}/>: 
  formeIndex === 3 ? <Skill modifyIndex={modifyIndex}/> : ""
  } */}
</div>
</div>
</div>
</div>
<SideTaB/>

 </section>
</>
  )
}
