import React from 'react';
import { controllerFile } from '../controller/file';
import { Root } from './styles';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = any;

const Component = ({}: ComponentProps): React.ReactElement => {
    const getFoldersAndFiles = controllerFile((s) => s.getFoldersAndFiles);
    const clean = controllerFile((s) => s.clean);
    const data = controllerFile((s) => s.data);

    React.useEffect(() => {
        clean();
        getFoldersAndFiles();
    }, []);

    console.log(data);

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
