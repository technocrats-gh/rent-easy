// import {React, useState} from 'react'
// import { Link } from 'react-router-dom'
// import '../Styles/StartLogin.scss'

//  const StartLogin = () => {
//   const [state, setState]= useState({
//     username:'',
//     password:'',
//   })

//   const handleChange = (e, inputField) => {
//     const value = e.target.value;
//     setState(prevState => ({
//       ...prevState,
//       [inputField]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//     console.log('Logging in with', state);
//   };

//   const Facebook = () => <a href="#" id="facebookIcon"><i className="fab fa-facebook"></i> Facebook</a>
//   const Twitter = () => <a href="#" id="twitterIcon"><i className="fab fa-twitter"></i> Twitter</a>
//   const Google = () => <a href="#" id="googleIcon"><i className="fab fa-google"></i> Google</a>
  
//   return (
//     <div id="loginform">
//       <h2 id="headerTitle">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             value={state.username}
//             placeholder="Enter your username"
//             onChange={(e) => handleChange(e, 'username')}
//           />
//         </div>
//         <div className="row">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             value={state.password}
//             placeholder="Enter your password"
//             onChange={(e) => handleChange(e, 'password')}
//           />
//         </div>
//         <div id="button" className="row">
//           <Link to='/HomePage'>
//             <button >Login</button>
//           </Link>
//         </div>
//         <div id="button" className='signUp'>
//           <h6>No Account?</h6>
//           <Link to="/SignUp">
//             <button className='signUpButton'>Sign Up</button>
//           </Link>
//           <h6>here</h6>
//         </div>
//       </form>
//       <div id="alternativeLogin">
//         <label>Or sign in with:</label>
//           <div id="iconGroup">
//             <Facebook />
//             <Twitter />
//             <Google />
//           </div>
//       </div>
//     </div>
//   );
// }
// export default StartLogin


import React from "react";
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const StartLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button id="button" className="row" onClick={() => loginWithRedirect()}>Log In</button>; 

};

export default StartLogin;