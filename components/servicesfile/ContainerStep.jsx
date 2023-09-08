import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { useRouter } from 'next/navigation' 
import { usePathname } from 'next/navigation'

export default function ContainerStep() {
    
    const pathname = usePathname()
    console.log(pathname)


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

    const [stepOne, setStepOne] = useState(pathname === "/Admin/Services/CreateService" ? initialService : pruebaApiStepOne)
    const [stepTwo, setStepTwo] = useState(pathname === "/Admin/Services/CreateService" ? initialState : pruebaApiStepTwo)
    console.log(stepOne)
    console.log(stepTwo)

    const [step, setStep] = useState("1")

    const handleForm = () => {
        
        console.log("Enviar a la BD la información del estado stepOne y StepTwo")
        router.push("https://segundo-ayeendo.vercel.app/Admin/Services")
            
        
    }


    return (

        <div className='flex flex-col justify-center'>

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
                    <div className='flex justify-center mb-12'>
                        <button 
                            className='w-80 bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none my-8'
                            onClick={() => setStep("2")}
                        >
                            Siguiente
                        </button>
                    </div>
                :
                <div className='flex justify-center gap-4 mb-8'>
                    <div className='flex justify-center'>
                        <button 
                            className='w-60 bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none my-4'
                            onClick={() => setStep("1")}
                        >
                            Atras
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            className='w-60 bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none my-4'
                            onClick={handleForm}
                        >
                            Crear Servicio
                        </button>
                    </div>
                </div>
            }

        </div>
)}
