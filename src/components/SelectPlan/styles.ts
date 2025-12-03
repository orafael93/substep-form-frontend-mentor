import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    padding: 0 30px;
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

        @media (max-width: ${theme.breakpoints.tablet}px) {
            margin-bottom: 15px;
        }
    `}
`

export const PlanWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        gap: 18px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: column;
        }
    `}
`

export const BillingFrequency = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 24px;

        padding: 10px 0;
        border-radius: 8px;
        margin-top: 32px;

        background: ${theme.veryLightGrey};
    `}
`

export const ToggleWrapper = styled.label`
    ${({ theme }) => css`
        display: flex;

        background: ${theme.denim};
        border-radius: 18px;
        width: 38px;
        height: 20px;
    `}
`

export const PillWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

export type PillType = {
    checked: boolean
}

export const Pill = styled.div<PillType>`
    ${({ theme, checked }) => css`
        width: 12px;
        height: 12px;

        background: ${theme.white};
        border-radius: 50%;

        transition: all.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform: ${`translateX(${checked ? 90 : -90}%)`};

        cursor: pointer;
    `}
`

export const Checkbox = styled.input`
    display: none;
`

type TypeOfPaymentType = {
    typeOfPayment: boolean
}

export const TypeOfPayment = styled.span<TypeOfPaymentType>`
    ${({ theme, typeOfPayment }) => css`
        color: ${typeOfPayment ? theme.grey : theme.denim};
    `}
`

export const ButtonsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;

        @media (min-width: ${theme.breakpoints.tablet}px) {
            justify-content: space-between;

            margin-top: 100px;
        }

        @media (max-width: ${theme.breakpoints.tablet}px) {
            margin-top: 50px;
            justify-content: space-between;
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

        font-size: 16px;

        font-weight: 500;

        &:hover {
            background: #164a8a;
            cursor: pointer;
        }
    `}
`
