'use client'

import { ReactNode, useContext, createContext, useState } from "react"

export type ContextType = {
    user: boolean | null,
    login: () => void,
    logout: () => void,
}

export const AppContext = createContext<ContextType>(
    {
        user: null,
        login: () => {},
        logout: () => {}
    }   
)
type props = {
    children: ReactNode,
}

export function AppWrapper ({ children } : props ) {
    const [user, setUser] = useState<boolean | null>(null)

    const login = () => {
        setUser(true)
    }

    const logout = () => {
        setUser(false)
    }

    return(
        <AppContext.Provider value={{ user, login, logout }}>
            {children}
        </AppContext.Provider>
    )
}
