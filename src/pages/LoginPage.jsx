import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";



function LoginPage() {
  const [err,setErr] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")

    }catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer bg-gradient-to-r from-sky-300 to-blue-400 h-screen flex justify-center items-center  ">
      <div className="formWrapper ">
        <form onSubmit={handleSubmit} className=" bg-gray-900 flex flex-col gap-4 p-8  rounded-lg items-center">
        <span className="logo text-white text-2xl font-semi-bold">Chatter</span>
        <span className="title text-white text-sm font-light ">Login</span>
          <input className="rounded-sm p-2 w-60 bg-gray-800 text-white" type="email" placeholder="enter your Email"/>
          <input className="rounded-sm p-2 w-60 bg-gray-800 text-white" type="password" placeholder="Enter your password"  />
            <input className="hidden" type="file" id="file" />
          <button className="bg-gradient-to-r from-sky-400 to-blue-500 p-1 w-40 rounded-md">Sign In</button>
          <p className="text-gray-400">don't have an account? <Link to="/register"> Register</Link></p>
          {err && <span>Something went wrong</span>}
        </form>
        
      </div>
    </div>
  )
}

export default LoginPage
