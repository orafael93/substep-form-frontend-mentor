import React from 'react'

import { PlanPropTypes } from './types'

import * as S from './styles'

const Plan = ({
    name,
    price,
    icon,
    planSelected,
    typeOfPayment,
    onSelectPlan,
}: PlanPropTypes) => {
    return (
        <S.Plan planSelected={planSelected} onClick={() => onSelectPlan(name)}>
            <S.WrapperPlanIcon>{icon}</S.WrapperPlanIcon>
            <S.PlanDescription>
                <S.NamePlan>{name}</S.NamePlan>
                <S.PricePlan>
                    ${price}/{typeOfPayment}
                </S.PricePlan>
            </S.PlanDescription>
        </S.Plan>
    )
}

export default Plan
