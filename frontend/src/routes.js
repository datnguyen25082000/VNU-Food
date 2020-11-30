import React from 'react';
const Coffee = React.lazy(() => import("./components/Views/Coffee"));
const DefaultContent = React.lazy(() => import("./components/Views/DefaultContent/DefaultContent.js"));
const Coffee1 = React.lazy(() => import("./components/Views/Coffee/Coffee1/Coffee1.js"));
const Coffee2 = React.lazy(() => import("./components/Views/Coffee/Coffee2/Coffee2.js"));


const routes = [
  {
    path: "/",
    exact: true,
    component: DefaultContent,
  },
  {
    path: "/coffee",
    component: Coffee,
    routes: [
      {
        path: "/coffee/coffee1",
        component: Coffee1,
      },
      {
        path: "/coffee/coffee2",
        component: Coffee2,
      },
    ]
  },

];

export default routes;