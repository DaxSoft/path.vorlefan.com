import React from 'react';
import { Root, Est, Copy } from './styles';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = any;

const Component = ({}: ComponentProps): React.ReactElement => {
    return (
        <React.Fragment>
            <Root>
                <Est variant="caption">Est 2016 ~</Est>
                <Copy variant="caption">
                    &copy; VORLEFAN DESENVOLVIMENTO LTDA - 46.216.078/0001-60
                </Copy>
            </Root>
        </React.Fragment>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
