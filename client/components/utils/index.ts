export function objectToQuerystring(obj: Record<any, any>) {
    return (
        '?' +
        Object.keys(obj)
            .map((key) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(
                    obj[key]
                )}`;
            })
            .join('&')
    );
}
