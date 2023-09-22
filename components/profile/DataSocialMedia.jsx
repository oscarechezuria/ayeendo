"use client"
import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {FaWhatsapp, FaInstagram, FaTiktok} from "react-icons/fa"
import {insertUserSocialMedia, getUserSocialMedia} from '@/firebase/firebase'
import {v4 as uuidv4} from "uuid"

export default function socialNetworks({infoUser}) {

    const {register, handleSubmit, reset, formState: {errors}, watch } = useForm()
    const [dataSocialMedia, setDataSocialMedia] = useState(null)


    useEffect(() =>{
            async function data(infoUser) {
            const getSocialMedia = await getUserSocialMedia(infoUser.uid)
            setDataSocialMedia(getSocialMedia)
            }
            data(infoUser)
        },[infoUser])
    
    
        useEffect(() =>{
            reset(dataSocialMedia)
        },[dataSocialMedia])

    const onsubmit = handleSubmit((data) => {
        const newDataSocialMedia = {
            id: uuidv4(),
            checkWhatsapp: data.checkWhatsapp,
            checkInstagram: data.checkInstagram,
            checkTiktok: data.checkTiktok,
            whatsapp: data.whatsapp,
            instagram: data.instagram,
            tiktok: data.tiktok,
            uid: infoUser.uid
        }

        const res = insertUserSocialMedia(newDataSocialMedia)
        newDataSocialMedia.docId = res.id
        console.log("Información enviada con exito")
    })

        return (
            
                    <div className="flex-grow">
                        <form className='flex justify-center mt-6' onSubmit={onsubmit}>  
                            <div className='flex justify-center flex-col'>
                                <div className='flex justify-center flex-col'>
                                    <div className='flex  mb-4 sm:mr-4'>
                                            <input
                                                className='mr-4'
                                                type="checkbox"
                                                {...register("checkWhatsapp")}
                                            />
                                            <div className='flex items-center mr-4'>
                                                <FaWhatsapp className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            watch("checkWhatsapp")
                                            ?
                                                <div className='flex flex-col'>
                                                    <input
                                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                        type='text'
                                                        placeholder='+584147231955'
                                                        {...register("whatsapp")}
                                                        />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                            }
                                    </div>
                                    <div className='flex  mb-4 sm:mr-4'>
                                            <input
                                                className='mr-4'
                                                type="checkbox"
                                                {...register("checkInstagram")}
                                            />
                                            <div className='flex items-center mr-4'>
                                                <FaInstagram className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            watch("checkInstagram")
                                            ?
                                                <div className='flex flex-col'>
                                                    <input
                                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                        type='text'
                                                        placeholder='+584147231955'
                                                        {...register("instagram")}
                                                        />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                            }
                                    </div>
                                    <div className='flex  mb-16 sm:mr-4'>
                                            <input
                                                className='mr-4'
                                                type="checkbox"
                                                {...register("checkTiktok")}
                                            />
                                            <div className='flex items-center mr-4'>
                                                <FaTiktok className='text-2xl text-one-500'/>
                                            </div>
                                            {
                                            watch("checkTiktok")
                                            ?
                                                <div className='flex flex-col'>
                                                    <input
                                                        className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                        type='text'
                                                        placeholder='+584147231955'
                                                        {...register("tiktok")}
                                                        />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                            }
                                    </div>
                                    <div className='mb-12'>
                                        <button 
                                        type="submit"
                                        className='w-full bg-two-500 rounded-lg text-white p-2 text-xl focus:outline-none'
                                        >
                                        Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                )
    
}

/**
 *
 * {
                                            getFieldState("checkWhatsapp").isDirty
                                            ?
                                                <div className='flex flex-col'>
                                                <input
                                                    className='w-60 border-solid border-2 border-[#ADADAD]-500 rounded p-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                                                    type='text'
                                                    placeholder='+584147231955'
                                                    {...register("whatsapp")}
                                                    />
                                                <div name="whatsapp" component={() => (<div className='text-red-500'></div>)} />
                                                </div>
                                                :
                                                <h2 className='w-60 p-2'>No disponible</h2>
                                            }
 */