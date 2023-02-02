import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;

        border-radius: 10px;
        padding: 2rem;

        background: ${theme.purple};
        background-image: url('bg-sidebar-desktop.svg');
        background-repeat: no-repeat;
        background-position-y: bottom;
        background-size: contain;
    `}
`
