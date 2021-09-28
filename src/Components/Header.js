import React, { Component } from 'react'
import { HashRouter, NavLink, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Logo from "./Logo";
import Logout from './Logout';
import Products from "./Products";
import Register from "./Register";
import UserDashboard from './UserDashboard';
import YoutubeDashboard from './YoutubeDashboard';


export class Header extends Component {
    render() {
        return (
            <div>
                <HashRouter>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="Logo">
              Logo
              </NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/Register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs">ContactUs</NavLink>
              </li>
              <li>
                <NavLink to="/Products">Products</NavLink>
              </li>
              {/* <li>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/YoutubeDashboard">Youtube</NavLink>
              </li> */}
              <li>
                <NavLink to="/UserDashboard">UserDashboard</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/Logo" component={Logo}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/ContactUs" component={ContactUs}></Route>
        <Route path="/Products" component={Products}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
        <Route path="/YoutubeDashboard" component={YoutubeDashboard}></Route>
        <Route path="/UserDashboard" component={UserDashboard}></Route>
        <Route path="/Logout" component={Logout}></Route>

      </HashRouter>
            </div>
        )
    }
}

export default Header
