import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import TelaExemploScreen from "./screens/exemplo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsScreen />,
  },
  {
    path: "/:id",
    element: <TelaExemploScreen />,
  },
]);

const Routes = () => (
  <Fragment>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Fragment>
);

export default Routes;
