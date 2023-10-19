"use client"
import React, {useContext, useState } from 'react'
import CalendarContext from '@/context/CalendarContext'
import StepModalWrapper from './StepModalWrapper'

export default function ModalWrapper() {
    
    const {openModal, setOpenModal} = useContext(CalendarContext)
    const [stepModal, setStepModal] = useState(1)

    const handleCloseButton = () => {
        setOpenModal(!openModal)
        setStepModal(1)
    }

    const handleNextButton = () => {
        if (stepModal === 3) {
            setOpenModal(!openModal)
            setStepModal(1)
            console.log("Evento Creado con exito")
        }else{
            setStepModal(stepModal + 1)
        }
    }

    return (
    
        openModal &&

        <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black opacity-30"></div>
            <div className="fixed inset-0 z-10 w-screen">
            <div className="flex min-h-full w-full justify-center items-center p-4 md:p-0 ">
                <div className="relative w-full transform rounded-lg bg-white shadow-xl transition-all md:my-8 md:w-2/5">
                    <div className="flex flex-col gap-4 bg-white px-4 py-3  sm:px-6">
                        <div>
                            <StepModalWrapper stepModal={stepModal} setStepModal={setStepModal}/>
                        </div>
                        <div className='flex justify-between'>
                            <button 
                                className='p-2 bg-two-500 text-white rounded-md'
                                onClick={handleCloseButton}
                                >Cerrar</button>
                            <button 
                                className='p-2 bg-one-500 text-white rounded-md'
                                onClick={handleNextButton}
                                >{stepModal === 3 ? "Guardar" : "Siguiente"}</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

)}
