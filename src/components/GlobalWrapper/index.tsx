import styled, { css } from 'styled-components'

export const GlobalWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;
        padding: 12rem 10px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            padding: 10px;
            align-items: flex-start;
        }
    `}
`

export const Wrapper = styled.div`
    ${({ theme }) => css`
        position: relative;

        display: grid;
        grid-template-columns: 17.5rem 1fr;

        background: ${theme.white};
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

        width: 100%;
        max-width: 75.5rem;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            align-content: flex-start;
            grid-template-columns: 1fr;
            padding: 0;
            background: ${theme.bg};
        }
    `}
`

export const WrapperContent = styled.div`
    ${({ theme }) => css`
        padding: 55px 100px;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;

            width: 90%;
            height: fit-content;

            padding: 15px;
            margin: 0 auto;

            background: ${theme.white};

            border-radius: 10px;
        }
    `}
`

export const WrapperNextStepMobile = styled.div`
    ${({ theme }) => css`
        position: absolute;
        bottom: 25px;
        right: 30px;

        @media (min-width: ${theme.breakpoints.tablet}px) {
            display: none;
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
