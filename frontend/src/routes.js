import React from "react";

const Detail = React.lazy(() => import("./component/Detail/Detail"));
const ListPost = React.lazy(() => import("./component/ListPost/ListPost"));
const Profile = React.lazy(() => import("./component/Profile/Profile"))
const Mydinner = React.lazy(() => import("./component/Mydinner/Mydinner"))

// các route trong DefaultLayout
const routes = [
  { path: "/", exact: true, name: "Home" , component: ListPost},
  { path: "/search", exact: true, name: "Home" , component: ListPost},
  { path: "/cart", exact: true, name: "Cart", component: ListPost },
  { path: "/posts/:id", exact: true, name: "Detail", component: Detail },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/users/mydiner", name: "My diner", component: Mydinner }
];

export default routes;
