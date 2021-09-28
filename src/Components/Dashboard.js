import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {

        var token = localStorage.getItem("token");
        if(!token){
            this.props.history.push("/Login")
        }
        return (
            <div>
                <h1>I'M from Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard
