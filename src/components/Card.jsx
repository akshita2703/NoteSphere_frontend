import React, { useState } from 'react';
import axios from 'axios';
import { FaRegFileLines } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Card = ({ data, reference }) => {
    const navigate = useNavigate();
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const headers = {
            Authorization: `Bearer ${token}`
        };

        axios.delete(`https://note-sphere-backend.vercel.app/note/notes/${data._id}`, { headers })
            .then((result) => {
                console.log(result);
                alert('Document Deleted Successfully');
                setIsDeleted(true); // Update state to reflect deletion
            })
            .catch((err) => {
                console.log(err);
                alert('Error in Deleting Document');
            });
        
    };

    if (isDeleted) {
        return null; // If the note is deleted, don't render anything
    }

    return (
        <motion.div drag dragConstraints={reference} className="relative flex-shrik-0 w-60 h-72 rounded-lg text-white px-3 py-3 bg-zinc-900/100 overflow-hidden">
            <div className="flex flex-row bg-black p-1 m-0 rounded-md">
                <p className="text-md p-1 font-Bold flex gap-2" style={{ textTransform: 'capitalize' }}>
                    <div className='mt-1'><FaRegFileLines /></div>
                    {data.title}
                </p>
            </div>
            <div className="w-50 h-48 mt-2 rounded-md p-2 bg-zinc-700/100">
                <p className="text-xs">{data.description}</p>
            </div>
             <button onClick={() => navigate(`/Add?id=${data._id}`)} className="absolute mt-1 p-1 right-8 text-red-500 bg-transparent border-none">
                <MdEdit />
            </button>
            <button onClick={handleDelete} className="absolute mt-1 p-1 right-2 text-red-500 bg-transparent border-none">
                <MdDeleteOutline />
            </button>
        </motion.div>
    );
};

export default Card;
