// import React from 'react'
// import { useState } from 'react';
// import{ ReactMapGL , StaticMap , Marker} from 'react-map-gl';
// import mapboxgl from 'mapbox-gl';
// import {IoIosPin } from "react-icons/io";
// // const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

//    // The following is required to stop "npm build" from transpiling mapbox code.
//     // notice the exclamation point in the import.
//     // @ts-ignore
//     // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
//     mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;



// const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9qb2NvZGUiLCJhIjoiY2t3YWkxM2IyMDB4ZTJvbjJnOHQ2emY5NyJ9.44OobftZH07_bC8DH0IKHQ';

// export default function Map() {
    
              

// const [viewport, setViewport] = useState({
//     latitude: 50.8491335,
//     longitude: 4.3668357,
//     zoom: 8,
//     bearing: 0,
//     pitch: 0
//   });


    
//     return (
//         <StaticMap
//       {...viewport}
//       width="40vw"
//       height="50vh"
//       zoom='18.2'
//       mapStyle="mapbox://styles/jojocode/ckwgeytn55v8p14mpxqee11wi"
//       onViewportChange={setViewport}
//       mapboxApiAccessToken={MAPBOX_TOKEN}>
//        <Marker latitude={50.8491335} longitude={4.3668357} offsetLeft={-75} offsetTop={-10}>
//     <div> <span style={{color:"#78553a"}}>Anticip</span> <IoIosPin color="#78553a"/></div>
//   </Marker>
//     </StaticMap>
   
//     )
// }
