import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //importe composant app

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/appart",
    element: <div>appartement</div>
  },
  {
    path: "/about",
    element: <div>A propos</div>
  },
  {
    path: "/error",
    element: <div>404</div>
  },
]);

//charge le composant app dans parent react stricte mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
