import { ReactNode, useReducer, useState } from 'react'

import { Addons, GlobalContext, InfoTypes, Plan } from './GlobalContext'
import { initDefaultSteps } from '../utils/initDefaultSteps'
import { StepName, StepsTypes } from '../components/Sidebar/types'

type GlobalProviderTypes = {
    children: ReactNode
}

export type StepsActions =
    | {
          type: 'activeStep'
          payload: StepName
      }
    | {
          type: 'completeStep'
          payload: StepName
      }

const activeNextStep = (steps: StepsTypes[], stepIndexToActive: number) => {
    const isLastStep = steps.length === stepIndexToActive

    if (!isLastStep) {
        steps[stepIndexToActive].state = 'active'
    } else {
        console.log('Último step')
    }

    return steps
}

const completeStep = (
    steps: StepsTypes[],
    stepNameToComplete: StepName
): StepsTypes[] => {
    const indexStepToComplete = steps.findIndex(
        (step) => step.id === stepNameToComplete
    )

    const mappedSteps: StepsTypes[] = steps.map((step) => {
        if (step.id === stepNameToComplete) {
            return { ...step, state: 'completed' }
        }

        return step
    })

    return activeNextStep(mappedSteps, indexStepToComplete + 1)
}

const activeStep = (steps: StepsTypes[], stepNameToActive: StepName) => {
    const nextStepToActive = steps.find((step) => step.id === stepNameToActive)

    if (nextStepToActive?.state === 'disabled') {
        return steps
    }

    const mappedSteps: StepsTypes[] = steps.map((step) => {
        if (step.id === stepNameToActive) {
            return { ...step, state: 'active' }
        }

        if (step.state === 'active') {
            return { ...step, state: 'disabled' }
        }

        return step
    })

    return mappedSteps
}

export const GlobalProvider = ({ children }: GlobalProviderTypes) => {
    const initialSteps = initDefaultSteps()

    const stepsReducer = (
        state: StepsTypes[],
        action: StepsActions
    ): StepsTypes[] => {
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
        infoModule: useState<InfoTypes>(),
        planModule: useState<Plan>(),
        addonsModule: useState<Addons[]>([]),
        stepsModule: useReducer(stepsReducer, initialSteps),
        completedFormModule: useState(false),
    }

    return (
        <GlobalContext.Provider value={states}>
            {children}
        </GlobalContext.Provider>
    )
}
