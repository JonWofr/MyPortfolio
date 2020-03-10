//Components
import Home from './routes/Home';
import ProjectsOverview from './routes/ProjectsOverview';
import Projects from './routes/Projects';
import SlidesOverview from './routes/SlidesOverview';

export const unprotectedRoutes = [
    {
        path: "/",
        exact: true,
        Component: Home
    },
    {
        path: "/projects",
        exact: false,
        Component: Projects
    },
    {
        path: "/projects-overview",
        exact: false,
        Component: ProjectsOverview
    },
    {
        path: "/slides-overview",
        exact: false,
        Component: SlidesOverview
    }
]