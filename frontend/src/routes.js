import React from 'react';
const Coffee = React.lazy(() => import("./component/Views/Coffee"));
const DefaultContent = React.lazy(() => import("./component/Views/DefaultContent/DefaultContent.js.js"));
const Coffee1 = React.lazy(() => import("./component/Views/Coffee/Coffee1/Coffee1.js.js"));
const Coffee2 = React.lazy(() => import("./component/Views/Coffee/Coffee2/Coffee2.js.js"));


const routes = [
  {
    path: "/",
    exact: true,
    component: DefaultContent,
  },
  {
   
   
  },

];

export default routes;