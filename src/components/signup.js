// import React, { Component } from "react";
// export default class SignUp extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>React SignUp Component</h3>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
import { useState } from "react";
import axios from "axios";

export default function SignUp() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (evt) => {
      evt.preventDefault();
      const data = {
        username: name,
        company: company,
        password: password,
      };
      axios
        .post("http://127.0.0.1:8000/register", data)
        .then((response) => {
          console.log(response);
        //   alert(response);
          alert("Account Created Successfully");
          window.location.href = '/welcome' 
        })
        .catch((error) => {
          alert(error);
        });
    };


  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Last name"  value={company}
          onChange={(e) => setCompany(e.target.value)} />
        </div>
        {/* <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div> */}
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" value="Submit"  className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  
}