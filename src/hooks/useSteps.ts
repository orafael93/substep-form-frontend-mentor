import { StepNameType } from '@/components/Sidebar/types'
import { useGlobalState } from '@/hooks/useGlobalState'
import { handleNavigation } from '@/utils/handleNavigation'

export const useSteps = () => {
    const { stepsModule } = useGlobalState()
    const [steps, dispatchSteps] = stepsModule
    const { updateCompleteStep } = handleNavigation()

    const onActiveStep = (stepNameToActive: StepNameType) => {
        dispatchSteps({ type: 'activeStep', payload: stepNameToActive })
    }

    const onCompleteStep = (stepNameToComplete: StepNameType) => {
        dispatchSteps({ type: 'completeStep', payload: stepNameToComplete })
        updateCompleteStep(stepNameToComplete)
    }

    return {
        steps,
        onActiveStep,
        onCompleteStep,
    }
}
