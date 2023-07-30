import HeaderAdmin from '@/components/HeaderAdmin'
import React from 'react'

function layoutAdmin({children}) {
  return (
    <div>
        <HeaderAdmin/>
        {children}
    </div>
  )
}

export default layoutAdmin