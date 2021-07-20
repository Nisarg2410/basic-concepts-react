import React, { Component } from 'react'

class Greeting extends Component {
    render() {
        function greeting(props) 
        {
            const isLoggedIn = props.isLoggedIn;
              if (isLoggedIn) {
                   return <h1>Welcome back</h1>
                    }
        else{
             <h1>Please sign Up</h1>
            }
        }
        
}       //<greeting isLoggedIn={false} />
}
export default Greeting;

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <h1>Welcome back</h1>
//     }
    
//     else{
//         <h1>Please sign Up</h1>
//     }
//   }
//     render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,

//   );

// export default Greeting;
