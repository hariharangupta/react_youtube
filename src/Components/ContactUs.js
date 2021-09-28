import React, { Component } from 'react'
import axios from 'axios'

 class ContactUs extends Component {

  constructor() {
    super();

    this.state = {
      username: "",
      emailId: "",
      message: "",
    };
  }

  capturedata = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
  };

  ContactUs = (event) => {
    event.preventDefault(event);
    console.log(this.state);
    axios.post("http://localhost:9104/user/register", this.state).then(
      (response) => {
        console.log(response);
        // if (resopnse.data.token) {
        //   localStorage.setItem("token", resopnse.data.token);
        // }
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  render() {
    return (
      <div>
         <div className="container">
	<div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="well well-sm">
          <form className="form-horizontal" action="" method="post">
          <fieldset>
            <legend className="text-center">Contact us</legend>
    
            
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="name">Name</label>
              <div className="col-md-9">
                <input   onChange={this.capturedata} id="name" name="username" type="text" placeholder="Your name" className="form-control"></input>
              </div>
            </div>
    
           
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
              <div className="col-md-9">
                <input  onChange={this.capturedata}  id="email" name="emailId" type="text" placeholder="Your email" className="form-control"></input>
              </div>
            </div>
    
           
            <div className="form-group">
              <label className="col-md-3 control-label" htmlFor="message">Your message</label>
              <div className="col-md-9">
                <textarea  onChange={this.capturedata}   className="form-control" id="message" name="message" placeholder="Please enter your message here" rows="5"></textarea>
              </div>
            </div>
    
         
            <div className="form-group">
              <div className="col-md-12 text-right">
                <button type="submit" onClick = {this.ContactUs} className="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
	</div>
</div>

      </div>
    )
  }
}

export default ContactUs

