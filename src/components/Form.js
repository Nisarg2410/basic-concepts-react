import React, { Component } from 'react'

class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
          value1:"",
          value2:""
        //   select:""
        };
        this.InputhandleChange=this.InputhandleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    InputhandleChange(event){
    // {   const name=event.target.name;
        // const value2=event.target.value2;
        // const select=event.target.select;
        console.log(event);
        console.log(event);
        this.setState({
            value1:event.target.value1,
            value2:event.target.value2
            // [select]:select
        });
    }

    handleSubmit(event)
    {
        event.preventDefault();
        // alert("A name was submitted:"+this.state.value1);
        // alert("A textarea data was submitted:"+this.state.value2);
        // // alert("Value selected through textvalue is:"+this.state.select);     
    }

    render() 
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:<input type="text" value={this.state.value1} onChange={this.InputhandleChange} name="value1"/></label>

                    <label className="ml-5">
                    Essay:
                    <textarea value={this.state.value2} name="value2" onChange={this.InputhandleChange} className="ml-5"/>
                    </label>
{/* 
                    <label className="ml-5">Pick your favourite fruit:</label>
                    <select name="select" value={this.state.select} onChange={this.InputhandleChange} className="ml-5">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                        <option value="banana">Banana</option>
                    </select> */}
                    
                    <input type="submit" value="Submit" className="ml-5"/>
                </form>
            </div>
        );
    }
}
export default Form