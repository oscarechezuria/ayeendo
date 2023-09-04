"use client"
import Footer from '@/components/Footer'
import HeaderAdmin from '@/components/HeaderAdmin'
import React, { useState } from 'react'
import AuthProvider from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'

function layoutAdmin({children}) {

  const [state, setState] = useState(1)

  const router = useRouter()


  function handleUserLoggedIn(user) {
    setState(2)   
  }

  function handleUserNotRegistered(user) {
  setState(3)
  }

  function handleUserNotLoggedIn(user) {
    router.push('/');
  }

  if (state === 1){
    return (
    <AuthProvider   
            onUserLoggedIn={handleUserLoggedIn} 
            onUserNotRegistered={handleUserNotRegistered} 
            onUserNotLoggedIn={handleUserNotLoggedIn}>
              <div>Cargando .......</div>
    </AuthProvider>
    )
  }

  if (state === 2){
  return (
    <div className='flex flex-col min-h-screen'>
        <HeaderAdmin/>
          {children}
        <Footer/>
    </div>
  )}

  if (state === 3) {
    return(
    <RegisterUser/>

    )}

}

export default layoutAdmin