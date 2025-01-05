import React from 'react';
import Navbar from "./components/Navbar.jsx";
import "./App.scss";
import Banner from "./components/Banner.jsx";
import AppartementCase from "./components/AppartementCase.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

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
