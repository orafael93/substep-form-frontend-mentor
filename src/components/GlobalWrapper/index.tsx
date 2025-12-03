import styled, { css } from 'styled-components'

export const GlobalWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        padding: 12rem 10px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            padding: 0;
            align-items: flex-start;
        }
    `}
`

export const Wrapper = styled.div`
    ${({ theme }) => css`
        position: relative;

        display: grid;
        grid-template-columns: minmax(15rem, 17.5rem) 1fr;

        gap: 20px;

        background: ${theme.white};
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

        width: 100%;
        max-width: 60rem;

        min-height: 600px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            align-content: flex-start;
            grid-template-columns: 1fr;
            padding: 0;
            background: ${theme.bg};
            height: 100%;
        }
    `}
`

export const ContentWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: flex-start;

        padding: 30px 0;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            transform: translateY(-50px);
            height: fit-content;

            padding: 15px;
            margin: 0 auto;

            background: ${theme.white};

            border-radius: 10px;
        }

        @media (max-width: ${theme.breakpoints.mobile}px) {
            width: 90%;
        }
    `}
`

export const NextStepMobileWrapper = styled.div`
    ${({ theme }) => css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        padding: 20px 60px;

        display: flex;
        justify-content: space-between;

        background: ${theme.white};

        @media (min-width: ${theme.breakpoints.tablet}px) {
            display: none;
        }

        @media (max-width: ${theme.breakpoints.tablet}px) {
            padding: 20px 20px;
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
