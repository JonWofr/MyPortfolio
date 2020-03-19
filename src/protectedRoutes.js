// Components
import ProjectsOverview from './routes/ProjectsOverview';
import SlidesOverview from './routes/SlidesOverview';

export const protectedRoutes = [{
    path: "/projects-overview",
    exact: true,
    Component: ProjectsOverview
}, {
    path: "/slides-overview",
    exact: true,
    Component: SlidesOverview
}]