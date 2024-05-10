import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom";

import bg1 from "../assets/bg1.webp";
import download from "../assets/download.jpeg";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5500/user/auth/login", { email, password })
      .then((result) => {
        console.log(result);
        localStorage.setItem('token', result.data.token);
        navigate('/Home');
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div
        className="flex-row border border-black flex bg-[#49243E] m-2 p-20"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      >
        <div className="border border-black p-5 gap-2 bg-zinc-900 rounded-lg my-20 flex">
          <div className="p-2">
            <img src={download} alt="" className="rounded-md" />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3 flex-col rounded-sm justify-center opacity-70">
            <div className="gap-1">
              <p className="align-center font-bold text-3xl text-[#cb8a76]"> Welcome Back!</p>
              <p className="align-center text-white"> Please enter your details</p>
            </div>
            <input type="email" placeholder="Email ID" className="px-2 rounded-md" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="px-2 rounded-md" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="border border-black bg-zinc-800 text-white rounded-md"> Login </button>
            <label htmlFor="" className="align-center text-white" onClick={() => navigate("/Signup")}> Don't have an account? Sign Up </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;
