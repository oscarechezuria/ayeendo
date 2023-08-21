"use client"
import React from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import Link from 'next/link'
import StepTwo from './StepTwo'
import StepOne from './StepOne'
import Footer from '../Footer'


export default function RegisterUser() {

    const {stepRegister} = useContextGlobal()

    return (
    <div>
        <header className='flex flex-col justify-between bg-one-500 py-4 px-8 text-white font-medium text-lg md:flex md:flex-row'>
        <div className='flex justify-between items-center'>
            <Link href={"/"} className='flex justify-start text-yellow-300 text-4xl font-bold text-start'>AYEENDO</Link>
        </div>
        </header>

        <div className='mt-14 sm:mt-20'>

            <div className='flex justify-center text-2xl font-semibold'>
                <h2>¡Bienvenido!</h2>
            </div>

            {
                stepRegister < 3 
                ?
                <div className='flex flex-col gap-4'>
                    {
                        stepRegister === 1 
                        ?
                        <StepOne/>
                        :
                        <StepTwo/>
                        
                    }
                </div>
                :
                <div className='flex justify-center mt-14 text-2xl font-bold'>
                    Estamos cargando tu sesión
                </div>
            }
        </div>


        <div className='absolute bottom-0 w-full'>
            <Footer/>
        </div>
    </div>
)
}
