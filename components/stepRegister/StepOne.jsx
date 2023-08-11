"use client"
import React, { useState } from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import { existsUserName, updateUser } from '@/firebase/firebase'

export default function stepOne() {

    const [username, setUsername] = useState("")

    const {setStepRegister, stepRegister, infoUser} = useContextGlobal()

    const handleInputListo = async () => {
      if (username !== "") {

        const exists =  await existsUserName(username)

        if (exists) {
          console.log("Este nombre de usuario ya existe por favor escoga otro")
        }else{
          const copyInfotUser = {...infoUser}
          copyInfotUser.username = username
          copyInfotUser.processCompleted = true
          setStepRegister(stepRegister + 1)
          await updateUser(copyInfotUser)
          console.log(copyInfotUser)


        }

      }else{
        console.log("Por escribe un nombre de usuario")
      }
    }



  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-6'>

        <div>
          <h2 className='text-md text-center md:text-xl'>Escoge un nombre de usuario</h2>
        </div>

        <div className='flex border border-yellow-300 rounded-xl p-4'>
          <h2 className='flex text-base'>ayeendo/ <input onChange={(e) => setUsername(e.target.value)} value={username}  name='username' type="text" placeholder='Usuario' className='w-24 text-base focus:outline-none md:w-32 '/></h2>
        </div>

        <div className='my-8'>
            <button onClick={handleInputListo} className='bg-yellow-300 rounded-lg p-2 w-32 font-semibold'>{stepRegister === 1  ? "Siguiente" : "Listo"}</button>
        </div>

    </div>  
  )
}
