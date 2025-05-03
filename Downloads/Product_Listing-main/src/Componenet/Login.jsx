import React, { useContext } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Maincontext } from "./Context";
import { useNavigate } from "react-router-dom";


const Login = () => {
const {userhandler} = useContext(Maincontext);
const navigator = useNavigate();
function registerHandler(e){
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    userhandler(user.toJSON())
    navigator("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={registerHandler} className="space-y-4">
      

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        

          <button
            type="submit"
            className="w-full cursor-pointer py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <a href="/register" className="text-blue-500 hover:underline">Register- here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
