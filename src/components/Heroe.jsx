
import React from 'react'

const Heroe = ({data}) => {
  return (
    <div className='flex flex-wrap mx-1 lg:-mx-3 text-center pl-10 lg:p-5 '>
     {data.map((card) =>(
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
                 <svg aria-hidden="true" className=" ml-4 mr-1 w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               </a>
             </div>
           </div>
         </div>


       </div>

        

    ))}
   </div>

        
    )
}


export default Heroe;

