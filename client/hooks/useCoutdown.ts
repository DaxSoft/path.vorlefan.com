import React from 'react';

export type UseCoutdownResult = {
    countdown: number;
    timerCountdown: NodeJS.Timeout | null;
};

export type UseCoutdownProps = {
    max: number;
    seconds: number;
    loop?: boolean;
};

export function useCoutdown({
    max,
    seconds,
    loop = false,
}: UseCoutdownProps): UseCoutdownResult {
    const [countdown, setCountdown] = React.useState<number>(0);
    const [timerCountdown, setTimerCountdown] =
        React.useState<NodeJS.Timeout | null>(null);

    const resetCoutdown = React.useCallback(() => {
        if (loop) {
            setCountdown(0);
        }
        if (timerCountdown) {
            clearTimeout(timerCountdown);
        }
    }, [timerCountdown, loop]);

    React.useEffect(() => {
        if (countdown < max) {
            const _timeout = setTimeout(
                () => setCountdown((value) => value + 1),
                1e3 * seconds
            );
            setTimerCountdown(_timeout);
        } else {
            resetCoutdown();
        }
    }, [countdown]);

    return {
        countdown,
        timerCountdown,
    };
}
