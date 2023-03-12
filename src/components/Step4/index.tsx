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
                <S.WrapperAddons>
                    <S.WrapperAddon>
                        <S.AddonNameService>Online service</S.AddonNameService>
                        <S.AddonPrice>+10/yr</S.AddonPrice>
                    </S.WrapperAddon>
                    <S.WrapperAddon>
                        <S.AddonNameService>Larger storage</S.AddonNameService>
                        <S.AddonPrice>+20/yr</S.AddonPrice>
                    </S.WrapperAddon>
                </S.WrapperAddons>
            </S.WrapperSelectedContent>

            <S.WrapperTotalPrice>
                <S.PriceText>Total (per year)</S.PriceText>
                <S.PriceValue>$120/yr</S.PriceValue>
            </S.WrapperTotalPrice>

            <S.WrapperButtons>
                <S.BackButton>Go Back</S.BackButton>
                <S.Button>Confirm</S.Button>
            </S.WrapperButtons>
        </S.Wrapper>
    )
}

export default Step4
