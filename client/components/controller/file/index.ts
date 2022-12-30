import create from 'zustand';

import { _StateSkeleton, storeSkeleton } from './store';

export type TControllerFile = _StateSkeleton;

export const controllerFile = create<TControllerFile>()((...a) => ({
    ...storeSkeleton(...a),
}));
