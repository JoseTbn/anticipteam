import React, {useState, Fragment } from 'react';
import a from '../../assets/img/anticip-picto.svg';
import Terms from '../Modals/Terms';
import { Dialog, Transition } from '@headlessui/react'







export default function Footer() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      { name: 'Jobs', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms(Customer)', href: '#' },
      { name: 'Terms(Client)', href: '' },
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
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
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
                We are experts in ICT staffing.Find the right talents for the right job is our daily mission.
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
                <div className="md:grid md:grid-cols-2 md:gap-8">
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
                          <a href={item.href}  className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Company</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
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
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="inline-block w-full max-w-2xl h-96 overflow-y-scroll  overflow-hidden p-12 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Terms
                </Dialog.Title>
                <div className="mt-2 w-full">
                  <p className="text-sm text-black">
                  This annex governs the conditions of use of the Online Service.

1. Object

The purpose of this appendix is to define the terms of access, operation and use of the Online Service and the respective rights and obligations of the Customer and anticipate in this context.

The Customer agrees that all Users have read and make their best efforts to comply with the Terms of Use.

2. Evolution of the Online Service and modification of the Terms of Use

To improve its operation and quality, anticip continually evolves the features and functionality of the Online Service.

In this respect, anticip may unilaterally modify the Terms of Use concerning the technical aspects of the Online Service if there is no result of an increase in the price or an impairment of quality and the characteristics to which the Customer has subordinated his commitment could be included in the Terms of Use.

For other changes to the Terms of Use, anticip informs the Customer, by any means, at least 30 days before their entry into force. In the absence of any objection by the Customer within this period, the modifications will be considered as read and accepted. In case of objection or refusal of the modifications, the Customer will have to stop using the Online Service.

3. Creation and operation of the Account

3.1 Creation of the Account

To create an Account, the User clicks on "Log In" in the section dedicated to the Customer and provides the necessary information.

The User agrees to provide all the required information and guarantees that all information entered in the registration form is accurate and is not tainted with any ambiguity. Incomplete registration can not be validated and any false or inaccurate item will be the responsibility of the Customer.

The User agrees to immediately update the information on the Account in case of modification thereof.

The Customer warrants and ensures to anticip that any User has the power and ability to create the Account and use the Online Service. More specifically, the Client guarantees that any User has a mandate to act in the name and on his behalf and / or appropriate authorizations allowing him to legally bind him.

When creating the Account, the User chooses an email address that will serve as an identifier and a password that will allow him to connect.

At the end of this registration process, the User receives an email confirming the creation of the Account.

3.2 Account Completion

By connecting to the Account, the User must obligatorily fill in the information requested in the administration section (in particular, the legal information of the Customer and the billing information) and provide the documents.

Thanks to the Account, the User can (i) formulate a request for a Mission, (ii) access information on the Freelance community and (iii) if the anticip Offer he has chosen allows, add employees who will be involved in the management of the Missions through the administration section.

To manage a Mission request and / or manage an ongoing Mission, the User must go to the dedicated section.

4. Access, use and security of the Account

The Customer understands and agrees that he is responsible for the access and use of the Account by the Users. In this regard, the Customer undertakes to make every effort to inform Users of their responsibilities with respect to the Account.

Except in the event of technical failure attributable to anticip or force majeure, the User is solely responsible for the confidentiality of his login data and the Customer undertakes that each User shall implement all measures to ensure the security and the confidentiality of the connection data.

If the User has reason to believe that his login details have been lost, stolen, misappropriated or compromised in any way, or in the event of unauthorized use of his Account, the User must immediately notify to anticip.

In such a situation, the Customer authorizes anticipation to take all appropriate measures to prevent any further access to the Account.

5. Commitments of anticip

anticip to make the Online Service available to the Client and Users and to make its best efforts to ensure its accessibility and smooth operation.

As such, anticip is commited that the Online Service is accessible 24 / 24h and 7 / 7d except in case of force majeure or unpredictable and insurmountable behavior of a third party, and subject to possible breakdowns and maintenance interventions and necessary f
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
              <p className="text-base text-gray-400 xl:text-center">&copy; 2021 Anticip, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
  )
      }