import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
`

export const StepTitle = styled.h2`
    ${({ theme }) => css`
        color: ${theme.denim};
        font-size: 32px;
        font-weight: bold;
    `}
`

export const StepDescription = styled.p`
    ${({ theme }) => css`
        color: ${theme.grey};
        margin-top: 10px;
        margin-bottom: 35px;
        font-size: 16px;
        font-weight: 400;
    `}
`

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: 400;
        color: ${theme.denim};
    `}
`

type InputPropTypes = {
    error: boolean
}

export const Input = styled.input<InputPropTypes>`
    ${({ theme, error }) => css`
        padding: 15px;
        background: ${theme.white};
        border: 1px solid ${theme.borderColor};
        border-radius: 8px;
        margin-top: 8px;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Ubuntu';
        outline: none;

        &:focus {
            border-color: ${error ? theme.redErrors : theme.purple};
        }

        ${error &&
        css`
            border-color: ${theme.redErrors};
        `}

        &::placeholder {
            color: ${theme.grey};
        }
    `}
`

export const WrapperNextStep = styled.div`
    ${({ theme }) => css`
        display: none;

        @media (min-width: ${theme.breakpoints.tablet}px) {
            display: flex;
            justify-content: flex-end;

            margin-top: 100px;
        }
    `}
`

export const Button = styled.div`
    ${({ theme }) => css`
        background: #164a8a;

        padding: 15px 25px;

        color: ${theme.white};
        border-radius: 8px;

        transition: 0.2s;

        &:hover {
            background: ${theme.denim};
            cursor: pointer;
        }
    `}
`

export const RequiredFieldText = styled.p`
    ${({ theme }) => css`
        color: ${theme.redErrors};
        font-size: 14px;
    `}
`

export const WrapperLabelField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
