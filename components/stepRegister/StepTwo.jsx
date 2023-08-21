"use client"
import React, {useState} from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import { useRouter } from 'next/navigation'



export default function StepTwo() {


  const {currentUser, stepRegister, setStepRegister} = useContextGlobal()

  const router = useRouter()

    //console.log(currentUser)

    const handleStepTwo = () => {
      setStepRegister(stepRegister + 1)
      router.push("/admin")

    }

//ALERTA POR FAVOR RESETIAR EL STEPREGISTER A CERO PARA QUE AL REGISTRAR OTRO USUARIO COMIENCE EL CONTEO DESDE CERO


  return (
    <div className='flex flex-col items-center gap-4 p-2'>

        <div className='flex flex-col justify-center gap-2 items-center mt-4 text-xl text-one-500 font-bold'>
          <h2>Ya casi estamos listo!!!</h2>
          <h2>Ahora</h2>
        </div>

        <div className='flex flex-col justify-center gap-4 items-center'>
          <h2 className='text-center'>Te invitamos a que vayas a la sección <span className='font-bold'>Perfil</span> para completar tus datos y crear tu sitio web de reservas.</h2>
          <h2 className='text-center'>Luego crea los servicios que quieras ofrecer en la sección <span className='font-bold'>Servicios</span>.</h2>
        </div>

        <div className='my-8'>
            <button onClick={handleStepTwo} className='bg-yellow-300 rounded-lg p-2 w-32 font-semibold'>{stepRegister === 1  ? "Siguiente" : "Listo"}</button>
        </div>

    </div>
  )
}
