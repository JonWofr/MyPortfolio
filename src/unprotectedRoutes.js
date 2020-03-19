// Routes
import Home from './routes/Home';
import Projects from './routes/Projects';
import NotFound from './routes/NotFound';
import About from './routes/About';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';
import Login from './routes/Login';

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