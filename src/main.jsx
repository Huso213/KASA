import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //importe composant app

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Appartement from "./pages/Appartement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>,//message d'erreur 404 si la page n'existe pas
  },

  {/*Url page appartement  */ },
 {
    path: "/appart",
    element: <Appartement/>
  },

  {/*Url page a propos  */ },
  {
    path: "/about",
    element: <About />
  },

  
]);

//charge le composant app dans parent react stricte mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
