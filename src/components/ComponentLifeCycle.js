import React, { Component } from 'react'

class ComponentLifeCycle extends Component {
    constructor(props)
    {
            super(props);
   
            this.state={
                        data:0
                       }
        this.setNewNumber=this.setNewNumber.bind(this);
    };

    render()
    {
        return(
            <div>
                 <Content myNumber = {this.state.data}></Content>
                 <button onClick = {this.setNewNumber}>INCREMENT</button>
            </div>
        );
    }
}

class Content extends React.Component
{
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
     render()
     {
         return(
            <div>
                <h3>{this.props.number}</h3>
            </div>
         );
     }
}
export default ComponentLifeCycle