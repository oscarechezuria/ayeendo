import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const signup = () => {
  return (
    <div>
      <Header/>
      <div>Esta es la página de registro</div>
      <div className='absolute bottom-0 w-full'>
        <Footer/>
      </div>
    </div>
  )
}

export default signup