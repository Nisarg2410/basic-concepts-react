
import React from 'react'

const Cap = (props) => {
    return (
        <div>
          <h1>Hello, {props.name}</h1>;
        </div>
    )
}
const element = <Cap name="Nisarg" />

export default Cap

