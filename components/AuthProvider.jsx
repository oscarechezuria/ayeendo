"use client"
import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth, getInfoUser, getUsers, registerNewUser, userExists} from "../firebase/firebase"
import {useContextGlobal} from "@/context/GlobalContext"

export default function AuthProvider({children, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered}) {

    const { setCurrentUser, setInfoUser} = useContextGlobal()

    useEffect(() =>{


        onAuthStateChanged(auth, async(user) => {

            if(user){

                setCurrentUser(user)
                console.log(user)
                const isRegistered = await userExists(user.uid)

                if (isRegistered) {
                    const infoUser = await getInfoUser(user.uid)
                    setInfoUser(infoUser)
                    console.log(infoUser)

                    if (!infoUser.processCompleted) {
                        onUserNotRegistered(user)
                    }else{
                        onUserLoggedIn(user)
                    }
                    
                }else{
                    await registerNewUser({
                        uid: user.uid,
                        displayName: user.displayName,
                        profilePicture: '',
                        username: '',
                        processCompleted: false
                    })
                    
                    const info = await getInfoUser(user.uid)
                    setInfoUser(info)
                    console.log(info)
                }


            }else{
                onUserNotLoggedIn();
            }
        })

    },[onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered])

    return (
        <div>{children}</div>
    )
}
