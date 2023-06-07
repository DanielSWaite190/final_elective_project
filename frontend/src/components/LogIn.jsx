import React from "react";
import jwt from "jwt-decode"
import { useState } from "react";
import Cookies from "universal-cookie"

function Register() {

 const cookies = new Cookies();
 const [user, setUser] = useState(null);
 const [token, setToken] = useState(null);

 const login = () => {

  fetch('http://localhost:5000/user/login')
    .then((res) => res.json())
    .then((data) => {
      setToken(data.token)
    })
    .catch((error) => {
      console.error(error);
    })

   const decoded = jwt(token)
   setUser(decoded)

   cookies.set("jwt_authorization", token, {
     expires: new Date(decoded.expires * 1000),
   });
 } 

  const logout = () => {
    setUser(null);
    cookies.remove("jwt_authorization")
  };


  return (
    <React.Fragment> 
    <h1 class="home-h1">Login</h1>
    <form>
      <input type="text" placeholder="name"></input>
      <input type="password" placeholder="password"></input>
    </form>

    {user ? (
      <div>
        <h3>{user.name}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <button onClick={login} >Login</button>
      </div>)
    }
    </React.Fragment>
  );
}

export default Register;