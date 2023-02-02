import styled, { css } from 'styled-components'

export const GlobalWrapper = styled.div`
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    padding: 12rem 15rem;
`

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 17.5rem 1rem;

        background: ${theme.white};
        padding: 10px;
        border-radius: 8px;

        width: 100%;
        max-width: 75.5rem;
    `}
`
