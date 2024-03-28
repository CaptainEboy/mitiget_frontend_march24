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


import React from 'react';
import { useState } from "react";
import axios from "axios";

export default function Welcome() {
  const logOut = (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    localStorage.clear();  
    // window.location.reload();
    window.location.href = '/' 
    
  }

    

  
    return (
        // <>
        //     <div>
        //         <h1>Hello</h1>
        //     </div>
        // </>
      <form onSubmit={logOut}>
        <h2 className="mb-3">    Mitiget Dashboard</h2>
        <div >
          <h5>Welcome To Your Mitiget Dashboard</h5>
        </div>
        <div className="mb-3">
          <h4>
            <br/>
          </h4>
        </div>
        <div className="mb-3">
          <h4>
            <br/>
          </h4>
        </div>
       
       
        <div className="d-grid">
          <button  type="submit" value="Submit"   className="btn btn-primary">
            Logout
          </button>
        </div>
        
      </form>
    )
  
}