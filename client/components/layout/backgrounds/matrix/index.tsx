import { alpha } from '@mui/material';
import React from 'react';
import { Root } from './styles';
import { useViewportSize } from '@mantine/hooks';

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export type ComponentProps = {
    totalColumns?: number;
    id?: string;
    isParent?: boolean;
};

const Component = ({
    totalColumns = 20,
    id = '__layoutMatrixEffect',
    isParent = true,
}: ComponentProps): React.ReactElement => {
    const [defined, setDefined] = React.useState<boolean>(false);
    const [parentElement, setParentElement] =
        React.useState<HTMLElement | null>(null);
    const ref = React.useRef(null);

    const { width } = useViewportSize();

    React.useEffect(() => {
        if (!!parentElement && !!ref && !!document) {
            setDefined(false);
        }
    }, [width]);

    React.useEffect(() => {
        if (!defined && !!ref && !!document) {
            // const canvas: React.RefObject<HTMLCanvasElement> = ref;
            const canvas = document.getElementById(
                id
            ) as HTMLCanvasElement | null;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                const parentElement = isParent
                    ? canvas.parentElement
                    : document.body;

                if (ctx && !!parentElement) {
                    setParentElement(parentElement);

                    const w = (canvas.width = parentElement.offsetWidth);
                    const h = (canvas.height = parentElement.offsetHeight);

                    const cols = Math.floor(w / totalColumns) + 1;
                    const ypos = Array(cols).fill(0);

                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, w, h);

                    const matrix = () => {
                        ctx.fillStyle = '#0001';
                        ctx.fillRect(0, 0, w, h);

                        ctx.fillStyle = alpha('#0f0', 0.5);
                        ctx.font = '15pt monospace';

                        ypos.forEach((y, ind) => {
                            const text = String.fromCharCode(
                                Math.random() * 128
                            );
                            const x = ind * totalColumns;
                            ctx.fillText(text, x, y);
                            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                            else ypos[ind] = y + totalColumns;
                        });
                    };

                    setInterval(matrix, 50);
                }
            }

            setDefined(true);
        }
    }, [ref, typeof document]);

    return (
        <React.Fragment>
            <Root>
                <canvas width="100%" height="100%" ref={ref} id={id} />
            </Root>
        </React.Fragment>
    );
};

// ------------------------------------------------------------------
// | [Export]
// ------------------------------------------------------------------

export default React.memo(Component);
