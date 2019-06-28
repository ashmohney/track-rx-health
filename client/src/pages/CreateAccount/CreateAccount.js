import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container } from "../../components/Grid";
import API from "../../utils/AuthAPI";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    accountCreated: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.userCreateAccount({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ accountCreated: true });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.accountCreated) {
      return (
        <Redirect
          to={{
            pathname: "/users/meds/",
            state: { from: this.props.location }
          }}
        />
      );
    }
    return (
      <Container>
        <div className="card">
          <div className="card-header">
            <p />
            <h3>Create Account</h3>
          </div>

          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success btn-block btn-sm"
                  name="UserLogin"
                  onClick={this.handleFormSubmit}
                >
                  Login
                </button>
              </div>
            </form>

            <div className="" id="links">
              Already have an account? &nbsp; <Link to="/">Sign In</Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
