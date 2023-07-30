"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'
import Link from 'next/link'

const login = () => {

  const initialStateValues = {
    email: '',
    password: '',
  }
  
  const [values, setvalues] = useState(initialStateValues)
  

  const handleInputChange = (e) => {
      // console.log(e.target.name)
      // console.log(e.target.value)
          const {name, value} = e.target;
          setvalues({...values,
                  [name]: value 
          });
          console.log(values)
  }

  async function submitHandler(e){
    e.preventDefault()

    try {
      const correo = values.email
      const contraseña = values.password
      const login = await signInWithEmailAndPassword(auth, correo, contraseña)
    } catch (error) {
      //console.log(error.message)
      //console.log(error.code)
      //tengo que informar del error al usuario arriba de la seccion email en letras rojas. Buscar librerias de formularios

      if (error.code === "auth/invalid-email") {
        alert("El correo ingresado es invalido")
      }else if (error.code === "auth/user-not-found") {
        alert("Usuario no registrado. Intente nuevamente")
      }else if(error.code === "auth/wrong-password"){
        alert("La contraseña ingresa es incorrecta. Intente nuevamente")
      }else if(error.code){
        alert("Algo salio mal")
      }
    }
  }

  return (
    <div>
        <Header/>
      
        <div className='flex w-full mt-8 mb-12'>
            <div className='m-auto grid auto-cols-auto'>
              <div className='flex flex-col my-8'>
                  <h1 className='text-center text-2xl text-black font-semibold'>Inicio de Sesión</h1>
              </div>
  
              <form className='flex flex-col w-full' onSubmit={submitHandler}>
                  <div className='flex flex-col'>
                      <label className='mb-1 text-one-500 font-semibold'>Email</label>
                      <input  
                      type="text" 
                      className='mb-6 rounded p-2 bg-three-500' 
                      placeholder='example@gmail.com' 
                      name='email'
                      onChange={handleInputChange}
                      value={values.email}
                      />
  
                      <label className='mb-1 text-one-500 font-semibold'>Contraseña</label>
                      <input 
                        type="password" 
                        className='mb-6 rounded p-2 bg-three-500 ' 
                        placeholder='******' 
                        name='password'
                        onChange={handleInputChange}
                        value={values.password}
                        />
                  </div>
                  <Link href={"/"} className='text-sm mb-2'>He olvidado mi contraseña</Link>
                  <Link href={"/signup"} className='text-sm mb-6'>Aún no tengo cuenta</Link>
                  <Link href={"/admin"} className='rounded-xl text-center text-lg text-black bg-two-500 py-2 px-4 hover:bg-yellow-500 duration-500'>Iniciar Sesión</Link>
              </form>
            </div>  
        </div>

          <div className='md:absolute md:bottom-0 md:w-full'>
            <Footer/>
          </div>
    </div>
  )
}

export default login