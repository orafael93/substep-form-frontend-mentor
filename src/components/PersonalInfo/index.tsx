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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (canGoToNextStep) {
            onGoToNextStep()
        }
    }

    return (
        <StepsWrapper>
            <S.StepTitle>Personal info</S.StepTitle>
            <S.StepDescription>
                Please provide your name, email address, and phone number.
            </S.StepDescription>
            <S.Form onSubmit={handleSubmit} noValidate aria-label="Personal information form">
                <S.InputWrapper>
                    <S.FieldLabelWrapper>
                        <S.Label htmlFor="name">Name</S.Label>
                        {nameError.hasError && (
                            <S.RequiredFieldText id="name-error" role="alert" aria-live="polite">
                                {nameError.message}
                            </S.RequiredFieldText>
                        )}
                    </S.FieldLabelWrapper>
                    <S.Input
                        id="name"
                        name="name"
                        type="text"
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
                        autoComplete="name"
                        aria-invalid={nameError.hasError || nameState === 'error'}
                        aria-describedby={nameError.hasError ? 'name-error' : undefined}
                        aria-required="true"
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.FieldLabelWrapper>
                        <S.Label htmlFor="email">Email Address</S.Label>
                        {emailError.hasError && (
                            <S.RequiredFieldText id="email-error" role="alert" aria-live="polite">
                                {emailError.message}
                            </S.RequiredFieldText>
                        )}
                    </S.FieldLabelWrapper>
                    <S.Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g stephenking@lorem.com"
                        value={email}
                        error={emailError.hasError || emailState === 'error'}
                        onChange={(e) => onUpdateEmail(e.target.value)}
                        onBlur={() => {
                            onStartValidateEmailOnBlur()
                        }}
                        autoComplete="email"
                        aria-invalid={emailError.hasError || emailState === 'error'}
                        aria-describedby={emailError.hasError ? 'email-error' : undefined}
                        aria-required="true"
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.FieldLabelWrapper>
                        <S.Label htmlFor="phone">Phone number</S.Label>
                        {cellphoneError.hasError && (
                            <S.RequiredFieldText id="phone-error" role="alert" aria-live="polite">
                                {cellphoneError.message}
                            </S.RequiredFieldText>
                        )}
                    </S.FieldLabelWrapper>
                    <S.Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(11) 11111-1111"
                        value={cellphone}
                        error={
                            cellphoneError.hasError || cellphoneState === 'error'
                        }
                        onChange={(e) => onUpdateCellphone(e.target.value)}
                        onBlur={() => {
                            onStartValidateCellphoneOnBlur()
                        }}
                        autoComplete="tel"
                        aria-invalid={cellphoneError.hasError || cellphoneState === 'error'}
                        aria-describedby={cellphoneError.hasError ? 'phone-error' : undefined}
                        aria-required="true"
                    />
                </S.InputWrapper>
                <S.NextStepWrapper>
                    <S.Button 
                        type="submit"
                        disabled={!canGoToNextStep}
                        aria-label="Proceed to next step"
                        aria-disabled={!canGoToNextStep}
                    >
                        Next Step
                    </S.Button>
                </S.NextStepWrapper>
            </S.Form>
        </StepsWrapper>
    )
}
