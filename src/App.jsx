import React from 'react';
import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Banner from "../src//components/Misepage/Banner.jsx";
import AppartementCase from "./components/AppartementCase.jsx";
import Footer from "./components/Misepage/Footer.jsx";
import Main from "./components/Misepage/Main.jsx";


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
