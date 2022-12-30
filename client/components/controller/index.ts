export type OmitFunctionProperties<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type FetchStateLoading =
    | 'pending'
    | 'success'
    | 'error'
    | 'initial'
    | 'reset'
    | 'transaction';
