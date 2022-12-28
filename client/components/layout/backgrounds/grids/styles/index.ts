import { styled } from '@mui/material';
import { THEME, CONSTANTS } from '$/styles/index';

export const Root = styled('div')(({ theme, ...props }) => ({
    position: 'fixed',
    ...CONSTANTS.VIEWPORT.FULLWIDTH,
    ...CONSTANTS.VIEWPORT.FULLHEIGHT,
    top: 0,
    left: 0,
    pointerEvents: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    justifyContent: 'space-between',
    height: CONSTANTS.VIEWPORT.heightCalc('100vh'),
    zIndex: 51,
    justifyItems: 'end',
    // backgroundImage: `url("/pages/start/background.jpg")`,
}));

export const Lines = styled('span')(({ theme, ...props }) => ({
    width: theme.typography.pxToRem(2),
    background: THEME.GRADIENT_COLOR.metallic.greenInverse,
    height: '100vh',
    opacity: 0.25,
    [theme.breakpoints.down('xs')]: {
        opacity: 0.135,
    },
}));
