import { MouseEvent, useState } from 'react'

import { usePlan } from '@/hooks/usePlan'
import { useAddons } from '@/hooks/useAddons'
import { AddonsCardType } from '@/components/PersonalInfo/types'

import * as S from './styles'

export const AddonsCard = (props: AddonsCardType) => {
    const { id, serviceName, serviceDescription, servicePrice, onAddAddons } =
        props

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
