import { StepNameType } from '@/components/Sidebar/types'

const completedSteps = new Set()

export const handleNavigation = () => {
    const updateCompleteStep = (step: StepNameType) => {
        if (!completedSteps.has(step)) {
            completedSteps.add(step)
        }
    }

    return {
        completedSteps,
        updateCompleteStep,
    }
}
