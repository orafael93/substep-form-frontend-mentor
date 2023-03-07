import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const StepTitle = styled.h2`
    ${({ theme }) => css`
        color: ${theme.denim};
        font-size: 32px;
        font-weight: bold;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            font-size: 24px;
        }
    `}
`

export const StepDescription = styled.p`
    ${({ theme }) => css`
        font-weight: 400;
        font-size: 16px;
        color: ${theme.grey};
        margin-top: 10px;
    `}
`
