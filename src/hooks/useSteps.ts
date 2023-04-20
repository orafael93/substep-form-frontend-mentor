import { StepName } from '../components/Sidebar/types'
import { useGlobalState } from './useGlobalState'

export const useSteps = () => {
    const { stepsModule } = useGlobalState()
    const [steps, dispatchSteps] = stepsModule

    const onActiveStep = (stepNameToActive: StepName) => {
        dispatchSteps({ type: 'activeStep', payload: stepNameToActive })
    }

    const onCompleteStep = (stepNameToComplete: StepName) => {
        dispatchSteps({ type: 'completeStep', payload: stepNameToComplete })
    }

    return {
        steps,
        onActiveStep,
        onCompleteStep,
    }
}
