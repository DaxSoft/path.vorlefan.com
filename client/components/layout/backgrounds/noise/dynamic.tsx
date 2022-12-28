import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { ComponentProps } from './index';

const Component: any = dynamic(() => import('./index'), {
    ssr: false,
});

export const LayoutBackgroundsNoise = forwardRef(
    (
        props: ComponentProps & {
            ref: any;
        },
        ref: any
    ) => <Component {...props} ref={ref} />
);
