import { StepsTypes } from './types'

import * as S from './styles'

const Sidebar = () => {
    const steps: StepsTypes[] = [
        {
            id: 1,
            name: 'Step 1',
            content: 'Your Info',
            state: 'active',
        },
        {
            id: 2,
            name: 'Step 2',
            content: 'Select Plan',
            state: 'disabled',
        },
        {
            id: 3,
            name: 'Step 3',
            content: 'Add-ons',
            state: 'disabled',
        },
        {
            id: 4,
            name: 'Step 4',
            content: 'Summary',
            state: 'disabled',
        },
    ]

    return (
        <S.Wrapper>
            {steps.map(({ id, name, content, state }) => (
                <S.Step key={name}>
                    <S.WrapperStepNumber state={state}>
                        <S.Number>{id}</S.Number>
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
