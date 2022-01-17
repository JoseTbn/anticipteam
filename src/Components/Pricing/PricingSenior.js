import { useState,useEffect } from 'react'
import './Princing.css'
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import Footer from '../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { incentives } from '../SubHero/Subhero'





const plans = [
  {
    title: 'Sourcing package',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 2550,
    priceYearly: '2550',
    mainFeatures: [
      { id: 1, value: 'Personal point of contact' },
      { id: 2, value: 'Company intake by video call' },
      { id: 3, value: 'Hiring advice & support' },
      { id: 4, value: 'Creation of an account with private access' }
    ],
  },
  {
    title: 'Staffing package',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 5950,
    priceYearly: 5950,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Company intake by video call' },
      { id: 3, value: 'Hiring advice & support' },
      { id: 4, value: 'Creation of an account with private access' },
      { id: 5, value: "Kick off meeting to evaluate your needs and culture" },
      { id: 6, value: 'Help on the job description redaction' },
    ],
  },
  {
    title: 'Staffing package +',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 9350,
    priceYearly: 9350,
    mainFeatures: [
      { id: 1, value: 'ALL' },


    ],
  },
]

const plansSenior = [
  {
    title: 'Sourcing package',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: '9.350',
    priceYearly: '9.350',
    mainFeatures: [
      { id: 1, value: 'Personal point of contact' },
      { id: 2, value: 'Company intake by video call' },
      { id: 3, value: 'Hiring advice & support' },
      { id: 4, value: 'Creation of an account with private access' }
    ],
  },
  {
    title: 'Staffing package',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: '12.290',
    priceYearly: '12.290',
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Company intake by video call' },
      { id: 3, value: 'Hiring advice & support' },
      { id: 4, value: 'Creation of an account with private access' },
      { id: 5, value: "Kick off meeting to evaluate your needs and culture" },
      { id: 6, value: 'Help on the job description redaction' },
    ],
  },
  {
    title: 'Staffing package +',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: '18.855',
    priceYearly: '18.850',
    mainFeatures: [
      { id: 1, value: 'ALL' },


    ],
  },
]
const features = [
  {
    title: 'Branding campaign',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Search campaigns in our network ',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Paid search campaigns on social networks',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: false },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Screening and assessment of candidates',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Interviews planing and follow up',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Creation and review of working contacts',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Follow up during the first months of their jobs',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
]



function classNames(...classes) {



  return classes.filter(Boolean).join(' ')
}

export default function PricingSenior() {

  // const [isToggled, setisToggled] = useState(true)
  // const [isToggled2, setisToggled2] = useState(false)
  // const [isToggled3, setisToggled3] = useState(false)
  // const [select, setSelect] = useState(false)
  // const [data, setdata] = useState([]);




  // useEffect(() => {
  //   switch (select) {
      
  //     case "junior":
  //       setdata(plans);
  //       break;
  //     case "senior":
  //       setdata(plansSenior);
  //       break;
  //     case "medior":
  //       setdata(plansMedior);
  //       break;
      
  //     default:
  //       setdata(plans);
  //   }
  // }, [select]);


  return (
    <div className="bg-gray-50">
      <header className="bg-skin-fill">

      </header>

      <main>
        {/* Pricing section */}
        <div>
          <div className="relative bg-skin-fill">
            {/* Overlapping background */}
            <div aria-hidden="true" className="hidden absolute bbg-skin-fill w-full h-6 bottom-0 lg:block" />

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-skin-base sm:text-6xl">
                <span className="block lg:inline bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent ">Simple pricing,high quality </span>
                {/* <span className="block lg:inline">high quality </span> */}
              </h1>
              <p className="mt-4 text-xl text-skin-base">
                Everything you need, nothing you don't. Pick a plan that best suits your business.
              </p>
            </div>

            <h2 className="sr-only">Plans</h2>

            {/* Toggle */}
            <div className="relative mt-12 flex justify-center sm:mt-16">
              <div className="bg-skin-darkblue p-0.5 rounded-lg flex">
               
              <Link to={'/Pricing'}>
                    
                    <button
                  
                      type="button"
                      className="relative   py-2 px-6 border-skin-darkblue rounded-md shadow-sm text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                    >
                      Junior
                    </button>
                </Link>

             
                <Link to={'/Pricing/Medior'}  >
                  <button

                    type="button"
                    className="  ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                  >
                    Medior
                  </button>
                </Link>
                 

                <Link to={'/Pricing/Senior'}  >
              
                  <button
                    type="button"
                    className=" bg-white ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-skin-darkblue whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                  >
                    Senior

                  </button>
                </Link>
                  
              


                
              </div>
            </div>

            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-skin-darkblue rounded-tl-lg rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plansSenior.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured ? 'bg-white ring-2 ring-skin-darkblue shadow-md' : 'bg-skin-darkblue lg:bg-transparent',
                      'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-sm font-semibold uppercase tracking-wide'
                        )}
                      >
                        {plan.title}
                      </h3>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? 'text-indigo-600' : 'text-white',
                              'text-4xl font-extrabold tracking-tight'
                            )}
                          >
                            {plan.priceMonthly}€
                          </p>
                          <div className="ml-4">
                            <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                            {/* € */}
                            
                            </p>
                            <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                              
                              Billed yearly ({plan.priceYearly}€)
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            plan.featured
                              ? 'bg-indigo-600 text-white hover:bg-skin-darkblue'
                              : 'bg-white text-indigo-600 hover:bg-indigo-50',
                            'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                          )}
                        >
                          Get the  {plan.title}
                        </a>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      role="list"
                      className={classNames(
                        plan.featured
                          ? 'border-gray-200 divide-gray-200'
                          : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                        'mt-7 border-t divide-y lg:border-t-0'
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature.id} className="py-3 flex items-center">
                          <CheckIcon
                            className={classNames(
                              plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                              'w-5 h-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? 'text-gray-600' : 'text-white',
                              'ml-4 text-sm font-medium'
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
               
               
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              {plans.map((plan, planIndex) => (
                <div key={plan.title} className="border-t border-gray-200">
                  <div
                    className={classNames(
                      plan.featured ? 'border-indigo-600' : 'border-transparent',
                      '-mt-px pt-6 border-t-2 sm:w-1/2'
                    )}
                  >
                    <h3
                      className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                    >
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {features.map((feature) => (
                          <div
                            key={feature.title}
                            className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                              {typeof feature.tiers[planIndex].value === 'string' ? (
                                <span
                                  className={classNames(
                                    feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {feature.tiers[planIndex].value}
                                </span>
                              ) : (
                                <>
                                  {feature.tiers[planIndex].value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>

                  {/* <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4> */}

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >

                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
                </div>
                {plans.map((plan, index) => (
                  <div
                    key={plan.title}
                    aria-hidden="true"
                    className={classNames(index === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
                  >
                    <div
                      className={classNames(
                        plan.featured ? 'border-indigo-600' : 'border-transparent',
                        'py-6 border-t-2'
                      )}
                    >
                      <p
                        className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                      >
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Business feature comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {features.map((feature) => (
                      <tr key={feature.title}>
                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                          {feature.title}
                        </th>
                        {feature.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                              'relative w-1/4 py-0 text-center'
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {typeof tier.value === 'string' ? (
                                <span
                                  className={classNames(
                                    tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {tier.value}
                                </span>
                              ) : (
                                <>
                                  {tier.value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                </>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>

              {/* <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3> */}

              <div className="mt-6 relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>


                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}