import { createContext } from 'react'

import { StepsType } from '@/components/Sidebar/types'
import { StepsActions } from '@/context/GlobalProvider'

export type InfoType = {
    name: string
    email: string
    cellphone: string
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

export type AddonsType = {
    type: AddonsTypes
    price: string
    frequency: Frequency
}

export type GlobalContextStates = {
    infoModule: [InfoType | undefined, React.Dispatch<InfoType>]
    planModule: [Plan | undefined, React.Dispatch<Plan>]
    addonsModule: [AddonsType[] | undefined, React.Dispatch<AddonsType[]>]
    stepsModule: [StepsType[], React.Dispatch<StepsActions>]
    completedFormModule: [boolean, React.Dispatch<boolean>]
}

export const GlobalContext = createContext<GlobalContextStates>(
    {} as GlobalContextStates
)
