import routes from "../constants/routes"
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.contact, component: Contact }
]

export { publicRoutes }