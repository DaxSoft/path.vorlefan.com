import React from 'react';
import { Root } from './styles';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type FullBackgroundComponentProps = {
    src?: string;
};

const Component = ({
    src = '/pages/backgrounds/background-vector.svg',
}: FullBackgroundComponentProps): React.ReactElement => {
    return <Root style={{ backgroundImage: `url("${src}")` }} />;
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
