import LayoutAdmin from "../layouts/LayoutAdmin";
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
];

export default routes;
