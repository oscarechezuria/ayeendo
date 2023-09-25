"use client"

import { useParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {existsUserName, getProfilePhotoUrl, getUserInfo} from "../../firebase/firebase"


export default function page() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [infoUser, setInfoUser] = useState({})
    const [profileUrl, setProfileUrl] = useState(null)
    console.log(infoUser)

    const params = useParams()
    const preUsername = params.username
    const username = preUsername.toLocaleLowerCase()
    

    useEffect(() => {
        getUserProfile(username)
    }, [username]);
    
    
    const getUserProfile = async (username) => {
        const currentId = await existsUserName(username)
        const infoCurrentUser = await getUserInfo(currentId)
        const url = await getProfilePhotoUrl(infoCurrentUser.profilePicture);
        setProfileUrl(url)
        
    }



    return (
        <>
        <div>Estoy en la pagina dinamica</div>
        <div className='flex flex-col items-center justify-center mt-6'>
        <div>
            <div>
            <div className='mt-2'>
                <img src={profileUrl} alt="" className='m-auto rounded-md w-64 h-90'/>  
            </div>
        </div>
        </div>
        </div>
        </>

)
}
