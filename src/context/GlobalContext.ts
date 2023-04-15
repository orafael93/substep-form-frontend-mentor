import { createContext } from 'react'
import { StepsTypes } from '../components/Sidebar/types'

export type GlobalContextStates = {
    steps: StepsTypes[]
}

export const GlobalContext = createContext<GlobalContextStates>(
    {} as GlobalContextStates
)
