import { MouseEvent, useState } from 'react'

import { AddonsCardPropTypes } from '../Step1/types'
import { useAddons } from '../../hooks/useAddons'
import { usePlan } from '../../hooks/usePlan'

import * as S from './styles'

const AddonsCard = ({
    id,
    serviceName,
    serviceDescription,
    servicePrice,
    onAddAddons,
}: AddonsCardPropTypes) => {
    const { plan } = usePlan()
    const { addons } = useAddons()
    const addonAlreadyChecked = addons?.find(
        (currentAddon) => currentAddon.type === id
    )
    const [checked, setChecked] = useState(!!addonAlreadyChecked || false)

    const handleCheck = (e: MouseEvent) => {
        e.preventDefault()

        setChecked((oldState) => !oldState)
        onAddAddons({
            type: id,
            price: servicePrice,
            frequency: plan?.frequency === 'month' ? 'month' : 'year',
        })
    }

    const handlePlanPriceAndFrequency = () => {
        switch (plan?.frequency) {
            case 'year':
                return {
                    price: Number(servicePrice) * 10,
                    frequencyText: 'yr',
                }
            default:
                return {
                    price: servicePrice,
                    frequencyText: 'mo',
                }
        }
    }

    const frequencyContent = handlePlanPriceAndFrequency()

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
                <S.Price>
                    +${frequencyContent.price}/{frequencyContent.frequencyText}
                </S.Price>
            </S.WrapperPrice>
        </S.Wrapper>
    )
}

export default AddonsCard
