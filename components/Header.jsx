"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa6"


export default function Header() {

  const [show, setShow] = useState(false)


  return (
    <header className='flex flex-col justify-between bg-one-500 py-3 px-4 text-white font-medium text-lg md:flex md:flex-row'>
        <div className='flex justify-between items-center'>
            <Link href={"/"} className='flex justify-start ml-4 text-yellow-300 text-4xl font-bold text-start'>AYEENDO</Link>
            <FaAlignJustify className='flex justify-end text-3xl text-end md:hidden' onClick={() => setShow(!show)}/>
        </div>
      
        <nav className={`absolute top-16 p-4 right-0 mr-4 bg-two-500 rounded-b-md md:bg-one-500 md:mr-2 md:static md:flex md:gap-2 md:p-0 ${show === false ? "hidden" : "visible"} duration-500`}>
            <ul className='flex flex-col items-center gap-8 mb-2 md:flex md:flex-row md:gap-6 md:mt-0'>
                <Link href={"/login"} className='hover:underline underline-offset-8 hover:transition hover:duration-700'>Iniciar Sesión</Link>
                <div>
                  <Link href={"/signup"} className='rounded-xl px-4 py-2 font-normal bg-one-500 md:bg-yellow-400  hover:bg-yellow-300 hover:transition hover:duration-700'>Registrarse</Link>
                </div>
            </ul>
        </nav>
    </header>
  )
}
