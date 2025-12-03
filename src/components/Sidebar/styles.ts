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

export const Step = styled.div`
    display: flex;
    gap: 1rem;

    cursor: pointer;
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
