import styled, { css } from 'styled-components'

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

export const SelectedContentWrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.veryLightGrey};
        padding: 20px;
        margin-top: 20px;
        border-radius: 5px;
    `}
`

export const StepContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const SelectedNameContentWrapper = styled.div``

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
        font-size: 14px;

        color: ${theme.grey};

        text-decoration: underline;

        margin-top: 8px;
        cursor: pointer;

        transition: 0.1s;

        &:hover {
            color: ${theme.purple};
        }
    `}
`

export const SelectedPriceWrapper = styled.div``

export const SelectedPrice = styled.span`
    ${({ theme }) => css`
        font-weight: bold;
        font-size: 16px;
        color: ${theme.denim};
    `}
`

export const AddonsWrapper = styled.div`
    margin-top: 16px;
`

export const AddonWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 16px 0;
`

export const AddonNameService = styled.p`
    ${({ theme }) => css`
        color: ${theme.grey};
        font-weight: 400;
        font-size: 14px;
    `}
`

export const AddonPrice = styled.p`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: 400;
        color: ${theme.denim};
    `}
`

export const TotalPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 26px;

    padding: 0 20px;
`

export const PriceText = styled.p`
    ${({ theme }) => css`
        font-weight: 400;
        font-size: 14px;
        color: ${theme.grey};
    `}
`

export const PriceValue = styled.p`
    ${({ theme }) => css`
        color: ${theme.purple};
        font-weight: bold;
        font-size: 20px;
    `}
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

export const Button = styled.div`
    ${({ theme }) => css`
        background: ${theme.purple};

        padding: 15px 25px;

        color: ${theme.white};
        border-radius: 8px;

        transition: 0.2s;

        &:hover {
            background: #164a8a;
            cursor: pointer;
        }
    `}
`
