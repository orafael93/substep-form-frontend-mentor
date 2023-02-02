import {
    createGlobalStyle,
    css,
    DefaultTheme,
    GlobalStyleComponent,
} from 'styled-components'

const GlobalStyles: GlobalStyleComponent<
    {},
    DefaultTheme
> = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-font-smoothing: antialiased;
    -mox-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    ${({ theme }) => css`
        html,
        body {
            width: 100vw;
            height: 100vh;
            background: ${theme.bg};
            font-family: 'Ubuntu';
        }
    `}
  }
`

export default GlobalStyles
