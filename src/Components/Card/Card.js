




export default function Card({ svg, title, num, p }) {


  return (
    <>
      <div className="relative  pt-16 pb-32 overflow-hidden  lgx:w-5/6 lgx:mx-auto" >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
        <div className="relative">
          <div data-aos="zoom-in-up" data-aos-duration="1500" className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 bg-skin-darkblue rounded-lg max-w-xl mx-auto mdx:px-8 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div className='px-4 lgx:p-5  ' >
                <div className="mt-6">
                  <h2 className="text-3xl mdx:text-2xl font-extrabold tracking-tight text-white">
                    <span style={{
                      background: 'var(--white)',
                      borderRadius: ' 50%',
                      mozBorderRadius: '50',
                      webkitBorderRadius: ' 50%',
                      color: 'var(--red)',
                      display: ' inline-block',
                      fontWweight: ' bold',
                      lineHeight: '50px',
                      marginRight: ' 5px',
                      textAlign: 'center',
                      width: '50px'
                    }}  >{num}</span> {title}
                  </h2>
                  <p className="mt-4 text-lg mdx:text-base  text-white">
                    {p}
                  </p>
                </div>
              </div>

            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 mdx:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-11/12 mdx:w-2/3 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full  lg:max-w-none"
                  src={svg}
                  alt="representatives images"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
