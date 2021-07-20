import React, { Component } from 'react'

class Events extends Component {
    constructor(props)
    {
        super(props);
        
        this.state={
            data:"Initial data...."
        }
        this.updateState=this.updateState.bind(this);
    }
    updateState()
    {
        this.setState({data:'Data updated successfully....'})
    }
    render() {
        return (
            <div>
                <input type="button" onClick={this.updateState} value="CLICK"/>
                <h4>{this.state.data}</h4>
            </div>
        );  
    }
}
export default Events;