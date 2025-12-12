import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 30px;

        width: 100%;
        height: 100%;

        border-radius: 10px;
        padding: 40px 32px;

        background-color: ${theme.purple};
        background-image: url('/bg-sidebar-desktop.svg');
        background-repeat: no-repeat;
        background-position-y: bottom;
        background-size: cover;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: row;
            justify-content: center;

            height: fit-content;

            background: ${theme.purple};
            background-image: url('/bg-sidebar-mobile.svg');
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            padding: 2rem 2rem 6rem;

            border-radius: 0;
        }
    `}
`

export const StepsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.tablet}px) {
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
        }
    `}
`

export const StepItem = styled.div`
    list-style: none;
`

export const Step = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    background: transparent;
    border: none;
    padding: 0;
    
    width: 100%;
    text-align: left;
    
    cursor: pointer;
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    &:focus-visible {
        outline: 2px solid white;
        outline-offset: 4px;
        border-radius: 4px;
    }
`

type WrapperStepNumberTypes = {
    state: 'active' | 'disabled' | 'completed'
}

const wrapperStepNumberModifier = {
    active: (theme: DefaultTheme) => css`
        background: ${theme.skyBlue};
    `,
    disabled: (theme: DefaultTheme) => css`
        background: transparent;
        border: 2px solid ${theme.white};
        color: ${theme.white};
    `,
    completed: (theme: DefaultTheme) => css`
        background: transparent;
        border: 2px solid ${theme.white};
        color: ${theme.white};
    `,
}

export const WrapperStepNumber = styled.div<WrapperStepNumberTypes>`
    ${({ theme, state }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        width: 33px;
        height: 33px;

        border-radius: 50%;

        ${wrapperStepNumberModifier[state](theme)}
    `}
`

export const Number = styled.div`
    font-weight: bold;
    font-size: 0.875rem;
`

export const StepContent = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 4px;

        text-transform: uppercase;

        @media (max-width: ${theme.breakpoints.tablet}px) {
            display: none;
        }
    `}
`

export const StepName = styled.p`
    ${({ theme }) => css`
        text-transform: uppercase;
        color: ${theme.lightBlue};
    `}
`

export const StepDescription = styled.p`
    ${({ theme }) => css`
        color: ${theme.white};

        font-size: 0.875rem;
        font-weight: bold;
    `}
`
