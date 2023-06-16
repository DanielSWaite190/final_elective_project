import React, { useEffect } from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Production from "./components/Production";
import { AuthProvider } from "./components/ContextContext";

import { useAuth } from "./components/ContextContext"



function App() {
  const Auth = useAuth();
  useEffect(() => { console.log('HERE: ', Auth)}, []);
  return (
    <AuthProvider> 
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
    </AuthProvider>
  );
}

export default App;
