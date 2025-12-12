import { useSteps } from '@/hooks/useSteps'
import { StepsWrapper } from '@/components/StepsWrapper'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { useValidateName } from '@/hooks/useValidateName'
import { useValidateEmail } from '@/hooks/useValidateEmail'
import { useValidateCellphone } from '@/hooks/useValidateCellphone'

import * as S from './styles'

export const PersonalInfo = () => {
    const { onCompleteStep } = useSteps()
    const { onUpdatePersonalInfo } = usePersonalInfo()
    const {
        name,
        nameError,
        nameState,
        onUpdateName,
        onStartValidateNameOnBlur,
    } = useValidateName()
    const {
        email,
        emailError,
        emailState,
        onUpdateEmail,
        onStartValidateEmailOnBlur,
    } = useValidateEmail()
    const {
        cellphone,
        cellphoneState,
        cellphoneError,
        onUpdateCellphone,
        onStartValidateCellphoneOnBlur,
    } = useValidateCellphone()

    const canGoToNextStep = [nameState, emailState, cellphoneState].every(
        (field) => field === 'success'
    )

    const onGoToNextStep = () => {
        onCompleteStep('info')
        onUpdatePersonalInfo({
            name,
            email,
            cellphone,
        })
    }

    return (
        <StepsWrapper>
            <S.StepTitle>Personal info</S.StepTitle>
            <S.StepDescription>
                Prease provide your name, email adress, and phone number
            </S.StepDescription>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Name</S.Label>
                    {nameError.hasError && (
                        <S.RequiredFieldText>
                            {nameError.message}
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    id="name"
                    placeholder="e.g Stephen King"
                    value={name}
                    error={nameError.hasError || nameState === 'error'}
                    onChange={(e) => {
                        onUpdateName(e.target.value)
                    }}
                    onBlur={() => {
                        if (name.length < 2) {
                            onStartValidateNameOnBlur()
                        }
                    }}
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Email Address</S.Label>
                    {emailError.hasError && (
                        <S.RequiredFieldText>
                            {emailError.message}
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    type="email"
                    id="name"
                    placeholder="e.g stephenking@lorem.com"
                    value={email}
                    error={emailError.hasError || emailState === 'error'}
                    onChange={(e) => onUpdateEmail(e.target.value)}
                    onBlur={() => {
                        onStartValidateEmailOnBlur()
                    }}
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Phone number</S.Label>

                    {cellphoneError.hasError && (
                        <S.RequiredFieldText>
                            {cellphoneError.message}
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    id="cellphone"
                    placeholder="e.g +1 234 567 890"
                    value={cellphone}
                    error={
                        cellphoneError.hasError || cellphoneState === 'error'
                    }
                    onChange={(e) => onUpdateCellphone(e.target.value)}
                    onBlur={() => {
                        onStartValidateCellphoneOnBlur()
                    }}
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.NextStepWrapper>
                <S.Button disabled={!canGoToNextStep} onClick={onGoToNextStep}>
                    Next Step
                </S.Button>
            </S.NextStepWrapper>
        </StepsWrapper>
    )
}
