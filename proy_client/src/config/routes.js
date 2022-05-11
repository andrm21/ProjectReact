import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import LayoutPageNotFound from "../layouts/LayoutPageNotFound";
import AdminHome from "../pages/Admin";
import Home from "../pages/home";
import AdminSignIn from "../pages/Admin/signIn";
import Contact from "../pages/contact";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routesNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: LayoutPageNotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routesNotFound];

export default routes;
