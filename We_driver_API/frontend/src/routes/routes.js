import Welcome from '@/pages/Layout/Welcome';
import Login from '@/pages/Layout/Login';
import Registro from '@/pages/Layout/Register'
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "*",
    redirect: "/login",
    name:"All"
  },
  {
    path: "/",
    name:'Home',
    component: Welcome,
    meta:{
      welcomePage: true
    }
  },
  {
    path: "/login",
    component: Login,
    name:"Login",
    meta:{
      userLoged : false
    }
  },
  {
    path: "/registro",
    name: "Registro",
    component : Registro,
    meta:{
      userLoged : false
    }
  },
  {
    path: "/app",
    component: DashboardLayout,
    redirect: "maps",
    meta:{
      userLoged : true //userLoged debe ser true para poder acceder a caulquiera de sus hijos
    },
    children: [
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;