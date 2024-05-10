import React from 'react';
import logo1 from '../assets/logo1.png';

const Demo = () => {
    return (
        <div className='fixed w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900'>
            <div className='text-center text-white'>
                
                <div className='flex items-center justify-center mb-8'>
                  <div className='text-6xl font-bold mb-20 p-5  text-zinc-100'>Welcome To </div>
                    <img src={logo1} alt="Logo" className='w-24 h-auto mr-4 rounded-full m-2 border-white border-2' />
                    <h1 className='text-7xl font-bold tracking-tight text-zinc-100 mt-20 p-5'>NoteSphere</h1>
                </div>
                <p className="text-xl text-zinc-100">Your ultimate note-taking companion</p>
            </div>
        </div>
    );
};

export default Demo;
