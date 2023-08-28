"use client"
import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth, getInfoUser, registerNewUser, userExists} from "../firebase/firebase"
import {useContextGlobal} from "@/context/GlobalContext"

export default function AuthProvider({children, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered}) {

    const { setCurrentUser, setInfoUser} = useContextGlobal()

    useEffect(() =>{


        onAuthStateChanged(auth, async(user) => {

            if(user){

                // si user es true me lo colocas en el estado global
                setCurrentUser(user)

                const isRegistered = await userExists(user.uid)
                
                //si user esta registrado entras sino registras al usuario

                if (isRegistered) {
                    const infoUser = await getInfoUser(user.uid)
                    setInfoUser(infoUser)

                    if (!infoUser.processCompleted) {
                        onUserNotRegistered(user)
                    }else{
                        onUserLoggedIn(user)
                    }
                    
                }else{
                    await registerNewUser({
                        uid: user.uid,
                        profilePicture: '',
                        username: '',
                        processCompleted: false
                    })
                    
                    const info = await getInfoUser(user.uid)
                    setInfoUser(info)
                    
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
