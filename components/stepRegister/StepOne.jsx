"use client"
import React, { useState } from 'react'
import { useContextGlobal } from '@/context/GlobalContext'
import { existsUserName, updateUser } from '@/firebase/firebase'


export default function stepOne() {

    const [username, setUsername] = useState("")
    const [errorUsername, setErrorUsername] = useState(false)

    const {setStepRegister, stepRegister, infoUser} = useContextGlobal()



    const handleInputListo = async (e) => {
      e.preventDefault()

      if (username !== "") {

        const replace = username.replaceAll(" ", "")
        const validatedUser = replace.toLocaleLowerCase()
        
        const exists =  await existsUserName(validatedUser)

        if (exists) {
          setErrorUsername(true)
        }else{
          const copyInfotUser = {...infoUser}
          copyInfotUser.username = validatedUser
          copyInfotUser.processCompleted = true
          setStepRegister(stepRegister + 1)
          await updateUser(copyInfotUser)
          console.log(copyInfotUser)
        }
        return
      }
    }



  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-6'>

        <div>
          <h2 className='text-md text-center md:text-xl'>Escoge un nombre de usuario</h2>
          {
            errorUsername ? <p className='text-md text-center text-red-600 mt-4 md:text-lg'>Este usuario ya existe. Por favor elija otro</p> : null
          }
        </div>

        <form onSubmit={handleInputListo}>
          <div className='flex border border-yellow-300 rounded-xl p-4'>
            <h2 className='flex text-base'>ayeendo/ 
              <input 
                required
                onChange={(e) => setUsername(e.target.value)} 
                value={username}  
                name='username' 
                type="text" 
                placeholder='Usuario' 
                className='w-24 text-base focus:outline-none md:w-32 '/>
            </h2>
          </div>

          <div className='flex justify-center my-8'>
              <button type='submit' className='bg-yellow-300 rounded-lg p-2 w-32 font-semibold'>{stepRegister === 1  ? "Siguiente" : "Listo"}</button>
          </div>  
        </form>


    </div>  
  )
}
