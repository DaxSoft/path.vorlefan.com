import React from 'react';
import { keyframes } from '@mui/material';
import { Root, Lines } from './styles';
import { useCoutdown } from '$/client/hooks/useCoutdown';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

type ComponentProps = {
    lines?: number;
    speed?: number;
};

const Component = ({
    lines = 8,
    speed = 0.025,
}: ComponentProps): React.ReactElement => {
    const totalLines = new Array(lines).fill(1);

    const { countdown } = useCoutdown({
        max: lines,
        seconds: speed,
    });

    return (
        <Root
            sx={{
                gridTemplateColumns: `repeat(${countdown + 1},1fr)`,
            }}
        >
            {totalLines.map((v, key) => (
                <Lines key={key} />
            ))}
        </Root>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
