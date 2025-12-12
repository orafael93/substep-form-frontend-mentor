import styled, { css } from 'styled-components'

export const InputWrapper = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    margin: 0 0 24px 0;
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
        color: ${theme.grey};
        margin-top: 10px;
        margin-bottom: 35px;
        font-size: 16px;
        font-weight: 400;
    `}
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: 400;
        color: ${theme.denim};

        @media (max-width: ${theme.breakpoints.tablet}px) {
            font-size: 12px;
        }
    `}
`

type InputType = {
    error: boolean
}

export const Input = styled.input<InputType>`
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

export const NextStepWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-end;

        @media (min-width: ${theme.breakpoints.tablet}px) {
            margin-top: 100px;
        }
    `}
`

type ButtonType = {
    disabled: boolean
}

export const Button = styled.button<ButtonType>`
    ${({ theme, disabled }) => css`
        background: #164a8a;
        border: none;

        outline: none;

        padding: 15px 25px;

        color: ${theme.white};
        border-radius: 8px;

        transition: 0.2s;

        font-size: 16px;
        font-weight: 500;

        &:hover:not(:disabled) {
            background: ${theme.denim};
            cursor: pointer;
        }

        ${disabled &&
        css`
            background: ${theme.grey};
            cursor: not-allowed;
        `}
    `}
`

export const RequiredFieldText = styled.p`
    ${({ theme }) => css`
        color: ${theme.redErrors};
        font-size: 14px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            font-size: 10px;
        }
    `}
`

export const FieldLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
