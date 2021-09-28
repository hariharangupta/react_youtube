import React, { Component } from 'react'

export class Logout extends Component {
    render() {
            localStorage.removeItem("token")
            

        return (
            <div>
                 
                <h1>You Have successfully Logout!!</h1>
            </div>
        )
    }
}

export default Logout
