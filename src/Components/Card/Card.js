
import { useNavigate } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Card({svg,title,num,p}) {
  let navigate = useNavigate();
  
  return (
      <>
       <div className="relative  pt-16 pb-32 overflow-hidden  lgx:w-5/6 lgx:mx-auto" >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
          <div className="relative">
            <div data-aos="zoom-in-up" data-aos-duration="1500" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 bg-skin-darkblue rounded-lg max-w-xl mx-auto mdx:w-3/4 mdx:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div className='px-4 lgx:p-5  ' >
                  {/* <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-500">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div> */}
                  <div className="mt-6">
                    <h2 className="text-3xl mdx:text-2xl font-extrabold tracking-tight text-white">
                     <span style={{ background: 'var(--white)',
    borderRadius:' 50%',
    mozBorderRadius: '50',
    webkitBorderRadius:' 50%',
    color: 'var(--red)',
    display:' inline-block',
    fontWweight:' bold',
    lineHeight: '50px',
    marginRight:' 5px',
    textAlign: 'center',
    width: '50px'}}  >{num}</span> {title}
                    </h2>
                    <p className="mt-4 text-lg mdx:text-base  text-white">
                    {p}
                    </p>
                    {/* <div className="mt-6">
                      <a 
                      onClick={() => {
                        navigate("/Staffing");
                      }}
                        href="Staffing"
                        className="inline-flex bg-indigo-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-red-700"
                      >
                        Get started
                      </a>
                    </div> */}
                  </div>
                </div>
                
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 mdx:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-11/12 mdx:w-2/3 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={svg}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </>
    )
}
