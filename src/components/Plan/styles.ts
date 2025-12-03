import styled, { css } from 'styled-components'

type PlanType = {
    selectedPlan: boolean
}

export const Plan = styled.div<PlanType>`
    ${({ theme, selectedPlan }) => css`
        display: flex;
        flex-direction: column;
        gap: 50px;

        width: 100%;
        min-width: 140px;

        padding: 20px 16px 16px;

        transition: 0.2s;

        cursor: pointer;

        border: 1px solid ${selectedPlan ? theme.purple : theme.borderColor};
        border-radius: 8px;

        background: ${selectedPlan ? theme.veryLightGrey : 'transparent'};

        &:hover {
            border-color: ${theme.purple};
        }

        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: row;
            gap: 14px;
        }
    `}
`

export const PlanIconWrapper = styled.div``

export const NamePlan = styled.h3`
    ${({ theme }) => css`
        color: ${theme.denim};

        text-transform: capitalize;

        font-size: 16px;
    `}
`

export const PlanPrice = styled.span`
    ${({ theme }) => css`
        display: inline-block;

        color: ${theme.grey};

        margin-top: 7px;
    `}
`

export const PlanDescription = styled.div``
