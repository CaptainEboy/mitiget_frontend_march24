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
import { useState, useEffect } from "react";
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

  // let mytoken =  Cookies.get("token");
  let mytoken =  localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${mytoken}`,
  };

  // const [data, setData] = useState("");
  // const getdata = async () => {
  //   let res =  await axios
  //             .get("http://127.0.0.1:8000/", { headers })
  //             .then((response) => {
  //               console.log(response);
  //               alert(response);
  //               alert("Data Gotten");
  //               return response.data.data;
  //             })
  //             .catch((error) => {
  //               alert(error);
  //             });
  //   return res;
  // }
  
  // React.useEffect(async () => {
  //   let x = await getdata();
  //   setData(x);
  //   console.log(x);
  // }, []);


  const [message, setMessage] = useState('');

    useEffect(() => {
        if(localStorage.getItem("token") === null){ 
            window.location.href = '/'
        }
        else{         
            (async () => {           
                try {
                    const {data} = await axios.get(  
                        "http://127.0.0.1:8000/", { headers }) 
                      //   'http://localhost:8000/home/', {
                      //    headers: {
                      //       'Content-Type': 'application/json'
                      //    }}
                      //  );             
                      //  setMessage(data.message);
                       setMessage(data.data);
                       alert("Data Gotten");
                }
                catch (e) {            
                            console.log('not auth')
                }
            })
        ()};
    },
    []);



    

  
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
            <br/>{message}
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