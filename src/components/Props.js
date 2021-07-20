import React, { Component } from 'react'

class Props extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp2}</h1>
                <h1>{this.props.contentProp2}</h1>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

Props.defaultProps={
    headerProp2:'This is headerProp...2',
    contentProp2:'This is contentProp...2'
  }
export default Props;