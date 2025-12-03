import { PlanPropTypes } from './types'

import * as S from './styles'

const Plan = ({
    name,
    price,
    icon,
    selectedPlan,
    typeOfPayment,
    onSelectPlan,
}: PlanPropTypes) => {
    return (
        <S.Plan selectedPlan={selectedPlan} onClick={() => onSelectPlan(name)}>
            {icon && <S.WrapperPlanIcon>{icon}</S.WrapperPlanIcon>}
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
