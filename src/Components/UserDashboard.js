import React, { Component } from 'react'
import YoutubeDashboard from './YoutubeDashboard'
import {NavLink} from 'react-router-dom'


export class UserDashboard extends Component {
    render() {
        var token = localStorage.getItem("token");
        var currentUser = localStorage.getItem("currentUser")
        if(!token){
            this.props.history.push("/Login") 
        }
        return (
            <div>
                <h1>WelCome {currentUser}</h1>
                <NavLink to="/Logout">Logout</NavLink>
                   
                <YoutubeDashboard />
            </div>
        )
    }
}

export default UserDashboard
