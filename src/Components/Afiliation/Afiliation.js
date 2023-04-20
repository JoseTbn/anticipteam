
// import './Afiliation.css'
import optimy from '../../assets/optimy.svg'
import POM from '../../assets/Logo_POM_Pos.svg'
import traxeo from '../../assets/traxxeo-logo.svg'
import MediSpring from '../../assets/logo-medispring-horiz.png'
import fichier8 from '../../assets/img/Fichier-8.png'
import skipr from '../../assets/img/skipr.svg'
import cont from '../../assets/img/contaynor.png'
import compliment from '../../assets/img/compliment.svg'
import { Link } from 'react-router-dom'




export default function Afiliation() {




  return (
    <>



      <section className='section'>



        <div className="bg-white  max-w-full max-h-full py-20  ">
          <div className="  max-full mx-auto  px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-skin-base text-center  pb-20 " style={{ textDecoration: ' underline red' }} >The most innovative companies trust us </h2>

            <div className=" animate-scrollX flow-root mt-8 lg:mt-10">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">

                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img className="h-8" src={optimy} alt="optimy" />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img className="h-8" src={POM} alt="Mirage" />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-8"
                    src={skipr}
                    alt="StaticKit"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className=" filter grayscale h-8"
                    src={cont}
                    alt="StaticKit"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-8"
                    src={compliment}
                    alt="StaticKit"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-8"
                    src={traxeo}
                    alt="Traxeo"
                  />
                </div>
                <div className=" mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className=" filter grayscale h-8"
                    src={fichier8}
                    alt="Workcation"
                  />
                </div>

                <div className=" mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className=" filter grayscale h-8"
                    src={MediSpring}
                    alt="Medispring"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-texture bg-no-repeat  bg-cover bg-center  relative h-screen w-full lgx:h-full '>
          <div className="flex flex-col h-full  justify-center justify-items-center align-middle py-24 pl-8 mdx:pl-2 w-1/3 ">
            <h1 className='text-2xl  mdx:text-xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10' >Let's work togheter
            </h1>



            <div class="flex flex-col  items-center gap-20 lgx:mt-4 lg:mt-6 max-w-7xl">
              <div class="mt-3 rounded-lg sm:mt-0">
                <Link to={'/Staffing'}>
                  <button class="
                                                items-center
                                                block
                                                px-10
                                                mdx:px-4
                                                py-3.5
                                                text-base
                                                font-medium
                                                text-center text-white
                                              
                                                bg-indigo-900
                          
                          
                                                border-2 border-white
                                                shadow-md
                                                rounded-xl
                                              
                                              "> Let's start </button>
                </Link>
              </div>

            </div>



          </div>


          <svg className=' absolute inset-x-0 -bottom-1  bg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill='#FFFFFF' viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>


    </>
  )
}
