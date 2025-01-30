import React from 'react';
import "./components/layout/Navbar.jsx";
import "./App.scss";
import Banner from "../src//components/layout/Banner.jsx";
import AppartementCase from "./components/AppartementCase.jsx";
import Footer from "./components/layout/Footer.jsx";
import Main from "./components/layout/Main.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
      {/*Image banner */}
      <Banner />
      <AppartementCase />
      </Main>
      <Footer></Footer>
      
       </div>
  );
}

export default App;
