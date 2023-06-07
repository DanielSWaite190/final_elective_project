import React from "react";
import jwt from "jwt-decode"
import { useState } from "react";
import Cookies from "universal-cookie"

function Register() {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
      setToken(data.token)
    })
    .catch((error) => {
      console.error('error:', error);
    })
    

    console.log('token', token)

    const decoded = jwt(token)
    setUser(decoded);
    cookies.set("jwt_authorization", token, {
      expires: new Date(decoded.exp * 1000)
    })
    
    console.log('user', user)
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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="on"></input>
      <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="on"></input>
    </form>

    {user ? (
      <div>
        <h3>ID{user.id}</h3>
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