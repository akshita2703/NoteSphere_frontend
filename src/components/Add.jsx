import React, { useState } from "react";
import axios from "axios";
import img4 from "../assets/img4.jpg";

const Add = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [downloadable, setDownloadable] = useState(false);

    const token = localStorage.getItem("token");

    const handleSubmit = (e) => {
        e.preventDefault();
        const reqBody = {
            title,
            description
        };
        

        const headers = {
            Authorization: `Bearer ${token}`
        };

        axios.post("https://note-sphere-backend.vercel.app/note/create", reqBody, { headers }).then((result) => {
            console.log(result);
            alert("Document Added Successfully");
        }
        ).catch(err => {
            console.log(err)
            alert("Error in Adding Document");
        });
    };

    return (
        <>
            <div className="bg-[] m-8 lblur-x">
                <div className="justify-center items-center flex rounded-lg  h-200 w-400 shadow-sm ">
                    <div className="p-5">
                        <img src={img4} alt="img" className="h-150  p-8 opacity-90" />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-left gap-2 p-10  bg-zinc-900  rounded-lg opacity-70 border-2 outline-2 shadow-md shadow-[#353434]">
                        <label htmlFor="" className="text-[#cb8a76] text-2xl">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-2 rounded-md" />
                        <label htmlFor="" className="text-[#cb8a76] text-2xl">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description of the Document" className="p-16 rounded-md" />
                        {/* <div>
                            <input type="checkbox" checked={downloadable} onChange={(e) => setDownloadable(e.target.checked)} className="p-2" />
                            <label htmlFor="" className="text-[#cb8a76] text-2xl">Download Button</label>
                        </div> */}
                        <button type="submit" className="bg-zinc-800 text-white p-1 w-20 rounded-lg border outline-transparent border-black outline-1">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Add;
