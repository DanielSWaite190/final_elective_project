import React from "react";
import jwt from "jwt-decode"
import { useState } from "react";
import Cookies from "universal-cookie"

function LogIn() {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const login = () => {
    fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(
        {
          "username": name,
          "password": password
        }
      )
    })
    .then((res) => res.json())
    .then((data) => {
      // HERE
      console.log('Token:', data.token)
      setToken(data.token)

      const decoded = jwt(token)
      console.log('decoded:', decoded)
      setUser(decoded);
      cookies.set("jwt_authorization", token, {
      expires: new Date(decoded.exp * 1000)
    })
    })
    .catch((error) => {
      console.error('error:', error);
      setError(error)
    })
    

    // console.log('token', token)

    // const decoded = jwt(token)
    // setUser(decoded);
    // cookies.set("jwt_authorization", token, {
    //   expires: new Date(decoded.exp * 1000)
    // })
    
    // console.log('user', user)
  }

  const logout = () => {
    setUser(null);
    cookies.remove("jwt_authorization")
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name)
    setPassword(password)
  }

  return (
    <React.Fragment> 
    <h1 className="home-h1">Login</h1>

    {error ? (
      <div className="home-h3">problem!</div>
    ):(<div/>)}

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="on"></input>
      <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="on"></input>
    <button onClick={login} >Submitt</button>
    </form>

    {user ? (
      <div>
        <h3 className="home-h3">{user.foundUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (<div/>)
    }
    </React.Fragment>
  );
}

export default LogIn;