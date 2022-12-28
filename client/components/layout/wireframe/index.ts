import { styled } from '@mui/material';
import { THEME, CONSTANTS } from '$/styles/index';

export const LayoutRoot = styled('div')(({ theme, ...props }) => ({
    ...CONSTANTS.VIEWPORT.FULLWIDTH,
    // height: '100vh',
    // alignItems: 'flex-start',
    display: 'grid',
    gridTemplateRows: 'max-content',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '& > *': {
        zIndex: 100,
    },
    padding: theme.spacing(CONSTANTS.SPACING.BIG),
    gap: '1em',
}));
