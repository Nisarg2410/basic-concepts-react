import React,{Component} from "react";
import HelloWorld from "./components/Helloworld";
import JSX from "./components/JSX";
import Rendering from "./components/Rendering";
import Cap from "./components/Cap";
import SAL from "./components/SAL";
import HE from "./components/HE";
import CR from "./components/CR";
// import LAK from './components/LAK'
import Demo1 from "./components/Demo1";
import Form from "./components/Form";
import Forms from "./components/Forms";
import State from "./components/State";
import Props from "./components/Props";
import PropsValidation from "./components/PropsValidation";
import ComponentAPI from "./components/ComponentAPI.js";
import ComponentLifeCycle from "./components/ComponentLifeCycle";
import Events from "./components/Events";
import Refs from "./components/Refs";
import Keys from "./components/Keys";
// import Routerr from './components/Routerr';
import { Home, About, Contact } from "./components/Routerr";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    const {dispatch,visibleTodos}=this.props
    return (
      <div className="container">
        <div>
          <h1>{this.props.headerProp}</h1>
          <h1>{this.props.contentProp}</h1>
        </div>

        <div className="container">
          <h1>Hey there everybody</h1>
          <ul>
            <li>
              <a href="/helloworld">HelloWorld</a>
            </li>
            <li>
              <a href="/jsx">JSX</a>
            </li>
            <li> <a href="/rendering">Rendering</a></li> 
              <li> <a href="/cap">Component and props</a></li>  
              <li><a href="/sal">State and lifecycle</a></li>  
              <li><a href="/he">Handling events</a></li>
              <li><a href="/cr">Conditional Rendering</a></li>
              <li><a href="/demo1">Form demo1</a></li>
              <li><a href="/demo2">Form demo2</a></li>
              <li><a href="/state">State</a></li>
              <li><a href="/props">Props</a></li>
              <li><a href="/propsvalidation">Props Validation</a></li>
              <li><a href="/componentapi">ComponentAPI</a></li>
              <li><a href="/componentlifecycle">Component Life Cycle</a></li>
              <li><a href="/forms">Form demo 3</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/references">References</a></li>
              <li><a href="/keys">Keys</a></li>

            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <Router>
            <Switch>
              {/* 1 helloworld */}
              {/* <HelloWorld/> */}
              <Route path="/helloworld" component={HelloWorld}></Route>

              {/* 2. JSX */}
              {/* <JSX/> */}
              <Route path="/jsx" component={JSX}></Route>

              {/* 3. Rendering elements */}
              {/* <Rendering/> */}
              <Route path="/rendering" component={Rendering}></Route>

              {/* 4. Component and props */}
              {/* <Cap/> */}
              <Route path="/cap" component={Cap}></Route>

              {/* 5. State and lifecycle  */}
              {/* <SAL/> */}
              <Route path="/sal" component={SAL}></Route>

              {/* 6. Handling events  */}
              {/* <HE/> */}
              <Route path="/he" component={HE}></Route>

              {/* 7. Conditional Rendering  */}
              {/* <CR/> */}
              <Route path="/cr" component={CR}></Route>

              {/* 8. List and keys*/}
              {/* <LAK date={new Date()}/> */}

              {/* 9.Simple form demo*/}
              {/* <Demo1/> */}
              <Route path="/demo1" component={Demo1}></Route>

              {/* 19-07-2021 MONDAY *}

                        {/* 10 Simple form demo2*/}
              {/* <Form/> */}
              <Route path="/demo2" component={Form}></Route>

              {/*11 states */}
              {/* <State/> */}
              <Route path="/state" component={State}></Route>

              {/*12 props */}
              {/* <Props/>  */}
              <Route path="/props" component={Props}></Route>

              {/*13 Props validation */}
              {/* <PropsValidation/> */}
              <Route
                path="/propsvalidation"
                component={PropsValidation}
              ></Route>

              {/*14 Component API */}
              {/* <ComponentAPI/> */}
              <Route path="/componentapi" component={ComponentAPI}></Route>

              {/*15 Component Life cycle */}
              {/* <ComponentLifeCycle/> */}
              <Route
                path="/componentlifecycle"
                component={ComponentLifeCycle}
              ></Route>

              {/*16 Forms */}
              {/* <Forms/> */}

              <Route path="/forms" component={Forms}></Route>

              {/*17 Events */}
              {/* <Events/> */}
              <Route path="/events" component={Events}></Route>

              {/*18 Refs */}
              {/* <Refs/> */}
              <Route path="/references" component={Refs}></Route>

              {/*19 Keys */}
              {/* <Keys/> */}
              <Route path="/keys" component={Keys}></Route>

              {/*20 Router */}
              {/* <Routerr/> */}
              {/* <Route path='/router' component={Routerr}> </Route> */}

              {/* 20-07-2021 TUESDAY */}
              {/*21 Flux  */}

              <Route path="/home" component={Home}></Route>

              <Route path="/about" component={About}></Route>

              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
          {this.props.children}
        </div>
    </div>
    );
  }
}
// App.defaultProps={
//   headerProp:"Header from props",
//   contentProp:"Content from props"
// }

export default App;
