"use client"
import React, {createContext, useContext, useState, useEffect} from 'react'
import { getAllServices } from '@/firebase/firebase'


export const GlobalContext = createContext()


export const useContextGlobal = () => {
    const context = useContext(GlobalContext)
    if(!context) throw new Error("useContextGlobal must used within a provider")
    return context
}

export default function GlobalProvider({children}) {

    const [currentUser, setCurrentUser] = useState({})
    const [infoUser, setInfoUser] = useState({})
    const [stepRegister, setStepRegister] = useState(1)
    const [allServices, setAllServices] = useState([])
    const [openSidebar, setOpenSidebar] = useState(true)



    useEffect( () => {
        async function data() {
            const res = await getAllServices(currentUser.uid)
            setAllServices(res)
        }
        data()
    }, [currentUser])


    return (
        <GlobalContext.Provider value={{
            currentUser, 
            setCurrentUser,
            infoUser,
            setInfoUser, 
            stepRegister, 
            setStepRegister,
            allServices,
            setAllServices,
            openSidebar,
            setOpenSidebar
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
