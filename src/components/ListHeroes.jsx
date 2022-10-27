import React ,{ useContext, useEffect, useState }from 'react'
import { ApiContext } from '../context/ApiProvider';
import  Heroe  from './Heroe';



export default function ListHeroes() {


  const[cards, setCards] = useState([])

  const {data, status, heroFiltered} = useContext(ApiContext)
  
  useEffect(() => {
    setCards(data)
  }, [data])

  return (
    
    <>
     
      <div className='pt-20'>
        <div className="flex justify-between mb-4 ">
          <h5 className="lg:ml-6 text-center text-4xl font-bold leading-none text-gray-900 dark:text-white">
            Lista de Heroes
          </h5>
        </div>
          {status === 'initial' ? (
             <h1 className='font-bold text-orange-400'> Loading Heroes </h1>
          ) : (
            <Heroe data = {cards}/>
          )}
       

      </div>
    </>
  )
}
