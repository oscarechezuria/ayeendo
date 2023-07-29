import React from 'react'

export default function Footer() {
    return (
    <div className="flex flex-col items-center justify-center gap-8 text-center min-h-100 bg-one-500 text-white text-2xl pt-4 p-6">
            <div className='flex flex-col items-center justify-center w-4/5 '>
                <h2 className='flex text-lg font-semibold mb-2'>AYENNDO</h2>
                <p className='flex text-base'>Somos la plataforma que simplifica el encuentro entre pracientes y profesionales de la salud, automatizando todo el ciclo de agendamiento de citas.</p>
            </div>
            <div className='text-base mt-4'>
                <h2 className='mb-2 '>Hecho con mucho <span className='text-red-500'>❤</span> en <span className='text-yellow-500'>VEN</span><span className='text-blue-500'>EZU</span><span className='text-red-500'>ELA</span></h2>
                <h2>© 2023 Ayeendo. Todos los derechos reservados</h2>
            </div>
        </div>
)
}
