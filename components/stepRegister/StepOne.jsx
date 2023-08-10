"use client"
import React, { useState } from 'react'
import { useContextGlobal } from '@/context/GlobalContext'

export default function stepOne() {

    const [username, setUsername] = useState("")

    const {currentUser, stepRegister, setStepRegister} = useContextGlobal()



  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-6'>

        <div>
          <h2 className='text-md text-center md:text-xl'>Escoge un nombre de usuario</h2>
        </div>

        <div className='flex border border-yellow-300 rounded-xl p-4'>
          <h2 className='flex text-base'>ayeendo/ <input onChange={(e) => setUsername(e.target.value)} value={username}  name='username' type="text" placeholder='Usuario' className='w-24 text-base focus:outline-none md:w-32 '/></h2>
        </div>

        <div className='my-8'>
            <button onClick={() => setStepRegister(stepRegister + 1)} className='bg-yellow-300 rounded-lg p-2 w-32 font-semibold'>{stepRegister === 1  ? "Siguiente" : "Listo"}</button>
        </div>

    </div>  
  )
}
