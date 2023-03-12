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

export const CheckboxInput = styled.input``

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
