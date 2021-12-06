import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import WavyBackground from "../Components/Wavybackround.js/WavyBackground";
import './Ict.css'

export default function Ict() {
  return (
    <div>
      <>
        {/* < GlobalStyle/> */}
        <Navbar />
        <div className="left">
          <h1>So why work together 👌 ?</h1>
          <p>
            ⚡🚀 Our clients We work exclusively with start-ups, scale-ups and
            middle sized company. Our clients are fast-growing and agile
            organizations that develop innovative projects (market places, IoT
            …) and provide an exciting work environment.
          </p>

<p>😀 Our retention rate is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match. 

</p>
<p>💪 Our talents are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.
</p>
<p>📈 Our screenings include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.
</p>
<p>👍 Our services are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers. 

</p>


        </div>
        <div className="right"></div>
        <WavyBackground />
      </>
    </div>
  );
}
