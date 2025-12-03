import { createContext } from 'react'
import { StepsTypes } from '../components/Sidebar/types'
import { StepsActions } from './GlobalProvider'

export type InfoType = {
    name: string
    email: string
    phone: string
}

export type PlanType = 'arcade' | 'advanced' | 'pro'

export type Frequency = 'month' | 'year'

export type Plan = {
    type: PlanType
    price: number
    frequency: Frequency
}

export type AddonsTypes =
    | 'online-service'
    | 'larger-storage'
    | 'customizable-profile'

export type Addons = {
    type: AddonsTypes
    price: string
    frequency: Frequency
}

export type GlobalContextStates = {
    infoModule: [InfoType | undefined, React.Dispatch<InfoType>]
    planModule: [Plan | undefined, React.Dispatch<Plan>]
    addonsModule: [Addons[] | undefined, React.Dispatch<Addons[]>]
    stepsModule: [StepsTypes[], React.Dispatch<StepsActions>]
    completedFormModule: [boolean, React.Dispatch<boolean>]
}

export const GlobalContext = createContext<GlobalContextStates>(
    {} as GlobalContextStates
)
