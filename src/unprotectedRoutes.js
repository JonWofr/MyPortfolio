//Components
import Home from './routes/LandingPage';
import ProjectsOverview from './routes/ProjectsOverview';
import Projects from './routes/Projects';
import DefaultLayout from './layouts/DefaultLayout';

export const unprotectedRoutes = [
    {
        path: "/",
        exact: true,
        Component: Home,
        Layout: DefaultLayout
    },
    {
        path: "/projects",
        exact: false,
        Component: Projects,
        Layout: DefaultLayout
    },
    {
        path: "/projects-overview",
        exact: false,
        Component: ProjectsOverview,
        Layout: DefaultLayout
    }
]