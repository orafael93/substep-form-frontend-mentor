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

    return (
        <S.Wrapper>
            {steps.map(({ id, name, content, state, slug }) => (
                <S.Step
                    key={name}
                    onClick={() => {
                        if (state === 'disabled') return

                        handleActiveStep(id)
                    }}
                >
                    <S.WrapperStepNumber state={state}>
                        <S.Number>{slug}</S.Number>
                    </S.WrapperStepNumber>
                    <S.StepContent>
                        <S.StepName>{name}</S.StepName>
                        <S.StepDescription>{content}</S.StepDescription>
                    </S.StepContent>
                </S.Step>
            ))}
        </S.Wrapper>
    )
}
