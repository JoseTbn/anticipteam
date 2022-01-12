import React from 'react'



import Startup from '../../assets/img/Startup_Flatline.svg'



import { Fragment } from 'react'
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
   


const solutions = [
    {
      name: 'Our clients',
      description: 'We work exclusively with start-ups, scale-ups and middle sized company. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.',
      href: '#',
      icon: InboxIcon,
    },
    {
      name: 'Our retention rate',
      description: 'is excellent (96%) probably because the talents we placed are happy in their jobs. Probably because we take great care in assessing the culture and needs of our clients and the soft skills of our candidates to ensure that there is a lasting match.',
      href: '#',
      icon: AnnotationIcon,
    },
    { name: 'Our talents ',
     description: "are specialized in development/tech/ICT to support our clients growth. We work with freelance or employee permanent profiles.",
      href: '#', 
      icon: ChatAlt2Icon },
    {
      name: ' Our screenings ',
      description: "include review and assess the technical or commercial skills of our candidates. This means that our screening process remain professional. This is the best way to make sure that our talents will find the right fit.",
      href: '#',
      icon: QuestionMarkCircleIcon,
    },
    {
        name:'Our services',
        description: 'are complete and the human touch is key. We take care of screening, testing, interviewing, contracting and monitoring your job during the first months. We act more as a partner than as body shoppers.',
        href:'#',
        icon:  DocumentReportIcon
        ,
    },
    {
        name:'Fundraising',
        description: 'Raise capital seamlessly by generating documents, managing equity, and passing dilligence.',
        href:'#',
        icon:  DocumentReportIcon,

    }
  ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function stdSection(props) {
    return (
        <>

<div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-900">
                      <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Our clients
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    We work exclusively with start-ups, scale-ups and middle sized company. Our clients are fast-growing and agile organizations that develop innovative projects (market places, IoT …) and provide an exciting work environment.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-blue-900 to-gray-900 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-red-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Startup}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

        </>
    )
}
