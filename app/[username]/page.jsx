"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {getUsers, existsUserName, getUserInfo} from "../../firebase/firebase"


export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname()
    //console.log(pathname)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const searchParams = useSearchParams(pathname)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [infoUser, setInfoUser] = useState({})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [getinfoUser, setGetInfoUser] = useState({})


    const username = "oechezuria"


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        catchUid(username)
    }, [username]);
    
    
    const catchUid = async (username) => {
        const currentId = await existsUserName(username)
        console.log(currentId)
        const infoCurrentUser = await getUsers(currentId)
        setInfoUser(infoCurrentUser)
        const getInfo = await getUserInfo("Kjst2tLQONoRV3ooPnOQ")
        setGetInfoUser(getInfo)
        
    }
    console.log(infoUser)
    console.log(getinfoUser)

    


    return (
        <>
        <div>Estoy en la pagina dinamica</div>
        </>

)
}
