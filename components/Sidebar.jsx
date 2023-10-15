"use client"
import { logout } from '@/firebase/firebase'
import Link from 'next/link'
import React from 'react'
import {FaCalendarAlt, FaGripVertical, FaUserEdit, FaHandPointLeft, FaUsers} from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"
import { useContextGlobal } from '@/context/GlobalContext'
import { useRouter } from 'next/navigation'


export default function Sidebar() {

    const {setStepRegister, openSidebar, setOpenSidebar} = useContextGlobal()
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
    <header className=' md:w-1/5'>
        <nav className={`absolute bg-white h-2 w-full items-center justify-between flex-wrap shadow-md md:static ${openSidebar ? "visible md:visible" : "invisible md:visible"}`}>
            <div className="flex flex-col w-full items-center p-4 text-white" >
                <div className='font-black text-one-500 text-2xl mt-8 p-3 md:border-b border-one-500'>
                    <h2 className='hidden md:block'>AYEENDO</h2>
                    <div className="block md:hidden mr-4 hover:cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)}>
                        <FaCircleXmark className='text-one-500 text-1xl text-3xl '/>
                    </div>
                </div>
                <div className={`flex flex-col bg-white w-full mt-4 md:flex md:items-center md:w-auto`}>
                    <div className="flex flex-col w-full text-sm pl-14 md:pl-0">
                        <div onClick={() => setOpenSidebar(!openSidebar)}>
                            <Link href="/admin" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100 md:mt-0'>
                                <div className="w-8 h-8 flex">
                                <FaCalendarAlt className="text-two-500 m-auto"/>
                                </div>
                                Mi Agenda
                            </Link>
                        </div>
                        <div onClick={() => setOpenSidebar(!openSidebar)}>
                            <Link href="/admin/appointment" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100'>
                                <div className="w-8 h-8 flex">
                                <FaUsers className="text-two-500 m-auto"/>
                                </div>
                                Citas
                            </Link>
                        </div>
                        <div onClick={() => setOpenSidebar(!openSidebar)}>
                            <Link href="/admin/servicesPage" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100'>
                                <div className="w-8 h-8 flex">
                                <FaGripVertical className="text-two-500 m-auto"/>
                                </div>
                                Servicios
                            </Link>
                        </div>
                        <div onClick={() => setOpenSidebar(!openSidebar)}>
                            <Link href="/admin/profile" className='flex items-center font-semibold text-base text-four-500 p-2 rounded hover:bg-gray-100'>
                                <div className="w-8 h-8 flex">
                                <FaUserEdit className="text-two-500 m-auto"/>
                                </div>
                                Perfil
                            </Link>
                        </div>
                        <div className={`flex items-center rounded text-base w-full md:text-base p-2 font-semibold text-four-500 hover:bg-gray-100 hover:cursor-pointer`} onClick={() => setOpenSidebar(!openSidebar)}>
                                <div onClick={handleLogout} className='flex'>
                                    <FaHandPointLeft className="text-two-500 m-2"/>
                                </div>
                                Salir
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}