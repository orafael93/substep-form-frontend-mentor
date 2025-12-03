import { StepNameType } from '@/components/Sidebar/types'
import { useGlobalState } from '@/hooks/useGlobalState'

export const useSteps = () => {
    const { stepsModule } = useGlobalState()
    const [steps, dispatchSteps] = stepsModule

    const onActiveStep = (stepNameToActive: StepNameType) => {
        dispatchSteps({ type: 'activeStep', payload: stepNameToActive })
    }

    const onCompleteStep = (stepNameToComplete: StepNameType) => {
        dispatchSteps({ type: 'completeStep', payload: stepNameToComplete })
    }

    return {
        steps,
        onActiveStep,
        onCompleteStep,
    }
}
