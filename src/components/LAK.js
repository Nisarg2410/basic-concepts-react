//list and keys
import React, { Component } from 'react'

const element2=<Welcome name="Carl"/>;
const element3=<Welcome name="Cahal"/>;
const element4=<Welcome name="Edite"/>;


//props example
function Welcome(props)
{
    return <h1>Hello,{props.name}</h1>
            const numbers=[1,2,3,4,5];
            const doubled=numbers.map((number)=>number*2);
            console.log(doubled);
}
//state example
// function Clock(props)
// {
//     return(
//         <div>
//             <h1>Hello,world!</h1>
//             <h2>{this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
// function tick()
// {
//     <Clock date={new Date()}/>
// }

// const a=setInterval(tick,1000);

// const element = (
//     <div>
//       <h1>Hello!</h1>
//       <h2>Good to see you here.</h2>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       <h3>{element2}</h3>
//       <h3>{element3}</h3>
//       <h3>{element4}</h3>
//       <h4>{a}</h4>
//     </div>
//   );
const LAK = (props) => {
    return(
        <div>
            <h1>Hello,world!</h1>
            <h2>{props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default LAK
