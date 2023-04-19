import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

export const useGlobalState = () => {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Error(
            'useGlobalContext must be within a GlobalContextProvider'
        )
    }

    return context
}
