

import { Link } from 'react-router-dom';


import a from '../../assets/img/anticip-picto.svg';


export default function Error() {
   
   
   
   
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full pt-60 pb-12 flex flex-col ">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <Link to={"/"} className="inline-flex">
                <span className="sr-only">Anticip</span>
                <img
                  className="h-12 w-auto"
                  src={a}
                  alt='anticip logo'
                />
              </Link>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold  text-skin-base uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-skin-base tracking-tight sm:text-5xl">Ready soon.</h1>
                <p className="mt-2 text-base text-gray-500">Sorry, the page you’re looking for is curently under maintenance.</p>
                <div className="mt-6 flex flex-col">
                  <Link to={'/about'}   className="text-base font-medium  text-skin-base hover:text-blue-800">
                  Reach us via our form <span aria-hidden="true"> &rarr;</span>
                  </Link>
                  <Link to={'/'} href="#" className="text-base font-medium  text-skin-base hover:text-blue-800">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        
        </div>
      </>
    )
  }
  