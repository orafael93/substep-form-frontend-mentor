import { useState } from 'react'

import { useSteps } from '@/hooks/useSteps'
import { usePersonalInfo } from '@/hooks/usePersonalInfo'
import { handlePersonalInfo } from '@/utils/handlePersonalInfo'

import * as S from './styles'

export const PersonalInfo = () => {
    const [canValidateFields, setCanValidateFields] = useState(false)
    const { onCompleteStep } = useSteps()
    const { onUpdatePersonalInfo, info } = usePersonalInfo()

    const [personalInfo, setPersonalInfo] = useState({
        name: info?.name || '',
        email: info?.email || '',
        phone: info?.phone || '',
    })

    const unfilledFields = handlePersonalInfo(personalInfo)

    const inputNameHasError =
        canValidateFields && unfilledFields.includes('name')
    const inputEmailHasError =
        canValidateFields && unfilledFields.includes('email')
    const inputPhoneHasError =
        canValidateFields && unfilledFields.includes('phone')

    const onGoToNextStep = () => {
        setCanValidateFields(true)

        if (!unfilledFields.length) {
            onUpdatePersonalInfo(personalInfo)
            onCompleteStep('info')
        }
    }

    return (
        <S.Wrapper>
            <S.StepTitle>Personal info</S.StepTitle>
            <S.StepDescription>
                Prease provide your name, email adress, and phone number
            </S.StepDescription>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Name</S.Label>
                    {inputNameHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    id="name"
                    placeholder="e.g Stephen King"
                    value={personalInfo.name}
                    error={inputNameHasError}
                    onChange={(e) =>
                        setPersonalInfo({
                            ...personalInfo,
                            name: e.target.value,
                        })
                    }
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Email Address</S.Label>
                    {inputEmailHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    type="email"
                    id="name"
                    placeholder="e.g stephenking@lorem.com"
                    value={personalInfo.email}
                    error={inputEmailHasError}
                    onChange={(e) =>
                        setPersonalInfo({
                            ...personalInfo,
                            email: e.target.value,
                        })
                    }
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.InputWrapper>
                <S.FieldLabelWrapper>
                    <S.Label htmlFor="name">Phone number</S.Label>

                    {inputPhoneHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.FieldLabelWrapper>
                <S.Input
                    id="name"
                    placeholder="e.g +1 234 567 890"
                    value={personalInfo.phone}
                    error={inputPhoneHasError}
                    onChange={(e) =>
                        setPersonalInfo({
                            ...personalInfo,
                            phone: e.target.value,
                        })
                    }
                    autoComplete="off"
                />
            </S.InputWrapper>
            <S.NextStepWrapper>
                <S.Button onClick={onGoToNextStep}>Next Step</S.Button>
            </S.NextStepWrapper>
        </S.Wrapper>
    )
}
