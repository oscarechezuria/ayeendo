"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import StepOne from '@/components/servicesfile/StepOne'
import StepTwo from '@/components/servicesfile/StepTwo'
import { useContextGlobal } from '@/context/GlobalContext'
import { getInfoService, updateService } from '@/firebase/firebase'

export default function page() {
  const {currentUser, } = useContextGlobal()

  const [step, setStep] = useState("1")
  const [docId, setDocId] = useState("")
  const [service, setService] = useState([])
  const [stepOne, setStepOne] = useState({
    name: "",
    price: "",
    description: "",
    duration: "",
    statusPrice: false,
  })

  const [stepTwo, setStepTwo] = useState([
        {name: "Lunes", state: false, hours: []},  
        {name: "Martes", state: false, hours: []},
        {name: "Miercoles", state: false, hours: []},
        {name: "Jueves", state: false, hours: []},
        {name: "Viernes",state: false, hours: []},
        {name: "Sabado", state: false, hours: []},
        {name: "Domingo", state: false, hours: []}
  ])

  
  const params = useParams()
  const id = params.editServices
  const router = useRouter()

  //Pedimos el servicio según el id del params
  useEffect( () => {
    async function data() {
        const res = await getInfoService(id)
        setService(res)
    }
    data()
  }, [id])

  //llamamos a la función dataService y la pasamos toda la info del servicio
  useEffect(() => {
      dataInfoService(service)
      dataTimeTable(service)
      dataId(service)
  },[service])

  const dataInfoService = (service) => {
    const data = service.map(item => {
      const newData = {
        name: item.infoService.name,
        price: item.infoService.price,
        description: item.infoService.description,
        duration: item.infoService.duration,
        statusPrice: item.infoService.statusPrice,
      }
      setStepOne(newData)
    }
    )
  }

  const dataTimeTable = (service) => {
    const data = service.map(item => {
      const newData = item.timetable
      setStepTwo(newData)
    }
    )
  }
  
  const dataId = (service) => {
    const data = service.map(item => {
      const docId = item.docId
      setDocId(docId)

    }
    )
  }


    const handleUpdateService = async () => {

        const update = {
            id: id,
            infoService: stepOne,
            timetable: stepTwo,
            uid: currentUser.uid
        }

        await updateService(docId, update)

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
                            onClick={handleUpdateService}
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
            }

        </div>

    )
}
