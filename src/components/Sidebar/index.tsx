import { useCompletedForm } from '../../hooks/useCompletedForm'
import { useSteps } from '../../hooks/useSteps'

import * as S from './styles'
import { StepName } from './types'

const Sidebar = () => {
    const { steps, onActiveStep } = useSteps()
    const { completedForm } = useCompletedForm()

    const handleActiveStep = (idStepToActive: StepName) => {
        if (completedForm) return
        onActiveStep(idStepToActive)
    }

    return (
        <S.Wrapper>
            {steps.map(({ id, name, content, state, slug }) => (
                <S.Step key={name} onClick={() => handleActiveStep(id)}>
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

export default Sidebar
