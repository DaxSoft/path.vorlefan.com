import type { StateCreator } from 'zustand';
import { FetchStateLoading, OmitFunctionProperties } from '..';
import { objectToQuerystring } from '../../utils';
import type { TControllerFile } from './index';

export type FileFolderContext = {
    routeName: string;
    basename: string;
};

export type _StateSkeleton = {
    clean(): void;
    getFoldersAndFiles();
    data: FileFolderContext[];
    isLoading: FetchStateLoading;
};

const properties: Omit<
    _StateSkeleton,
    OmitFunctionProperties<_StateSkeleton>
> = {
    data: [],
    isLoading: 'initial',
};

export const storeSkeleton: StateCreator<
    TControllerFile,
    [],
    [],
    _StateSkeleton
> = (set, get) => ({
    ...properties,
    clean() {
        set({ ...properties });
    },
    getFoldersAndFiles() {
        fetch(`/api/path`, {
            method: 'GET',
        })
            .then((res) => {
                res.json()
                    .then((d) => {
                        set({
                            data: d.data,
                            isLoading: 'success',
                        });
                    })
                    .catch(() =>
                        set({
                            isLoading: 'error',
                        })
                    );
            })
            .catch(() => {
                set({
                    isLoading: 'error',
                });
            });
    },
});
