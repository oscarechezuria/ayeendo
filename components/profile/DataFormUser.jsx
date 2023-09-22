"use client"
import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import {getUserForm, insertUserForm} from '@/firebase/firebase'

import {v4 as uuidv4} from "uuid"

export default function DataFormUser({infoUser}) {

  const [dataForm, setDataForm] = useState(null)
  const {register, handleSubmit, reset, formState:{errors}} = useForm()
  

  useEffect(() =>{
    async function data(infoUser) {
      const getForm = await getUserForm(infoUser.uid)
      setDataForm(getForm)
    }
    data(infoUser)
  },[infoUser])


  useEffect(() =>{
    reset(dataForm)
  },[dataForm])

  const onsubmit = handleSubmit( (data) => {
    console.log(data)
      const newDataForm = {
          id: uuidv4(),
          firstName: data.firstName, 
          lastName: data.lastName,
          service: data.service,
          professionalDescription: data.professionalDescription, 
          telephone: data.telephone,
          gender: data.gender,
          city: data.city,
          town: data.town,
          address: data.address,
          uid: infoUser.uid
      }

      const res = insertUserForm(newDataForm)
      newDataForm.docId = res.id
      console.log("Información enviada con exito")
    })


  return(
  <>
    
          <div className="overflow-auto ">
              
              <form className='flex justify-center mb-12' onSubmit={onsubmit}>
                  <div className='flex justify-center flex-col'>
                      <div className='flex justify-center flex-col sm:flex-row'>
                          <div className='flex flex-col mb-4 sm:mr-4'>
                                <label 
                                  className='text-one-500 mb-1'
                                  htmlFor="firstName" 
                                  >Nombre</label>
                                <input
                                  className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                  type='text'
                                  placeholder='Escriba su nombre'
                                  {...register("firstName", {required: true})}
                                  />
                                  {
                                    errors.firtName && <span className='text-red-500'>El nombre es requerido</span>
                                  }
                          </div>
                          <div className='flex flex-col mb-4'>
                                <label 
                                  className='text-one-500 mb-1'
                                  htmlFor="lastName" 
                                  >Apellido</label>
                                <input
                                  className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                  type='text'
                                  {...register("lastName", {required: true})}
                                  placeholder='Escriba su apellido'
                                  />
                                  {
                                    errors.lastName && <span className='text-red-500'>El nombre es requerido</span>
                                  }
                          </div>
                      </div>
                      <div className='flex justify-center flex-col'>
                            <div className='flex justify-center flex-col m-auto mb-4 sm:w-full '>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="service" 
                                    >Especialidad</label>
                                  <select
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    {...register("service")}
                                    >
                                      <option value=""></option>
                                      <option value="Psicólogo">Psicólogo</option>
                                      <option value="Psicóloga">Psicóloga</option>
                                      <option value="Psicoterapeuta">Psicoterapeuta</option>
                                      <option value="Odontologo">Odontologo</option>
                                      <option value="Nutricionista">Nutricionista</option>
                                      <option value="Médico General">Médico General</option>
                                      <option value="Médico Urólogo">Médico Urólogo</option>
                                      <option value="Médico Dermatógolo">Médico Dermatógolo</option>
                                      <option value="Médico Psiquiatra">Médico Psiquiatra</option>
                                      <option value="Médico Pediatra">Médico Pediatra</option>
                                      <option value="Médico Endocrinólogo">Médico Endocrinólogo</option>
                                      <option value="Médico Neurocirujano">Médico Neurocirujano</option>
                                      <option value="Médico Ginecólogo Obstetra">Médico Ginecólogo Obstetra</option>
                                      <option value="Médico Cirujano">Médico Cirujano</option>
                                      <option value="Médico Cardiólogo">Médico Cardiólogo</option>
                                      <option value="Medicina Estética">Medicina Estética</option>
                                      <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
                                      <option value="Terapeuta">Terapeuta</option>
                                      <option value="Cosmetóloga">Cosmetóloga</option>
                                      <option value="Cosmetólogo">Cosmetólogo</option>                              
                                  </select>
                                  {
                                    errors.service && <span className='text-red-500'>El nombre es requerido</span>
                                  }
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="professionalDescription" 
                                    >Descripción Profesional</label>
                                  <input
                                    type="textarea"
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    {...register("professionalDescription")}
                                    placeholder='¡Permite que tus pacientes te conozcan! dales una breve descripción sobre quien eres, años de experiencia, estudios o incluso hobbies.'
                                    cols={40}
                                    rows={6}
                                    />
                                  {
                                    errors.textarea && <span className='text-red-500'>El nombre es requerido</span>
                                  }                                
                                  
                            </div>
                            <div className='flex flex-col mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="telephone" 
                                    >Teléfono</label>
                                  <div className='flex'>
                                    <h2 className='flex items-center border-2 border-[#ADADAD]-500 rounded-l-lg p-2'>+58</h2>
                                    <input
                                      className='w-48 border-solid border-2 border-[#ADADAD]-500 rounded-r-lg p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                      type="text"
                                      {...register("telephone")}
                                      placeholder="4147865643"
                                      />
                                      {
                                        errors.telephone && <span className='text-red-500'>El nombre es requerido</span>
                                      }  
                                  </div>
                                  
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="gender" 
                                    >Sexo</label>
                                  <select
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    {...register("gender")}
                                    >
                                      <option value="Masculino">M</option>
                                      <option value="Femenino">F</option>
                                  </select>
                                  {
                                    errors.gender && <span className='text-red-500'>El nombre es requerido</span>
                                  }                                    
                            </div>
                            <div className='text-center text-lg my-6 text-two-500 font-semibold'>
                              <h2>Ubicación Profesional</h2>
                            </div>
                            <div className='flex justify-center flex-col sm:flex-row'>
                                <div className='flex flex-col mb-4 sm:mr-4'>
                                      <label 
                                        className='text-one-500 mb-1'
                                        htmlFor="city" 
                                        >Estado</label>
                                      <input
                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                        type='text'
                                        {...register("city")}
                                        />
                                        {
                                          errors.city && <span className='text-red-500'>El nombre es requerido</span>
                                        } 
                                </div>
                                <div className='flex flex-col mb-4'>
                                      <label 
                                        className='text-one-500 mb-1'
                                        htmlFor="town" 
                                        >Ciudad o Pueblo</label>
                                      <input
                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                        {...register("town")}
                                        />
                                        {
                                          errors.town && <span className='text-red-500'>El nombre es requerido</span>
                                        } 
                                </div>
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="address" 
                                    >Dirección</label>
                                  <input
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    {...register("address")}
                                    />
                                  {
                                    errors.address && <span className='text-red-500'>El nombre es requerido</span>
                                  }
                            </div>
                      </div>
                        <button 
                          type="submit"
                          className='w-full bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none'
                          >
                          Guardar
                        </button>
                      <div>
                      </div>
                  </div>
              </form>
          </div>
  </>
)
}