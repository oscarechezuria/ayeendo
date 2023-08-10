"use client"
import React from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import Header from '../Header'
import StepTwo from './StepTwo'
import StepOne from './StepOne'

export default function RegisterUser() {

    const {currentUser, stepRegister, setStepRegister} = useContextGlobal()

    console.log(currentUser)


    return (
    <div>
        <Header/>
        {
            stepRegister < 3 
            ?
            <div className='flex flex-col gap-6 '>
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
