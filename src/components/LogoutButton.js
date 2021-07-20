import React from 'react'

const LogoutButton = () => {
    return (
        <div>
             <button onClick={props.onClick}>
                Logout
            </button>
        </div>
    )
}

export default LogoutButton
