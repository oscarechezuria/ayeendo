"use client"
import React, { useEffect, useState } from 'react'
import {FaCompressArrowsAlt} from "react-icons/fa"
import Link from 'next/link'
import { FaMoneyBillAlt, FaClock } from "react-icons/fa"
import { useContextGlobal } from '@/context/GlobalContext'
import { getAllServices, deletedService } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'
import HeaderAdmin from '@/components/HeaderAdmin'

export default function servicesPage() {
    
    const {currentUser, allServices, setAllServices} = useContextGlobal()
    const [preload, setPreload] = useState(false)
    const [exp, setExp] = useState(true)

    const router = useRouter()

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


    const handleDelete = async (e, index) => {
        const copyAllServices = [...allServices]
        const docDeleted =  copyAllServices[index]
        await deletedService(docDeleted.docId)
        copyAllServices.splice(index, 1)
        setAllServices(copyAllServices)
    }

    return (

            <>

                <HeaderAdmin/>

                <section>
                {
                    !preload
                    ?

                    <div className='flex flex-col mt-10 p-4'>

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
                            
                            <div className='flex flex-col gap-4'>
                                {
                                    allServices.map((item, index) => (
                                    <div key={index} className='flex justify-center gap-4'>
                                        {
                                        <div className='flex flex-col border rounded-lg justify-center items-center w-10/12 p-4 md:w-7/12'>
                                            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                                                <div className='flex flex-col w-full justify-between md:flex-row md:g-6'>
                                                    <div>
                                                        <div className='text-two-500 font-semibold p-2'>
                                                            <p>{item.infoService.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-4 p-2'>
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <FaMoneyBillAlt/>
                                                            <h2>{`${item.infoService.price} $`}</h2>
                                                        </div>
                                                        <div className='flex justify-center items-center gap-2'>
                                                            <FaClock/>
                                                            <h2>{item.infoService.duration}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='border-y-2 p-2 w-full'>
                                                    <div className='flex justify-center items-center'>
                                                        <h2>{item.infoService.description}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full items-center mb-2 gap-6 mt-6 md:justify-center'>
                                                <div>
                                                    <Link href={`/admin/servicesPage/${item.id}`} className='text-md text-yellow-700 bg-yellow-200 rounded-lg p-2 mt-6 focus:outline-none'>Editar</Link>
                                                </div>
                                                <div onClick={(e) => handleDelete(e, index)}>
                                                    <Link href={""} className='text-md text-red-700 bg-red-200 rounded-lg p-2 mt-6 focus:outline-none'>Eliminar</Link>
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
            </>
    )
}
