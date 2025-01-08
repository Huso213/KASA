import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Pageaccueil from "../Pageaccueil";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Appartementpage from "../pages/Appartementpage";
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
     {/* <Outlet />*/} {/*duplique la navbar*/}
        </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Pageaccueil />,
      },
      {
        path: "/appart",
        element:<Appartementpage/>,
      },

      {
        path: "/about",
        element: <h1>About Page</h1>,
      },
    ],
  },
]);
