import React from 'react';
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
//import Appartement from "./components/Appartement.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      {/*Image banner */}
      <Banner />
      <Footer></Footer>
      
       </div>
  );
}

export default App;
