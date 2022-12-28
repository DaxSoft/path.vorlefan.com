import { THEME_COLOR } from './default';

export const GLOBAL_STYLE = `
html,
body {
    background-color: ${THEME_COLOR.background.main} !important;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    scroll-behavior: smooth;
    
}

body > * {
    font-family: -apple-system, BlinkMacSystemFont, Inter, sans-serif;
}

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background: #c8c8c8;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #27ae60 !important;
}

.z-alert-notistack {
    z-index: 9999;
}
  
`;
