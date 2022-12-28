import { styled, Typography } from '@mui/material';
import { THEME, CONSTANTS, FONT_FAMILY } from '$/styles/index';

export const Root = styled('div')(({ theme, ...props }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(CONSTANTS.SPACING.DEFAULT, CONSTANTS.SPACING.XXBIG),
    marginTop: '2em',
    fontFamily: FONT_FAMILY.Header,
    alignSelf: 'flex-end',
    height: 'max-content',
    [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(
            CONSTANTS.SPACING.SMALL,
            CONSTANTS.SPACING.DEFAULT
        ),
        gridTemplateColumns: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '4em',
    },
}));

export const Est = styled(Typography)(({ theme, ...props }) => ({
    color: THEME.NEUTRAL_COLOR.neutralTransitionPrimary,
}));

export const Copy = styled(Typography)(({ theme, ...props }) => ({
    color: THEME.NEUTRAL_COLOR.neutralTransitionPrimary,
}));
