"use client"
import React, { useState } from 'react'
import {FaCompressArrowsAlt} from "react-icons/fa"
import Link from 'next/link'
import { FaMoneyBillAlt, FaClock } from "react-icons/fa"

export default function servicesPage() {

    const [exp, setExp] = useState(true)
    const [allServices, setAllServices] = useState([
        {
        name: "Servicio 1",
        price: "12",
        duration: "20min",
        description: "Esto es para los primeros pacientes",
        id: "1"
        },
        {
        name: "Servicio 2",
        price: "12",
        duration: "20min",
        description: "Esto es para los primeros pacientes",
        id: "2"
        },
        {
        name: "Servicio 3",
        price: "12",
        duration: "20min",
        description: "Esto es para los primeros pacientes",
        id: "3"
        }      
    ])

    console.log(allServices)

    const handleAdd = (e) =>{
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
                allServices.length > 0 
                ?
                <div>
                <h1 className='mt-10 mb-6 text-center text-xl font-semibold text-two-500'>Estos son todos tus servicios creados</h1>
                {
                    allServices.map(({name, price, duration, description, id}, index) => (
                    <div key={index}>
                        <div className='flex justify-center'>
                            <div className='flex flex-col justify-center p-4 mb-4 border rounded-lg sm:flex-row'>
                            <div className='p-2 boder-r-0 sm:border-r-2'>
                                <p className='h-auto break-words w-52'>{name}</p>
                            </div>
                            <div className='flex justify-center p-2 w-24 items-center boder-r-0 sm:border-r-2'>
                                <FaMoneyBillAlt className='text-two-500 mr-2'/>
                                <h2>{`${price} $`}</h2>
                            </div>
                            <div className='flex justify-center p-2 w-24 items-center'>
                                <FaClock className='text-two-500 mr-2'/>
                                <h2>{duration}</h2>
                            </div>
                            <div className='flex justify-center items-center ml-8'>
                                <div className='mr-4'>
                                <Link href={`/admin/servicesPage/${id}`} className='text-yellow-700 bg-yellow-200 p-2 rounded-lg focus:outline-none'>Editar</Link>
                                </div>
                                <div>
                                <button className='text-red-700 bg-red-200 p-2 rounded-lg focus:outline-none' onClick={(e) => handleDelete(e, index)}>Eliminar</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))
                }
                <div className='flex justify-center'>
                    <Link 
                        href={"servicesPage/createServices"}
                        className="w-80 text-center rounded-lg text-two-500 border border-dashed font-bold p-2 text-xl focus:outline-none">Crear Servicio
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
            </section>
    )
}
