import React from 'react';
import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Banner from "../src/components/Banner.jsx";
import AppartementCase from "./components/AppartementCase.jsx";
import Footer from "../src/components/Footer.jsx";
import Main from "../src/components/Main.jsx";

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
