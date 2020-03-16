// Routes
import Home from './routes/Home';
import ProjectsOverview from './routes/ProjectsOverview';
import Projects from './routes/Projects';
import SlidesOverview from './routes/SlidesOverview';
import NotFound from './routes/NotFound';
import About from './routes/About';
import Contact from './routes/Contact';

export const unprotectedRoutes = [{
    path: "/",
    exact: true,
    Component: Home
}, {
    path: "/projects",
    exact: true,
    Component: Projects
}, {
    path: "/projects-overview",
    exact: true,
    Component: ProjectsOverview
}, {
    path: "/slides-overview",
    exact: true,
    Component: SlidesOverview
}, {
    path: "/about",
    exact: true,
    Component: About
}, {
    path: "/contact",
    exact: true,
    Component: Contact
}, {
    Component: NotFound
}]