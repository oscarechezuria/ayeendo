"use client"
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React, { useState} from 'react'
import AuthProvider from '@/components/AuthProvider'
import { useRouter } from 'next/navigation'
import ModalWrapper from '@/components/modal/ModalWrapper'


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
    router.push('/login');
  }

  if (state === 1){
    return (
    <AuthProvider   
            onUserLoggedIn={handleUserLoggedIn} 
            onUserNotRegistered={handleUserNotRegistered} 
            onUserNotLoggedIn={handleUserNotLoggedIn}>
              <>
                <header>
                  <nav className="flex mb-4 items-center justify-between flex-wrap p-1 shadow-md">
                      <div className="flex items-center flex-shrink-0 text-white mr-6" >
                          <div className='font-black text-one-500 text-2xl p-3 ml-4 lg:ml-16 '
                              >
                          AYEENDO
                          </div>
                      </div>
                  </nav>
                </header>

                <div className='flex flex-col mt-10 p-4'>

                    <div className="border rounded-md max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>
                    <div className="border rounded-md max-w-sm w-full mx-auto mt-2">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>
                    <div className="border rounded-md max-w-sm w-full mx-auto mt-2">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-md bg-slate-200 h-80 w-full"></div>
                        </div>
                    </div>

                </div>

                <div className='absolute bottom-0 w-full'>
                  <Footer/>
                </div>
              </>

    </AuthProvider>
    )
  }

  if (state === 2){
  return (
    <div className='flex flex-col'>
      <div className='flex h-1'>
        <ModalWrapper/>
        <Sidebar/>
        <div className='flex flex-col w-full overflow-auto'>
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  )}

  if (state === 3) {
    return(
    <RegisterUser/>
    )}

}

export default layoutAdmin