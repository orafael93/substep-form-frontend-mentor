import { TypeOfPlans } from '../Step2'

export type PlanPropTypes = {
    name: TypeOfPlans
    price: number
    icon: JSX.Element
    planSelected: boolean
    typeOfPayment: 'mo' | 'yr'
    onSelectPlan: (selectedPlan: TypeOfPlans) => void
}
