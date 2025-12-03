import { TypeOfPlansType } from '@/components/SelectPlan/types'

export type PlanType = {
    name: TypeOfPlansType
    price: number
    icon?: JSX.Element
    selectedPlan: boolean
    typeOfPayment: 'mo' | 'yr'
    onSelectPlan: (selectedPlan: TypeOfPlansType) => void
}
