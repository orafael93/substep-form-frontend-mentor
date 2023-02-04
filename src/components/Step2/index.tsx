import React, { MouseEvent, useState } from 'react'

import ArcadeIcon from '../../assets/icon-arcade.svg'
import AdvancedIcon from '../../assets/icon-advanced.svg'
import ProIcon from '../../assets/icon-pro.svg'
import Plan from '../Plan'

import * as S from './styles'

export type TypeOfPlans = 'Arcade' | 'Advanced' | 'Pro'

const plans: {
    icon: any
    name: TypeOfPlans
    price: number
}[] = [
    {
        icon: <ArcadeIcon />,
        name: 'Arcade',
        price: 9,
    },
    {
        icon: <AdvancedIcon />,
        name: 'Advanced',
        price: 12,
    },
    {
        icon: <ProIcon />,
        name: 'Pro',
        price: 15,
    },
]

const Step2 = () => {
    const [toggleChecked, setToggleChecked] = useState(false)
    const [planSelected, setPlanSelected] = useState<TypeOfPlans>('Arcade')

    const onToggle = (e: MouseEvent) => {
        e.preventDefault()
        setToggleChecked((oldState) => !oldState)
    }

    const onSelectPlan = (selectedPlan: TypeOfPlans) => {
        setPlanSelected(selectedPlan)
    }

    return (
        <S.Wrapper>
            <S.StepTitle>Select your plan</S.StepTitle>
            <S.StepDescription>
                You have the option of monthly or yearly billing
            </S.StepDescription>
            <S.WrapperPlan>
                {plans.map(({ name, price, icon }) => (
                    <Plan
                        key={name}
                        planSelected={planSelected === name}
                        icon={icon}
                        name={name}
                        price={toggleChecked ? price * 10 : price}
                        typeOfPayment={toggleChecked ? 'yr' : 'mo'}
                        onSelectPlan={onSelectPlan}
                    />
                ))}
            </S.WrapperPlan>
            <S.BillingFrequency>
                <S.TypeOfPayment typeOfPayment={toggleChecked}>
                    Monthly
                </S.TypeOfPayment>
                <S.WrapperToggle onClick={onToggle}>
                    <S.Checkbox
                        type="checkbox"
                        checked={toggleChecked}
                        readOnly
                    />
                    <S.WrapperPill>
                        <S.Pill checked={toggleChecked} />
                    </S.WrapperPill>
                </S.WrapperToggle>
                <S.TypeOfPayment typeOfPayment={!toggleChecked}>
                    Yearly
                </S.TypeOfPayment>
            </S.BillingFrequency>
            <S.WrapperButtons>
                <S.BackButton>Go Back</S.BackButton>
                <S.Button>Next Step</S.Button>
            </S.WrapperButtons>
        </S.Wrapper>
    )
}

export default Step2
