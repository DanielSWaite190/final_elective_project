import React from "react";
import jwt from "jwt-decode"
import { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie"
import { AuthProvider } from "./ContextContext"

// import { useUpdateAuth, useAuth } from "./ContextContext"
import { AuthContext } from "../App";

function LogIn() {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { auth, setAuth } = useContext(AuthContext)


  // const Auth = useAuth();
  // const UpdateAuth = useUpdateAuth();
  // const Auth = useAuth();

  // useEffect(() => {
  //   console.log('UseEffect', auth)
  // }, [auth]);


  const login = async () => {
    try{
      const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(
          {
            "username": name,
            "password": password
          }
        )
      })
      const token = await response.json()  //<-- does/can this be a state variabel
      const decoded = jwt(token.token)
      // console.log(token.token)
      setUser(decoded);
      setAuth(token.token);
      // await setAuth('seting auth');
      await console.log('Login: ', auth)
      // cookies.set("jwt_authorization", token, {
      //   expires: new Date(decoded.exp * 1000)
      // })
      // await console.log('last: ', auth)
  
    } catch (error){
      console.error(error.message)
      setError(error.message)
    }
  }

  const logout = () => {
    setUser(null);
    console.log('auth updated to null')
    // UpdateAuth(false);
    cookies.remove("jwt_authorization")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name);
    setPassword(password);
  }

  return (
    <React.Fragment> 
      <h1 className="home-h1">Login</h1>

      {error ? (
        <div className="home-h3">There was a problem loging you in.</div>
      ):(<div/>)}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="on"></input>
        <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="on"></input>
        <button onClick={() => login()} >Submitt</button>
        <button onClick={() => logout()}>Logout</button>
      </form>

      {/* {user ? (
        <div>
          <h3 className="home-h3">{user.foundUser.username}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (<div/>)
      } */}
    </React.Fragment>
  );
}

export default LogIn;