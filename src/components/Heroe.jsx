import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myHeroe } from '../functions/functions'
import NavBar from './NavBar'

const Heroe = () => {
    const [miheroe, setMiheroe] = useState(null)
    const params = useParams()
    useEffect(() => {
        myHeroe(params.id, setMiheroe)
    }, [])
    return (
        <>
            <NavBar />
           <div className='h-4'>
           <h1 className='pt-4 text-4xl font-bold'>Personaje</h1>
           </div>
            <div className='grid place-items-center h-screen'>
                {miheroe != null ? (
                   <div className=''>
                     <div className=' white:bg-gray-400 hover:scale-125 transition-all shadow-pink-500 shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg border'>
                        <a
                            href="#"
                            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={miheroe.images.md}
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                 {miheroe.name}
                                </h5>
                                <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className='font-bold'>Nombre: </span> {miheroe.biography.fullName}
                                </p>
                                <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className='font-bold'>Raza: </span> {miheroe.appearance.race}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-bold'>Aparicion: </span> {miheroe.biography.firstAppearance}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-bold'>Conexiones: </span> {miheroe.connections.groupAffiliation}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-bold'>Alineamiento: </span> {miheroe.biography.alignment}
                                </p>
                            </div>
                        </a>

                    </div>
                   </div>
                ) : ('no hay personaje')}

            </div>
        </>
    )
}

export default Heroe;
