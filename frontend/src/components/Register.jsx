import React from "react";
import { useState } from "react";

function Register() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    try{
      const response = await fetch('http://localhost:5000/register', {
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
      const user = await response.json()
      setUser(user.username)
      
    } catch (error){
      console.error("console log", error)
      setError(error.message)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(name);
    setPassword(password);
  }

  return (
    <React.Fragment> 
      <h1 className="home-h1">Register</h1>

      {error ? (
        <div className="home-h3">There was a problem with your registration.</div>
      ):(<div/>)}

      {user ? (
        <div className="home-h3">{user} user created.</div>
      ):(<div/>)}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="on"></input>
        <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="on"></input>
        <button onClick={register} >Submitt</button>
      </form>
    </React.Fragment>
  );
}

export default Register;