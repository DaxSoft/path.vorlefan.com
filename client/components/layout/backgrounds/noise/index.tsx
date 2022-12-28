import React, { useEffect } from 'react';
import Script from 'next/script';

import { Noises } from './styles';

import { NOISE_SCRIPT } from './noise';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = {};

const Component = (props: ComponentProps): React.ReactElement => {
    const [start, setStart] = React.useState(false);

    useEffect(() => {
        setStart(true);
    }, []);

    return (
        <React.Fragment>
            <Noises id="layout-background-noise" />
            {start && <Script>{NOISE_SCRIPT}</Script>}
        </React.Fragment>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
