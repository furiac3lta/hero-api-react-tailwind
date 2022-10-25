import React from 'react'
import { useState, useEffect } from 'react'
import { allChars } from '../functions/functions'
import NavBar from './NavBar';


export default function Cards() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    allChars(setCards)
  }, [])
  return (
    <>
      <NavBar />
      <div className='pt-20'>
        <div className="flex justify-between mb-4 ">
          <h5 className="lg:ml-6 text-center text-4xl font-bold leading-none text-gray-900 dark:text-white">
            Lista de Heroes
          </h5>
        </div>
        <div className='flex flex-wrap mx-1 lg:-mx-3 text-center pl-10 lg:p-5 '>
          {cards != null ? (
            cards.map(card => (
              <div className="p-4 ">
                <div className="hover:scale-125 transition-all shadow-pink-500 w-full max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-end px-4 pt-4">
                  </div>
                  <div className="flex flex-col items-center pb-10 ">
                    <img
                      className="mb-3 w-24 h-24 rounded-full shadow-lg m-3 shadow-gray-500"
                      src={card.images.md}
                      alt={card.name}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {card.name}
                    </h5>

                    <div className="flex pr-6 pl-6 space-x-3 md:mt-6">

                      <a href={`/heroe/${card.id}`} className="bg-gray-300 hover:bg-pink-200 text-slate-900 font-bold
                       py-2 px-2 rounded inline-flex items-center">
                        <span className=''>Detalles</span>
                        <svg aria-hidden="true" className=" ml-4 mr-1 w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/*    <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-24 h-24 rounded-full"
                            src={card.images.md}
                            alt={card.name}
                          />
                        </div>
                        <div className="flex-1 min-w-1">
                          <h2 className="pt-3 text-xl font-medium text-gray-900 truncate dark:text-white">
                            {card.name}
                          </h2>
                          <p className="pb-5 pt-3 text-sm text-gray-500 truncate dark:text-gray-400">
                            {card.biography.fullName != null ? (card.biography.fullName) : ('sin nombre')}
                          </p>
                          <a href={`/heroe/${card.id}`} className="bg-gray-300 hover:bg-pink-200 text-slate-900 font-bold py-3 px-6 rounded inline-flex items-center">
                            <span className='xs:text-[12px]'>Detalles</span>
                            <svg aria-hidden="true" className=" mr-1 w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                        </div>

                      </div>
                    </li>

                  </ul>
                </div> */}
              </div>
            )
            )
          ) : (
            <h1 className='font-bold text-orange-400'> No hay personajes</h1>
          )}
        </div>

      </div>


      {/*  <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {cards != null ? (
          cards.map(card => (
            <div className='transition-all delay-400  hover:scale-110 px-1 
                md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex-4 shadow-xl shadow-pink-500/50'>
              <div className="max-w-sm pt-10">
               <img src={card.images.md}  alt="" className='lg:pl-8'/>
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-5">
                      {card.name}
                    </h5>
                    <div>
                      <a href={`/heroe/${card.id}`} className="bg-gray-300 hover:bg-pink-200 text-slate-900 font-bold py-3 px-6 rounded inline-flex items-center">
                        <span className='group-hover:text-Slate-300'>Ver mas</span>
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>

                  </div>
               
              </div>
            </div>
          )
          )
        ) : (
          'no hay personajes'
        )}
      </div> */}



    </>
  )
}
