import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetsScreen from "./screens/planets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsScreen />,
  },
]);

const Routes = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default Routes;
