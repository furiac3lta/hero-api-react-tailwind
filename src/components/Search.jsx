import React, { useState, useContext } from 'react'
import { ApiContext } from '../context/ApiProvider';
import Heroe from './Heroe';
const Search = () => {

    const { data } = useContext(ApiContext)

    const [query, setQuery] = useState("")

    const search = () => {

        const results = data.filter((item) => item.name.toLowerCase().includes(query))
        return results
    }

    return (
        <>
          <div className='h-4'>
            <div className='grid place-items-center pt-10'>
         
                <form onSubmit={search()}>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        placeholder="find you hero"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
                </div>
            {(query != '') ? <Heroe data={search()} /> : <div></div>}
            
            </div>
           
        </>
    )
}

export default Search