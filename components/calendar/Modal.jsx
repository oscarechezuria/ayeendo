"use client"
import React, {useContext } from 'react'
import CalendarContext from '@/context/CalendarContext'

export default function Modal() {
    
    const {openModal, setOpenModal} = useContext(CalendarContext)

    return (
    
        openModal &&

        <div class="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-black opacity-20"></div>

            <div class="fixed inset-0 z-10 w-screen">
            <div class="flex min-h-full w-full justify-center items-center p-4 md:p-0 ">
                <div class="relative w-full transform rounded-lg bg-white shadow-xl transition-all md:my-8 md:w-2/5">
                    <div class="flex flex-col gap-4 bg-white px-4 py-3  sm:px-6">
                        <div>
                            <h2>Selecciona una fecha</h2>
                        </div>
                        <div>
                            <button 
                                className='p-2 bg-one-500 text-white rounded-md'
                                onClick={() => setOpenModal(!openModal)}
                                >Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

)}
