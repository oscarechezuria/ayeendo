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
            router.push('/')
            setStepRegister(1)
    
        } catch (error) {
        console.log(error)
        }
}

return (
    <header>
        <nav className="flex mb-4 items-center justify-between flex-wrap p-1 shadow-md">
            <div className="flex items-center flex-shrink-0 text-white mr-6" >
                <div href={"/"} className='font-black text-one-500 text-2xl p-3 ml-4 lg:ml-16 '
                    >
                AYEENDO
                </div>
            </div>
            <div className="block lg:hidden mr-4" onClick={() => setOpen(!open)}>
                <FaBars className='text-one-500 text-1xl text-3xl '/>
            </div>
            <div className={`flex-grow w-full block ml-6 lg:flex lg:justify-between lg:items-center lg:w-auto lg:ml-0 ${open ? "visible" : "hidden"}`}>
                <div className="text-sm border-one-500 lg:flex lg:border-l-2">
                    <Link href="/Admin" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2'>
                        <div className="w-8 h-8 flex">
                        <FaCalendarAlt className="text-two-500 m-auto"/>
                        </div>
                        Mi Agenda
                    </Link>
                    <Link href="/Admin/Patients" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2'>
                        <div className="w-8 h-8 flex">
                        <FaUsers className="text-two-500 m-auto"/>
                        </div>
                        Citas
                    </Link>
                    <Link href="/Admin/Services" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2'>
                        <div className="w-8 h-8 flex">
                        <FaGripVertical className="text-two-500 m-auto"/>
                        </div>
                        Servicios
                    </Link>
                    <Link href="/Admin/Profile" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 ml-2'>
                        <div className="w-8 h-8 flex">
                        <FaUserEdit className="text-two-500 m-auto"/>
                        </div>
                        Perfil
                    </Link>
                </div>
                <div className='flex rounded hover:bg-gray-100 p-2 ml-2 mr-12'>
                        <div>
                            <FaHandPointLeft className="text-two-500 m-2"/>
                        </div>
                        <button
                            className='text-base text-four-500 font-semibold outline-none'   
                            onClick={handleLogout}
                        >
                            Cerrar Sesión
                        </button> 
                </div>
            </div>
        </nav>
    </header>
)
}
