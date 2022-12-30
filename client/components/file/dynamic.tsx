import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { ComponentProps } from './index';

const Component: any = dynamic(() => import('./index'), {
    ssr: false,
    loading(loadingProps) {
        return <CircularProgress sx={{ justifySelf: 'center' }} />;
    },
});

export default forwardRef(
    (
        props: ComponentProps & {
            ref: any;
        },
        ref: any
    ) => <Component {...props} ref={ref} />
);
