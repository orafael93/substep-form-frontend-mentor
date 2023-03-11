import * as S from './styles'

const Step4 = () => {
    return (
        <S.Wrapper>
            <S.StepTitle>Finishing up</S.StepTitle>
            <S.StepDescription>
                Double-check everything looks OK before confirming
            </S.StepDescription>

            <S.WrapperSelectedContent>
                <S.WrapperStepContent>
                    <S.WrapperNameSelectedContent>
                        <S.Name>Arcade (Monthly)</S.Name>
                        <S.Price>Change</S.Price>
                    </S.WrapperNameSelectedContent>
                    <S.WrapperSelectedPrice>
                        <S.SelectedPrice>$9/mo</S.SelectedPrice>
                    </S.WrapperSelectedPrice>
                </S.WrapperStepContent>
            </S.WrapperSelectedContent>
        </S.Wrapper>
    )
}

export default Step4
