import { useMediaQuery, useTheme, Breakpoint } from '@mui/material';

export function useResponsive(
    vln: Breakpoint | [Breakpoint, Breakpoint],
    isUp = false
): boolean {
    const theme = useTheme();
    if (Array.isArray(vln)) {
        const query = useMediaQuery(theme.breakpoints.between(vln[0], vln[1]));
        return query;
    } else {
        return useMediaQuery(
            isUp ? theme.breakpoints.up(vln) : theme.breakpoints.down(vln)
        );
    }
}
