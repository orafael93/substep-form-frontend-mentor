import styled, { css } from 'styled-components'

type PlanPropTypes = {
    planSelected: boolean
}

export const Plan = styled.div<PlanPropTypes>`
    ${({ theme, planSelected }) => css`
        display: flex;
        flex-direction: column;
        gap: 50px;

        width: 100%;
        min-width: 140px;

        padding: 20px 16px 16px;

        transition: 0.2s;

        cursor: pointer;

        border: 1px solid ${planSelected ? theme.purple : theme.borderColor};
        border-radius: 8px;

        background: ${planSelected ? theme.veryLightGrey : 'transparent'};

        &:hover {
            border-color: ${theme.purple};
        }

        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: row;
            gap: 14px;
        }
    `}
`

export const WrapperPlanIcon = styled.div``

export const NamePlan = styled.h3`
    ${({ theme }) => css`
        color: ${theme.denim};

        font-size: 16px;
    `}
`

export const PricePlan = styled.span`
    ${({ theme }) => css`
        display: inline-block;

        color: ${theme.grey};

        margin-top: 7px;
    `}
`

export const PlanDescription = styled.div``
