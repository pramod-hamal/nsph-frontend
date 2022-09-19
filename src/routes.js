
import Dashboard from "views/Dashboard.js";
import Users from "views/Users.js";
import Chat from "views/Chat";
import Login from "views/Login";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    role:"All",
    permission: "All"
  },
  {
    path: "/user",
    name: "User List",
    icon: "nc-icon nc-circle-09",
    component: Users,
    layout: "/admin",
    permission: "view_user",
    role:"Admin"
  },
  {
    path: "/chat",
    name: "Chat",
    icon: "nc-icon nc-chat-round",
    component: Chat,
    role:"Facilitator",
    permission:"view_chat",
    layout: "/admin",
    permission: "view_chat",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/auth",
  },
  // {
  //   path: "/login",
  //   name: "Chat",
  //   icon: "nc-icon nc-circle-09",
  //   component: Login,
  //   layout: "/admin",
  //   navItem: false,
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
