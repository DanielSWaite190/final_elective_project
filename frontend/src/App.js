import React from "react";
import Home from "./components/Main";
import Production from "./components/Production";
import About from "./components/About";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/production" element={<Production/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
