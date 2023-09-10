"use client"
import React, { useEffect, useState } from 'react'
import {FaCompressArrowsAlt} from "react-icons/fa"
import Link from 'next/link'
import { FaMoneyBillAlt, FaClock } from "react-icons/fa"
import { useContextGlobal } from '@/context/GlobalContext'

import { getAllServices } from '@/firebase/firebase'


export default function servicesPage() {

    const {currentUser, allServices, setAllServices} = useContextGlobal()
    const [preload, setPreload] = useState(false)
    const [exp, setExp] = useState(true)
    console.log(allServices)

    useEffect( () => {
        async function data() {
            const res = await getAllServices(currentUser.uid)
            setAllServices(res)
            setPreload(true)
        }
        data()
    }, [currentUser])



    function handleAdd(e) {
        setExp(!exp)
    }


    const handleDelete = (e, index) => {
        const copyAllServices = [...allServices]
        copyAllServices.splice(index, 1)
        setAllServices(copyAllServices)
    }

    return (
            <section>
            {
                !preload
                ?

                <div className='flex flex-col mt-10'>
                    <div className="border rounded-md max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>
                    <div className="border rounded-md max-w-sm w-full mx-auto mt-2">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>
                    <div className="border rounded-md max-w-sm w-full mx-auto mt-2">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>

                </div>
                
                :
                <div>

                    {
                        allServices.length > 0 
                        ?
                        <div>
                        <h1 className='mt-10 mb-6 px-8 text-center text-xl font-semibold text-one-500'>Estos son todos tus servicios creados</h1>
                        
                        <div>
                            {
                                allServices.map((item, index) => (
                                <div key={index}>
                                    {
                                    <div className='flex justify-center px-6'>
                                        <div className='flex flex-col justify-center p-4 mb-4 border rounded-lg sm:flex-row'>
                                        <div className='p-2 boder-r-0 sm:border-r-2'>
                                            <p className='h-auto break-words w-52'>{item.service.name}</p>
                                        </div>
                                        <div className='flex justify-center p-2 w-24 items-center boder-r-0 sm:border-r-2'>
                                            <FaMoneyBillAlt className='text-two-500 mr-2'/>
                                            <h2>{`${item.service.price} $`}</h2>
                                        </div>
                                        <div className='flex justify-center p-2 w-24 items-center'>
                                            <FaClock className='text-two-500 mr-2'/>
                                            <h2>{item.service.duration}</h2>
                                        </div>
                                        <div className='flex justify-center items-center ml-0 sm:ml-8'>
                                            <div className='mr-4'>
                                            <Link href={`/admin/servicesPage/${item.id}`} className='text-yellow-700 bg-yellow-200 p-2 rounded-lg focus:outline-none'>Editar</Link>
                                            </div>
                                            <div>
                                            <button className='text-red-700 bg-red-200 p-2 rounded-lg focus:outline-none' onClick={(e) => handleDelete(e, index)}>Eliminar</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
    
                                    }
                                </div>
                                ))
                            }
                        </div>
    
                        <div className='flex justify-center mb-10 mt-4 px-4'>
                            <Link 
                                href={"servicesPage/createServices"}
                                className="w-64  text-center rounded-lg bg-two-500 text-white border font-bold p-2 text-xl focus:outline-none sm:w-72">Crear Servicio
                            </Link>
                        </div>
                        </div>
                        :
                        <div className='flex flex-col justify-center items-center mt-3'>
                        <Link href={"servicesPage/createServices"}>
                            <div className='rounded-xl p-8 cursor-pointer shadow-xl' data-expanded={exp} onClick={handleAdd}>
                                <h2 className='text-center text-opacity-100'>
                                Aún no tienes servicios creados
                                </h2>
                                <div className='flex justify-center items-center h-28 '>
                                <FaCompressArrowsAlt className='text-7xl text-two-500'/>
                                </div>
                                <h2 className='text-center text-opacity-100'>
                                Haz click para crear tu primer servicio
                                </h2>
                            </div>
                        </Link>
                        </div>

                    }
                </div>
            }
            </section>
    )
}
