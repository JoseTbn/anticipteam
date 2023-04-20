
import React, {useState, Fragment } from 'react';
import a from '../../assets/img/anticip-picto.svg';
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';







export default function Footer() {

 
  let [isOpen, setIsOpen] = useState(false)
  
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  
  const footerNavigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '/Pricing' },

    ],
    company: [
      { name: 'About', href: '/About' },
      // { name: 'Jobs', href: '/' },
      // { name: 'Partners', href: '/' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms (Customer)', href: '#' },
      { name: 'Terms (Client)', href: '' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
     
      {
        name: 'Twitter',
        href: 'https://twitter.com/anticip_co',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/company/anticip1/?viewAsMember=true',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        ),
      },
      
    
    ],
  }


  return (


<footer className="bg-white " aria-labelledby="footer-heading">
         
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img
                  className="h-10"
                  src={a}
                  alt="Company name"
                />
                <p className="text-gray-500 text-base">
                We are experts in ICT staffing. Find the right talents for the right job is our daily mission.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                {/* <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Solutions</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Support</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href}  className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <div className="md:grid md:grid-cols-3 md:gap-8">
                <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Support</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href}  className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Company</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Legal</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a  onClick={openModal} className="text-base cursor-pointer text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-scroll"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-8xl  h-1/3 overflow-y-auto  overflow-hidden p-12 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg  font-bold leading-6 text-gray-900"
                >
                  Terms
                </Dialog.Title>
                <div className="mt-2 w-full">
                  <p className="text-sm text-black">
                  This annex governs the conditions of use of the Online Service.

<p className='  text-2xl' >1. Object</p>

<p>The purpose of this appendix is to define the terms of access, operation and use of the Online Service and the respective rights and obligations of the Customer and anticipate in this context.</p>

<p>The Customer agrees that all Users have read and make their best efforts to comply with the Terms of Use.</p>

<p className='  text-2xl'>2. Evolution of the Online Service and modification of the Terms of Use</p>

<p>To improve its operation and quality, anticip continually evolves the features and functionality of the Online Service.</p>

<p>
  In this respect, anticip may unilaterally modify the Terms of Use concerning the technical aspects of the Online Service if there is no result of an increase in the price or an impairment of quality and the characteristics to which the Customer has subordinated his commitment could be included in the Terms of Use.
  
  For other changes to the Terms of Use, anticip informs the Customer, by any means, at least 30 days before their entry into force. In the absence of any objection by the Customer within this period, the modifications will be considered as read and accepted. In case of objection or refusal of the modifications, the Customer will have to stop using the Online Service.
</p>

<p className='  text-2xl'> 3. Creation and operation of the Account</p>

<p className='  text-xl'>3.1 Creation of the Account</p>

<p>To create an Account, the User clicks on "Log In" in the section dedicated to the Customer and provides the necessary information.</p>

<p>
  The User agrees to provide all the required information and guarantees that all information entered in the registration form is accurate and is not tainted with any ambiguity. Incomplete registration can not be validated and any false or inaccurate item will be the responsibility of the Customer.
  
  The User agrees to immediately update the information on the Account in case of modification thereof.
</p>

<p>
  The Customer warrants and ensures to anticip that any User has the power and ability to create the Account and use the Online Service. More specifically, the Client guarantees that any User has a mandate to act in the name and on his behalf and / or appropriate authorizations allowing him to legally bind him.
  
  When creating the Account, the User chooses an email address that will serve as an identifier and a password that will allow him to connect.
</p>
<p>
  
  At the end of this registration process, the User receives an email confirming the creation of the Account.
</p>

<p className='  text-xl'>3.2 Account Completion</p>

<p>
  By connecting to the Account, the User must obligatorily fill in the information requested in the administration section (in particular, the legal information of the Customer and the billing information) and provide the documents.
  
  Thanks to the Account, the User can (i) formulate a request for a Mission, (ii) access information on the Freelance community and (iii) if the anticip Offer he has chosen allows, add employees who will be involved in the management of the Missions through the administration section.
  
  To manage a Mission request and / or manage an ongoing Mission, the User must go to the dedicated section.
</p>

<p className='  text-2xl' >4. Access, use and security of the Account</p>

<p>
  The Customer understands and agrees that he is responsible for the access and use of the Account by the Users. In this regard, the Customer undertakes to make every effort to inform Users of their responsibilities with respect to the Account.
  
  Except in the event of technical failure attributable to anticip or force majeure, the User is solely responsible for the confidentiality of his login data and the Customer undertakes that each User shall implement all measures to ensure the security and the confidentiality of the connection data.
  
  If the User has reason to believe that his login details have been lost, stolen, misappropriated or compromised in any way, or in the event of unauthorized use of his Account, the User must immediately notify to anticip.
  
  In such a situation, the Customer authorizes anticipation to take all appropriate measures to prevent any further access to the Account.
</p>

<p className='  text-2xl' >5. Commitments of anticip</p>

<p>anticip to make the Online Service available to the Client and Users and to make its best efforts to ensure its accessibility and smooth operation.</p>

<p>As such, anticip is commited that the Online Service is accessible 24 / 24h and 7 / 7d except in case of force majeure or unpredictable and insurmountable behavior of a third party, and subject to possible breakdowns and maintenance interventions and necessary f</p>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Anticip, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
  )
      }