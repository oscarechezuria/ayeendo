"use client"
import React, { useState } from 'react'
import StepOne from '@/components/servicesfile/StepOne'
import StepTwo from '@/components/servicesfile/StepTwo'
import { useRouter } from 'next/navigation' 
import { usePathname } from 'next/navigation'
import { useContextGlobal } from '@/context/GlobalContext'
import {v4 as uuidv4} from "uuid"
import { insertNewService } from '@/firebase/firebase'

export default function createServices() {

    const pathname = usePathname()

    const {currentUser, setAllServices} = useContextGlobal()

    const initialService = {
        name: "",
        price: "",
        duration: "",
        description: "",
        statusPrice: false
    }

    const initialState = [
        {name: "Lunes", state: false, hours: []},  
        {name: "Martes", state: false, hours: []},
        {name: "Miercoles", state: false, hours: []},
        {name: "Jueves", state: false, hours: []},
        {name: "Viernes",state: false, hours: []},
        {name: "Sabado", state: false, hours: []},
        {name: "Domingo", state: false, hours: []}
    ]

    const router = useRouter()

    const [stepOne, setStepOne] = useState(pathname === "/admin/servicesPage/createServices" ? initialService : null)
    const [stepTwo, setStepTwo] = useState(pathname === "/admin/servicesPage/createServices" ? initialState : null)


    const [step, setStep] = useState("1")

    const handleForm = () => {
        
        const newService = {
            id: uuidv4(),
            service: stepOne,
            timetable: stepTwo,
            uid: currentUser.uid
        }

        const res = insertNewService(newService);
        newService.docId = res.id
        setAllServices(newService)

        console.log("informacion enviada con exito")
        router.push("/admin/servicesPage") 
            
        
    }


    return (

        <div className='flex flex-col'>
            <div className='flex justify-center gap-8 mt-6 mb-2'>
                <div className={step === "1" ? `bg-blue-300 rounded-full p-2 w-10 text-center`: `bg-gray-100 rounded-full p-2 w-10 text-center` }>
                    <span>1</span>
                </div>
                <div className={step === "2" ? `bg-blue-300 rounded-full p-2 w-10 text-center`: `bg-gray-100 rounded-full p-2 w-10 text-center` }>
                    <span>2</span>
                </div>
            </div>
            {
                step === "1" 
                ?
                <StepOne stepOne={stepOne} setStepOne={setStepOne}/>
                :
                <StepTwo stepTwo={stepTwo} setStepTwo={setStepTwo}/>
                
            }
            {
                step === "1"
                ?
                    <div className='flex justify-center'>
                        <button 
                            className='w-80 bg-two-500 hover:bg-two-600 rounded-lg text-white p-2 text-xl focus:outline-none mb-14 mt-4'
                            onClick={() => setStep("2")}
                        >
                            Siguiente
                        </button>
                    </div>
                :
                <div className='flex justify-center flex-col-reverse gap-4 sm:flex-row'>
                    <div className='flex justify-center'>
                        <button 
                            className='w-60 bg-two-500 hover:bg-two-600 rounded-lg text-white p-2 text-xl focus:outline-none mb-8 sm:mb-14 sm:mt-4'
                            onClick={() => setStep("1")}
                        >
                            Atras
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            className='w-60 bg-one-500 hover:opacity-90 rounded-lg text-white p-2 text-xl focus:outline-none mb-0 mt-4 sm:mb-14'
                            onClick={handleForm}
                        >
                            Crear Servicio
                        </button>
                    </div>
                </div>
            }

        </div>

    )
    }
