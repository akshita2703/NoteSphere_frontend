import React, { useState } from "react";
import bg1 from "../assets/bg1.webp"
import write1 from "../assets/write1.jpeg"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://note-sphere-backend.vercel.app/user/auth/signup', { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {/* <img src={img1} alt="img"  className="w-full h-screen"/>  */}
      <div className="flex-row border border-black flex   bg-[#49243E]  m-2 p-20"
        style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "rgba(0,0,0,0.5)" }} >

        <div className="border border-black p-5  gap-2 bg-zinc-900 rounded-lg my-20 flex ">

          <div className="p-8">
            <img src={write1} alt="" className="rounded-md " />
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3 flex-col rounded-sm justify-center opacity-70">
            <div className="gap-1 ">
              <p className=" align-center font-bold text-3xl text-[#cb8a76]"> Sign Up</p>
              <p className=" align-center text-white">  Create your Account</p>
            </div>

            <input type="Name" placeholder="Name" className="px-2 rounded-md" onChange={(e) => setName(e.target.value)} />

            <input type="Email" placeholder="Email ID" className="px-2 rounded-md" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="px-2 rounded-md" onChange={(e) => setPassword(e.target.value)} />


            <button className="border border-black bg-zinc-800 text-white rounded-md"> Sign   Up </button>
            <label htmlFor="" className=" align-center text-white" onClick={() => navigate("/login")}> Already have account? Login </label>

          </form>
        </div>
      </div>
    </>
  )
}
export default SignUp