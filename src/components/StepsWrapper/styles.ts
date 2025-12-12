import styled, { css } from 'styled-components'

export const StepWrapper = styled.div`
    ${({ theme }) => css`
        padding: 30px 10%;

        width: 100%;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            padding: 30px 24px;
        }
    `}
`
