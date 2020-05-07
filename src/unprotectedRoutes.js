// Routes
import Home from './views/Home';
import Projects from './views/Projects';
import NotFound from './views/NotFound';
import About from './views/About';
import Contact from './views/Contact';
import SignUp from './views/SignUp';
import Login from './views/Login';

export const unprotectedRoutes = [{
    path: "/",
    exact: true,
    Component: Home
}, {
    path: "/projects",
    exact: true,
    Component: Projects
}, {
    path: "/about",
    exact: true,
    Component: About
}, {
    path: "/contact",
    exact: true,
    Component: Contact
}, {
    path: "/sign-up",
    exact: true,
    Component: SignUp
}, {
    path: "/login",
    exact: true,
    Component: Login
}, {
    Component: NotFound
}]