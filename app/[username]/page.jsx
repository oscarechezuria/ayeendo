"use client"

import { useParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {getUsers, existsUserName, getProfilePhotoUrl} from "../../firebase/firebase"


export default function page() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [infoUser, setInfoUser] = useState({})
    const [profileUrl, setProfileUrl] = useState(null)

    const params = useParams()
    const username = params.username
    

    useEffect(() => {
        catchUid(username)
    }, [username]);
    
    
    const catchUid = async (username) => {
        const currentId = await existsUserName(username)
        const infoCurrentUser = await getUsers(currentId)
        const infoUser = infoCurrentUser[0]
        const url = await getProfilePhotoUrl(infoUser.profilePicture);
        setProfileUrl(url)
        
    }


    /* eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        catchUid(username)
    }, [username]);
    
    /*
    const catchUid = async (username) => {
        const currentId = await existsUserName(username)
        console.log(currentId)
        const infoCurrentUser = await getUsers(currentId)
        setInfoUser(infoCurrentUser)
        const getInfo = await getInfoUser("Kjst2tLQONoRV3ooPnOQ")
        setGetInfoUser(getInfo)
        
    }
    */


    return (
        <>
        <div>Estoy en la pagina dinamica</div>
        <div className='flex flex-col items-center justify-center mt-6'>
        <div>
            <div>
            <div className='mt-2'>
                <img src={profileUrl} alt="" width={130} height={130} className='m-auto rounded-full'/>
            </div>
        </div>
        </div>
        </div>
        </>

)
}
