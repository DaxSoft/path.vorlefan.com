import { LayoutRoot } from '$/client/components/layout/wireframe';

import {
    LayoutBackgroundsNoise,
    LayoutBackgroundsGrids,
} from '$/client/components/layout/backgrounds/index';

import React from 'react';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = any;

const Component = ({}: ComponentProps): React.ReactElement => {
    return (
        <React.Fragment>
            <LayoutBackgroundsGrids />
            <LayoutBackgroundsNoise />
            <LayoutRoot></LayoutRoot>
        </React.Fragment>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
