"use client"
import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup"
import Link from 'next/link'

export default function Profile() {
  
  const [valores, setValores] = useState(
    {
      firstName: "a",
      lastName: "a",
      service: "Odontologo",
      professionalDescription: "a",
      telephone: "a",
      gender: "Femenino",
      city: "a",
      town: "a",
      address:"a"
    }
  )
  console.log(valores)

  return(
  <>
    <Formik
      initialValues={{
          firstName: valores.firstName,
          lastName: valores.lastName,
          service: valores.service,
          professionalDescription: valores.professionalDescription,
          telephone: valores.telephone,
          gender: valores.gender,
          city: valores.city,
          town: valores.town,
          address: valores.address
        }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El apellido es requerido"),
        service: Yup.string(),
        professionalDescription: Yup.string(),
        telephone: Yup.string().max(10, "Solo son maximo 10 numeros").matches(/^([0-9])*$/, "Este campo solo permite números"),
        gender: Yup.string(),
        city: Yup.string(),
        town: Yup.string(),
        address: Yup.string() 
      })}
      onSubmit={(values) => {
        setValores(values)
      }}
    >
      
    {({errors}) => (

          <div className="overflow-auto ">
              <div className='flex justify-center mb-10 mt-8'>
                  <div className='mr-12 p-2 border-two-500 border-b-4 text-two-500'>
                    <Link href={"/admin/Profile"}>General</Link>
                  </div>
                  <div className='p-2 hover:text-two-500 hover:border-two-500 border-b-4'>
                    <Link href={"/admin/socialNetworks"}>Redes sociales</Link>
                  </div>
              </div>
              <Form className='flex justify-center mb-12'>
                  <div className='flex justify-center flex-col'>
                      <div className='flex justify-center flex-col sm:flex-row'>
                          <div className='flex flex-col mb-4 sm:mr-4'>
                                <label 
                                  className='text-one-500 mb-1'
                                  htmlFor="firstName" 
                                  >Nombre</label>
                                <Field
                                  className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                  name='firstName'
                                  id='firstName'
                                  placeholder='Escriba su nombre'
                                  />
                                  <ErrorMessage name="firstName" component={() => (<div className='text-red-500'>{errors.firstName}</div>)}/>
                          </div>
                          <div className='flex flex-col mb-4'>
                                <label 
                                  className='text-one-500 mb-1'
                                  htmlFor="lastName" 
                                  >Apellido</label>
                                  {
                                    

                                  }
                                <Field
                                  className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                  name='lastName'
                                  id='lastName'
                                  placeholder='Escriba su apellido'
                                  />
                                  <ErrorMessage name="lastName" component={() => (<div className='text-red-500'>{errors.lastName}</div>)}/>
                          </div>
                      </div>
                      <div className='flex justify-center flex-col'>
                            <div className='flex justify-center flex-col m-auto mb-4 sm:w-full '>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="service" 
                                    >Especialidad</label>
                                  <Field
                                    as="select"
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    name='service'
                                    id='service'
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
                                  </Field>
                                  <ErrorMessage name="service" component={() => (<div className='text-red-500'>{errors.service}</div>)}/>
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="professionalDescription" 
                                    >Descripción Profesional</label>
                                  <Field
                                    as="textarea"
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    name='professionalDescription'
                                    id='professionalDescription'
                                    placeholder='¡Permite que tus pacientes te conozcan! dales una breve descripción sobre quien eres, años de experiencia, estudios o incluso hobbies.'
                                    cols={40}
                                    rows={6}
                                    >
                                  </Field>
                                  <ErrorMessage name="professionalDescription" component={() => (<div className='text-red-500'>{errors.professionalDescription}</div>)}/>
                            </div>
                            <div className='flex flex-col mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="telephone" 
                                    >Teléfono</label>
                                  <div className='flex'>
                                    <h2 className='flex items-center border-2 border-[#ADADAD]-500 rounded-l-lg p-2'>+58</h2>
                                    <Field
                                      type="text"
                                      className='w-48 border-solid border-2 border-[#ADADAD]-500 rounded-r-lg p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                      name='telephone'
                                      id='telephone'
                                      placeholder="4147865643"
                                      />
                                  </div>
                                  <ErrorMessage name="telephone" component={() => (<div className='text-red-500'>{errors.telephone}</div>)}/>
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="gender" 
                                    >Sexo</label>
                                  <Field
                                    as="select"
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    name='gender'
                                    id='gender'
                                    >
                                      <option value="Masculino">M</option>
                                      <option value="Femenino">F</option>
                                  </Field>
                                  <ErrorMessage name="gender" component={() => (<div className='text-red-500'>{errors.gender}</div>)}/>
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
                                      <Field
                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                        name='city'
                                        id='city'
                                        />
                                        <ErrorMessage name="city" component={() => (<div className='text-red-500'>{errors.city}</div>)}/>
                                </div>
                                <div className='flex flex-col mb-4'>
                                      <label 
                                        className='text-one-500 mb-1'
                                        htmlFor="town" 
                                        >Ciudad o Pueblo</label>
                                      <Field
                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                        name='town'
                                        id='town'
                                        />
                                        <ErrorMessage name="town" component={() => (<div className='text-red-500'>{errors.town}</div>)}/>
                                </div>
                            </div>
                            <div className='flex flex-col m-auto mb-4 sm:w-full'>
                                  <label 
                                    className='text-one-500 mb-1'
                                    htmlFor="address" 
                                    >Dirección</label>
                                  <Field
                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500 sm:w-full'
                                    name='address'
                                    id='address'
                                    >
                                  </Field>
                                  <ErrorMessage name="address" component={() => (<div className='text-red-500'>{errors.address}</div>)}/>
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
              </Form>
          </div>

        )}
    </Formik>
  </>
)
}
