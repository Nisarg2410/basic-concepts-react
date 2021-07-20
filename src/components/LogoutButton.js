import React from 'react'

const LogoutButton = (props) => {
    return (
        <div>
             <button onClick={props.onClick}>
                Logout
            </button>
        </div>
    )
}

export default LogoutButton
