import Link from 'next/link'
import React from 'react'
import { FaAlignJustify } from "react-icons/fa6"

export default function Header() {
  return (
    <header className='flex justify-between bg-one-500 py-4 px-8 text-white font-medium text-lg'>
        <h1 className='text-yellow-300  text-2xl font-bold'>AYEENDO</h1>
        <nav className='hidden md:flex md:gap-2'>
            <a href="#">Beneficios</a>
            <a href="#">Planes</a>
        </nav>
        <ul className='hidden md:flex md:gap-2'>
            <Link href={"/"}>Inicio de Sesión</Link>
            <Link href={"/fsd"}>Registrarse</Link>
        </ul>
        <FaAlignJustify className='text-2xl md:hidden'/>
    </header>
  )
}
