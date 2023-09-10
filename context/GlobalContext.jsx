"use client"
import React, {createContext, useContext, useState} from 'react'

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

    return (
        <GlobalContext.Provider value={{
            currentUser, 
            setCurrentUser,
            infoUser,
            setInfoUser, 
            stepRegister, 
            setStepRegister,
            allServices,
            setAllServices
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
