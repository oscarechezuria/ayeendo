"use client"
import React from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import Link from 'next/link'
import StepTwo from './StepTwo'
import StepOne from './StepOne'
import Footer from '../Footer'


export default function RegisterUser() {

    const {stepRegister} = useContextGlobal()
    console.log(stepRegister)

    return (
    <div className='flex flex-col min-h-screen'>
        <header className='flex flex-col justify-between bg-one-500 py-4 px-8 mb-12 text-white font-medium text-lg md:flex md:flex-row'>
            <div className='flex justify-between items-center'>
                <Link href={"/"} className='flex justify-start text-yellow-300 text-4xl font-bold text-start'>AYEENDO</Link>
            </div>
        </header>

        <div className='m-auto'>

            <div className='flex justify-center text-2xl font-semibold'>
                <h2>¡Bienvenido!</h2>
            </div>

            {
                stepRegister < 3 
                &&
                <div className='flex flex-col gap-4'>
                    {
                        stepRegister === 1 
                        ?
                        <StepOne/>
                        :
                        <StepTwo/>
                        
                    }
                </div>
            }
        </div>

        <Footer/>

    </div>
)
}
