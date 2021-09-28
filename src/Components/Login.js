import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      emailId: "",
      password: "",
      role: "ROLE_CUSTOMER"
    };
  }

  capturedata = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
  };

  Login = (event) => {
    event.preventDefault(event);
    console.log(this.state);
    axios.post("http://localhost:9017/user/login", this.state).then(
      (response) => {
        console.log(response);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("currentUser", this.state.emailId)
          this.props.history.push("/UserDashboard")
        }
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  render() {
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <div id="legend">
              <legend className="">Login</legend>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="emailId">
                E-mail
              </label>
              <div className="controls">
                <input
                  type="text"
                  onChange={this.capturedata}
                  id="email"
                  name="emailId"
                  placeholder=""
                  className="input-xlarge"
                ></input>
                <p className="help-block">Please provide your E-mail</p>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="password">
                Password
              </label>
              <div className="controls">
                <input
                  type="password"
                  onChange={this.capturedata}
                  id="password"
                  name="password"
                  placeholder=""
                  className="input-xlarge"
                ></input>
                <p className="help-block">
                  Password should be at least 4 characters
                </p>
              </div>
            </div>

            <div className="control-group">
              <div className="controls">
                <button onClick={this.Login} className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
