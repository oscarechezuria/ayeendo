import Footer from '@/components/Footer'
import HeaderAdmin from '@/components/HeaderAdmin'
import React from 'react'

function layoutAdmin() {
  return (
    <div className='flex flex-col min-h-screen'>
        <HeaderAdmin/>
          <div>
            <h2>Hola estamos en el dashboard</h2>
          </div>
        <Footer/>
    </div>
  )
}

export default layoutAdmin