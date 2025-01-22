import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //importe composant app
import{ErrorPage} from "./pages/ErrorPage.jsx"; //message d'erreur 404 si la page n'existe pas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Appartement from "./pages/Appartementpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,//message d'erreur 404 si la page n'existe pas
  },

  // Url page appartement
 {
    path: "/appart/:id",
    element: <Appartement/>
  },

  // Url page a propos
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