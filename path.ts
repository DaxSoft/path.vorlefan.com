import { PathRoute } from '@vorlefan/path';

// creates a default pathRoute
const ProjectRoute = new PathRoute();
ProjectRoute.add('root', __dirname);

export { ProjectRoute };
