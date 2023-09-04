"use client"
import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as Yup from "yup"
import Link from 'next/link'
import {FaWhatsapp, FaInstagram, FaTiktok} from "react-icons/fa"

export default function socialNetworks() {

    const [dbResponse, setDbResponse] = useState(
            {
            whatsapp: "4142290943",
            instagram: "oscar_13",
            tiktok: "oscar15",
            }
        )
        
        return (
            <Formik
                initialValues={{
                whatsapp: dbResponse.whatsapp,
                instagram: dbResponse.instagram,
                tiktok: dbResponse.tiktok,
                checkWhatsapp: true,
                checkInstagram: true,
                checkTiktok: true,
                }}
                validationSchema={Yup.object({
                whatsapp: Yup.string().max(10, "Solo son máximo 10 números").matches(/^([0-9])*$/, "Este campo solo permite número"),
                })}
                onSubmit={(values) => {
                console.log(values)
                }}
            >
        
                {
                ({errors, values}) => (

                    <div className="flex-grow">
                        <div className='flex justify-center mb-10 mt-8'>
                            <div className='mr-12 p-2 hover:text-two-500 hover:border-two-500 border-b-4'>
                            <Link href={"/admin/profile"}>General</Link>
                            </div>
                            <div className='p-2 border-two-500 border-b-4 text-two-500'>
                            <Link href={"/admin/socialNetworks"}>Redes sociales</Link>
                            </div>
                        </div>
                        <Form className='flex justify-center mt-16'>  
                            <div className='flex justify-center flex-col'>
                                <div className='flex justify-center flex-col'>
                                    <div className='flex  mb-4 sm:mr-4'>
                                            <Field
                                            className='mr-4'
                                            type="checkbox"
                                            name="checkWhatsapp" 
                                            />
                                            <div className='flex items-center mr-4'>
                                            <FaWhatsapp className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            values.checkWhatsapp 
                                            ?
                                                <div className='flex flex-col'>
                                                <Field
                                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                    name='whatsapp'
                                                    type='text'
                                                    id='whatsapp'
                                                    placeholder='+584147231955' />
                                                <ErrorMessage name="whatsapp" component={() => (<div className='text-red-500'>{errors.whatsapp}</div>)} />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                                }
                                    </div>
                                    <div className='flex  mb-4 sm:mr-4'>
                                            <Field
                                            className='mr-4'
                                            type="checkbox"
                                            name="checkInstagram" 
                                            />
                                            <div className='flex items-center mr-4'>
                                            <FaInstagram className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            values.checkInstagram
                                            ?
                                                <div className='flex flex-col'>
                                                <Field
                                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                    name='instagram'
                                                    type='text'
                                                    id='instagram'
                                                    placeholder='oscar' />
                                                <ErrorMessage name="instagram" component={() => (<div className='text-red-500'>{errors.instagram}</div>)} />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                                }
                                    </div>
                                    <div className='flex  mb-16 sm:mr-4'>
                                            <Field
                                            className='mr-4'
                                            type="checkbox"
                                            name="checkTiktok" 
                                            />
                                            <div className='flex items-center mr-4'>
                                            <FaTiktok className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            values.checkTiktok
                                            ?
                                                <div className='flex flex-col'>
                                                <Field
                                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                    name='tiktok'
                                                    type='text'
                                                    id='tiktok'
                                                    placeholder='oscar' />
                                                <ErrorMessage name="tiktok" component={() => (<div className='text-red-500'>{errors.tiktok}</div>)} />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                                }
                                    </div>
                                    <div>
                                        <button 
                                        type="submit"
                                        className='w-full bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none'
                                        >
                                        Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                        </div>

                )
                }
            </Formik>
        )
    
}
