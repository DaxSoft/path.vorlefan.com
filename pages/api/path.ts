import type { NextApiRequest, NextApiResponse } from 'next';
import { PathRoute } from '@vorlefan/path';
import { FileFolderContext } from '$/client/components/controller/file/store';

// creates a default pathRoute
const ProjectRoute = new PathRoute();
ProjectRoute.add('root', process.cwd());

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req;

    let data: FileFolderContext[] = [];

    const folders = await ProjectRoute.folders('root');

    folders.map((f) => {
        data.push({
            basename: f.name,
            routeName: 'root',
        });
    });

    res.status(200).json({
        data,
    });
}
