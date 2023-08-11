"use client"
import React from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import Link from 'next/link'
import StepTwo from './StepTwo'
import StepOne from './StepOne'

export default function RegisterUser() {

    const {stepRegister} = useContextGlobal()



    return (
    <div>
        <header className='flex flex-col justify-between bg-one-500 py-4 px-8 text-white font-medium text-lg md:flex md:flex-row'>
        <div className='flex justify-between items-center'>
            <Link href={"/"} className='flex justify-start text-yellow-300 text-4xl font-bold text-start'>AYEENDO</Link>
        </div>
        </header>
        {
            stepRegister < 3 
            ?
            <div className='flex flex-col gap-4'>
                <div className='flex justify-center mt-14'>
                    <h2 className='text-one-500 text-2xl font-bold'>AYEENDO</h2>
                </div>
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
  )
}
