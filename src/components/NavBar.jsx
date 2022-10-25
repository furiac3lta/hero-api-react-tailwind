import React from 'react'
import Deadpool from '../assets/icons/Deadpool-Logo.svg';
<script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>

export default function NavBar() {
  return (

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" className="flex items-center">
      <img
        src={Deadpool} 
        className="mr-3 h-6 sm:h-9"
        alt="Deadpool" 
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        SuperHeroApi
      </span>
    </a>
    <div className="flex md:order-2">
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="hidden relative md:block">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
          placeholder="Search a hero..."
        />
      </div>
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      id="navbar-search"
    >
      <div className="relative mt-3 md:hidden">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
          placeholder="Search..."
        />
      </div>
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a
            href="/"
            className="block py-2 pr-4 pl-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
  /*   <div>
      <Navbar
        fluid={true}
        rounded={true}
        className='items-center'
      >
        <Navbar.Brand href="">
          <img className='h-6 pr-3' src={Deadpool} alt="Deadpool" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SuperHeroApi
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="text-#18181b hover:text-gray-400 visited:text-pink-600"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/"
            className="text-#18181b hover:text-gray-400 visited:text-pink-600">
            Details
          </Navbar.Link>
          <Navbar.Link href="/"
            className="text-#18181b hover:text-gray-400 visited:text-pink-600">
            Contact
          </Navbar.Link>
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className=" border-pink-600 border-2 border-gray-300 bg-white h-10 pl-2 pr-8
               rounded-lg text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500
               disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
               invalid:border-pink-500 invalid:text-pink-600
               focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </Navbar.Collapse>
        <Navbar.Brand href="https://flowbite.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"

          >
            <path
              d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025.337.025.662.075-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613 1.15-.612 1.875-1.637.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212 1.75-1.213 2.55-3.163-.5.125-1 .2-.5.075-1 .075-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"
            />
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            DarkMode
          </span>
        </Navbar.Brand>
      </Navbar>
    </div> */
  )
}
