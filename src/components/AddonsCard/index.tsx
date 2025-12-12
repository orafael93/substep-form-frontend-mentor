import { useEffect, useState } from 'react'

import { usePlan } from '@/hooks/usePlan'
import { useAddons } from '@/hooks/useAddons'
import { AddonsCardType } from '@/components/PersonalInfo/types'

import * as S from './styles'

export const AddonsCard = (props: AddonsCardType) => {
    const { id, serviceName, serviceDescription, servicePrice, onAddAddons, isChecked: isCheckedProp } =
        props

    const { plan } = usePlan()
    const { addons } = useAddons()
    const addonAlreadyChecked = addons?.find(
        (currentAddon) => currentAddon.type === id
    )
    const [checked, setChecked] = useState(isCheckedProp !== undefined ? isCheckedProp : !!addonAlreadyChecked)

    const handleCheck = () => {
        setChecked((oldState) => !oldState)
        onAddAddons({
            type: id,
            price: servicePrice,
            frequency: plan?.frequency === 'month' ? 'month' : 'year',
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCheck()
        }
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

    
    useEffect(() => {
        if (isCheckedProp !== undefined && isCheckedProp !== checked) {
            setChecked(isCheckedProp)
        }
    }, [isCheckedProp])

    return (
        <S.Wrapper 
            htmlFor={`addon-${id}`}
            addonIsChecked={checked}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="checkbox"
            aria-checked={checked}
        >
            <S.CheckboxInput 
                type="checkbox" 
                id={`addon-${id}`}
                checked={checked} 
                onChange={handleCheck}
                aria-labelledby={`addon-label-${id}`}
                aria-describedby={`addon-desc-${id}`}
            />
            <S.WrapperService>
                <S.ServiceName id={`addon-label-${id}`}>{serviceName}</S.ServiceName>
                <S.ServiceDescription id={`addon-desc-${id}`}>
                    {serviceDescription}
                </S.ServiceDescription>
            </S.WrapperService>
            <S.WrapperPrice>
                <S.Price aria-hidden="true">
                    +${frequencyContent.price}/{frequencyContent.frequencyText}
                </S.Price>
            </S.WrapperPrice>
        </S.Wrapper>
    )
}
