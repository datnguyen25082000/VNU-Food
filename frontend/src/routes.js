import React from "react";

const Detail = React.lazy(() => import("./component/Detail/Detail"));

const ListPost = React.lazy(() => import("./component/ListPost/ListPost"));

// các route trong DefaultLayout
const routes = [
  { path: "/", exact: true, name: "Home" , component: ListPost},
  { path: "/cart", exact: true, name: "Cart", component: ListPost },
  { path: "/posts/:id", exact: true, name: "Detail", component: Detail }
];

export default routes;
