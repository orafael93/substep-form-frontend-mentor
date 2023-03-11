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

export const WrapperSelectedContent = styled.div`
    ${({ theme }) => css`
        background: ${theme.veryLightGrey};
        padding: 10px 20px;
        margin-top: 20px;
        border-radius: 5px;
    `}
`

export const WrapperStepContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const WrapperNameSelectedContent = styled.div``

export const Name = styled.p`
    ${({ theme }) => css`
        color: ${theme.denim};
        font-weight: 500;
    `}
`

export const Price = styled.span`
    ${({ theme }) => css`
        display: inline-block;
        font-weight: 400;
        color: ${theme.grey};
        font-size: 14px;
        text-decoration: underline;
        margin-top: 8px;
    `}
`

export const WrapperSelectedPrice = styled.div``

export const SelectedPrice = styled.span`
    ${({ theme }) => css`
        font-weight: bold;
        font-size: 16px;
        color: ${theme.denim};
    `}
`
