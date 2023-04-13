import { useState } from 'react'

import { usePersonalInfo } from '../../utils/handlePersonalInfo'

import * as S from './styles'

const Step1 = () => {
    const [canValidateFields, setCanValidateFields] = useState(false)

    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const unfilledFields = usePersonalInfo(personalInfo)
    const canGoToNextStep = unfilledFields.length === 0

    const inputNameHasError =
        canValidateFields && unfilledFields.includes('name')
    const inputEmailHasError =
        canValidateFields && unfilledFields.includes('email')
    const inputPhoneHasError =
        canValidateFields && unfilledFields.includes('phone')

    const onGoToNextStep = () => {
        setCanValidateFields(true)
    }

    return (
        <S.Wrapper>
            <S.StepTitle>Personal info</S.StepTitle>
            <S.StepDescription>
                Prease provide your name, email adress, and phone number
            </S.StepDescription>
            <S.WrapperInput>
                <S.WrapperLabelField>
                    <S.Label htmlFor="name">Name</S.Label>
                    {inputNameHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.WrapperLabelField>
                <S.Input
                    id="name"
                    placeholder="e.g Stephen King"
                    value={personalInfo.name}
                    onChange={(e) =>
                        setPersonalInfo({
                            ...personalInfo,
                            name: e.target.value,
                        })
                    }
                    error={inputNameHasError}
                />
            </S.WrapperInput>
            <S.WrapperInput>
                <S.WrapperLabelField>
                    <S.Label htmlFor="name">Email Address</S.Label>
                    {inputEmailHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.WrapperLabelField>
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
                />
            </S.WrapperInput>
            <S.WrapperInput>
                <S.WrapperLabelField>
                    <S.Label htmlFor="name">Phone number</S.Label>

                    {inputPhoneHasError && (
                        <S.RequiredFieldText>
                            This field is required.
                        </S.RequiredFieldText>
                    )}
                </S.WrapperLabelField>
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
                />
            </S.WrapperInput>
            <S.WrapperNextStep>
                <S.Button onClick={onGoToNextStep}>Next Step</S.Button>
            </S.WrapperNextStep>
        </S.Wrapper>
    )
}

export default Step1
