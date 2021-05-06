import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext } from 'react';
import SingleProductContext from '../../store/single-product';

const Nav = () => {
  const [openNav, setOpenNav] = useState(0);
  const search = useContext(SingleProductContext);
  const searchHandle = (event) => {
    search.setSearch(()=>{return(event.target.value)})
    console.log(event.target.value)
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }
    return (
      <div className="fixed top-0 left-0 z-30 w-full bg-gray-800 moldenav ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <Image
                    className="w-auto h-8 cursor-pointer sm:h-10"
                    src="/img/moldecor-logo-white.png"
                    width="240"
                    height="61"
                  />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              {/* <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button> */}
            </div>
            <div className='search'>
              <input onChange={searchHandle} type='text' />
            </div>
            {/* <nav className="hidden space-x-10 md:flex">
              <Link href="/">
                <a className="text-base font-medium text-white hover:text-gray-900">
                  Inicio
                </a>
              </Link>

              <Link href="/">
                <a className="text-base font-medium text-white hover:text-gray-900">
                  Servicios
                </a>
              </Link>

              <Link href="/projects">
                <a className="text-base font-medium text-white hover:text-gray-900">
                  Portafolio
                </a>
              </Link>

              <Link href="/">
                <a className="text-base font-medium text-white hover:text-gray-900">
                  Blog
                </a>
              </Link>
            </nav> */}
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <Link href="/contacto">
                <a className="px-5 py-3 text-base font-medium text-gray-500 border-2 border-gray-500 whitespace-nowrap hover:text-gray-900">
                  Contacto
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="absolute inset-x-0 top-0 z-50 transition origin-top-right transform mobile-nav md:hidden">
          <div className="bg-gray-800 divide-y-2 rounded-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a className='flex items-center'>
                      <Image
                        className="w-auto h-8 cursor-pointer sm:h-10"
                        src="/img/moldecor-logo-white.png"
                        width="240"
                        height="61"
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setOpenNav(0)}
                    type="button"
                    className={`${openNav == 0 ? 'hidden' : ''} inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button
                  onClick={() => setOpenNav(1)}
                    type="button"
                    className={` ${openNav == 1 ? 'hidden' : ''} inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open menu</span>

                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`${openNav == 1 ? '' : 'hidden'} mt-6`}>
                <nav className="grid gap-y-8">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Analytics
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Engagement
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Security
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Integrations
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Nav