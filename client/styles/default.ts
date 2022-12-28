import { alpha as fade } from '@mui/material';

// ------------------------------------------------------------------
// | Neutral Colors
// | Commonly used for backgrounds, strokes,
// | and interactive states within controls.
// ------------------------------------------------------------------

export const NEUTRAL_COLOR = {
    neutralBlack: '#161210',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralSecondary: '#666666',

    neutralTransition: '#c8c8c8',
    neutralTransitionPrimary: '#a6a6a6',
    neutralTransitionSecondary: '#dadada',

    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralWhite: '#f5f5f5',
};

// ------------------------------------------------------------------
// | System Colors
// | Commonly used for system informations as error, warning, alert
// | and so on
// ------------------------------------------------------------------

export const SYSTEM_COLOR = {
    error: {
        main: '#CE1E1E',
        light: '#FABAA4',
        regular: '#E15D51',
        medium: '#620526',
        bold: '#770926',
    },

    warning: {
        main: '#F9A109',
        light: '#FEE59C',
        regular: '#FDD26A',
        medium: '#B36604',
        bold: '#773A01',
    },

    success: {
        main: '#0A8744',
        light: '#99F3A7',
        regular: '#61DB81',
        medium: '#056142',
        bold: '#014038',
    },

    information: {
        main: '#01808C',
        light: '#92F3E4',
        regular: '#59DCD2',
        medium: '#004B64',
        bold: '#002743',
    },

    disabled: {
        main: '#596F66',
        light: '#DDF0E3',
        regular: '#BAD3C4',
        medium: '#2C4F48',
        bold: '#113534',
    },

    compare: {
        equal: '#2f3640',
        less: '#EA2027',
        more: '#009432',
    },
};

// ------------------------------------------------------------------
// | Theme Colors
// | Commonly used for the overall system as primary and secondary
// | interaction. Such a 'login' button, if it needs highlight
// ------------------------------------------------------------------

export const THEME_COLOR = {
    /**
     * Base colors that dicts the following colors
     */

    base: '#0CD664',
    title: '#02491a',

    /**
     * Get the 60% of all colors elements
     */

    primary: {
        main: '#0CD664',
        regular: '#3edd87',
        medium: '#08a649',
        bold: '#023109',
        light: '#e1f9f2',
    },

    /**
     * Get the 30% of all colors elements
     */

    secondary: {
        main: '#21529F',
        regular: '#8597ca',
        medium: '#103053',
        bold: '#0b1c43',
        light: '#e3e5f3',
    },

    /**
     * Get the 10% of all colors elements
     */

    highlight: {
        main: '#FED100',
        regular: '#f7ee6d',
        medium: '#886300',
        bold: '#301a00',
        light: '#f9fcce',
    },

    /**
     * @description Background colors
     */

    // background: {
    //     main: '#F1F4FC',
    //     differ: '#F8FEFE',
    //     primary: '#C3E1E9',
    //     secondary: '#E0EBCC',
    //     highlight: '#F6E2B3',
    // },

    background: {
        main: '#181818',
        differ: '#373737',
        primary: '#360E1A',
        secondary: '#0D051D',
        highlight: '#2C1405',
    },
};

// ------------------------------------------------------------------
// | Gradient Colors
// ------------------------------------------------------------------

export function linerGradient(
    deg: number | string,
    gradients: Array<Array<string | number>>
): string {
    const values = gradients
        .map(
            (element: Array<string | number>) => `${element[0]} ${element[1]}%`
        )
        .join(', ');
    return `linear-gradient(${deg}, ${values})`;
}

export const GRADIENT_COLOR = {
    primary: {
        main: `linear-gradient(45deg, ${THEME_COLOR.primary.main} 30%, ${THEME_COLOR.primary.regular} 90%)`,
        bridge: `linear-gradient(60deg, ${THEME_COLOR.primary.regular} 10%, ${THEME_COLOR.primary.main} 30%)`,
        center: `linear-gradient(45deg, ${THEME_COLOR.primary.main} 9%, ${THEME_COLOR.primary.bold} 83%)`,
    },

    secondary: {
        main: `linear-gradient(60deg, ${THEME_COLOR.secondary.main} 0%, ${THEME_COLOR.secondary.regular} 79%, ${THEME_COLOR.secondary.main} 100%)`,
    },

    neutral: `radial-gradient(circle, ${NEUTRAL_COLOR.neutralPrimary} 14%, ${NEUTRAL_COLOR.neutralDark} 82%)`,
    neutralLinear: `linear-gradient(45deg, ${NEUTRAL_COLOR.neutralPrimary} 30%, ${NEUTRAL_COLOR.neutralDark} 90%)`,
    neutralRadial: `radial-gradient( circle farthest-corner at 10% 20%,  ${NEUTRAL_COLOR.neutralPrimary} 0%,  81.3% )`,
    neutralCenter: `linear-gradient(45deg, ${NEUTRAL_COLOR.neutralBlack} 9%, ${NEUTRAL_COLOR.neutralDark} 83%)`,

    roseWater: 'linear-gradient(to right, #e55d87, #5fc3e4)',
    horizon: 'linear-gradient(to right, #003973, #e5e5be)',
    emeraldWater: 'linear-gradient(to right, #348f50, #56b4d3)',
    greenBeach: 'linear-gradient(to right, #02aab0, #00cdac)',
    sel: 'linear-gradient(to right, #00467f, #a5cc82)',
    skyBlue:
        'linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )',
    deepBlue: 'linear-gradient(to top, #09203f 0%, #537895 100%)',

    error: 'linear-gradient(19deg, #ec3e3e 0%, #ee7494 100%)',

    background: linerGradient('45deg', [
        ['#F5F5FF', 30],
        [THEME_COLOR.background.main, 90],
    ]),

    backgroundDiffer: linerGradient('45deg', [
        [THEME_COLOR.background.differ, 20],
        [THEME_COLOR.background.main, 90],
    ]),

    instagram: `linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)`,

    stories: `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)`,

    metallic: {
        default: `linear-gradient(43deg, ${NEUTRAL_COLOR.neutralBlack} 0%, ${NEUTRAL_COLOR.neutralDark} 46%, #252525 100%)`,
        low: `linear-gradient(315deg, #5d4257 0%, #a5c7b7 74%)`,
        board: `linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);`,
        tape: `linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);`,
        dark: `linear-gradient(315deg, #000000 0%, #414141 74%);`,
        usual: `linear-gradient(315deg, #000000 0%, #7f8c8d 74%);`,
        peace: `linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%);`,
        gold: `linear-gradient(315deg, #a38560 0%, #e0d4ae 74%);`,
        green: `linear-gradient(43deg, #2C362D 0%, ${NEUTRAL_COLOR.neutralDark} 46%, #232524 100%)`,
        greenInverse: `linear-gradient(43deg, #232524 0%, ${NEUTRAL_COLOR.neutralDark} 46%, #2C362D 100%)`,
        phantomGreen: `linear-gradient(43deg, #2C362D 0%, ${
            NEUTRAL_COLOR.neutralDark
        } 46%, ${fade('#232524', 0.05)} 100%)`,
        phantomGreenInverse: `linear-gradient(43deg, ${fade(
            '#232524',
            0.05
        )} 0%, ${NEUTRAL_COLOR.neutralDark} 46%, #2C362D 100%)`,
    },
};

// ------------------------------------------------------------------
// | Box Shadow
// ------------------------------------------------------------------

export function boxShadow({
    horizontal = 0,
    vertical = 0,
    blur = 0,
    spread = 0,
    color = 'rgba(0,0,0,.5)',
    inset = false,
}): string {
    return `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${
        inset ? 'inset' : ''
    }`;
}

export const BOX_SHADOW = {
    depth: `1px 4px 12px 2px ${NEUTRAL_COLOR.neutralPrimary}`,
    el12: '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',

    float({
        strength = 16,
        color = NEUTRAL_COLOR.neutralBlack,
        opacity = 0.3,
        inset = false,
    }): string {
        return boxShadow({
            horizontal: 0,
            blur: strength / 0.4,
            vertical: strength,
            spread: -(strength * 0.757),
            color: fade(color, opacity),
            inset,
        });
    },

    faded({
        strength = 4,
        color = NEUTRAL_COLOR.neutralBlack,
        opacity = 0.2,
        inset = false,
    }): string {
        return [
            boxShadow({
                horizontal: 0,
                vertical: strength / 2,
                blur: strength,
                spread: -(strength / 2),
                color: fade(color, opacity * 1.117),
                inset,
            }),
            boxShadow({
                horizontal: 0,
                vertical: strength,
                blur: strength ** 2,
                spread: -(strength / 2),
                color: fade(color, opacity),
                inset,
            }),
        ].join(', ');
    },

    light({
        strength = 8,
        color = NEUTRAL_COLOR.neutralBlack,
        opacity = 0.3,
        inset = false,
    }): string {
        return boxShadow({
            horizontal: 0,
            vertical: strength,
            blur: strength * 5,
            spread: -(strength / 0.663),
            color: fade(color, opacity),
            inset,
        });
    },

    over({
        strength = 14,
        color = NEUTRAL_COLOR.neutralBlack,
        opacity = 0.3,
        inset = false,
    }): string {
        return boxShadow({
            horizontal: 0,
            vertical: strength,
            blur: strength / 0.175,
            spread: 0,
            color: fade(color, opacity),
            inset,
        });
    },

    soft({
        strength = 0,
        color = NEUTRAL_COLOR.neutralBlack,
        opacity = 0.3,
        inset = false,
    }): string {
        return boxShadow({
            horizontal: 0,
            vertical: strength,
            blur: 20,
            spread: 0,
            color: fade(color, opacity),
            inset,
        });
    },
};

// ------------------------------------------------------------------
// | Pallete Colors
// | Export for material-ui/styles pallete
// ------------------------------------------------------------------

export const PALLETE_COLORS = {
    background: {
        default: THEME_COLOR.background.main, // #F3F5FA
        paper: NEUTRAL_COLOR.neutralTransitionSecondary,
    },

    primary: {
        main: THEME_COLOR.primary.main,
    },

    secondary: {
        main: THEME_COLOR.secondary.main,
    },

    error: {
        main: SYSTEM_COLOR.error.main,
    },

    text: {
        primary: NEUTRAL_COLOR.neutralWhite,
        secondary: NEUTRAL_COLOR.neutralLight,
        disabled: NEUTRAL_COLOR.neutralTransition,
        hint: NEUTRAL_COLOR.neutralTransitionPrimary,
    },

    action: {
        disabled: NEUTRAL_COLOR.neutralSecondary,
        active: SYSTEM_COLOR.success.main,
    },
};
