import styled, { css } from 'styled-components'

type WrapperPropTypes = {
    addonIsChecked?: boolean
}

export const Wrapper = styled.label<WrapperPropTypes>`
    ${({ theme, addonIsChecked }) => css`
        display: flex;
        align-items: center;
        gap: 20px;

        padding: 16px 20px;
        border-radius: 8px;

        border: 1px solid ${addonIsChecked ? theme.purple : theme.borderColor};

        cursor: pointer;

        background: ${addonIsChecked ? theme.veryLightGrey : theme.white};
    `}
`

export const CheckboxInput = styled.input`
    ${({ theme }) => css`
        pointer-events: none;

        appearance: none;

        min-width: 20px;
        min-height: 20px;

        background: transparent;

        border: 1px solid ${theme.lightGrey};
        border-radius: 2px;

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        outline: none;

        &:before {
            content: '';

            scale: 0;

            background: transparent;

            border: 2px solid ${theme.purple};
            border-left: 0;
            border-top: 0;

            width: 5px;
            height: 10px;

            transform: rotate(45deg);

            position: absolute;
            top: 3px;
        }

        &:checked {
            background: ${theme.purple};
            border-color: ${theme.purple};
        }

        &:checked:before {
            scale: 1;
            border-color: ${theme.white};
        }
    `}
`

export const WrapperService = styled.div``

export const ServiceName = styled.p`
    ${({ theme }) => css`
        font-weight: 500;
        font-size: 16px;
        color: ${theme.denim};

        margin-bottom: 7px;
    `}
`

export const ServiceDescription = styled.p`
    ${({ theme }) => css`
        color: ${theme.grey};
        font-weight: 400;
        font-size: 15px;
    `}
`

export const WrapperPrice = styled.div`
    flex: 1;
    text-align: right;
`

export const Price = styled.p`
    ${({ theme }) => css`
        color: ${theme.purple};
        font-size: 15px;
        font-weight: 400;
    `}
`
