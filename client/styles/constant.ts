// ------------------------------------------------------------------
// | Constants for a solid UI
// ------------------------------------------------------------------

const SPACING = {
    XXBIG: 4.5,
    XBIG: 3.612,
    BIG: 3.141, // Math.PI,
    SMALL: 1.359, // Math.E / 2
    DEFAULT: 1.687, // Math.SQRT2 * 1.2
    XSMALL: 0.785, // Math.PI / 4
};

const ANIMATION_SPEED = {
    FAST: '.4s',
    DEFAULT: '.95s',
    SLOW: '1.359s',
};

const ANIMATION_TRANSITION = {
    // https://animista.net/

    easeInQuint: 'cubic-bezier(0.755, 0.050, 0.855, 0.060) both',
    easeInExpo: 'cubic-bezier(0.950, 0.050, 0.795, 0.035) both',
    easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045) both',
};

const VIEWPORT = {
    FULLWIDTH: {
        width: 'calc(100vw - (100vw - 100%))',
        '&:after': {
            content: '""',
            clear: 'both',
            display: 'block',
            overflow: 'hidden',
        },
    },
    widthCalc: (scale) => `calc(${scale} - (100vw - 100%))`,
    heightCalc: (scale) => `calc(${scale} - (100vh - 100%))`,
    FULLHEIGHT: {
        width: 'calc(100vh - (100vh - 100%))',
        '&:after': {
            content: '""',
            clear: 'both',
            display: 'block',
            overflow: 'hidden',
        },
    },
    AFTER: {
        '&:after': {
            content: '""',
            clear: 'both',
            display: 'block',
            overflow: 'hidden',
        },
    },
};

// ------------------------------------------------------------------
// | Export
// ------------------------------------------------------------------

export default {
    SPACING,
    ANIMATION_SPEED,
    ANIMATION_TRANSITION,
    VIEWPORT,
};
