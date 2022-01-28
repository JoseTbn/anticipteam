import {useEffect} from 'react'

import { Link } from "react-router-dom";

import Navbar from '../Components/Navbar/Navbar'


import Skill1 from '../assets/img/Skills 1.svg'
import Startup from '../assets/img/Startup_Flatline.svg'
import Analytics from '../assets/img/Analytics team_Flatline.svg'
import Quality from '../assets/img/Quality Check_Flatline.svg'
import Web from '../assets/img/Web Developer_Flatline.svg'
import services from '../assets/img/Brainstorming session _Flatline.svg'
import Fund from '../assets/img/Marketing_Flatline.svg'

import Footer from '../Components/Footer/Footer';


import AOS from "aos";
import "aos/dist/aos.css";

import { Fragment } from 'react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  DocumentReportIcon,
  InboxIcon,
  EmojiHappyIcon,
  QuestionMarkCircleIcon,
  ThumbUpIcon,
  LightningBoltIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/outline'


const solutions = [
  {
    name: 'Our clients',
    description: 'We work exclusively with start-ups, scale-ups and middle sized company. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.',
    
    icon: InboxIcon,
  },
  {
    name: 'Our retention rate',
    description: 'is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match.',
    
    icon: AnnotationIcon,
  },
  { name: 'Our talents ',
   description: "are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.",
     
    icon: ChatAlt2Icon },
  {
    name: ' Our screenings ',
    description: "include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.",
    
    icon: QuestionMarkCircleIcon,
  },
  {
      name:'Our services',
      description: 'are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers.',
     
      icon:  DocumentReportIcon
      ,
  },
  {
      name:'Fundraising',
      description: 'Raise capital seamlessly by generating documents, managing equity, and passing dilligence.',
     
      icon:  DocumentReportIcon,

  }
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  Staffing() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  
  
  
  return (
      <> 
    <div className="bg-white">
   <Navbar/>
 
      <main className=' mdx:pt-20 pt-40 lg:pt-60'>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto mdx:w-11/12 sm:px-6 lg:px-8">
            <div className="relative shadow-xl xs:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r  from-blue-300 to-blue-900 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Working with</span>
                  <span className="block text-indigo-200">with us</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Our team is always reactive. We grow with you. We achieve goals togheter.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0  sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <Link to={'/Login'}
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div  data-aos="fade-left" data-aos-duration="1000" className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      < LightningBoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                      Our clients
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    We work exclusively with start-ups, scale-ups and agile companies. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.
                    </p>
                    
                  </div>
                </div>
                
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 lg:-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full  lgx:w-3/5  lgx:mx-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Startup}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div  data-aos="fade-right" data-aos-duration="1200" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      < EmojiHappyIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                    Our retention rate 
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 lg:-ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lgx:w-3/5 rounded-xl shadow-xl ring-1 lgx:mx-auto ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Analytics}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div className="relative mt-24">
            <div  data-aos="fade-left" data-aos-duration="1400" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                      Our clients
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.
                    </p>
                    
                  </div>
                </div>
                
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 lg:-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lgx:w-3/5 rounded-xl shadow-xl ring-1 lgx:mx-auto ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Web}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div  data-aos="fade-right" data-aos-duration="1600" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      < PresentationChartLineIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                    Our screenings
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 lg:-ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lgx:w-3/5 rounded-xl shadow-xl ring-1 lgx:mx-auto ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Quality}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-24">
            <div  data-aos="fade-left" data-aos-duration="1800" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      <ThumbUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                    Our services
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers.
                    </p>
                    
                  </div>
                </div>
                
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 lg:-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lgx:w-3/5 rounded-xl shadow-xl ring-1 lgx:mx-auto ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={services}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div  data-aos="fade-right" data-aos-duration="1900" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r  bg-skin-darkblue">
                      <PresentationChartLineIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight  text-skin-base">
                    Fundraising
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Raise capital seamlessly by generating documents, managing equity, and passing dilligence.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 lg:-ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lgx:w-3/5 rounded-xl shadow-xl ring-1 lgx:mx-auto ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Fund}
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Gradient Feature Section */}
      

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight  text-skin-base sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block bg-gradient-to-r  bg-skin-darkblue bg-clip-text text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            
              <Link
                to={'/Login'}
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
    </>
  )
}