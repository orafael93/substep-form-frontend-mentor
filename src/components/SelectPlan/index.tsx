import { MouseEvent, useState } from 'react'

import Plan from '@/components/Plan'
import ProIcon from '@/assets/icon-pro.svg'
import ArcadeIcon from '@/assets/icon-arcade.svg'
import AdvancedIcon from '@/assets/icon-advanced.svg'
import { useSteps } from '@/hooks/useSteps'
import { usePlan } from '@/hooks/usePlan'

import * as Types from './types'
import * as S from './styles'

export const SelectPlan = () => {
    const { onUpdatePlan, plan } = usePlan()
    const [toggleChecked, setToggleChecked] = useState(
        plan?.frequency === 'year' || false
    )

    const plans: Types.PlansType[] = [
        {
            icon: <ArcadeIcon />,
            name: 'arcade',
            price: 9,
        },
        {
            icon: <AdvancedIcon />,
            name: 'advanced',
            price: 12,
        },
        {
            icon: <ProIcon />,
            name: 'pro',
            price: 15,
        },
    ]

    const [selectedPlan, setSelectedPlan] = useState<Types.PlansType>({
        name: plan?.type || plans[0].name,
        price: plan?.price || plans[0].price,
    })
    const { onCompleteStep, onActiveStep } = useSteps()

    const onToggle = (e: MouseEvent) => {
        e.preventDefault()
        setToggleChecked((oldState) => !oldState)
    }

    const onSelectPlan = (selectedPlan: Types.PlansType) => {
        setSelectedPlan(selectedPlan)
    }

    const onGoToNextStep = () => {
        onCompleteStep('plan')

        const selectedPlanPrice = plans.find(
            (plan) => plan.name === selectedPlan.name
        )

        onUpdatePlan({
            type: selectedPlan.name,
            price: toggleChecked
                ? (selectedPlanPrice?.price || 0) * 10
                : selectedPlan.price,
            frequency: toggleChecked ? 'year' : 'month',
        })
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
                        selectedPlan={selectedPlan?.name === name}
                        icon={icon}
                        name={name}
                        price={toggleChecked ? price * 10 : price}
                        typeOfPayment={toggleChecked ? 'yr' : 'mo'}
                        onSelectPlan={() => onSelectPlan({ name, price })}
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
                <S.BackButton onClick={() => onActiveStep('info')}>
                    Go Back
                </S.BackButton>
                <S.Button onClick={onGoToNextStep}>Next Step</S.Button>
            </S.WrapperButtons>
        </S.Wrapper>
    )
}
