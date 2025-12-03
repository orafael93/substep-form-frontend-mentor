import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from '@/App'
import { theme } from '@/theme/theme'
import { GlobalStyles } from '@/theme/global'
import { GlobalProvider } from '@/context/GlobalProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </GlobalProvider>
    </React.StrictMode>
)
