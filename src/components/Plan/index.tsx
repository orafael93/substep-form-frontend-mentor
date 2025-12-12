import * as Types from './types'
import * as S from './styles'

export const Plan = (props: Types.PlanType) => {
    const { name, price, icon, selectedPlan, typeOfPayment, onSelectPlan } =
        props

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelectPlan(name)
        }
    }

    return (
        <S.Plan 
            selectedPlan={selectedPlan} 
            onClick={() => onSelectPlan(name)}
            onKeyDown={handleKeyDown}
            role="radio"
            aria-checked={selectedPlan}
            aria-label={`${name} plan, $${price} per ${typeOfPayment === 'mo' ? 'month' : 'year'}`}
            tabIndex={0}
        >
            {icon && <S.PlanIconWrapper aria-hidden="true">{icon}</S.PlanIconWrapper>}
            <S.PlanDescription>
                <S.NamePlan>{name}</S.NamePlan>
                <S.PlanPrice aria-hidden="true">
                    ${price}/{typeOfPayment}
                </S.PlanPrice>
            </S.PlanDescription>
        </S.Plan>
    )
}
