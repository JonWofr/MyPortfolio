// Components
import ProjectsOverview from './views/ProjectsOverview';
import SlidesOverview from './views/SlidesOverview';

export const protectedRoutes = [{
    path: "/projects-overview",
    exact: true,
    Component: ProjectsOverview
}, {
    path: "/slides-overview",
    exact: true,
    Component: SlidesOverview
}]