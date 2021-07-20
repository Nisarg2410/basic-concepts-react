import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class ComponentAPI extends Component {
        constructor()
        {
            super();

            this.state={
                data:[]
            }
            this.setStateHandler=this.setStateHandler.bind(this);
            this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
            this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        };
        setStateHandler()
        {
            var item="setState..."
            var myArray=this.state.data.slice(2,5);
            myArray.push(item);
            this.setState({data:myArray})
        };
        forceUpdateHandler()
        {
            this.forceUpdate();//
        };
        findDomNodeHandler()
        {
            var myDiv=document.getElementById("myDiv");
            ReactDOM.findDOMNode(myDiv).style.color='green';
        }
        render() 
        {
        return (
            <div>
                <h4>State Array:{this.state.data}</h4><br/><br/><br/>
                <button onClick={this.setStateHandler}>SET STATE</button>   <br/><br/><br/>

                <h4>Random number:{Math.random()}</h4><br/><br/><br/>
                <button onClick={this.forceUpdateHandler}>FORCE STATE</button>  <br/><br/><br/>
                
                <div id="myDiv">NODE</div><br/><br/><br/>
                <button onClick={this.findDomNodeHandler}>FIND DOM NODE</button>  <br/><br/><br/>
            </div>
        );
        }
}

export default ComponentAPI;