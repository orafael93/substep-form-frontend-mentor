import {
    createGlobalStyle,
    css,
    DefaultTheme,
    GlobalStyleComponent,
} from 'styled-components'

import ubuntu300 from '../../public/fonts/ubuntu-300.woff2'
import ubuntu500 from '../../public/fonts/ubuntu-500.woff2'
import ubuntu700 from '../../public/fonts/ubuntu-700.woff2'

export const GlobalStyles: GlobalStyleComponent<
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
  }

  
    @font-face {
      font-display: swap; 
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 300;
      src: url(${ubuntu300}) format('woff2');
    }
  
    
    @font-face {
      font-display: swap; 
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 500;
      src: url(${ubuntu500}) format('woff2');
    }
    
    
    @font-face {
      font-display: swap; 
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      src: url(${ubuntu700}) format('woff2');
    }

  ${({ theme }) => css`
      html,
      body {
          width: 100%;
          background: ${theme.bg};
          font-family: 'Ubuntu';
      }
  `}
      
  #root {
    height: 100%;
  }
`
