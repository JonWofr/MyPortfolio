//Components
import Home from './routes/LandingPage';
import ProjectsOverview from './routes/ProjectsOverview';
import Projects from './routes/Projects';

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
    }
]