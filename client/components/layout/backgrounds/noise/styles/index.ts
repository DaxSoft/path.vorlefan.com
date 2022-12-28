import { styled, alpha } from '@mui/material';
import { THEME, CONSTANTS } from '$/styles/index';

export const Root = styled('div')(({ theme, ...props }) => ({}));
export const Noises = styled('canvas')(({ theme, ...props }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    opacity: 0.25,
    zIndex: 52,
    backgroundColor: alpha(THEME.NEUTRAL_COLOR.neutralPrimary, 0.9),
}));
