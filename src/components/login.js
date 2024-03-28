// import React, { Component } from "react";
// export default class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>React Login Component</h3>
//             </div>
//         );
//     }
// }

import React from 'react'
import { useState } from "react";
import axios from "axios";

export default function Login() {
  // const Auth = React.useContext(AuthApi);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    const data = {
      username: name,
      password: password,
    };
    const news = async () => {
      let res = await axios
        .post("http://127.0.0.1:8000/login", data,  
              {headers: 
                { 'Content-Type': 'application/x-www-form-urlencoded'}
              }
        )
        .then((response) => {
          console.log(response);
          // Cookies.set("token", response.data.access_token);
          localStorage.clear();         
          localStorage.setItem("token", response.data.access_token); 
          alert("Welcome To Your Mitiget Dashboard");
          window.location.href = '/welcome' 
          // localStorage.setItem('access_token', data.access); 
          // var hi = Cookies.get({name: "token"});
          // alert(hi);
          return response;
        })
        .catch((error) => {
          console.log(error.message);
        });
      return res;
    };
    let x = await news();
    if (x) {
      window.location.reload();
      window.location.href = '/welcome' 
    }
  };

 
    return (
      <form  onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username:</label>
          <input
            placeholder="Enter Username"
            type="text"
            className="form-control"
            // className="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            // className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  
}