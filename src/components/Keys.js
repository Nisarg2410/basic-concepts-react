import React, { Component } from 'react'
class Keys extends Component {
    constructor()
    {
        super();
        this.state={
            data:[
                {
                    id:1,
                    component:"First"
                },
                {
                    id:2,
                    component:"Two"
                },
                {
                    id:3,
                    component:"Three"
                },
                {
                    id:4,
                    component:"Four"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {
                this.state.data.map((dynamicComponent,i)=> <Content 
                key={i} componentData={dynamicComponent}/>)}
            </div>
        );
    }
}
class Content extends React.Component
{
    render()
    {
        return(
            <div>
                <div>{this.props.componentData.id}</div>
                <div>{this.props.componentData.component}</div>
            </div>
        );
    }
}

export default  Keys
//map (value,key,array)