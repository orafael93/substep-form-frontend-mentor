import { ReactNode, useReducer, useState } from 'react'

import {
    AddonsType,
    GlobalContext,
    InfoType,
    Plan,
} from '@/context/GlobalContext'
import { initDefaultSteps } from '@/utils/initDefaultSteps'
import { StepNameType, StepsType } from '@/components/Sidebar/types'
import { handleNavigation } from '@/utils/handleNavigation'

type GlobalProviderType = {
    children: ReactNode
}

export type StepsActions =
    | {
          type: 'activeStep'
          payload: StepNameType
      }
    | {
          type: 'completeStep'
          payload: StepNameType
      }

const activeNextStep = (steps: StepsType[], stepIndexToActive: number) => {
    const isLastStep = steps.length === stepIndexToActive

    if (!isLastStep) {
        steps[stepIndexToActive].state = 'active'
    }

    return steps
}

const completeStep = (
    steps: StepsType[],
    stepNameToComplete: StepNameType
): StepsType[] => {
    const indexStepToComplete = steps.findIndex(
        (step) => step.id === stepNameToComplete
    )

    const mappedSteps: StepsType[] = steps.map((step) => {
        if (step.id === stepNameToComplete) {
            return { ...step, state: 'completed' }
        }

        return step
    })

    return activeNextStep(mappedSteps, indexStepToComplete + 1)
}

const activeStep = (steps: StepsType[], stepNameToActive: StepNameType) => {
    const { completedSteps } = handleNavigation()

    const mappedSteps: StepsType[] = steps.map((step) => {
        const currentStep = steps.find(
            (currentStep) => currentStep.state === 'active'
        )

        if (step.id === stepNameToActive) {
            return { ...step, state: 'active' }
        }

        if (step.state === 'active' && !completedSteps.has(currentStep?.id)) {
            return { ...step, state: 'disabled' }
        }

        if (completedSteps.has(step?.id)) {
            return { ...step, state: 'completed' }
        }

        return step
    })

    return mappedSteps
}

export const GlobalProvider = ({ children }: GlobalProviderType) => {
    const initialSteps = initDefaultSteps()

    const stepsReducer = (
        state: StepsType[],
        action: StepsActions
    ): StepsType[] => {
        switch (action.type) {
            case 'activeStep':
                return activeStep(state, action.payload)
            case 'completeStep':
                return completeStep(state, action.payload)
            default:
                return state
        }
    }

    const states = {
        infoModule: useState<InfoType>(),
        planModule: useState<Plan>(),
        addonsModule: useState<AddonsType[]>([]),
        stepsModule: useReducer(stepsReducer, initialSteps),
        completedFormModule: useState(false),
    }

    return (
        <GlobalContext.Provider value={states}>
            {children}
        </GlobalContext.Provider>
    )
}
