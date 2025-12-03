import * as Types from './types'
import * as S from './styles'

export const Plan = (props: Types.PlanType) => {
    const { name, price, icon, selectedPlan, typeOfPayment, onSelectPlan } =
        props

    return (
        <S.Plan selectedPlan={selectedPlan} onClick={() => onSelectPlan(name)}>
            {icon && <S.PlanIconWrapper>{icon}</S.PlanIconWrapper>}
            <S.PlanDescription>
                <S.NamePlan>{name}</S.NamePlan>
                <S.PlanPrice>
                    ${price}/{typeOfPayment}
                </S.PlanPrice>
            </S.PlanDescription>
        </S.Plan>
    )
}
