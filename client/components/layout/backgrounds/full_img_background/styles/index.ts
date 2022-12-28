import { styled } from '@mui/material';
import { THEME, CONSTANTS } from '$/styles/index';

export const Root = styled('img')(({ theme, ...props }) => ({
    ...CONSTANTS.VIEWPORT.FULLWIDTH,
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0,
    position: 'fixed',
    objectFit: 'cover',
}));
