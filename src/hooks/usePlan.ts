import { Plan } from '../context/GlobalContext'
import { useGlobalState } from './useGlobalState'

export const usePlan = () => {
    const { planModule } = useGlobalState()
    const [plan, updatePlan] = planModule

    const onUpdatePlan = (planToUpdate: Plan) => {
        updatePlan(planToUpdate)
    }

    return {
        plan,
        onUpdatePlan,
    }
}
