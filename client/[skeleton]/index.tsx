import React from 'react';
import { Root } from './styles';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = any;

const Component = ({}: ComponentProps): React.ReactElement => {
    return (
        <React.Fragment>
            <Root></Root>
        </React.Fragment>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
