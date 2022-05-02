import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutPageNotFound from "../layouts/LayoutPageNotFound";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/signIn";

const routes = [
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
  {
  path: "/pagenotfound",
    layout: LayoutPageNotFound,
    component: AdminHome,
  },
];

export default routes;
