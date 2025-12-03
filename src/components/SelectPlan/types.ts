import { PlanType } from '@/context/GlobalContext'

export type TypeOfPlansType = PlanType

export type PlansType = {
    name: TypeOfPlansType
    price: number
    icon?: JSX.Element
}
