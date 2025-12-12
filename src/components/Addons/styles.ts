import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    padding: 30px 10%;

    width: 100%;
`

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const AddonsCardsWrapper = styled.div`
    margin-top: 40px;

    & > label {
        margin-bottom: 15px;
    }
`

export const ButtonsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        @media (min-width: ${theme.breakpoints.tablet}px) {
            margin-top: 100px;
        }
    `}
`

export const BackButton = styled.button`
    ${({ theme }) => css`
        background: transparent;

        border: none;

        color: ${theme.grey};

        font-size: 16px;
        font-weight: 500;
        font-family: 'Ubuntu';

        cursor: pointer;
    `}
`

export const Button = styled.button`
    ${({ theme }) => css`
        outline: none;
        border: none;

        background: ${theme.denim};

        padding: 15px 25px;

        color: ${theme.white};
        border-radius: 8px;

        transition: 0.2s;

        font-weight: 500;
        font-size: 16px;
        font-family: 'Ubuntu';

        &:hover {
            background: #164a8a;
            cursor: pointer;
        }
    `}
`
