import { useSteps } from '@/hooks/useSteps'
import { StepNameType } from '@/components/Sidebar/types'
import { useCompletedForm } from '@/hooks/useCompletedForm'

import * as S from './styles'

export const Sidebar = () => {
    const { steps, onActiveStep } = useSteps()
    const { completedForm } = useCompletedForm()

    const handleActiveStep = (idStepToActive: StepNameType) => {
        if (completedForm) return
        onActiveStep(idStepToActive)
    }

    const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
        const enabledSteps = steps.filter(step => step.state !== 'disabled')
        const currentEnabledIndex = enabledSteps.findIndex(step => step.id === steps[currentIndex].id)
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault()
            const nextIndex = currentEnabledIndex + 1
            if (nextIndex < enabledSteps.length) {
                const nextStep = enabledSteps[nextIndex]
                handleActiveStep(nextStep.id)
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault()
            const prevIndex = currentEnabledIndex - 1
            if (prevIndex >= 0) {
                const prevStep = enabledSteps[prevIndex]
                handleActiveStep(prevStep.id)
            }
        }
    }

    return (
        <S.Wrapper as="nav" aria-label="Form steps">
            <S.StepsList role="list">
                {steps.map(({ id, name, content, state, slug }, index) => {
                    const isDisabled = state === 'disabled'
                    const isActive = state === 'active'
                    
                    return (
                        <S.StepItem key={name} role="listitem">
                            <S.Step
                                onClick={() => {
                                    if (isDisabled) return
                                    handleActiveStep(id)
                                }}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                disabled={isDisabled}
                                aria-current={isActive ? 'step' : undefined}
                                aria-disabled={isDisabled}
                                aria-label={`Step ${slug}: ${content}${isActive ? ', current step' : ''}${isDisabled ? ', not available yet' : ''}`}
                                tabIndex={isDisabled ? -1 : 0}
                            >
                                <S.WrapperStepNumber state={state} aria-hidden="true">
                                    <S.Number>{slug}</S.Number>
                                </S.WrapperStepNumber>
                                <S.StepContent>
                                    <S.StepName>{name}</S.StepName>
                                    <S.StepDescription>{content}</S.StepDescription>
                                </S.StepContent>
                            </S.Step>
                        </S.StepItem>
                    )
                })}
            </S.StepsList>
        </S.Wrapper>
    )
}
