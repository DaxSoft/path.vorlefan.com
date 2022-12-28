import React from 'react';
import dynamic from 'next/dynamic';
import { FullBackgroundComponentProps } from './index';

const Component = dynamic(() => import('./index'), { ssr: true });

const L_FullBackground = (
    props: FullBackgroundComponentProps
): React.ReactElement => {
    return <Component {...props} />;
};

export { L_FullBackground };