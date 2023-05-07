import { MouseEvent, useState } from 'react'

import ArcadeIcon from '../../assets/icon-arcade.svg'
import AdvancedIcon from '../../assets/icon-advanced.svg'
import ProIcon from '../../assets/icon-pro.svg'
import Plan from '../Plan'
import { useSteps } from '../../hooks/useSteps'
import { usePlan } from '../../hooks/usePlan'
import { PlanTypes } from '../../context/GlobalContext'

import * as S from './styles'

export type TypeOfPlans = PlanTypes

export type Plans = {
    name: TypeOfPlans
    price: number
    icon?: JSX.Element
}

const plans: Plans[] = [
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

const Step2 = () => {
    const { onUpdatePlan, plan } = usePlan()
    const [toggleChecked, setToggleChecked] = useState(
        plan?.frequency === 'year' || false
    )
    const [planSelected, setPlanSelected] = useState<Plans>({
        name: plan?.type || plans[0].name,
        price: plan?.price || plans[0].price,
    })
    const { onCompleteStep, onActiveStep } = useSteps()

    const onToggle = (e: MouseEvent) => {
        e.preventDefault()
        setToggleChecked((oldState) => !oldState)
    }

    const onSelectPlan = (selectedPlan: Plans) => {
        setPlanSelected(selectedPlan)
    }

    const onGoToNextStep = () => {
        onCompleteStep('plan')

        const selectedPlanPrice = plans.find(
            (plan) => plan.name === planSelected.name
        )

        onUpdatePlan({
            type: planSelected.name,
            price: toggleChecked
                ? (selectedPlanPrice?.price || 0) * 10
                : planSelected.price,
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
                        planSelected={planSelected?.name === name}
                        icon={icon!}
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

export default Step2
