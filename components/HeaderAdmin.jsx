"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6"


export default function HeaderAdmin() {

  const [show, setShow] = useState(false)

  return (
    <header className='flex flex-col justify-between bg-one-500 py-4 px-8 text-white font-medium text-lg md:flex md:flex-row'>
        <div className='flex justify-between items-center'>
            <Link href={"/"} className='flex justify-start text-yellow-300 text-4xl font-bold text-start'>AYEENDO</Link>
            <FaAlignJustify className='flex justify-end text-3xl text-end md:hidden' onClick={() => setShow(!show)}/>
        </div>
      
        <nav className={`md:flex md:gap-2 ${show === false ? "hidden" : "visible"} duration-500`}>
            <ul className='flex flex-col items-center gap-6 mt-8 md:flex md:flex-row md:gap-6 md:mt-0'>
                <Link href={"/login"} className='hover:text-yellow-300 duration-700'>Calendario</Link>
                <Link href={"/login"} className='hover:text-yellow-300 duration-700'>Mis Citas</Link>
                <Link href={"/login"} className='hover:text-yellow-300 duration-700'>Servicios</Link>
                <Link href={"/login"} className='hover:text-yellow-300 duration-700'>Mi Perfil</Link>
                <div>
                  <Link href={"/signup"} className='rounded-xl bg-yellow-400 py-2 px-4 hover:bg-yellow-500 font-normal'>Cerrar Sesión</Link>
                </div>
            </ul>
        </nav>
    </header>
  )
}
