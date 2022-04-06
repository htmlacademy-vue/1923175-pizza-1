import {
  auth,
  nonAuthenticatedOnly,
  authenticatedOnly,
  profile,
} from "@/middlewares";

export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index"),
    meta: {
      layout: "AppLayoutDefault",
      middlewares: [auth],
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      layout: "AppLayoutDefault",
      middlewares: [auth, nonAuthenticatedOnly],
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
    meta: {
      layout: "AppLayoutDefault",
      middlewares: [auth],
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders"),
    meta: {
      layout: "AppLayoutMain",
      middlewares: [auth, authenticatedOnly],
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile"),
    meta: {
      layout: "AppLayoutMain",
      middlewares: [auth, authenticatedOnly, profile],
    },
  },
];
