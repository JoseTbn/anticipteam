import { useState } from "react"
import CardFormDebut from "../CTA/CardFormDebut"
import CardFormEnd from "../CTA/CardFormEnd"
import CardFormIntro from "../CTA/CardFormIntro"
import SideTaB from "../CTA/SideTaB"
import Skill from "../CTA/Skill"
import Indicator from "../indicator/Indicator"




export default function MultistepForm2() {
 
// const [formeIndex, setformeIndex] = useState(1)
// const [allFormData, setAllFormData] = useState({
//     status:'',
//   name:'',
//   lastname:'',
//   email:'',
//   number: '',
//     skills: [],
//     Exp:'',
//     prefs:{ }
// })
 
// const modifyIndex =( index, data)  => {
//  setformeIndex(index)

//  if (data) { 


//   const newData = {...allFormData};
// const firstPropNewData = Object.keys(data)[0];
// const secondPropNewData = Object.keys(data)[1];
// const thirdPropNewData = Object.keys(data)[2];
// const forthPropNewData = Object.keys(data)[3];

// newData[firstPropNewData ] = data[firstPropNewData]
// newData[secondPropNewData ] = data[secondPropNewData]
// newData[thirdPropNewData ] = data[thirdPropNewData]
// newData[forthPropNewData ] = data[forthPropNewData]
// setAllFormData(newData)
// }
// }


// console.log(allFormData);

 
    return (
<> 
<section class="md:flex md:flex-row-reverse md:min-h-screen"> 
    <CardFormDebut/>

<SideTaB/>

 </section>
</>
  )
}
