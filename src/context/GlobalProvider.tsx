import { ReactNode, useContext } from 'react'

import { GlobalContext } from './GlobalContext'

type GlobalProviderTypes = {
    children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProviderTypes) => {
    const value = {}

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => {
    const state = useContext(GlobalContext)

    if (!state) {
        throw new Error(
            'useGlobalState must be within a useGlobalState provider'
        )
    }

    return state
}
