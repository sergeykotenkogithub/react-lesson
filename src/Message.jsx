import React from "react";
import logo from './logo.svg';

export default function Message({nameProject}) {
    return (
        <div className='flex justify-center mt-2'>
            <h1 className="text-3xl font-bold text-blue-300">
                My first project: {nameProject}
            </h1>
            <img src={logo} className="image-app" alt="logo"></img>
        </div>
    );
}