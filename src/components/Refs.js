import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Refs extends Component {
    constructor()
    {
        super();
        this.state={
            data:'Vraj'
        }
        this.updateState=this.updateState.bind(this);
        this.clearInput=this.clearInput.bind(this);
    };
    updateState(e)
    {
        this.setState({data:e.target.value});
    };
    clearInput()
    {
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div class="form-group">
                <input value={this.state.data} onChange={this.updateState} ref="myInput" className="form-control" /><br/><br/>
                <button onClick={this.clearInput} className="btn btn-primary">CLEAR DATA</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default Refs;