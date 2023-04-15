import { useGlobalContext } from '../../hooks/useGlobalContext'

import * as S from './styles'

const Sidebar = () => {
    const { steps } = useGlobalContext()

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
