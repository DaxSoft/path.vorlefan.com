import { styled } from '@mui/material';
import { THEME, CONSTANTS } from '$/styles/index';

export const Root = styled('div')(({ theme, ...props }) => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
}));

export const Canvas = styled('canvas')(({ theme, ...props }) => ({}));
