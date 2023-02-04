import { TypeOfPlans } from '../Step2'

export type PlanPropTypes = {
    name: TypeOfPlans
    price: number
    icon: any
    planSelected: boolean
    typeOfPayment: 'mo' | 'yr'
    onSelectPlan: (selectedPlan: TypeOfPlans) => void
}
