import { MouseEvent, useState } from 'react'

import { AddonsCardPropTypes } from '../Step1/types'

import * as S from './styles'

const AddonsCard = ({
    serviceName,
    serviceDescription,
    servicePrice,
}: AddonsCardPropTypes) => {
    const [checked, setChecked] = useState(false)

    const handleCheck = (e: MouseEvent) => {
        e.preventDefault()
        setChecked((oldState) => !oldState)
    }

    return (
        <S.Wrapper onClick={handleCheck} addonIsChecked={checked}>
            <S.CheckboxInput type="checkbox" checked={checked} readOnly />
            <S.WrapperService>
                <S.ServiceName>{serviceName}</S.ServiceName>
                <S.ServiceDescription>
                    {serviceDescription}
                </S.ServiceDescription>
            </S.WrapperService>
            <S.WrapperPrice>
                <S.Price>+${servicePrice}/mo</S.Price>
            </S.WrapperPrice>
        </S.Wrapper>
    )
}

export default AddonsCard
