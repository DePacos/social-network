import 'react-loading-skeleton/dist/skeleton.css'

import { createGlobalStyle } from 'styled-components'

import '@/shared/assets/fonts/fonts.css'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto,
        sans-serif;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.fontPrimary};
        background-color: ${({ theme }) => theme.colors.body}
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.fontPrimary};
    }

    ul {
        list-style: none;
    }

    main {
        padding: 40px 20px;
    }

    section {
        max-width: 1440px;
        margin: 0 auto;
    }

    .loader {
        display: inline-block;
        width: 18px;
        height: 18px;
        animation: spin 3s linear infinite;
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`
