import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        max-width: 80%;
        height: 100%;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            max-width: 90%;
            padding: 50px 0;
        }
    `}
`

export const ThankYouText = styled.p`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: 32px;

        color: ${theme.denim};

        margin-top: 32px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            font-size: 24px;
        }
    `}
`

export const ThankYouMessage = styled.p`
    ${({ theme }) => css`
        font-weight: 400;
        font-size: large;

        color: ${theme.grey};

        text-align: center;

        margin-top: 15px;
        line-height: 25px;
    `}
`
