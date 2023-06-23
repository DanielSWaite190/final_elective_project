import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Production from "./components/Production";
// import {AuthProvider} from "./components/ContextContext";


export const AuthContext = React.createContext()

function App() {

  const [ auth, setAuth] = useState(null);

  return (
    <AuthContext.Provider value={{auth, setAuth}}> 
      <main>
        <NavBar/>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/production" element={<Production/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <footer>
          <p>Forerunners Foundation©</p>
        </footer>
      </main>
    </AuthContext.Provider>
  );
}

export default App;