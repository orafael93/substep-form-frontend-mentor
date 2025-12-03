import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    bg: '#EFF5FF',
    borderColor: '#D6D9E6',
    denim: '#022959',
    grey: '#9699AA',
    lightBlue: '#ABBCFF',
    lightGrey: '#D6D9E6',
    orange: '#FFAF7E',
    pink: '#F9818E',
    purple: '#483EFF',
    redErrors: '#EE374A',
    skyBlue: '#BEE2FD',
    veryLightGrey: '#F8F9FF',
    white: '#FFF',
    breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1025,
    },
} as const
