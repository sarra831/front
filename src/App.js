

import React from "react";
import Home from "./components/Home"; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {Routes , Route} from 'react-router-dom';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  return ( 
    <div className="App">
      <NavBar/>
    <main className="container"> 
    <Routes>
      <Route path ="/" exact element={<Home/> }/>
      <Route path ="/register" element={<Register/> }/>
      <Route path ="/login" element={<Login/> }/>

      
    </Routes>
    </main>
  <Footer/>
  </div>  
  
  );
}

export default App;
