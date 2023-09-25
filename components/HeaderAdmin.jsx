"use client"
import { logout } from '@/firebase/firebase'
import Link from 'next/link'
import React, { useState } from 'react'
import {FaCalendarAlt, FaGripVertical, FaUserEdit, FaHandPointLeft,FaBars, FaClock, FaUsers} from "react-icons/fa"
import { useContextGlobal } from '@/context/GlobalContext'
import { useRouter } from 'next/navigation'


export default function HeaderAdmin() {

    const {setStepRegister} = useContextGlobal()

    const [open, setOpen] = useState(false)

    const router = useRouter()

    async function handleLogout() {

    try {
        await logout()
            setOpen(false)
            router.push('/')
            setStepRegister(1)
    
        } catch (error) {
        console.log(error)
        }
}

return (
    <header>
        <nav className="flex mb-4 items-center justify-between  flex-wrap p-1 shadow-md">
            <div className="flex items-center flex-shrink-0 text-white mr-6" >
                <div href={"/"} className='font-black text-one-500 text-2xl p-3 ml-4 md:ml-16 '
                    >
                AYEENDO
                </div>
                <div className={`absolute top-16 bg-white w-full md:flex md:static md:items-center border-b-2 md:border-b-0 md:w-auto md:ml-0 ${open ? "visible" : "hidden"}`}>
                    <div className="ml-8 text-sm border-one-500 md:flex md:border-l-2">
                        <div onClick={() => setOpen(false)}>
                            <Link href="/admin" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2 mr-4 md:mr-0'>
                                <div className="w-8 h-8 flex">
                                <FaCalendarAlt className="text-two-500 m-auto"/>
                                </div>
                                Mi Agenda
                            </Link>
                        </div>
                        <div onClick={() => setOpen(false)}>
                            <Link href="/admin/appointment" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2 mr-4 md:mr-0'>
                                <div className="w-8 h-8 flex">
                                <FaUsers className="text-two-500 m-auto"/>
                                </div>
                                Citas
                            </Link>
                        </div>
                        <div onClick={() => setOpen(false)}>
                            <Link href="/admin/servicesPage" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2 mr-4 md:mr-0'>
                                <div className="w-8 h-8 flex">
                                <FaGripVertical className="text-two-500 m-auto"/>
                                </div>
                                Servicios
                            </Link>
                        </div>
                        <div onClick={() => setOpen(false)}>
                            <Link href="/admin/profile" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2 mr-4 md:mr-0'>
                                <div className="w-8 h-8 flex">
                                <FaUserEdit className="text-two-500 m-auto"/>
                                </div>
                                Perfil
                            </Link>
                        </div>
                    </div>
                    <div className={`flex rounded hover:bg-gray-100 p-2 ml-10 mr-4 mb-4 hover:cursor-pointer visible md:mr-6 md:ml-0 md:hidden`} onClick={handleLogout}>
                        <div>
                                <FaHandPointLeft className="text-red-500 m-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex rounded hover:bg-gray-100 p-2 ml-10 hover:cursor-pointer invisible md:mr-6 md:ml-0 md:visible`} onClick={() => setOpen(false)}>
                    <div
                        onClick={handleLogout}
                        >
                            <FaHandPointLeft className="text-red-500 m-2"/>
                    </div>
            </div>
            <div className="block md:hidden mr-4 hover:cursor-pointer" onClick={() => setOpen(!open)}>
                <FaBars className='text-one-500 text-1xl text-3xl '/>
            </div>
        </nav>
    </header>
)
}

/*
                        <button
                            className='text-base text-four-500 font-semibold outline-none'   
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </button> 
*/