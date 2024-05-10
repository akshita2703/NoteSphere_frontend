import React, { useState, useEffect } from "react";
import logo1 from '../assets/logo1.png';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Header = () => {
    const navigate = useNavigate();

   
    const handleLogout = () => {
        localStorage.removeItem('token');
       
        navigate('/login');
    }

    const token = localStorage.getItem('token');

    return (
        <>
            <div className="m-0 p-3 w-full flex justify-between bg-zinc-900 text-white position:sticky">
                <div className="flex gap-3">
                    <img src={logo1} className="h-7 rounded-3xl" alt="Logo" />
                    <p>NoteSphere</p>
                </div>
                <ul className="flex justify-between gap-5">
                    <li>
                        <button onClick={() => navigate("/Home")}>Home</button>
                    </li>

                    {token &&
                        <li>
                            <button onClick={() => navigate("/Add")}>Add</button>
                        </li>
                    }

                    {!token &&
                        <li>
                            <button onClick={() => navigate("/login")}>Login</button>
                            
                        </li>
                    }

                    {token &&
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default Header;
