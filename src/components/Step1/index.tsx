import * as S from './styles'

const Step1 = () => {
    return (
        <S.Wrapper>
            <S.StepTitle>Personal info</S.StepTitle>
            <S.StepDescription>
                Prease provide your name, email adress, and phone number
            </S.StepDescription>
            <S.WrapperInput>
                <S.Label htmlFor="name">Name</S.Label>
                <S.Input id="name" />
            </S.WrapperInput>
            <S.WrapperInput>
                <S.Label htmlFor="name">Email Address</S.Label>
                <S.Input type="email" id="name" />
            </S.WrapperInput>
            <S.WrapperInput>
                <S.Label htmlFor="name">Phone number</S.Label>
                <S.Input id="name" />
            </S.WrapperInput>
            <S.WrapperNextStep>
                <S.Button>Next Step</S.Button>
            </S.WrapperNextStep>
        </S.Wrapper>
    )
}

export default Step1
