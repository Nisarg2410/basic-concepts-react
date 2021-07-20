import React, { Component } from 'react'


const Rendering = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}
// setInterval(() => {
//     Rendering
// }, 1000);

export default Rendering

