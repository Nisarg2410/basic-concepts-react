import React from 'react'
 import HelloWorld from './components/Helloworld'
// import JSX from './components/sxj'
// import Rendering from './components/Rendering'
// import Cap from './components/Cap'
// import SXJ from './components/SXJ'
// import SAL from './components/SAL'
// import HE from './components/HE'
// import CR from './components/CR'  (error)
// import LAK from './components/LAK'
// import Demo1 from './components/Demo1'
// import Form from './components/Form'
// import State from './components/State'
// import Props from './components/Props'
// import PropsValidation from './components/PropsValidation'
// import ComponentAPI from './components/ComponentAPI.js';
// import ComponentLifeCycle from './components/ComponentLifeCycle.js';
// import Events from './components/Events';
// import Refs from './components/Refs';
// // import Keys from './components/Keys'; 
// import Routerr from './components/Routerr';
import {Home,About,Contact } from './components/Routerr'
import { Switch,BrowserRouter as Router, Route } from 'react-router-dom'
class App extends React.Component 
{  
  render() {
  
    return (
     
        <div className="container">
          <div>
            <h1>{this.props.headerProp}</h1>
            <h1>{this.props.contentProp}</h1>
          </div>
        
          
          {/* 2. JSX */}
          {/* <SXJ/> */}


          {/* 3. Rendering elements */}
          {/* <Rendering/> */}

          {/* 4. Component and props */}
          {/* <Cap/> */}

           {/* 5. State and lifecycle  */}
           {/* <SAL/> */}

            {/* 6. Handling events  */}
            {/* <HE/> */}

            {/* 7. Conditional Rendering  */}
            {/* <CR/> */}

            {/* 8. List and keys*/}
            {/* <LAK date={new Date()}/> */}

            {/* 9.Simple form demo*/}
            {/* <Demo1/> */}

            {/* 19-07-2021 MONDAY *}
            {/* 10 Simple form demo2*/}
            {/* <Form/> */}

            {/*11 states */}
            {/* <State/> */}

            {/*12 props */}
            {/* <Props/>  */}

            {/*13 Props validation */}
            {/* <PropsValidation/> */}

            {/*14 Component API */}
            {/* <ComponentAPI/> */}

            {/*14 Component API */}
            {/* <ComponentAPI/> */}
            
            {/*15 Component Life cycle */}
            {/* <ComponentLifeCycle/> */}

            {/*16 Forms */}
            {/* <Forms/> */}

            {/*17 Events */}
            {/* <Events/> */}

            {/*18 Refs */}
            {/* <Refs/> */}

            {/*19 Keys */}
            {/* <Keys/> */}
          
            {/*20 Router */}
            <Routerr/>

            {/* 20-07-2021 TUESDAY */}
            {/*21 Flux  */}


            <div className="container">
              <h1>Hey there everybody</h1>
              <ul>
             
              <li> <a href="/helloworld">HelloWorld</a></li>   
             <li> <a href="/home">Home</a></li>
             <li> <a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              </ul>
               <ul>
                   <Router>
                     <Switch>
                          {/* 1 helloworld */}
                          {/* <HelloWorld/> */}
                        <Route path='/hello' component={HelloWorld}><li><a href=""></a></li></Route>
                        <Route path='/home' component={Home}><li><a href="">Home</a></li></Route>
                    
                        <Route path='/about' component={About}><a href=""><li >About</li></a></Route>

                        <Route path='/contact' component={Contact}><li><a href="">Contact</a></li></Route>
                    </Switch>
                    </Router>
                    {this.props.children}
                </ul> 
            </div>
          </div>
    );
  }
}
// App.defaultProps={
//   headerProp:"Header from props",
//   contentProp:"Content from props"
// }

export default App
