import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"; //importe composant app
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export const router = createBrowserRouter([
  {
    path: "/appart",
    element: (
      <>
        <Navbar />
        <App />
        <Footer />
      </>
    ),

    errorElement: <h1>404 not found</h1>, //message d'erreur 404 si la page n'existe pas
  },

  {
    /*Url page appartement  */
  },
  {
    path: "/appart",
    element:  (
      <>
        <Navbar />
        <h1>Appartement</h1>
        <Footer />
        </>
    ),
  },

  {
    /*Url page a propos  */
  },
  {
    path: "/about",
    element:  (
      <>
        <Navbar />
        <h1>A propos</h1>
        <Footer />
        </>
    ),
  },
]);

//charge le composant app dans parent react stricte mode
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
